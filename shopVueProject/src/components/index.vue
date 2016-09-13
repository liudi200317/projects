<template>
  <div class='main fixed_pad_bot'>
    <header-component></header-component>

    <article class="img_banner">
      <img src="../assets/images/img_banner_01.jpg" alt="">
    </article>

    <section class="btn_type_wrap">
      <ul class="btn_type_ul">

        <li class="type_li" v-for="item in classArr">
          <a class="btn_type" v-link="{ name: 'categoryDetail' ,params:{id:item.id}}">
            {{item.title}}
            <img class="img_type" alt="pic" :src="item.imgurl"/>
          </a>
        </li>

        <li class="type_li"><a class="btn_type" v-link="{ name: 'categoryDetail' ,params:{id:002}}">男装
          <img class="img_type" src="../assets/images/img_pro_type_02.jpg" alt=""/></a></li>
        <!--<li class="type_li"><a class="btn_type" href="">服饰鞋包-->
          <!--<img class="img_type"-->
                                                                 <!--src="../assets/images/img_pro_type_03.jpg"-->
                                                                 <!--alt=""/></a></li>-->
        <!--<li class="type_li"><a class="btn_type" href="">数码-->
          <!--<img class="img_type"-->
                                                               <!--src="../assets/images/img_pro_type_04.jpg"-->
                                                               <!--alt=""/></a></li>-->
        <!--<li class="type_li"><a class="btn_type" href="">母婴-->
          <!--<img class="img_type"-->
                                                               <!--src="../assets/images/img_pro_type_05.jpg"-->
                                                               <!--alt=""/></a></li>-->
        <!--<li class="type_li"><a class="btn_type" href="">美妆-->
          <!--<img class="img_type"-->
                                                               <!--src="../assets/images/img_pro_type_06.jpg"-->
                                                               <!--alt=""/></a></li>-->
        <!--<li class="type_li"><a class="btn_type" href="">家纺-->
          <!--<img class="img_type"-->
                                                               <!--src="../assets/images/img_pro_type_07.jpg"-->
                                                               <!--alt=""/></a></li>-->
        <!--<li class="type_li"><a class="btn_type skin_color" href="">更多<img class="img_type"-->
                                                                                           <!--src="../assets/images/img_pro_type_08.jpg"-->
                                                                                           <!--alt=""/></a></li>-->
      </ul>
    </section>

    <section class="sec_wrap">
      <h3 class="btn_title_wrap">
        秒杀
            <span class="time_count_wrap"><em class="time">03</em>:<em class="time">20</em>:<em
              class="time">59</em></span>
        <a href="#" class="title_more">更多</a>
      </h3>
      <div class="img_seckill_div">
        <img src="../assets/images/img_home_seckill.jpg" alt="秒杀" title="秒杀"/>
      </div>
    </section>

    <section class="recommend_wrap">
      <h3 class="btn_title_wrap">
        推荐商品
        <a href="#" class="title_more">更多</a>
      </h3>
      <div class="recommend_pro_wrap">
        <ul class="recommend_pro_ul">
          <li>
            <a class="btn_recommend recommend_more" href="">
              <span class="recommend_title c_purple">1裂帛白色梭织无袖衬衫衬衫</span>
              <span class="recommend_info">海品猫春夏女装爆款</span>
              <em class="recommend_price">￥159.00</em>
              <img class="img_recommend_wide"
                   src="../assets/images/img_recommend_03.jpg"
                   alt="裂帛白色梭织无袖衬衫衬衫"
                   title="裂帛白色梭织无袖衬衫衬衫"
              />
            </a>
          </li>
        </ul>
        <ul class="recommend_pro_ul">
          <li>
            <a class="btn_recommend" href="#">
              <img class="img_recommend"
                   src="../assets/images/img_recommend_01.jpg"
                   alt="三星SMART TV"
                   title="三星SMART TV"
              />
              <span class="recommend_title c_pink">三星SMART TV</span>
              <span class="recommend_info">50寸4K进口屏</span>
              <em class="recommend_price">￥899.00</em>
            </a>
          </li>
          <li>
            <a class="btn_recommend" href="">
              <img class="img_recommend"
                   src="../assets/images/img_recommend_02.jpg"
                   alt="GF FERRE 单肩包"
                   title="GF FERRE 单肩包"
              />
              <span class="recommend_title c_yellow">GF FERRE 单肩包</span>
              <span class="recommend_info">橙黄意进口牛皮</span>
              <em class="recommend_price">￥1999.00</em>
            </a>
          </li>
        </ul>
      </div>
    </section>

  </div>
