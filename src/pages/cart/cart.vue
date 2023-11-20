<template>
  <WyzgCustomNavbar />

  <scroll-view style="margin-top: -10rpx" scroll-y class="scroll_view" @scrolltolower="onScrolltolower" refresher-enabled
    @refresherrefresh="onRefresherrefresh" :refresher-triggered="isTriggered">
    <ProcessPanel />

    <ProcessList v-if="listType == 'process_1'" />
    <OrderList v-if="listType == 'process_2'" />
    <PayList v-if="listType == 'process_3'" />
    <AfterSaleList v-if="listType == 'process_4'" />
  </scroll-view>

  <WyzgFab />
</template>

<script setup lang="ts">
import WyzgCustomNavbar from '../components/WyzgCustomNavbar.vue'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import ProcessPanel from './components/ProcessPanel.vue'
import ProcessList from './components/ProcessList.vue'
import OrderList from './components/OrderList.vue'
import PayList from './components/PayList.vue'
import AfterSaleList from './components/AfterSaleList.vue'
import WyzgFab from '../components/WyzgFab.vue'
// 下拉刷新状态
const isLoading = ref(false)
// 下拉刷新状态
const isTriggered = ref(false)
// 列表类型
const listType = ref('process_2')

onLoad(async () => {
  isLoading.value = true
  isLoading.value = false
})

// 滚动触底事件
const onScrolltolower = () => {

}
// 自定义下拉刷新被触发
const onRefresherrefresh = async () => {
  // 开启动画
  isTriggered.value = true

  isTriggered.value = false
}
// 更新列表
uni.$on('processSelectedItem', (data) => {
  listType.value = data.item.id
})
</script>

<style lang="scss">
view,
navigator,
input,
scroll-view {
  box-sizing: border-box;
}

page {
  background-color: #fbfbfb;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll_view {
  flex: 1;
}
</style>
