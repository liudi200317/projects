<template>
  <div class="footer">

    <footer class="global_footer menu_fixed_ul">
      <!--<a class="btn_menu active icon-shouye" href="javascript:void(0);">-->
      <!--<a class="btn_menu active icon-shouye" v-link="/index">-->
      <a class="btn_menu active icon-shouye" v-link="{ name: 'index' }">
        <i class="icon iconfont">&#xe604;</i>
        首页</a>
      <a class="btn_menu" v-link="{ name: 'category' }">
        <i class="icon iconfont">&#xe63b;</i>
        商品分类</a>
      <a class="btn_menu" href="javascript:void(0);">
        <i class="icon iconfont">&#xe616;</i>
        购物车</a>
      <a class="btn_menu" href="javascript:void(0);">
        <i class="icon iconfont">&#xe63f;</i>
        个人中心</a>
    </footer>
  </div>

</template>
<style>
.menu_fixed_ul {
    height: 38px;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        z-index: 2;
        background: #f7f7f7;
        /*border-top: solid rgb(232, 232, 232) 1px;*/
        /*line-height:1;*/
        padding-top:4px;

        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -moz-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-justify-content: center;
        -webkit-box-align: center;
        -moz-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;


    }

    footer:after{
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        border-top: 1px solid rgb(232, 232, 232);
        top: 0;
        left: 0;
        -webkit-transform-origin: 0 0;
        transform-origin: 0 0;
        -webkit-transform: scaleY(0.5);
        transform: scaleY(0.5);
        position: absolute;
    }


.btn_menu, .btn_menu:link, .btn_menu:hover, .btn_menu:visited {
  display: block;
  background: inherit;
  text-align: center;
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  -webkit-flex: 1;
  flex: 1;
}

 .btn_menu .icon{
        display: block;
        line-height:1;
    }

</style>
<script>


    export default{


        data(){

            return {}

        }

    }
</script>
