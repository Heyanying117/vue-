<template>
  <ul class="footerNav">
    <li @click="goto('/home')">
      <span class="foot_icon" :class="this.$route.path === '/home' ? 'icon-home-active': 'icon-home'"></span>
      <span class="text_color" :class="this.$route.path ==='/home' ? 'text_color_active':'text_color'">首页</span>
    </li>
    <li @click="goto('/category')">
      <span class="foot_icon" :class="this.$route.path === '/category' ? 'icon-category-active': 'icon-category'"></span>
      <span class="text_color" :class="this.$route.path ==='/category' ? 'text_color_active':'text_color'">分类</span>
    </li>
    <li @click="goto('/things')">
      <span class="foot_icon" :class="this.$route.path === '/things' ? 'icon-fabric-active': 'icon-fabric'"></span>
      <span class="text_color" :class="this.$route.path ==='/things' ? 'text_color_active':'text_color'">织物</span>
    </li>
    <li @click="goto('/shopcard')">
      <span class="foot_icon" :class="this.$route.path === '/shopcard' ? 'icon-shop-active': 'icon-shop'"></span>
      <span class="text_color" :class="this.$route.path ==='/shopcard' ? 'text_color_active':'text_color'">购物车</span>
    </li>
    <li @click="goto('/person')">
      <span class="foot_icon" :class="this.$route.path === '/person' ? 'icon-geren-active': 'icon-geren'"></span>
      <span class="text_color" :class="this.$route.path ==='/person' ? 'text_color_active':'text_color'">个人</span>
    </li>
  </ul>
</template>

<script type="text/ecmascript-6">
  export default {
     methods:{
        goto(path){
            /* 编程式路由跳转 */
            this.$router.replace(path)
        }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import "../../common/stylus/mixins.styl"
  .footerNav
    top-border-1px(#666)
    display flex
    width 100%
    height 80px
    
    position fixed
    left 0
    bottom 0
    align-items center
    z-index 100
    padding 12px
    background #ffffff
    box-sizing border-box
    li
      display flex
      flex 1
      flex-direction column
      align-items center
      .foot_icon
        width 100%
        height 40px
        background  url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png") no-repeat
        background-size 40px
        text-align center
      .text_color
        font-size 24px
        color #666
      .text_color_active
        color #b4282d
      .icon-home
        background-position 54px -250px
      .icon-home-active
        background-position 54px -200px
      .icon-category
        background-position 54px -150px 
      .icon-category-active
        background-position 54px -100px 
      .icon-fabric
        background-position 54px -352px 
      .icon-fabric-active
        background-position 54px -300px 
      .icon-shop
        background-position 54px -51px 
      .icon-shop-active
        background-position 54px -1px 
      .icon-geren
        background-position 54px -454px
      .icon-geren-active
        background-position 54px -404px  
</style>
