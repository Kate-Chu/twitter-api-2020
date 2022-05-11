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
          <div class="group-item">
            <img src="../assets/static/images/msg@2x.png" alt="">          
          </div>
          <div class="group-item">
            <img class="notify" src="../assets/static/images/notfi@2x.png" alt="">
            <img class="notified" src="../assets/static/images/notfied@2x.png" alt="">
          </div>
          <div class="group-item follow">
            <button class="follow">跟隨</button>
          </div>
          <div class="group-item">
            <button class="following">正在跟隨</button>
          </div>
          <div class="group-item">
            <button class="edit">編輯個人資料</button>
          </div>
        </div>
      </div>
      <div class="user__container__info">
        <p class="name">John Doe</p>
        <p class="id">@johndoe</p>
        <p class="intro">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        <div class="user__follow">
          <p class="user__follow__item following">
            <span class="num">30</span>個<span class="status">跟隨中</span>
          </p>
          <p class="user__follow__item follower">
            <span class="num">30</span>個<span class="status">跟隨者</span>
          </p>
        </div>
      </div>
    </div>        
  </div> 
</template>
<style lang="scss" scoped>
  @import "../assets/scss/_basic.scss";
  #user{
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
      }
      .notify {
          display: none;
        }
      .follow {
        display: none;
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
          display: none;
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
      }

    }
  }
</style>