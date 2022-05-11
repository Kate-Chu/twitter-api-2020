<template>
  <div class="user-like scrollbar">
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
         {{reply.text}}
         <div class="icons">
        <div class="icon-wrapper">
          <slot name="reply-icon" icon="reply-icon">
          <img src="../assets/static/images/reply@2x.png" alt="">
          </slot>
          <p class="count"><slot name="reply-count">13</slot></p>
        </div>
        <div class="icon-wrapper">
          <slot name="like-icon" icon="like-icon">
          <img src="../assets/static/images/like@2x.png" alt="">
          </slot>
          <p class="count"><slot name="like-count">76</slot></p>
        </div>     
      </div>
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
