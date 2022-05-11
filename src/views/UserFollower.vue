<template>
  <div class="follower-container">
    <UserFollowCard
      v-for="user in users"
      :key="user.id"
    >
       <template v-slot:avatar>
        <img class="avatar" :src="user.img" alt="">
      </template>
       <template v-slot:name>
         {{user.name}}
      </template>
       <template v-slot:id>
         {{user.account}}
      </template>
       <template v-slot:btn>
        <div class="btn-group">
          <button v-show="!user.isFollowing" class="follow">跟隨</button>
          <button v-show="user.isFollowing" class="following">正在跟隨</button>
        </div>       
      </template>
       <template v-slot:text>
         {{user.text}}
      </template>
    </UserFollowCard>
  </div>
  
</template>
<script>
import UserFollowCard from '../components/UserFollowCard.vue'
export default {
  components:{
    UserFollowCard
  },
  data(){
    return{
      users:[
         {
           id: 1,
           name: 'John Doe',
           img: require('../assets/static/images/noImage@2x.png'),
           text:'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English.',
           isFollowing: false
         },
          {
           id: 2,
           name: 'John Doe',
           img: require('../assets/static/images/noImage@2x.png'),
           text:'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English.',
           isFollowing: true   
         }
       ]
    }
  }
}
</script>
<style lang="scss" scoped>
  @import "../assets/scss/_basic.scss";
  .follower-container{
    position: relative;
  }
  .btn-group{
    position: absolute;
    right: 30px;
    .follow{
      @extend %follow;
    }
    .following{
      @extend %following;
    }
    
  }
</style>