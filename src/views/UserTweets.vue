<template>
  <div class="user-tweet scrollbar">
     <UserTweetCard 
      v-for="tweet in tweets"
      :key="tweet.id"
      >
      <template v-slot:avatar>
        <img class="avatar" :src="tweet.img" alt="">
      </template>
       <template v-slot:name>
         {{tweet.name}}
      </template>
       <template v-slot:id>
         {{tweet.account}}
      </template>
       <template v-slot:post-time>
         {{tweet.createTime}}
      </template>
       <template v-slot:text>
         {{tweet.text}}
         <div class="icons">
        <div class="icon-wrapper">
          <img src="../assets/static/images/reply@2x.png" alt="">
          <p class="count">{{tweet.replyNum}}</p>
        </div>
        <div class="icon-wrapper">
          <img src="../assets/static/images/like@2x.png" alt="">
          <p class="count">{{tweet.likeNum}}</p>
        </div>     
      </div>
      </template>
      
    </UserTweetCard>  
  </div>
  
</template>
<script>
import UserTweetCard from '../components/UserTweetCard.vue'
export default {
  name: 'UserTweets',
  components:{
    UserTweetCard
  },
  data(){
    return{
      tweets:[
         {
           id: 1,
           name: 'John Doe',
           img: require('../assets/static/images/noImage@2x.png'),
           account: '@johndoe',
           text:'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English.',
           likeNum: 50,
           replyNum: 30,
           createTime: 3,
         },
          {
           id: 1,
           name: 'John Doe',
           img: require('../assets/static/images/noImage@2x.png'),
           account: '@johndoe',
           text:'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English.',
           likeNum: 50,
           replyNum: 30,
           createTime: 3,           
         }
       ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/_basic.scss";
.user-tweet{
  height: 100vh;
  overflow-y: scroll;
}

.scrollbar {
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 1px #C1C1C1; 
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #C1C1C1;
  }
}
</style>