<template>
  <main id="popular">
    <h1>跟隨誰</h1>
    <div class="popular__list">
      <div class="popular__list__item">
        <img src="./../assets/static/images/noimage@2x.png" alt="">
        <div class="item-account">
          <p class="name">Pizza Hut</p>
          <small class="id">@pizzahut</small>
        </div>
        <button class="following">正在跟隨</button>
        <button class="follow">跟隨</button>
      </div>    
    </div> 
  </main>
</template>
<style lang="scss">
  @import "../assets/scss/_basic.scss";
  main{
    width:273px;
    height:731px;
    background: #FAFAFB;
    border-radius: 16px;
    h1{
      border-bottom: 1px solid #E6ECF0;
      padding: 24px;
    }
    .popular__list__item{   
      display: flex;
      padding: 1rem;
      
    } 
  }

</style>