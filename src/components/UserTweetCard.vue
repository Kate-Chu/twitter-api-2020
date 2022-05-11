<template>
  <div class="tweet__card">
    <div class="tweet__card__item">
      <slot name="avatar">
      <img src="" alt="">
      </slot>
    </div>
    <div class="tweet__card__item">
      <div class="account">
        <p class="name"><slot name="name" ></slot></p>
        <p class="id"><slot name="id" ></slot></p>
        <p class="post-time">・<slot name="post-time" ></slot>小時</p>
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
<style lang="scss">
@import "../assets/scss/_basic.scss";
  .tweet__card{
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
        
        .name{
          @extend %tweet-name; 
          margin-right: 8px;        
        }
        .id, .post-time{
          @extend %tweet-account;
          font-size: 14px;
        }
      }
      .icons{
        display: flex;
        width: 100px;
        justify-content: space-between;
        img{
          width: 14px;
          height: 14px;
        }
        &.icon-wrapper:nth-child(2){
            margin-left: 40px;
        }
        .icon-wrapper{
          display: flex;
          align-items: center;
          width: 2rem;
          font-size: 14px;
          color: $font-small;
          font-weight: 600;
          .count{
            margin-left: 9px;
          }
          
        }
      }

    }
  }
</style>