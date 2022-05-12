<template>
  <div id="user">
    <div class="user__container">
      <div class="user__image-container">
        <div class="background-wrapper">
          <img src="https://picsum.photos/700/200" alt="" class="background">
        </div>
        <div class="avatar-wrapper">
          <img src="../assets/static/images/noImage@2x.png" alt="" class="avatar">
        </div>      
      </div>
      <div class="user__btn__group">
        <div class="user__btn__group__list">
          <template v-if="!isCurrentUser">
            <div class="group-item">
            <img src="../assets/static/images/msg@2x.png" alt="">          
            </div>
            <div class="group-item">
              <img v-if="!isSubscribe" class="notify" src="../assets/static/images/notfi@2x.png" alt="">
              <img v-else class="notified" src="../assets/static/images/notfied@2x.png" alt="">
            </div>
            <div class="group-item follow">
              <button class="follow">跟隨</button>
            </div>
            <div class="group-item">           
                <button class="following">正在跟隨</button>           
            </div>
          </template>         
          <div v-else class="group-item">
            <button 
              @click="openModal"
              class="edit">編輯個人資料</button>
          </div>
        </div>
      </div>
      <div class="user__container__info">
        <p class="name">John Doe</p>
        <p class="id">@johndoe</p>
        <p class="intro">It is a long established fact that a reader that a reader.</p>
        <div class="user__follow">
          <router-link
            to="/users/:id/follow/following"
          >
            <p class="user__follow__item following">
              <span class="num">30</span>個<span class="status">跟隨中</span>
            </p>
          </router-link>
          <router-link
            to="/users/:id/follow"
          >
            <p class="user__follow__item follower">
              <span class="num">30</span>個<span class="status">跟隨者</span>
            </p>
          </router-link>
        </div>
      </div>
    </div> 
    <template v-if="isEditing">
      <Modal
      @close-modal="closeModal"
      />
    </template>       
  </div> 
</template>
<script>
  import Modal from '../components/EditModal.vue'
  export default {
    components:{
      Modal
    },
    data(){
      return{
        isEditing: false,
        isCurrentUser: true,
        isSubscribe: false
    }
    },
    methods:{
      closeModal(){
        this.isEditing = false
      },
      openModal(){
        this.isEditing = true
      }
    }
}
</script>
<style lang="scss" scoped>
  @import "../assets/scss/_basic.scss";
  #user{
    .user__container{
      padding-bottom: 10px;
    }
    .user__image-container{
      position: relative;
      .background-wrapper{
        width: 100%;
        img{
          width: 100%;
        }
      }
      .avatar-wrapper{
        position: absolute;
        margin-left: 1rem;
        bottom: -70px;
        width: 140px;
        height: 140px;
        border: 5px solid white;
        border-radius: 50%;
        img{
          width:100%;
        }
      }
    }
    .user__btn__group{
      img{
          width:40px;
          height:40px;
        }
      &__list{
        display: flex;
        justify-content: end;
      }
      .group-item{
        padding: 1rem 0.5rem;
        cursor: pointer;
      }
      button{
        &.following{
         @extend %following;        
        }
        &.follow {
          @extend %follow;   
        }
        &.edit {
          @extend %button-white;
          width: 128px;
          height: 40px;
        }        
      }      
    }
    .user__container__info{   
      margin-left: 1rem;  
      .user__follow{
        padding-top: 8px;
        display: flex;
        @extend %tweet-text;
        .status{
          color: $font-small;
        }
        &__item{
          cursor: pointer;
          padding-right: 20px;
          .num{
            font-family: $number-font;
          }
        }
      }
      .name{
        @extend %tweet-name;
        font-size: 18px;
      }
      .id{
        @extend %tweet-account;
      }
      .intro{
        @extend %tweet-text;
        line-height: 22px;
        margin-top: 6px;
      }
    }
  }
</style>