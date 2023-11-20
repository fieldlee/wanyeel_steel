<!-- id: string
  // 品种（选择）
  variety: string
  // 产地（选择待补充）
  origin: string
  // 牌号（选择待补充）
  shopSign: string
  // 规格（规格提示）
  spec: string
  // 计重方式（选择）
  caclMode: string
  // 采购数量（输入）
  buyNumber: number
  // 件重（计算待输入）
  oneWeight: number
  // 采购重量（输入）
  buyWeight: number
  // 仓库（选择待输入）
  warehouse: string
  // 协议单价（填写）
  agreeUnitprice: number
  // 协议金额（计算）
  agreeAmout: number
  // 税率（默认13 待修改）
  taxRate: number
  // 钢厂资源号（）
  resourceNumber: string
  // 钢厂合同号
  contractNumber: string
  // 备注
  mome: string -->
<template>
  <view class="container" :style="{ paddingBottom: safeAreaInsets?.bottom + 'px' }">
    <uni-section title="产品内容" type="line">
      <view class="example">
        <!-- 基础用法，不包含校验规则 -->
        <uni-forms ref="productForm" :modelValue="currentItem" :rules="productFormRules" labelWidth="100px">
          <uni-forms-item label=" 品种" required name="variety">
            <uni-data-picker v-model="currentItem.variety" :localdata="array" popup-title="选择品种">
            </uni-data-picker>
          </uni-forms-item>
          <uni-forms-item label="产地" required name="origin">
            <uni-data-picker v-model="currentItem.origin" :localdata="array" popup-title="选择产地">
            </uni-data-picker>
          </uni-forms-item>
          <uni-forms-item label="牌号" required name="shopSign">
            <uni-data-picker v-model="currentItem.shopSign" :localdata="array" popup-title="选择牌号">
            </uni-data-picker>
          </uni-forms-item>
          <uni-forms-item label="仓库" required name="warehouse">
            <uni-data-picker v-model="currentItem.warehouse" :localdata="array" popup-title="选择仓库">
            </uni-data-picker>
          </uni-forms-item>
          <uni-forms-item label="计重方式" required name="caclMode">
            <uni-data-picker v-model="currentItem.caclMode" :localdata="array" popup-title="计重方式">
            </uni-data-picker>
          </uni-forms-item>
          <uni-forms-item label="采购数量" required name="buyNumber">
            <uniNumberBox name="buyNumber" :value="currentItem!.buyNumber" :step="0.1" />
          </uni-forms-item>
          <uni-forms-item label="采购总重量" required name="buyWeight">
            <uniNumberBox name="buyWeight" :value="currentItem!.buyWeight" :step="0.1" />
          </uni-forms-item>
          <uni-forms-item label="协议单价" required name="agreeUnitprice">
            <uniNumberBox name="agreeUnitprice" :value="currentItem!.agreeUnitprice" :step="0.1" />
          </uni-forms-item>
          <uni-forms-item label="协议总额" required name="agreeAmout">
            <uniNumberBox name="agreeAmout" :value="currentItem!.agreeAmout" :step="0.1" />
          </uni-forms-item>
          <uni-forms-item label="备注">
            <uni-easyinput type="textarea" v-model="currentItem.mome" placeholder="请输入备注" />
          </uni-forms-item>
        </uni-forms>
      </view>
    </uni-section>

    <uni-section title="操作" type="line">
      <view class="button-group">
        <button type="warn" size="mini" @click="cancel">取消</button>
        <button type="primary" size="mini" @click="submit">提交</button>
      </view>
    </uni-section>
  </view>
</template>

<script setup lang="ts">
import uniSection from '@dcloudio/uni-ui/lib/uni-section/uni-section.vue'
import uniForms from '@dcloudio/uni-ui/lib/uni-forms/uni-forms.vue'
import uniFormsItem from '@dcloudio/uni-ui/lib/uni-forms-item/uni-forms-item.vue'
import uniEasyinput from '@dcloudio/uni-ui/lib/uni-easyinput/uni-easyinput.vue'
import uniDataPicker from '@dcloudio/uni-ui/lib/uni-data-picker/uni-data-picker.vue'
import uniNumberBox from '@dcloudio/uni-ui/lib/uni-number-box/uni-number-box.vue'
import { ref, reactive, onMounted } from 'vue'
import type { ProductItem } from '@/types/process'
// --------------------------数据初始化
const { safeAreaInsets } = uni.getWindowInfo()
const productForm = ref(null)
// --------------------------数据初始化
const currentItem = reactive<ProductItem>({
  uid: '',
  variety: '',
  origin: '',
  shopSign: 'zhang',
  spec: '',
  caclMode: '',
  buyNumber: 0.0,
  oneWeight: 0.0,
  buyWeight: 0.0,
  warehouse: '',
  agreeUnitprice: 0.0,
  agreeAmout: 0.0,
  taxRate: 13.0,
  resourceNumber: '',
  contractNumber: '',
  mome: '',
})
// ---------------------------表格检查
const productFormRules = reactive({
  variety: {
    validateTrigger: 'blur',
    rules: [
      {
        required: true,
        errorMessage: '品种不能为空',
      },
    ],
  },
  origin: {
    validateTrigger: 'blur',
    rules: [
      {
        required: true,
        errorMessage: '产地不能为空',
      },
    ],
  },
  shopSign: {
    rules: [
      {
        required: true,
        errorMessage: '牌号不能为空',
      },
    ],
  },
  caclMode: {
    rules: [
      {
        required: true,
        errorMessage: '计重方式',
      },
    ],
  },
  buyNumber: {
    rules: [
      {
        required: true,
        errorMessage: '采购单价',
      },
      {
        format: 'number',
        errorMessage: '采购单价格式错误',
      },
    ],
  },
  buyWeight: {
    rules: [
      {
        required: true,
        errorMessage: '采购重量不能为空',
      },
      {
        format: 'number',
        errorMessage: '采购重量格式错误',
      },
    ],
  },
  warehouse: {
    rules: [
      {
        required: true,
        errorMessage: '请输入仓库',
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
  agreeUnitprice: {
    rules: [
      {
        required: true,
        errorMessage: '请输入协议单价',
      },
      {
        format: 'number',
        errorMessage: '协议单价格式错误',
      },
    ],
  },
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
// --------------------------------事件绑定
const submit = () => {
  console.log(currentItem)
  const ruleForm: any = productForm.value
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
const cancel = () => {
  uni.navigateBack()
}
onMounted(() => {
  console.log(productForm.value)
  const ruleForm: any = productForm.value
  ruleForm.setRules(productFormRules)
})
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