</template>
<style scoped lang="scss">

  @import "../../static/base/variable";
  @import "../../static/base/mixins/clearfix";
  @import "../../static/base/mixins/border-onepx";
  @import "../../static/base/mixins/text-ellipsis";
  @import "../../static/base/mixins/margin";

  .img_banner {
    height: 2.6rem;
    overflow: hidden;
    img {
      height: 100%;
    }
  }

  /* type img list start */
  .btn_type_wrap {

    @extend %clearfix;
    background-color: #fff;
    .type_li {
      display: inline-block;
      width: 25%;
      float: left;
      position: relative;
    }

    .type_li:after {
      @include set-left-line;
    }

    .type_li:before {
      @include set-bottom-line;
    }

    .type_li:nth-child(4n+1):after {
      border-left: none;
    }

  }

  .btn_type {
    display: block;
    margin: 0.3rem 0 0 0.3rem;
    font-size: 14px;

  }

  .img_type {
    display: block;
    width: 1.2rem;
    height: 1.2rem;
    margin: 0.1rem auto;
    padding: 0 0.18rem 0 0;
  }

  /* type img list end */

  .sec_wrap {
    background-color: #fff;
    margin:0.1rem 0 0 0;
    @extend %mtb;
    position: relative;
    &:after {
      @include set-bottom-line();
    }
  }

  .btn_title_wrap {

    @extend %color-01;
    overflow:hidden;
    padding: 0.1rem 0.15rem;
    font-size:18px;
    position: relative;
    &:after {
      @include set-bottom-line();
    }
  }

  .img_seckill_div{
    overflow: hidden;
    height: 2.8rem;
    img{
      height:100%;
      display: block;
    }
  }

  .title_more {
    display: inline-block;
    color: #848484;
    font-size: 12px;
    margin: 0.04rem 0 0;
    float: right;
    font-weight: lighter;

  }

  .time_count_wrap {
    color: #333;
    font-weight: lighter;
  }

  .time {
    display: inline-block;
    width: 0.44rem;
    height: 0.44rem;
    line-height: 0.44rem;
    font-size: 12px;
    border: solid #c5c5c5 1px;
    border-radius: 0.08rem;
    text-align: center;
    margin: 0 0.08rem;
    font-style: normal;

  }


  /* recommend pro */

  .recommend_wrap{
    background-color: #fff;
    margin-top:0.1rem;
  }

  .recommend_pro_wrap {
    background: $colorBg;
    border-bottom: solid #e8e8e8 1px;
    overflow: hidden;
  }

  .recommend_pro_ul {
    display: inline-block;
    width: 49.8%;
    float: left;
    position: relative;
    &:after {
      @include set-left-line();
    }

  }

  .recommend_pro_ul:first-child:after {
    display: none;
  }

  .recommend_pro_ul li:nth-child(2) {
    position: relative;
    &:after {
      @include set-top-line();
    }
  }

  .recommend_pro_wrap .recommend_pro_ul:first-child li {
    border-bottom: none;
  }

  .btn_recommend {
    display: block;
    padding: 0.18rem;
  }


  .img_recommend {
    width: 0.88rem;
    height: 0.88rem;
    margin: 0.04rem 0 0;
    float: right;
  }

  %text-ellipsis {
    @include text-ellipsis();
  }

  .recommend_title {
    display: block;
    font-size:14px;
    @extend %text-ellipsis;

  }

  .recommend_info {
    display: block;
    color: $font-lignt-color;
    font-size: 12px;
    @extend %text-ellipsis;
  }

  .recommend_price {
    display: block;
  }

  .recommend_more {
    padding: 0.20rem 0.18rem 0.2rem 0.24rem;
  }

  .img_recommend_wide {
    width: 1.9rem;
    height: 1.9rem;
    margin: -0.18rem 0 0;
    float: right;
  }


  .c_yellow{
    @extend %color-03;
  }
  .c_pink{
    @extend %color-01;

  }
  .c_purple{
    @extend %color-02;

  }

</style>
<script>
  import HeaderComponent from './../components/header.vue'

  export default{

    ready() {
      this.getMsg();
    },

    data(){

      return {
        msg: 'hello vue',
        imgurl: require('../assets/images/img_pro_type_01.jpg'),
        classArr:[]
      }

    },
    components: {
      HeaderComponent
    },
    methods:{
        getMsg(){

          this.$http.get('../../static/testData/file1.json')
            .then(function(ret) {
              var res = JSON.parse(ret.body).data;
              this.msg = res.msg;
              this.classArr = res.classification;
//              console.log(res.classification[0].title);
            },function(err) {
              console.log(err);
            })

        }
    }

  }
</script>
