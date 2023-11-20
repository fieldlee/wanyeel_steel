<script setup lang="ts">
import { useMemberStore } from '@/stores'

const memberStore = useMemberStore()

const loginOpen = () => {
  uni.reLaunch({
    url: '/pages/login/login',
  })
}

</script>

<template>
  <view class="my">
    <view>会员信息：{{ memberStore.profile }}</view>
    <button @tap="
      memberStore.setProfile({
        nickname: '黑马先锋',
      })
      " size="mini" plain type="primary">
      保存用户信息
    </button>
    <button @tap="memberStore.clearProfile()" size="mini" plain type="warn">清理用户信息</button>
    <button @tap="loginOpen" size="mini" plain type="warn">登录页面</button>
  </view>
</template>

<style lang="scss">
//
</style>
