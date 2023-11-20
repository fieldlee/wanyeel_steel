<!-- supplyDept: string
  // 供货单位
  deliveryDept: string
  // 签订人
  agreePerson: string
  // 签订日期
  agreeDate: Date
  // 预付款比例
  prepayScale: number
  // 预付款金额
  prepayAmount: number
  // 协议单价（填写）
  unitPrice: number
  // 协议金额（计算）
  agreeAmount: number
  // 保证金金额
  depositAmount: number
  // 计息开始日期
  interestDate: Date -->
<template>
  <view class="container" :style="{ paddingBottom: safeAreaInsets?.bottom + 'px' }">
    <uni-section title="协议内容" type="line">
      <view class="example">
        <!-- 基础用法，不包含校验规则 -->
        <uni-forms ref="agreeForm" :modelValue="currentItem" :rules="agreeFormRules" labelWidth="100px">
          <uni-forms-item label=" 供应商" required name="supplyDept">
            <uni-data-picker v-model="currentItem.supplyDept" :localdata="array" popup-title="选择供应商">
            </uni-data-picker>
          </uni-forms-item>
          <uni-forms-item label="供货单位" required name="deliveryDept">
            <uni-data-picker v-model="currentItem.deliveryDept" :localdata="array" popup-title="选择供货单位">
            </uni-data-picker>
          </uni-forms-item>
          <uni-forms-item label="签订日期" required name="agreeDate">
            <uni-datetime-picker type="date" :value="currentItem.agreeDate" v-model="currentItem.agreeDate" />
          </uni-forms-item>
          <uni-forms-item label="预付比例(%)" required name="prepayScale">
            <uniNumberBox name="prepayScale" :value="currentItem!.prepayScale" :step="0.1" />
          </uni-forms-item>
          <uni-forms-item label="预付款金额" required name="prepayAmount">
            <uni-easyinput v-model="currentItem!.prepayAmount" placeholder="请输入预付款金额" />
          </uni-forms-item>
          <uni-forms-item label="保证金金额" required name="depositAmount">
            <uni-easyinput v-model="currentItem!.depositAmount" placeholder="请输入保证金金额" />
          </uni-forms-item>

          <uni-forms-item label="计息开始日期" required name="interestDate">
            <uni-datetime-picker type="date" :value="currentItem.interestDate" v-model="currentItem.interestDate" />
          </uni-forms-item>
          <uni-forms-item label="约定年化率(%)" required name="interestRale">
            <uniNumberBox name="interestRale" :value="currentItem?.interestRale" :step="0.1" />
          </uni-forms-item>
          <uni-forms-item label="备注">
            <uni-easyinput type="textarea" v-model="currentItem.mome" placeholder="请输入备注" />
          </uni-forms-item>
        </uni-forms>
      </view>
    </uni-section>

    <!-- 产品明细 -->
    <uni-section title="产品明细" type="line">
      <button class="uni-button" size="mini" @click="bindAddProduct" type="primary">
        添加明细
      </button>

      <view class="uni-container">
        <uni-table ref="table" :loading="loading" border stripe type="selection" emptyText="暂无更多数据">
          <uni-tr>
            <uni-th align="left">品种</uni-th>
            <uni-th align="left">产地</uni-th>
            <uni-th align="left">牌号</uni-th>
            <uni-th align="left">规格</uni-th>
            <uni-th align="left">件数</uni-th>
            <uni-th align="left">总重量</uni-th>
            <uni-th width="150" align="center">设置</uni-th>
          </uni-tr>
          <uni-tr v-for="(item, index) in tableData" :key="index">
            <uni-td>{{ item.date }}</uni-td>
            <uni-td>
              <view class="name">{{ item.name }}</view>
            </uni-td>
            <uni-td align="center">{{ item.address }}</uni-td>
            <uni-td>
              <view class="uni-group">
                <button class="uni-button" size="mini" type="primary">修改</button>
                <button class="uni-button" size="mini" type="warn">删除</button>
              </view>
            </uni-td>
          </uni-tr>
        </uni-table>
      </view>
    </uni-section>

    <uni-section title="操作" type="line">
      <view class="button-group">
        <button type="warn" size="mini" @click="close">取消</button>
        <button type="primary" size="mini" @click="submitAgreeItem">提交</button>
      </view>
    </uni-section>
  </view>
</template>

