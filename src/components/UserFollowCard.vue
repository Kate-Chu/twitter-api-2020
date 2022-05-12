<template>
  <div class="follow__card">
    <div class="follow__card__item">
      <slot name="avatar">
        <img src="../assets/static/images/noImage@2x.png" alt="">
      </slot>
    </div>
    <div class="follow__card__item">
      <div class="account">
        <p class="name"><slot name="name"></slot></p>
        <slot name="btn"></slot>
      </div>
      <p class="text">
        <slot name="text" ></slot>
      </p>    
    </div>    
  </div>
  
</template>
<script>

export default {
  
  
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/_basic.scss";
   .follow__card{
    display: flex;
    max-height:168px;
    padding: 16px;
    border-bottom: 1px solid $border-grey;
    .avatar{
        width: 50px;
        height: 50px;
    }
    &__item:nth-child(2){
      padding-left: 10px;
    }
    &__item{
      line-height:26px;
      
      .account{
        display: flex;
        align-items: center;
        vertical-align: sub;
        padding-bottom: 10px;
        margin-top: 10px;
        
        .name{
          @extend %tweet-name; 
          margin-right: 8px;        
        }
      }
    }
  }
</style>