<!-- // 外来单位
supplyDept: string
// 收支方向
inOut: string
// 收付款方式
costWay: string
// 费用日期
costDate: Date
// 费用类型（装卸费、仓储费、运费、杂费、托盘利息）
costCategory: string
// 计件方式（整单、重量、数量）
unitCategory: string
// 费用单价
unitPrice: number
// 税率
costRate: number
// 总额
costAmount: number
// 备注）
mome: string -->
<template>
  <view class="container" :style="{ paddingBottom: safeAreaInsets?.bottom + 'px' }">
    <uni-section title="产品信息" type="line">
      <view class="example">
        <!-- 基础用法，不包含校验规则 -->
        <uni-forms ref="transForm" :modelValue="currentItem" :rules="transRules" labelWidth="100px">
          <uni-forms-item label="往来单位" required name="supplyDept">
            <uni-data-picker v-model="currentItem.supplyDept" :localdata="array" popup-title="选择往来单位">
            </uni-data-picker>
          </uni-forms-item>
          <uni-forms-item label="收支方向" required name="inOut">
            <uni-data-checkbox v-model="currentItem.inOut" :localdata="inout" />
          </uni-forms-item>
          <uni-forms-item label="收付款方式" required name="costWay">
            <uni-data-picker v-model="currentItem.costWay" :localdata="cashCates" popup-title="选择收付款方式">
            </uni-data-picker>
          </uni-forms-item>
          <uni-forms-item label="费用发生日期" required name="costDate">
            <uni-datetime-picker type="date" return-type="timestamp" v-model="currentItem.costDate" />
          </uni-forms-item>
          <uni-forms-item label="费用类型" required name="costCategory">
            <uni-data-checkbox v-model="currentItem.costCategory" multiple :localdata="costCates" />
          </uni-forms-item>
          <uni-forms-item label="计价方式" required name="unitCategory">
            <uni-data-checkbox v-model="currentItem.unitCategory" :localdata="unitCategory" />
          </uni-forms-item>
          <uni-forms-item label="单价" required name="unitPrice">
            <uniNumberBox name="unitPrice" :value="currentItem?.unitPrice" :step="0.1" />
          </uni-forms-item>
          <uni-forms-item label="税率" required name="costRate">
            <uniNumberBox name="costRate" :value="currentItem?.costRate" :step="0.1" />
          </uni-forms-item>
          <uni-forms-item label="总额" required name="costAmount">
            <uniNumberBox name="costAmount" :value="currentItem?.costAmount" :step="0.1" />
          </uni-forms-item>
          <uni-forms-item label="备注">
            <uni-easyinput type="textarea" v-model="currentItem.mome" placeholder="请输入备注" />
          </uni-forms-item>
        </uni-forms>
      </view>
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
import uniDataCheckbox from '@dcloudio/uni-ui/lib/uni-data-checkbox/uni-data-checkbox.vue'
import uniDatetimePicker from '@dcloudio/uni-ui/lib/uni-datetime-picker/uni-datetime-picker.vue'
import uniDataPicker from '@dcloudio/uni-ui/lib/uni-data-picker/uni-data-picker.vue'
import uniNumberBox from '@dcloudio/uni-ui/lib/uni-number-box/uni-number-box.vue'
import uniEasyinput from '@dcloudio/uni-ui/lib/uni-easyinput/uni-easyinput.vue'
import type { TranCost } from '@/types/order'
import { ref, reactive } from 'vue'
const today = new Date()
const { safeAreaInsets } = uni.getWindowInfo()
const transForm = ref(null)

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
const currentItem = reactive<TranCost>({
  supplyDept: '',
  // 收支方向
  inOut: '',
  // 收付款方式
  costWay: '',
  // 费用日期
  costDate: today,
  // 费用类型（装卸费、仓储费、运费、杂费、托盘利息）
  costCategory: '',
  // 计件方式（整单、重量、数量）
  unitCategory: '',
  // 费用单价
  unitPrice: 0.0,
  // 税率
  costRate: 13.0,
  // 总额
  costAmount: 0.0,
  // 备注）
  mome: '',
})

const transRules = reactive({
  supplyDept: {
    rules: [
      {
        required: true,
        errorMessage: '往来单位不能为空',
      },
    ],
  },
  costDate: {
    rules: [
      {
        required: true,
        errorMessage: '费用日期不能为空',
      },
    ],
  },
  costWay: {
    rules: [
      {
        required: true,
        errorMessage: '支付方式不能为空',
      },
    ],
  },
  costCategory: {
    rules: [
      {
        required: true,
        errorMessage: '费用类型不能为空',
      },
    ],
  },
  unitCategory: {
    rules: [
      {
        required: true,
        errorMessage: '单位类型不能为空',
      },
    ],
  },
  unitPrice: {
    rules: [
      {
        required: true,
        errorMessage: '单价不能为空',
      },
      {
        format: 'number',
        errorMessage: '单价只能输入数字',
      },
    ],
  },
  costRate: {
    rules: [
      {
        required: true,
        errorMessage: '税率不能为空',
      },
      {
        format: 'number',
        errorMessage: '税率只能输入数字',
      },
    ],
  },
  costAmount: {
    rules: [
      {
        required: true,
        errorMessage: '总额不能为空',
      },
      {
        format: 'number',
        errorMessage: '总额只能输入数字',
      },
    ],
  },
})
// 整单、重量、数量
const unitCategory = reactive([
  {
    text: '整单',
    value: '整单',
  },
  {
    text: '重量',
    value: '重量',
  },
  {
    text: '数量',
    value: '数量',
  },
])
const inout = reactive([
  {
    text: '收入',
    value: '收入',
  },
  {
    text: '支出',
    value: '支出',
  },
])
// 装卸费、仓储费、运费、杂费、托盘利息
const costCates = reactive([
  {
    text: '装卸费',
    value: '装卸费',
  },
  {
    text: '仓储费',
    value: '仓储费',
  },
  {
    text: '运费',
    value: '运费',
  },
  {
    text: '托盘利息',
    value: '托盘利息',
  },
  {
    text: '杂费',
    value: '杂费',
  },
])
// 银行转账、票据、微信、支付宝、电汇、现金
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

const cancel = () => {
  uni.navigateBack
}

const submit = () => {
  console.log(currentItem)
  const ruleForm: any = transForm.value
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
  margin: 15rpx 0;
  display: flex;
  justify-content: space-around;
}
</style>
