<!--
此文件为开发者工具生成，生成时间: 2023/11/9上午8:25:51
使用方法：
在 /Users/fieldlee/vue/heima-shop/dist/dev/mp-weixin/pages/category/category.wxml 引入模板

```
<import src="category.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 /Users/fieldlee/vue/heima-shop/dist/dev/mp-weixin/pages/category/category.wxss 中引入样式
```
@import "./category.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
  <view class="sk-container">
    <view class="viewport">
      <view class="search">
        <view class="input">
          <text class="icon-search sk-transparent sk-text-14-2857-964 sk-text sk-pseudo sk-pseudo-circle">女靴</text>
        </view>
      </view>
      <view class="categories">
        <scroll-view :scroll-y="true" class="primary">
          <view class="item active sk-transparent sk-text-14-2857-432 sk-text sk-pseudo sk-pseudo-circle">居家</view>
          <view class="item sk-transparent sk-text-14-2857-209 sk-text sk-pseudo sk-pseudo-circle">美食</view>
          <view class="item sk-transparent sk-text-14-2857-777 sk-text sk-pseudo sk-pseudo-circle">服饰</view>
          <view class="item sk-transparent sk-text-14-2857-700 sk-text sk-pseudo sk-pseudo-circle">母婴</view>
          <view class="item sk-transparent sk-text-14-2857-899 sk-text sk-pseudo sk-pseudo-circle">个护</view>
          <view class="item sk-transparent sk-text-14-2857-829 sk-text sk-pseudo sk-pseudo-circle">严选</view>
          <view class="item sk-transparent sk-text-14-2857-944 sk-text sk-pseudo sk-pseudo-circle">数码</view>
          <view class="item sk-transparent sk-text-14-2857-911 sk-text sk-pseudo sk-pseudo-circle">运动</view>
          <view class="item sk-transparent sk-text-14-2857-880 sk-text sk-pseudo sk-pseudo-circle">杂项</view>
        </scroll-view>
        <scroll-view :scroll-y="true" class="secondary">
          <view is="components/WyzgSwiper" class="banner">
            <view class="carousel WyzgSwiper--carousel">
              <swiper :circular="true" :interval="3000" :current="0" :autoplay="false">
                <swiper-item style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
                  <navigator class="navigator WyzgSwiper--navigator" hover-class="none">
                    <image class="image WyzgSwiper--image sk-image" mode="aspectFill"></image>
                  </navigator>
                </swiper-item>
                <swiper-item style="position: absolute; width: 100%; height: 100%; transform: translate(100%, 0px) translateZ(0px);">
                  <navigator class="navigator WyzgSwiper--navigator" hover-class="none">
                    <image class="image WyzgSwiper--image sk-image" mode="aspectFill"></image>
                  </navigator>
                </swiper-item>
              </swiper>
              <view class="indicator WyzgSwiper--indicator">
                <text class="dot WyzgSwiper--dot active WyzgSwiper--active"></text>
                <text class="dot WyzgSwiper--dot"></text>
                <text class="dot WyzgSwiper--dot"></text>
                <text class="dot WyzgSwiper--dot"></text>
                <text class="dot WyzgSwiper--dot"></text>
              </view>
            </view>
          </view>
          <view class="panel">
            <view class="title">
              <text class="name sk-transparent sk-text-28-0000-775 sk-text">居家生活用品</text>
              <navigator class="more sk-transparent sk-text-30-0000-883 sk-text sk-pseudo sk-pseudo-circle" hover-class="none">全部</navigator>
            </view>
            <view class="section">
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-767 sk-text">法国年份雅文邑700毫升</view>
                <view class="price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-702 sk-text">1480.00</text>
                </view>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-445 sk-text">梅乃宿梅酒720毫升</view>
                <view class="price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-63 sk-text">168.00</text>
                </view>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-14 sk-text">多米尼加陈年朗姆酒700毫升</view>
                <view class="price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-854 sk-text">238.00</text>
                </view>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-406 sk-text">川味牛肉辣椒酱190克</view>
                <view class="price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-702 sk-text">38.00</text>
                </view>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-756 sk-text">全新升级，四川酸辣粉195克*6杯</view>
                <view class="price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-1000 sk-text">69.00</text>
                </view>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-234 sk-text">极光限定 珠光蓝珐琅锅</view>
                <view class="price">
                  <text class="symbol sk-transparent sk-opacity">¥</text>
                  <text class="number sk-transparent sk-text-14-2857-87 sk-text">199.00</text>
                </view>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
              </navigator>
              <navigator class="goods" hover-class="none">
                <image class="image sk-image"></image>
              </navigator>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<style>
/*
此文件为开发者工具生成，生成时间: 2023/11/9上午8:25:51

在 /Users/fieldlee/vue/heima-shop/dist/dev/mp-weixin/pages/category/category.wxss 中引入样式
```
@import "./category.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
*/
.sk-transparent {
    color: transparent !important;
  }
.sk-text-14-2857-964 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
  }
.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
  }
.sk-text-14-2857-432 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
  }
.sk-text-14-2857-209 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
  }
.sk-text-14-2857-777 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
  }
.sk-text-14-2857-700 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
  }
.sk-text-14-2857-899 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
  }
.sk-text-14-2857-829 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
  }
.sk-text-14-2857-944 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
  }
.sk-text-14-2857-911 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
  }
.sk-text-14-2857-880 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
  }
.sk-text-28-0000-775 {
    background-image: linear-gradient(transparent 28.0000%, #EEEEEE 0%, #EEEEEE 72.0000%, transparent 0%) !important;
    background-size: 100% 58.5938rpx;
    position: relative !important;
  }
.sk-text-30-0000-883 {
    background-image: linear-gradient(transparent 30.0000%, #EEEEEE 0%, #EEEEEE 70.0000%, transparent 0%) !important;
    background-size: 100% 58.5938rpx;
    position: relative !important;
  }
.sk-text-14-2857-767 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.5313rpx;
    position: relative !important;
  }
.sk-opacity {
    opacity: 0 !important;
  }
.sk-text-14-2857-702 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 32.8125rpx;
    position: relative !important;
  }
.sk-text-14-2857-445 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.5313rpx;
    position: relative !important;
  }
.sk-text-14-2857-63 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 32.8125rpx;
    position: relative !important;
  }
.sk-text-14-2857-14 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.5313rpx;
    position: relative !important;
  }
.sk-text-14-2857-854 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 32.8125rpx;
    position: relative !important;
  }
.sk-text-14-2857-406 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.5313rpx;
    position: relative !important;
  }
.sk-text-14-2857-756 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.5313rpx;
    position: relative !important;
  }
.sk-text-14-2857-1000 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 32.8125rpx;
    position: relative !important;
  }
.sk-text-14-2857-234 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 29.5313rpx;
    position: relative !important;
  }
.sk-text-14-2857-87 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 32.8125rpx;
    position: relative !important;
  }
.sk-image {
    background: #EFEFEF !important;
  }
.sk-pseudo::before, .sk-pseudo::after {
      background: #EFEFEF !important;
      background-image: none !important;
      color: transparent !important;
      border-color: transparent !important;
    }
.sk-pseudo-rect::before, .sk-pseudo-rect::after {
      border-radius: 0 !important;
    }
.sk-pseudo-circle::before, .sk-pseudo-circle::after {
      border-radius: 50% !important;
    }
.sk-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: transparent;
  }

</style>
