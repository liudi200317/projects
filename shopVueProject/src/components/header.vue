<template>
  <div>

    <header class="top_logo_wrap">
      <h1 class="logo_wrap">
        海品猫
        <select-component></select-component>

        <!--<a class="btn btn_store_switch" href="javascript:void(0);">北京店<i class="ico_arrow_down"></i></a>-->
      </h1>
      <!--<a class="btn btn_search_top" href=""><i class="ico ico_search_top"></i></a>-->
    </header>

  </div>

</template>
<style scoped lang="scss">

  @import "../../static/base/variable";
  @import "../../static/base/mixins/border-onepx";
  @import "../../static/base/mixins/size";

  /*top start*/

  .top_logo_wrap {
    background: $colorBg;
    text-align: center;
    padding: 0.06rem 0 0;
    position: relative;
    &:after {
      @include set-bottom-line();
    }
    .logo_wrap {
      display: inline-block;
      @extend %color-01;
      font-size: 24px;
    }
    .btn_store_switch {
      color: #848689;
      font-size: 12px;
      font-weight:lighter;
    }

    .ico_arrow_down {
      border: 1px solid;
      border-color: #ccc #ccc transparent transparent;
      display: inline-block;
      width: 5px;
      height: 5px;
      transform: rotate(135deg) translate(-3px);
    }

  }

  .store_switch_wrap {

    @include size(100%, 1.4rem);
    overflow: visible;
    text-align: left;
    display: none;
    position: relative;

    .store_area_wrap {

      @include size(100%, 1.4rem);
      background: #c53b63;
      position: fixed;
      top: 36px;
      left: 0;
      z-index: 5;
      overflow: scroll;
    }

    .btn_area {
      width: 30%;
      color: $colorBg !important;
      font-size: 0.9em;
      padding: 6px 0;
    }

    .btn_area.active {
      background: #f64779;
    }

    .area_wrap {
      position: relative;
    }

    .area_items_wrap {

      @include size(70%, 1.4rem);
      background: #f64779;
      position: fixed;
      top: 36px;
      left: 30%;
      z-index: 6;
      overflow: auto;
      /*   display: none; */
    }

    .btn_switch {
      color: $colorBg !important;
      display: block;
      font-size: 0.14rem;
      padding: 6px 0 6px 40px;
      text-align: left;
    }

    .ico_arrow_top {
      display: block;
      @include size(0, 0);
      border: solid transparent 5px;
      border-bottom-color: #f64779;
      position: fixed;
      top: 26px;
      left: 56.5%;
      z-index: 5;
    }

  }

  /*top end*/
</style>
<script>
  import SelectComponent from './../components/select.vue'

  export default{

    data(){

      return {}

    },
    components: {
      SelectComponent
    }

  }
</script>
