<template>
  <div>
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>
<style lang="scss">
  @import "../static/base/variable";
  @import "../static/base/mixins/size";

  @font-face {font-family: "iconfont";
    src: url('../static/fonts/iconfont.eot?t=1470837557'); /* IE9*/
    src: url('../static/fonts/iconfont.eot?t=1470837557#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('../static/fonts/iconfont.woff?t=1470837557') format('woff'), /* chrome, firefox */
    url('../static/fonts/iconfont.ttf?t=1470837557') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
    url('../static/fonts/iconfont.svg?t=1470837557#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family:"iconfont" !important;
    font-size:16px;
    font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
  }

  html,body,.app{
    height:100%;
  }

  h1, h2,h3,section,ul,li{
    margin:0;
    padding:0
  }

  /* 移动端定义字体的代码 */
  body{font-family:$fontFamily;background: $bg-gray}
  a, a:link, a:visited, a:hover, a:active{
    color:$font-dark-color;
    text-decoration: none;
  }

  @media screen and (max-width: 321px) {
    body {
      font-size: 13px
    }
  }

  @media screen and (min-width: 321px) and (max-width: 400px) {
    body {
      font-size: 14px
    }
  }

  @media screen and (min-width: 400px) {
    body {
      font-size: 16px
    }
  }

  img{
    width:100%;
    vertical-align: middle;
  }


  .ico {
    display: inline-block;
    background: url("assets/images/ico.png") no-repeat;
    background-size: 18px auto;
    width: 14px;
    height: 14px;
  }

  .btn_search_top {
    @include size(0.4rem, 0.4rem);
    position: absolute;
    top: 50%;
    right: 0.10rem;
    transform:translate(0,-50%);
  }

  .ico_search_top {
    @include size(inherit, inherit);

  }

  .fixed_pad_bot {
    padding: 0 0 1.1rem;
    overflow: hidden;
  }

</style>
<script>
  import FooterComponent from './components/footer.vue'

  export default{

    ready() {

//      this.$http.get('http://localhost:3000/getList')
//        .then(function(ret) {
//          this.msg = JSON.parse(ret.body).errmsg;
//        })
//        .then(function(err) {
//          console.log(err);
//        })
    },
    data(){
      return{
        msg:''
      }
    }
    ,

    components:{
      // 'FooterComponent':FooterComponent,
      FooterComponent
    }
  }
</script>
