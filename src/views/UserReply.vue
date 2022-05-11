<template>
  <div class="user-reply scrollbar">
    <UserTweetCard 
      v-for="reply in replies"
      :key="reply.id"
      >
      <template v-slot:avatar>
        <img class="avatar" :src="reply.img" alt="">
      </template>
       <template v-slot:name>
         {{reply.name}}
      </template>
       <template v-slot:id>
         {{reply.account}}
      </template>
       <template v-slot:post-time>
         {{reply.createTime}}
      </template>
       <template v-slot:text>
         <div class="reply-tag">回覆 <span>@{{reply.to}}</span></div>
         {{reply.text}}
      </template>   
    </UserTweetCard>  
  </div>
</template>
<script>
import UserTweetCard from '../components/UserTweetCard.vue'
export default {
  components:{
    UserTweetCard
  },
  data(){
    return{
       replies:[
         {
           id: 1,
           name: 'John Doe',
           img: require('../assets/static/images/noImage@2x.png'),
           account: '@johndoe',
           text:'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to.',
           likeNum: 50,
           replyNum: 30,
           createTime: 3,
           to: 'apple' 
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
           to: 'apple' 
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
           to: 'apple' 
         }
       ]

    
    }
   
  }
}
</script>
<style lang="scss" scoped>
@import "../assets/scss/_basic.scss";
  .reply-tag{
    @extend %tweet-account;
    margin-bottom: 8px;
    span{
      color: $orange;
      font-family: $number-font;
    }
  }
</style>
