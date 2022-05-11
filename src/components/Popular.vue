<template>
  <div id="popular">
    <h1>跟隨誰</h1>
    <div class="popular__list">
      <div class="popular__list__item">
        <img src="../assets/static/images/noImage@2x.png" alt="">
        <div class="item-account">
          <p class="name">Pizza Hut</p>
          <p class="id">@pizzahut</p>
        </div>
        <button class="following">正在跟隨</button>
        <button class="follow">跟隨</button>
      </div>
      <div class="popular__list__item">
        <img src="../assets/static/images/noImage@2x.png" alt="">
        <div class="item-account">
          <p class="name">McDonaldlover</p>
          <p class="id">@McDonaldlover</p>
        </div>
        <button class="following">正在跟隨</button>
        <button class="follow">跟隨</button>
      </div>    
    </div> 
  </div>
</template>
<style lang="scss" scoped>
  @import "../assets/scss/_basic.scss";
  #popular{
    width:100%;
    margin-top: 13px;
    max-width:273px;
    height:731px;
    background: #FAFAFB;
    border-radius: 16px;
    img{
      width:50px;
    }
    h1{
      border-bottom: 1px solid #E6ECF0;
      padding: 24px;
      font-family: $main-font;
    }
    .popular__list__item{   
      display: flex;
      padding: 1rem; 
      .item-account{
        flex: 1;
        width: 74px;
        padding-right: 2px;
        margin-left: 8px;       
        font-family: $main-font;        
        .name{
          color: $font-black;
          font-weight:700; 
          @extend %single-ellipsis;   
        }
        .id{
          color: $id-grey;
          font-weight: 500;
          font-size: 14px;
          @extend %single-ellipsis;  
        }
      } 
    } 
    button{
      height: 40px;
    }
    .following{
      @extend %following;         
    }
    .follow{
      @extend %follow;
      display: none;
      margin-left:28px;
    }
  }

</style>