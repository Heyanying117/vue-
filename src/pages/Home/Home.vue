<template>
  <div class="Home">
    <!-- 最初搜索 -->
      <header class="header">
          <div class="logo">
              <a href="javascript:;" class="logo_img"></a>
          </div>
          <div class="search">
              <span class="icon-search"></span>
              <span class ="placeholder">搜索商品,共1222好产品</span>
          </div>
          <div class="btn_Login">
              <button class="btn">登陆</button>
          </div>
      </header>
      <!-- 导航 -->
      <section class="homeNav">
          <div class="inner">
              <ul class="nav">
                <li class="itemNav active">推荐</li>
                <li class="itemNav">商品分类</li>
                <li class="itemNav">练习</li>
                <li class="itemNav">推荐</li>
                <li class="itemNav">商品分类</li>
                <li class="itemNav">练习</li>
                <li class="itemNav">推荐</li>
                <li class="itemNav">商品分类</li>
                <li class="itemNav">练习</li>
              </ul>
          </div>
          <div class="row">
              <i class ='icon active'></i>
          </div>
      </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from "better-scroll"
  export default {
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .Home
    display flex
    position relative
    .header
      position fixed
      display flex
      align-items center
      width 100%
      height 88px
      padding 12px 25px
      background #fff
      box-sizing border-box
      .logo
        display flex
        width 140px
        height 40px
       
        .logo_img
          
          width 140px
          height 40px
          display: inline-block;
          background  url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png')
          background-size cover
      .search
        display flex
        align-items center
        margin-left 10px  
        background #ededed 
        height 56px
        text-align center
        justify-content center
        padding 0 70px
        border-radius 5px
        flex-flow: row nowrap
        .icon-search
          display inline-block
          width 30px
          height 30px
          background url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png')
          background-size cover
        .placeholder
          margin-left 10px
          color #666
      .btn_Login
        margin-left 20px
        .btn
          width 80px
          height 50px
          background  #fff
          outline none
          border 1px solid #b4282d
          color #b4282d
          border-radius 5px
          font-size 20px
    .homeNav
      margin-top 88px
      height 60px
      line-height 60px
      width 100%  
      background #fff 
      position relative
      .inner
        width 100%
        white-space nowrap
        overflow hidden
        .nav
          padding-left 30px
          display flex
          .itemNav
            margin-left 20px
            font-size 28px
            color #333
            padding 0 20px
            &.active
              color #b4282d
              border-bottom 1px solid #b4282d 
             
      .row
        position absolute
        right 0px
        bottom 5px
        width 120px
        height 60px
        background #fff
        .icon
          position absolute
          right 20px
          bottom 5px
          width 40px
          height 40px
          background url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/arrow-down-3-799ded53ea.png')
          background-size cover
        &.active
          transform: rotate(180deg);
       
        
      
</style>
