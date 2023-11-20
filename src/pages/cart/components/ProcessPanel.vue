<script setup lang="ts">
import type { ProcessTopItem } from '@/types/process'
import { ref } from 'vue'

const bgColor = ref('#f6f6f6')
const selectTitle = ref('采购订单')
// 过程按钮List
const processList = ref<ProcessTopItem[]>([
  {
    id: 'process_1',
    name: '托盘协议',
    picture: '/static/images/cart/agree.png',
    bgPicture: '/static/images/agree1.png',
    isSelectd: false,
    bgColor: '#f6f6f6',
    textColor: '#666',
  },
  {
    id: 'process_2',
    name: '采购订单',
    picture: '/static/images/cart/order.png',
    bgPicture: '/static/images/agree2.png',
    isSelectd: true,
    bgColor: '#5ECDAE',
    textColor: '#fff',
  },
  {
    id: 'process_3',
    name: '订单结算',
    picture: '/static/images/cart/pay.png',
    bgPicture: '/static/images/agree3.png',
    isSelectd: false,
    bgColor: '#f6f6f6',
    textColor: '#666',
  },
  {
    id: 'process_4',
    name: '采购售后',
    picture: '/static/images/cart/aftersale.png',
    bgPicture: '/static/images/agree4.png',
    isSelectd: false,
    bgColor: '#f6f6f6',
    textColor: '#666',
  },
])

// 选择过程
const selectItem = (item: ProcessTopItem) => {
  console.log('item:', item)
  selectTitle.value = item.name
  //清除选择的
  processList.value.forEach((element) => {
    element.isSelectd = false
    element.bgColor = '#f6f6f6'
    element.textColor = '#666'
  })
  item.isSelectd = true
  item.bgColor = '#5ECDAE'
  item.textColor = '#fff'
  uni.$emit('processSelectedItem', { item: item })
}
</script>

<template>
  <view class="uni-flex uni-row">
    <view class="flex-item  flex-item-V" :style="item.isSelectd
      ? 'background-image:url(' + item.bgPicture + ');background-size:100% 100%;'
      : 'background-color:' + item.bgColor
      " @tap="selectItem(item)" v-for="item in processList" :key="item.id">
      <view class="uni-flex uni-column flex-pc">
        <image class="icon" :src="item.picture"></image>
        <text class="text" :style="'color: ' + item.textColor">{{ item.name }}</text>
      </view>

    </view>
  </view>
</template>

<style lang="scss">
.flex-item {
  width: 25%;
}

.icon {
  margin: 10rpx 0 0 0;
  width: 65rpx;
  height: 65rpx;
}

.text {
  font-size: 26rpx;
  font-weight: bold;
}

.flex-pc {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>
