<template>
    <div class='main'>
     <h2 v-text="msg"></h2>
    </div>
</template>
<style scoped>
    .main{
        background-color:#fda83a;
    }
</style>
<script>

    export default{
      route: {
        data (transition) {
          var userId = transition.to.params.id;
          console.log("userId:",userId);

        }
      },
        data(){
            return{
                msg:'category detail ...'
            }
        }
    }
</script>
