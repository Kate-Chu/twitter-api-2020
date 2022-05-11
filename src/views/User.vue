<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-2 sidebar">
      <Sidebar />
      </div>
      <div class="col-7 content-container">
          <div class="title">
            <img class="title__item " src="../assets/static/images/leftArrow@2x.png" alt="">
            <div class= "title__item user">
              <p class= "name">Jone Doe</p>
              <p class= "tweet-num">45推文</p>
            </div>
           
          </div>     
        <UserCard />
      </div>
      <div class="col-3  popular-users">
        <Popular />
      </div>
      </div>      
    </div>  
  </main>
</template>
<script>
  import Popular from '../components/Popular.vue'
  import Sidebar from '../components/Sidebar.vue'
  import UserCard from '../components/UserCard.vue'
  export default {
    name: 'User',
    components:{
      Popular,
      Sidebar,
      UserCard
    }      
  }
</script>
<style lang="scss" scoped>
 @import "../assets/scss/_basic.scss";
  .title{
    padding-left: 28px;
    height: 75px;
    display: flex;
    align-items: center;
    img{
      width: 17px;
      height: 14px;
    }
    .user{
      margin-left: 19px;
      .name{
        @extend %tweet-name;
        font-size: 18px;
      }
      .tweet-num{
         @extend %tweet-account;
         font-weight: 500;
         font-size:13px;
         line-height: 18px;
         
      }
    }
  }

</style>