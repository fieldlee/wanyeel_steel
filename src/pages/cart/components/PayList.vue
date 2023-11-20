<script setup lang="ts">
import { getHomeGoodsGuessLikeAPI } from '@/services/home'
import type { PageParams } from '@/types/global'
import type { GuessItem } from '@/types/home'
import { onMounted, ref, reactive } from 'vue'
import LeDropdown from '@/uni_modules/le-dropdown/components/le-dropdown/le-dropdown.vue'

import { DropdownList } from './data.js'
const menuList = ref(DropdownList)
const onConfirm = (data: any) => {
  console.log('确定事件', data)
}
const onChange = (data: any, sIndex: any) => {
  console.log('改变事件', data, sIndex)
}
// 新建采购协议
const payOrder = () => {
  uni.navigateTo({ url: '/pages/cart/payInfo' })
}
// 分页参数
const pageParams: Required<PageParams> = {
  page: 1,
  pageSize: 10,
}
// 猜你喜欢的列表
const guessList = ref<GuessItem[]>([])
// 已结束标记
const finish = ref(false)
// 获取猜你喜欢数据
// 重置数据
const resetData = () => {
  pageParams.page = 1
  guessList.value = []
  finish.value = false
}
// 组件挂载完毕
onMounted(() => { })
// 暴露方法
defineExpose({
  resetData,
})
</script>

<template>
  <!--  -->
  <view class="uni-flex uni-row" style="background-image: url('/static/images/center_bg.png')">
    <view class="text" style="width: 500rpx">
      <LeDropdown v-model:menuList="menuList" themeColor="#5ECDAE" :duration="500" :isCeiling="true"
        @onConfirm="onConfirm" @onChange="onChange"></LeDropdown>
    </view>
    <view class="btn-text" style="-webkit-flex: 1; flex: 1">
      <button class="mini-btn" @click="payOrder" style="background-color: #5ecdae" type="primary" size="mini">
        订单结算
      </button>
    </view>
  </view>
  <view class="agree">
    <navigator class="uni-list-cell" v-for="item in guessList" :key="item.id" :url="`/pages/cart/agreement`">
      <view class="uni-flex uni-column" style="margin: 20rpx">
        <view class="uni-flex uni-row">
          <text style="font-weight: bold">上海市普陀区金沙江路</text>
        </view>
        <view class="uni-flex uni-row">
          <!-- 品种 -->
          <view class="uni-flex uni-row">
            <text style="font-size: 24rpx">品种：</text>
            <text style="font-weight: bold">钢卷</text>
          </view>
          <!-- 签订日期 -->
          <view class="uni-flex uni-row"
            style="-webkit-justify-content: center; justify-content: center; margin-left: 20rpx">
            <text style="font-size: 24rpx">签订：</text>
            <text style="font-weight: bold">2023-11-11 </text>
          </view>
          <!-- // 协议金额（计算） -->
          <view class="uni-flex uni-row"
            style="-webkit-justify-content: flex-end; justify-content: flex-end; margin-left: 20rpx">
            <text style="font-size: 24rpx">协议金额:</text>
            <text style="font-weight: bold">100000</text>
          </view>
        </view>
        <view class="uni-flex uni-row">
          <!-- 预付款比例 -->
          <view class="uni-flex uni-row">
            <text style="font-size: 24rpx">付款比例：</text>
            <text style="font-weight: bold">13%</text>
          </view>
          <!-- 预付款金额 -->
          <view class="uni-flex uni-row"
            style="-webkit-justify-content: center; justify-content: center; margin-left: 20rpx">
            <text style="font-size: 24rpx">预付金额：</text>
            <text style="font-weight: bold">300000</text>
          </view>
          <!-- // 保证金金额 -->
          <view class="uni-flex uni-row"
            style="-webkit-justify-content: flex-end; justify-content: flex-end; margin-left: 20rpx">
            <text style="font-size: 24rpx">保证金：</text>
            <text style="font-weight: bold">300000</text>
          </view>
        </view>
        <view class="uni-flex uni-row">
          <!-- // 计息开始日期 -->
          <view class="uni-flex uni-row">
            <text style="font-size: 24rpx">计息开始：</text>
            <text style="font-weight: bold">2023-12-12</text>
          </view>
          <!-- // 计息年化利率 -->
          <view class="uni-flex uni-row"
            style="-webkit-justify-content: flex-end; justify-content: flex-end; margin-left: 20rpx">
            <text style="font-size: 24rpx">年化利率：</text>
            <text style="font-weight: bold">9%</text>
          </view>
        </view>
      </view>
    </navigator>
  </view>
  <view class="loading-text">
    {{ finish ? '没有更多数据~' : '正在加载...' }}
  </view>
</template>

<style lang="scss">
:host {
  display: block;
}

.btn-text {
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: #5ECDAE;
}

/* 分类标题 */
.caption {
  line-height: 1;
  color: #262626;
  height: 80rpx;

  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30rpx 0 30rpx;
    background-color: #5ecdae;
    height: 75rpx;
    color: #fff;
    font: 1em sans-serif;
    font-weight: bold;
    font-size: 30rpx;

    &::before,
    &::after {
      content: '';
      width: 20rpx;
      height: 20rpx;
      background-image: url(@/static/images/bubble.png);
      background-size: contain;
      margin: 0 10rpx;
    }
  }
}

.agree {
  margin: 10rpx, 0;

  .text {
    margin: 5rpx 5rpx;
    padding: 0 10rpx;
    background-color: #ebebeb;
    height: 50rpx;
    line-height: 50rpx;
    text-align: center;
    color: #777;
    font-size: 26rpx;
  }
}

// 加载提示文字
.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0;
}
</style>
