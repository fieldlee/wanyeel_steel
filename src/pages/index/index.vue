<template>
  <WyzgCustomNavbar />
  <scroll-view
    scroll-y
    class="scroll_view"
    @scrolltolower="onScrolltolower"
    refresher-enabled
    @refresherrefresh="onRefresherrefresh"
    :refresher-triggered="isTriggered"
  >
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <WyzgSwiper :list="bannerList" />
      <CategoryPanel :list="categoryList" />
      <HotPanel :list="hotList" />
      <GuessPanel ref="guessRef" />
    </template>
  </scroll-view>
</template>

<script setup lang="ts">
import { getHomeBannerApi, getHomeCategoryApi, getHomeHotAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { ref } from 'vue'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import GuessPanel from './components/GuessPanel.vue'
import PageSkeleton from './components/PageSkeleton.vue'
import WyzgCustomNavbar from '../components/WyzgCustomNavbar.vue'
import WyzgSwiper from '../components/WyzgSwiper.vue'
type GuessInstance = InstanceType<typeof GuessPanel>
// 下拉刷新状态
const isLoading = ref(false)
// 下拉刷新状态
const isTriggered = ref(false)
// 获取猜你喜欢组件实例
const guessRef = ref<GuessInstance>()

const bannerList = ref<BannerItem[]>([])
const categoryList = ref<CategoryItem[]>([])
const hotList = ref<HotItem[]>([])

const getHomeBannerLists = async () => {
  const result = await getHomeBannerApi()
  bannerList.value = result.result
  console.log(bannerList)
}

const getHomeCategoryLists = async () => {
  const result = await getHomeCategoryApi()
  categoryList.value = result.result
  console.log(categoryList)
}

const getHotLists = async () => {
  const result = await getHomeHotAPI()
  hotList.value = result.result
  console.log(hotList)
}
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerLists(), getHomeCategoryLists(), getHotLists()])
  isLoading.value = false
})
// 滚动触底事件
const onScrolltolower = () => {
  guessRef.value?.getMore()
}
// 自定义下拉刷新被触发
const onRefresherrefresh = async () => {
  // 开启动画
  isTriggered.value = true
  // 重置猜你喜欢组件数据
  guessRef.value?.resetData() // 加载数据
  await Promise.all([
    getHomeBannerLists(),
    getHomeCategoryLists(),
    getHotLists(),
    guessRef.value?.getMore(),
  ]) // 关闭动画
  isTriggered.value = false
}
</script>

<style lang="scss">
page {
  // background-color: #7f7f7f;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll_view {
  flex: 1;
}
</style>