<script setup lang="ts">
import uniSection from '@dcloudio/uni-ui/lib/uni-section/uni-section.vue'
import uniForms from '@dcloudio/uni-ui/lib/uni-forms/uni-forms.vue'
import uniFormsItem from '@dcloudio/uni-ui/lib/uni-forms-item/uni-forms-item.vue'
import uniEasyinput from '@dcloudio/uni-ui/lib/uni-easyinput/uni-easyinput.vue'
import uniDatetimePicker from '@dcloudio/uni-ui/lib/uni-datetime-picker/uni-datetime-picker.vue'
import uniDataPicker from '@dcloudio/uni-ui/lib/uni-data-picker/uni-data-picker.vue'
import uniNumberBox from '@dcloudio/uni-ui/lib/uni-number-box/uni-number-box.vue'
import uniTable from '@dcloudio/uni-ui/lib/uni-table/uni-table.vue'
import uniTr from '@dcloudio/uni-ui/lib/uni-tr/uni-tr.vue'
import uniTd from '@dcloudio/uni-ui/lib/uni-td/uni-td.vue'
import uniTh from '@dcloudio/uni-ui/lib/uni-th/uni-th.vue'
import { ref, reactive, onMounted } from 'vue'
import type { AgreeItem } from '@/types/process'
import { onLoad, onReady } from '@dcloudio/uni-app'
// --------------------------数据初始化
const { safeAreaInsets } = uni.getWindowInfo()

const agreeForm = ref(null)

// ---------------------------表格检查
const agreeFormRules = reactive({
  supplyDept: {
    validateTrigger: 'blur',
    rules: [
      {
        required: true,
        errorMessage: '供应商不能为空',
      },
    ],
  },
  deliveryDept: {
    validateTrigger: 'blur',
    rules: [
      {
        required: true,
        errorMessage: '送货单位不能为空',
      },
    ],
  },
  agreeDate: {
    rules: [
      {
        required: true,
        errorMessage: '请选择协议时间',
      },
    ],
  },
  interestDate: {
    rules: [
      {
        required: true,
        errorMessage: '请选择计息时间',
      },
    ],
  },
  depositAmount: {
    rules: [
      {
        required: true,
        errorMessage: '请输入保证金',
      },
      {
        format: 'number',
        errorMessage: '协议金额格式错误',
      },
    ],
  },
  prepayScale: {
    rules: [
      {
        required: true,
        errorMessage: '请输入预付比例',
      },
      {
        format: 'number',
        errorMessage: '预付比例格式错误',
      },
    ],
  },
  prepayAmount: {
    rules: [
      {
        required: true,
        errorMessage: '请输入预付金额',
      },
      {
        format: 'number',
        errorMessage: '预付金额格式错误',
      },
    ],
  },
  agreeAmount: {
    rules: [
      {
        required: true,
        errorMessage: '请输入协议金额',
      },
      {
        format: 'number',
        errorMessage: '协议金额格式错误',
      },
    ],
  },
  interestRale: {
    rules: [
      {
        required: true,
        errorMessage: '请输入年化利息',
      },
      {
        format: 'number',
        errorMessage: '年化利息格式错误',
      },
    ],
  },
})

const today = new Date()
const currentItem = reactive<AgreeItem>({
  uid: '',
  agreeType: '',
  supplyDept: '',
  deliveryDept: '',
  agreePerson: 'zhang',
  agreeDate: today,
  prepayAmount: 0.0,
  unitPrice: 0.0,
  agreeAmount: 0.0,
  depositAmount: 0.0,
  prepayScale: 15.0,
  interestDate: today,
  interestRale: 9.0,
  productList: [],
  mome: '',
})

const array = reactive([
  {
    text: '北京',
    value: '北京',
  },
  {
    text: '上海',
    value: '上海',
  },
  {
    text: '深圳',
    value: '深圳',
  },
])
// -------------------------------数据列表初始化
const tableData = reactive([
  {
    date: '2020-09-01',
    name: 'Dcloud1',
    address: '上海市普陀区金沙江路 1518 弄',
  },
  {
    date: '2020-09-02',
    name: 'Dcloud2',
    address: '上海市普陀区金沙江路 1517 弄',
  },
])
const loading = ref(false)

onLoad(() => { })

// --------------------------------事件绑定
const bindAddProduct = () => {
  uni.navigateTo({ url: '/pages/cart/productInfo' })
}
const close = () => {
  uni.navigateBack({ delta: 1 })
}
const submitAgreeItem = () => {
  console.log(currentItem)
  const ruleForm: any = agreeForm.value
  ruleForm
    .validate()
    .then((res: any) => {
      console.log('success', res)
      uni.showToast({
        title: `校验通过`,
      })
    })
    .catch((err: any) => {
      console.log('err', err)
    })
}
</script>

<style lang="scss">
.example {
  padding: 10px;
  background-color: #fff;
}

.button-group {
  margin-top: 15px;
  display: flex;
  justify-content: space-around;
}
</style>
