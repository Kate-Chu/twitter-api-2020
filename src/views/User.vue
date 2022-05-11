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
        <div class="nav-container">       
        <NavTab v-for="item in navList" :key="item.id">
          <template v-slot:nav-item> 
            <router-link
              :to="item.path"
            >
            <p>{{item.title}}</p> 
            </router-link>         
          </template>
        </NavTab>
        </div>
        <router-view/>
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
  import NavTab from './../components/NavTab.vue'
  export default {
    name: 'User',
    components:{
      Popular,
      Sidebar,
      UserCard,
      NavTab
    },
    data(){
      return {
        navList:[
          { id: 1,
            title: '推文',
            path: '/users/:id/tweets'
          },
          { 
            id: 2,
            title: '回覆',
            path: '/users/:id/tweets/replies'
          },
           { 
            id: 3,
            title: '喜歡的內容',
            path: '/users/:id/tweets/likes'
          }
        ]
      }
    }      
  }
</script>
<style lang="scss" scoped>
 @import "../assets/scss/_basic.scss";
  .content-container{
    padding:0;
    border: 1px solid $border-grey;   
  }
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
  .nav-container{
    display: flex;
    border-bottom: 1px solid $border-grey;
  }
</style>