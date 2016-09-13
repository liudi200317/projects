<template>
  <div class="select_wrap" v-bind:class="{'active':showListBox}" v-on:mouseover="showListBox = true" v-on:mouseout="showListBox = false">
    <span class=selected_text id="{{selected.id}}" v-html="selected.text"> </span><i class="ico_arrow_down"></i>
    <ul class="select_list" v-show = "showListBox" transition="opt">
      <li class="select_opt" v-for="opt in options" id="{{opt.id}}" v-on:click="selectedVal(opt)" >{{{opt.text}}} </li>
    </ul>
  </div>
</template>

<script>
export default {

  data () {
    let options = [
        {
          id:1,
          text:"<span>商店一</span>"
        },{
          id:2,
          text:"商店二"
        },{
          id:3,
          text:"商店三"
        }
      ];

    return {
      options: options,
      showListBox:false,
      selected:options[0]
    }
  },
  methods:{
    selectedVal(opt){
      this.showListBox = false;
      this.selected = opt;

    }

  }
}
</script>

<style scoped>

.select_wrap {
  /*position: relative;*/
  background-color: #fff;
  /*padding:0.2rem;*/

  font-size:12px;
  display: inline-block;

}
 .selected_text{
   /*display: block;*/
   /*width:4rem;*/
   /*border:1px solid #ccc;*/
   /*height:.8rem;*/
   /*line-height:.8rem;*/
   /*padding:0 .1rem;*/

 }

  .select_list{
    background-color: #fff;
    /*width:4.2rem;*/
    border:1px solid #ccc;
    position: absolute;
    /*top:1rem;*/
    /*left:0.2rem;*/

    width:100%;
    top:.7rem;
    left:0;
    z-index:2;

  }
.select_list > li {
  width:100%;
  line-height:.8rem;
  border-bottom:1px solid #e8e8e8;
  padding:0 .1rem;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.select_list > li:last-child {
  border-bottom:none;
}

/* 必需 下拉效果 */
.opt-transition {
  transition: all .3s ease;
  height: auto;
  overflow: hidden;
}

/* .expand-enter 定义进入的开始状态 */
/* .expand-leave 定义离开的结束状态 */
.opt-enter, .opt-leave {
  height: 0;
  opacity: 0;
}

.ico_arrow_down {
  border: 1px solid;
  border-color: #ccc #ccc transparent transparent;
  display: inline-block;
  width: 3px;
  height: 3px;
  transform: rotate(135deg) translate(-3px);
  transform-origin:50% 40%;
  transition:all .3s ;
}
  .active .ico_arrow_down{
    transform: rotate(-45deg) translate(2px) ;

  }

</style>
