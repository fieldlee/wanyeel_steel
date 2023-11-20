<template>
  <view class="container" :style="{ paddingBottom: safeAreaInsets?.bottom + 'px' }">
    <uni-section title="产品信息" type="line">
      <view class="example">
        <!-- 基础用法，不包含校验规则 -->
        <uni-forms ref="payForm" :modelValue="currentItem" :rules="payFormRules" labelWidth="100px">
          <uni-forms-item label="订单号" required name="uidOrder">
            <uni-easyinput v-model="currentItem.uidOrder" placeholder="请输入订单号" />
          </uni-forms-item>
          <uni-forms-item label="采购数量" required>
            <uni-easyinput v-model="currentItem.orderNumber" placeholder="采购数量" />
          </uni-forms-item>
          <uni-forms-item label="采购重量" required>
            <uni-easyinput v-model="currentItem.buyWeight" placeholder="采购重量" />
          </uni-forms-item>
          <uni-forms-item label="入库重量" required>
            <uni-easyinput v-model="currentItem.storageWeight" placeholder="入库重量" />
          </uni-forms-item>
          <uni-forms-item label="结算重量" required>
            <uni-easyinput v-model="currentItem.payWeight" placeholder="结算重量" />
          </uni-forms-item>
          <uni-forms-item label="采购金额" required>
            <uni-easyinput v-model="currentItem.buyAmount" placeholder="采购金额" />
          </uni-forms-item>
          <uni-forms-item label="托盘利息" required name="agreeRate">
            <uni-easyinput v-model="currentItem.agreeRate" placeholder="托盘利息" />
          </uni-forms-item>
          <uni-forms-item label="结算数量" required>
            <uni-easyinput v-model="currentItem.payNumber" placeholder="结算数量" />
          </uni-forms-item>
          <uni-forms-item label="结算金额" required name="payAmount">
            <uni-easyinput v-model="currentItem.payAmount" placeholder="结算金额" />
          </uni-forms-item>
          <uni-forms-item label="税额" required name="rateAmount">
            <uni-easyinput v-model="currentItem.rateAmount" placeholder="税额" />
          </uni-forms-item>
          <uni-forms-item label="已核销金额" required>
            <uni-easyinput v-model="currentItem.payedAmount" placeholder="已核销金额" />
          </uni-forms-item>
          <uni-forms-item label="待退补金额" required>
            <uni-easyinput v-model="currentItem.backAmount" placeholder="待退补金额" />
          </uni-forms-item>
          <uni-forms-item label="资金流向" required>
            <uni-easyinput v-model="currentItem.moneyWay" placeholder="资金流向" />
          </uni-forms-item>
          <uni-forms-item label="备注">
            <uni-easyinput type="textarea" v-model="currentItem.mome" placeholder="请输入备注" />
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
import { ref, reactive } from 'vue'
import type { OrderPayItem } from '@/types/pay'
// --------------------------数据初始化
const { safeAreaInsets } = uni.getWindowInfo()

const payForm = ref(null)

// ---------------------------表格检查
const payFormRules = reactive({
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
const currentItem = reactive<OrderPayItem>({
  uid: '',
  // 订单号
  uidOrder: '',
  // 采购数量
  orderNumber: 0,
  // 入库数量
  storageNumber: 0,
  //采购重量、
  buyWeight: 0,
  //入库重量、
  storageWeight: 0,
  //结算重量、
  payWeight: 0,
  //采购金额
  buyAmount: 0,
  //托盘利息、
  agreeRate: 0,
  // 结算数量
  payNumber: 0,
  //结算金额（含税）、
  payAmount: 0,
  //税额、
  rateAmount: 0,
  //已核销金额、
  payedAmount: 0,
  //待补退金额、
  backAmount: 0,
  //资金流向
  moneyWay: '',
  // 结算日期
  payDate: today,
  // 结算人
  payPerson: '',
  // 备注
  mome: '',
})

const close = () => {
  uni.navigateBack({ delta: 1 })
}
const submit = () => {
  console.log(currentItem)
  const ruleForm: any = payForm.value
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
