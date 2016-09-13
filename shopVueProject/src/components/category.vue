<template>
  <div class='category fixed_pad_bot'>

    <div class="search_inp_wrap search_type_wrap">
			<span class="inp_border">
				<input class="inp_search" type="text" placeholder="搜索商家或品牌名称">
				<a class="btn btn_search_top" href=""><i class="ico ico_search_top"></i></a>
			</span>
    </div>
    <div class="type_item_wrap" id="wrapper">
      <div id="scroller">
        <ul>
          <li class="btn btn_pro_type active">服装鞋包</li>
          <li class="btn btn_pro_type">美食</li>
          <li class="btn btn_pro_type">服务</li>
          <li class="btn btn_pro_type">娱乐</li>
          <li class="btn btn_pro_type">奢饰品</li>
          <li class="btn btn_pro_type">数码产品</li>
          <li class="btn btn_pro_type">美妆</li>
          <li class="btn btn_pro_type">珠宝首饰</li>
          <li class="btn btn_pro_type">男装</li>
          <li class="btn btn_pro_type">图书杂志</li>
          <li class="btn btn_pro_type">运动户外</li>
          <li class="btn btn_pro_type">母婴</li>
          <li class="btn btn_pro_type">家居装饰</li>
          <li class="btn btn_pro_type">食品</li>
          <li class="btn btn_pro_type">虚拟物品</li>
        </ul>
      </div>
    </div>
    <div class="pro_type_wrap" id="wrapper2">
      <div id="scroller2">
        <ul>
          <li class="btn btn_type_item"><img src="../assets/images/img_protype_01.jpg">手机</li>
          <li class="btn btn_type_item"><img src="../assets/images/img_protype_02.jpg">相机</li>
          <li class="btn btn_type_item"><img src="../assets/images/img_protype_03.jpg">耳机</li>
          <li class="btn btn_type_item"><img src="../assets/images/img_protype_04.jpg">移动电源</li>
          <li class="btn btn_type_item"><img src="../assets/images/img_protype_05.jpg">移动硬盘</li>
          <li class="btn btn_type_item"><img src="../assets/images/img_protype_06.jpg">笔记本电脑</li>
          <li class="btn btn_type_item"><img src="../assets/images/img_protype_06.jpg">笔记本电脑</li>
          <li class="btn btn_type_item"><img src="../assets/images/img_protype_01.jpg">手机</li>
          <li class="btn btn_type_item"><img src="../assets/images/img_protype_02.jpg">相机</li>
          <li class="btn btn_type_item"><img src="../assets/images/img_protype_03.jpg">耳机</li>
          <li class="btn btn_type_item"><img src="../assets/images/img_protype_04.jpg">移动电源</li>
          <li class="btn btn_type_item"><img src="../assets/images/img_protype_05.jpg">移动硬盘</li>
          <li class="btn btn_type_item"><img src="../assets/images/img_protype_06.jpg">笔记本电脑</li>
          <li class="btn btn_type_item"><img src="../assets/images/img_protype_02.jpg">相机</li>
          <li class="btn btn_type_item"><img src="../assets/images/img_protype_03.jpg">耳机</li>
          <li class="btn btn_type_item"><img src="../assets/images/img_protype_04.jpg">移动电源</li>
          <li class="btn btn_type_item"><img src="../assets/images/img_protype_05.jpg">移动硬盘</li>
          <li class="btn btn_type_item"><img src="../assets/images/img_protype_06.jpg">笔记本电脑</li>
        </ul>
      </div>
    </div>

  </div>
</template>
<style scoped lang="scss">
  @import "../../static/base/variable";

  @import "../../static/base/mixins/border-onepx";


  .category {
    background-color: #fff;
  }

  /* search prolist */
  .inp_border {
    display: inline-block;
    border: solid #b2b2b2 1px;
    position: relative;
  }

  .search_inp_wrap {
    height: 30px;
    background: #fafafa;
    border-bottom: solid #d8d8d8 1px;
    padding: 0.1rem 0.2rem;
    .inp_border {
      width: 100%;
      background: #fff;
      border-color: #d8d8d8;
      border-radius: 6px;
    }
  }

  .search_type_wrap {
    box-sizing: border-box;
    width: 100%;
    height: 0.82rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
  }

  .inp_search {
    width: calc(100% - 0.16rem);
    height: 0.56rem;
    line-height: 0.56rem;
    border-radius: 0.12rem;
    padding: 0 0 0 0.1rem;
    border: none;
    outline: none;
  }

  .btn_search_top {
    right: 0.3rem;
  }

  $listpt:0.92rem;
  $leftlistW:2rem;
  /*  list start   */
  .type_item_wrap {
    float: left;
    padding-top: $listpt;
    width: $leftlistW;
    position: relative;

    &:after{
      @include set-right-line()
    }
    .btn_pro_type{
      height:1rem;
      line-height:1rem;
      position: relative;
      text-align: center;
      &:after{
        @include set-bottom-line()
      }
    }


  }

  .pro_type_wrap {
    padding-left:$leftlistW;
    padding-top: $listpt;
    ul {
      display: flex;
      flex-flow: wrap;
      justify-content: space-between;
    }

  }

  .btn_type_item {
    flex: 1;
    text-align: center;
    img {
      display: inline-block;
      width: 1.7rem;
      height: 1.7rem;

    }
  }

  /*  list end   */


</style>
<script>

  export default{
    data(){
      return {
        msg: 'hello vue'
      }
    }
  }
</script>
