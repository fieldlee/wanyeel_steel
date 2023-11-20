<template>
  <view class="container" :style="{ paddingBottom: safeAreaInsets?.bottom + 'px' }">
    <uni-section title="售后信息" type="line">
      <view class="example">
        <!-- 基础用法，不包含校验规则 -->
        <uni-forms ref="afterSaleForm" :modelValue="currentItem" :rules="afterSaleFormRules" labelWidth="100px">
          <uni-forms-item label="订单号" required name="uidOrder">
            <uni-easyinput v-model="currentItem.uidOrder" placeholder="请输入订单号" />
          </uni-forms-item>
          <uni-forms-item label="供应商" required>
            <uni-easyinput v-model="currentItem.supplyDept" placeholder="请输入供应商" />
          </uni-forms-item>
          <uni-forms-item label="售后类型" required>
            <uni-data-checkbox v-model="currentItem.afterSaleMode" :localdata="afterSaleModeData" />
          </uni-forms-item>
          <uni-forms-item label="售后日期">
            <uni-datetime-picker type="date" v-model="currentItem.afterSaleDate" />
          </uni-forms-item>
          <uni-forms-item label="应退金额" required name="expectBackAmount">
            <uni-easyinput v-model="currentItem.expectBackAmount" placeholder="请输入应退金额" />
          </uni-forms-item>
          <uni-forms-item label="退款方式" required>
            <uni-data-checkbox v-model="currentItem.backMode" :localdata="cashCates" />
          </uni-forms-item>
          <uni-forms-item label="退款去向" required>
            <uni-easyinput v-model="currentItem.backWay" placeholder="请输入退款去向" />
          </uni-forms-item>
        </uni-forms>
      </view>
    </uni-section>

    <uni-section title="操作" type="line">
      <view class="button-group">
        <button type="warn" size="mini" @click="close">取消</button>
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
import uniDataCheckbox from '@dcloudio/uni-ui/lib/uni-data-checkbox/uni-data-checkbox.vue'
import uniDatetimePicker from '@dcloudio/uni-ui/lib/uni-datetime-picker/uni-datetime-picker.vue'
import { ref, reactive } from 'vue'
import type { AfterSaleOrderItem } from '@/types/afterSale'
// --------------------------数据初始化
const { safeAreaInsets } = uni.getWindowInfo()

const afterSaleForm = ref(null)
const afterSaleModeData = reactive([
  {
    text: '退货退款',
    value: '退货退款',
  },
  {
    text: '仅退款',
    value: '仅退款',
  },
])
const cashCates = reactive([
  {
    text: '银行转账',
    value: '银行转账',
  },
  {
    text: '票据',
    value: '票据',
  },
  {
    text: '微信',
    value: '微信',
  },
  {
    text: '支付宝',
    value: '支付宝',
  },
  {
    text: '电汇',
    value: '电汇',
  },
  {
    text: '现金',
    value: '现金',
  },
])
// ---------------------------表格检查
const afterSaleFormRules = reactive({
  uidOrder: {
    validateTrigger: 'blur',
    rules: [
      {
        required: true,
        errorMessage: '订单不能为空',
      },
    ],
  },
  agreeRate: {
    validateTrigger: 'blur',
    rules: [
      {
        required: true,
        errorMessage: '托盘不能为空',
      },
    ],
  },
  payAmount: {
    validateTrigger: 'blur',
    rules: [
      {
        required: true,
        errorMessage: '结算不能为空',
      },
    ],
  },
  rateAmount: {
    validateTrigger: 'blur',
    rules: [
      {
        required: true,
        errorMessage: '税额不能为空',
      },
    ],
  },
})

const today = new Date()
const currentItem = reactive<AfterSaleOrderItem>({
  uidOrder: '',
  afterSaleMode: '',
  // 供应商（选择）
  supplyDept: '',
  // 售后日期
  afterSaleDate: today,
  // 退款类型 (返利、质量异议、其他）
  backMode: '',
  // 预计退款日期
  expectBackDate: today,
  // 应退金额
  expectBackAmount: 0.0,
  // 付款类型
  costCategory: '',
  // 退款去向
  backWay: '',
  // 备注
  mome: '',
})

const close = () => {
  uni.navigateBack({ delta: 1 })
}
const submit = () => {
  console.log(currentItem)
  const ruleForm: any = afterSaleForm.value
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
