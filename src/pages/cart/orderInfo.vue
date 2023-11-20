<!--
// 采购模式（选择）（现货采购、期货采购、获取转移、托盘采购、预售采购）
  buyMode:
  // 供应商（选择）
  supplyDept: string
  // 采购日期
  buyDate: Date
  // 协议号（选择）
  agreeId: number
  // 货源单位（选择）
  deliveryDept: string
  // 是否直接入库（仅入库，仅开单后续手工入库，入库并结算，采购付款后直接入库）
  storageMode: string
  // 付款信息
  // 付款信息（预计付款日期、付款账号）
  payDate: Date
  //付款账号
  payAccount: string
  // 总付款金额
  allPayAmount: number
  // 产品明细
  orderProductList: OrderProductItem[]
  // 运输杂费
  transCost: TranCost[]
  // 备注
  mome: string -->
<template>
  <view class="container" :style="{ paddingBottom: safeAreaInsets?.bottom + 'px' }">
    <uni-section title="订单信息" type="line">
      <view class="example">
        <!-- 基础用法，不包含校验规则 -->
        <uni-forms ref="orderForm" :modelValue="currentItem" :rules="orderFormRules" labelWidth="100px">
          <uni-forms-item label="采购方式" required name="buyMode">
            <uni-data-picker v-model="currentItem.buyMode" :localdata="array" popup-title="选择采购方式">
            </uni-data-picker>
          </uni-forms-item>
          <uni-forms-item label="供货单位" required name="deliveryDept">
            <uni-data-picker v-model="currentItem.deliveryDept" :localdata="array" popup-title="选择供货单位">
            </uni-data-picker>
          </uni-forms-item>
          <uni-forms-item label="入库模式" required name="storageMode">
            <uni-data-picker v-model="currentItem.storageMode" :localdata="array" popup-title="选择入库模式">
            </uni-data-picker>
          </uni-forms-item>
          <uni-forms-item label="付款日期" required name="payDate">
            <uni-datetime-picker type="date" :value="currentItem.payDate" v-model="currentItem.payDate" />
          </uni-forms-item>
          <uni-forms-item label="付款账号" required name="payAccount">
            <uni-data-picker v-model="currentItem.payAccount" :localdata="array" popup-title="选择付款账号">
            </uni-data-picker>
          </uni-forms-item>
          <uni-forms-item label="预付比例(%)" required name="prepayScale">
            <uniNumberBox name="prepayScale" :value="currentItem!.prepayScale" :step="0.1" />
          </uni-forms-item>
          <uni-forms-item label="预付金额" required name="payAmount">
            <uni-easyinput v-model="currentItem!.payAmount" placeholder="请输入预付金额" />
          </uni-forms-item>
          <uni-forms-item label="备注">
            <uni-easyinput type="textarea" v-model="currentItem.mome" placeholder="请输入备注" />
          </uni-forms-item>
        </uni-forms>
      </view>
    </uni-section>
    <uni-section title="产品明细" type="line">
      <button class="uni-button" size="mini" @click="bindAddProduct" type="primary">
        添加明细
      </button>
      <view class="uni-container">
        <uni-table ref="table" :loading="loading" border stripe type="selection" emptyText="暂无更多数据">
          <uni-tr>
            <uni-th align="left">日期</uni-th>
            <uni-th align="left">姓名</uni-th>
            <uni-th align="left">地址</uni-th>
            <uni-th align="left">设置</uni-th>
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
    <uni-section title="运杂费" type="line">
      <button class="uni-button" size="mini" @click="bindAddTrans" type="primary">
        添加运杂费
      </button>
      <view class="uni-container">
        <uni-table ref="table" :loading="loading" border stripe type="selection" emptyText="暂无更多数据">
          <uni-tr>
            <uni-th align="left">日期</uni-th>
            <uni-th align="left">姓名</uni-th>
            <uni-th align="left">地址</uni-th>
            <uni-th align="left">设置</uni-th>
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
    <uni-section title="总计" type="line">
      <uni-forms :modelValue="currentItem" labelWidth="80px">
        <uni-forms-item label="总重量" required name="allPayAmount">
          <uni-easyinput disabled v-model="currentItem!.allPayAmount" placeholder="请输入总金额" />
        </uni-forms-item>
        <uni-forms-item label="总金额" required name="allPayAmount">
          <uni-easyinput disabled v-model="currentItem!.allPayAmount" placeholder="请输入总金额" />
        </uni-forms-item>
      </uni-forms>
    </uni-section>
    <uni-section title="操作" type="line">
      <view class="uni-flex uni-row" style="margin: 20rpx">
        <view style="-webkit-flex: 1;flex: 1; align-items: left; justify-content: left;">
          <button class="mini-btn" size="mini" type="warn" @click="cancel">取 消</button>
        </view>
        <view style="-webkit-flex: 1;flex: 1; align-items: right; justify-content: right;">
          <button class="mini-btn" size="mini" type="primary" @click="submit">确 定</button>
        </view>
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
import { ref, reactive } from 'vue'
import type { OrderItem } from '@/types/order'

const orderForm = ref(null)
// --------------------------数据初始化
const { safeAreaInsets } = uni.getWindowInfo()
const today = new Date()
const loading = ref(false)
const currentItem = reactive<OrderItem>({
  // 采购模式（选择）（现货采购、期货采购、获取转移、托盘采购、预售采购）
  buyMode: '现货采购',
  // 供应商（选择）
  supplyDept: '',
  // 采购日期
  buyDate: today,
  // 货源单位（选择）
  deliveryDept: '',
  // 是否直接入库（仅入库，仅开单后续手工入库，入库并结算，采购付款后直接入库）
  storageMode: '',
  // 付款信息
  prepayScale: 0.0,
  // 付款信息（预计付款日期、付款账号）
  payDate: today,
  //付款账号
  payAccount: '',
  // 总付款金额
  payAmount: 0.0,
  // 总付款金额
  allPayAmount: 0.0,
  // 产品明细
  orderProductList: [],
  // 运输杂费
  transCost: [],
  // 备注
  mome: '',
})
const orderFormRules = reactive({
  buyMode: {
    rules: [
      {
        required: true,
        errorMessage: '购买模式不能为空',
      },
    ],
  },
  supplyDept: {
    rules: [
      {
        required: true,
        errorMessage: '供应商不能为空',
      },
    ],
  },
  deliveryDept: {
    rules: [
      {
        required: true,
        errorMessage: '送货单位不能为空',
      },
    ],
  },
  storageMode: {
    rules: [
      {
        required: true,
        errorMessage: '入库模式不能为空',
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
// -------------------------------数据列表初始化
const tableData = reactive([
  {
    date: '2020-09-01',
    name: 'Dcloud1',
    address: '上海市',
  },
  {
    date: '2020-09-02',
    name: 'Dcloud2',
    address: '上海市',
  },
])
// --------------------------------事件绑定
const bindAddProduct = () => {
  console.log('addProduct')
  uni.navigateTo({ url: '/pages/cart/productInfo' })
}
const bindAddTrans = () => {
  console.log('addtrans')
  uni.navigateTo({ url: '/pages/cart/transInfo' })
}

const cancel = () => {
  uni.navigateBack()
}

const submit = () => {
  console.log(currentItem)
  const ruleForm: any = orderForm.value
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
