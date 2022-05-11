<template>
  <div class="container">
    <form class="signin-form" action="">
      <div class="logo">
        <img
          class="signin-form__logo-img"
          src="../assets/static/images/logo@2x.jpg"
          alt=""
        />
      </div>

      <div class="title">
        <h1 class="signin-form__title">後台登入</h1>
      </div>

      <div class="signin-form__div signin-form__input-account">
        <label for="">帳號</label>
        <input type="text" placeholder="請輸入帳號" />
      </div>

      <div class="signin-form__div signin-form__input-password">
        <label for="">密碼</label>
        <input type="text" placeholder="請輸入密碼" />
      </div>

      <button class="btn btn-signin" type="submit" :disabled="isProcessing">
        登入
      </button>

      <div class="cancel-signin">
        <p>
          <router-link class="frontstage-signin" to="/signin">
            前台登入
          </router-link>
        </p>
      </div>
    </form>
    
  </div>
</template>

<script>
export default {
  name: 'AdminSignin',
  data () {
    return {
      isProcessing: false
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/basic.scss";

.signin-form {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.logo img {
  width: 50px;
  height: 50px;
  margin-top: 69px;
}
.title h1 {
  @extend %heading;
  margin-top: 24px;
  margin-bottom: 8px;
}
.signin-form__div {
  @extend %input-block;
  display: flex;
  flex-flow: column nowrap;
  label {
    @extend %form-label;
  }
  input {
    @extend %form-input;
    border: none;
    background: $form-input-grey;
  }
  input::placeholder {
    color: $form-input-placeholder;
  }
  &::after {
    content: "";
    @extend %input-bottom;
  }
}
.btn {
  @extend %button-orange;
  width: 356px;
  height: 46px;
  margin-top: 40px;
  margin-bottom: 16px;
  font-size: 20px;
  line-height: 30px;
}
.cancel-signin {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 356px;
  height: 36px;
  .frontstage-signin {
    color: $form-link-blue;
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
    padding: 6px 12px;
  }
}
</style>