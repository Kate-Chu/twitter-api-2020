<template>
  <div class="modal">
    <form class="form" action="submit">
      <div class="top__bar">
        <img
          @click="closeModal"
          class="icon" src="../assets/static/images/orangeClose@2x.png" alt="">
        <p class="top__bar__title">編輯個人資料</p>
        <button class="submit" type="submit">儲存</button>
      </div>
      <div class="user__image">
        <div class="user__image__form-item item-background">
          <div class="background-wrapper">
            <img src="https://picsum.photos/700/200" alt="" class="background">
          </div>
          <div class="label-group">
            <label for="background-update">
              <img class="icon" src="../assets/static/images/update@2x.png" alt="">
            </label>
            <label>
              <img class="icon" src="../assets/static/images/whiteClose@2x.png" alt="">
            </label>
          </div>
          <input type="file" id="background-update" name="backgroundImage" accept="image/*">
        </div>
        <div class="user__image__form-item item__avatar">
          <div class="avatar-wrapper">
            <img src="https://picsum.photos/100" alt="" class="avatar">
          </div>
          <label class="label-avatar" for="avatar-update"> 
            <img class="icon" src="../assets/static/images/update@2x.png" alt="">
          </label>
          <input type="file" id="avatar-update" name="avatar" accept="image/*">
        </div>
      </div>
      <div class="user__info">
        <div class="info-item">
          <label for="name">名稱</label>
          <input class="name" name="name" type="text" maxlength="50"/>
          <p class="length">8/50</p>
        </div>
        <div class="info-item">
          <label for="intro">自我介紹</label>
          <textarea name="intro" class="intro" cols="30" rows="10" maxlength="160"></textarea>
          <p class="length">6/160</p>
        </div>        
      </div>     
    </form>
  </div>
</template>
<script>
export default {
  data(){
    return{
      
    }
  },
  methods:{
    closeModal(){
      this.$emit('close-modal')
    }
  }
}
</script>
<style lang="scss" scoped>
 @import "../assets/scss/_basic.scss";
  .icon{
    cursor: pointer;
    width: 20px;
    height: 20px;
    padding:0;
  }
  .modal {
  position: fixed;
  z-index: 1; 
  padding-top: 100px; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0, 0, 0); 
  background-color: rgba(0, 0, 0, 0.4);
  }
  .form {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    opacity: 1;
    width: 610px;
    height: 590px;
    background: white;
    border-radius: 14px;
    label {
      cursor: pointer;
    }
    .top__bar {
      padding-left: 15px;
      position: relative;
      height: 57px;
      display: flex;
      align-items: center;
      &__title{
        padding-left: 30px;
        font-weight: 700;
        font-size: 18px;
      }
      button {
        @extend %following;
        width: 64px;
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translatey(-50%);
      }
    }
    .user__image {
      position: relative;
      input {
          display: none;
      }
      .label-group {
        display: flex;
        label {
          margin: 30px;
        }
        
      }
      .label-avatar,
      .label-group {
        position: absolute;
        right: 50%;
        top: 50%;
        transform: translate(50%, -50%);
      }
      &__form-item {
        position: relative;
      }
      .background-wrapper {
        width: 100%;
        img {
          width: 100%;
        }
      }
      .item__avatar {
        position: absolute;
        margin-left: 1rem;
        bottom: -70px;
        .avatar-wrapper {
          width: 140px;
          height: 140px;
          border: 5px solid white;
          border-radius: 50%;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
        }
      }
      .background-wrapper, .avatar-wrapper{
        img{
          filter: brightness(80%);
        }
      }
    }
  }
  .user__info{
    padding: 80px 16px 16px 16px;
    height: 353px;   
    .info-item{
      position: relative;
      .length{
          position: absolute;
          font-size: 12px;
          color: $font-small;
          bottom: 10px;
          right: 0;
        }
      label{
        cursor: none;
        position: absolute;
        @extend %form-label;
      }
      input, textarea{
        padding: 24px 0 0 16px;
        border-bottom: 1px solid;
        width: 100%;
        margin-bottom: 32px;  
        background: $form-input-grey;
        &.name{
          height: 52px;
        }
        &.intro{
          height: 145px;
        }       
      }
    }
  }



</style>