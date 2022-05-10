<template>
  <div class="container">
    <form class="regist-form" action="">

      <div class="logo"> 
        <img class="regist-form__logo-img" src="../assets/static/images/logo@2x.jpg" alt="">
      </div>

      <div class="title">
        <h1 class="regist-form__title">建立你的帳號</h1>
      </div>

      <div class="regist-form__div regist-form__input-account">
        <label for="">帳號</label>
        <input type="text" placeholder="請輸入帳號">
      </div>

      <div class="regist-form__div regist-form__input-name"> 
        <label for="">名稱</label>
        <input type="text" placeholder="請輸入使用者名稱">
      </div>

      <div class="regist-form__div regist-form__input-email">
        <label for="">Email</label>
        <input type="text" placeholder="請輸入 Email">
      </div>

      <div class="regist-form__div regist-form__input-password">
        <label for="">密碼</label>
        <input type="text" placeholder="請設定密碼">
      </div>

      <div class="regist-form__div regist-form__input-password-check">
        <label for="">密碼確認</label>
        <input type="text" placeholder="請再次輸入密碼">
      </div>

      <button
        class="btn btn-regist"
        type="submit"
        :disabled="isProcessing"
      >
        註冊
      </button>

      <div class="cancel-regist">
        <p>
          <router-link
            class="cancel"
            to="/signin"
          > 
            取消 
          </router-link>
        </p>
      </div>

    </form>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/basic.scss';

.regist-form {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.logo img {
  width: 50px;
  height: 50px;
}
.title h1 {
  @extend %heading;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-top: 24px;
  margin-bottom: 8px;
}
.regist-form__div {
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
    color: $form-input;
  }
  &::after {
    content: '';
    @extend %input-bottom;
  }
}
.btn {
  @extend %button-orange;
  width: 356px;
  height: 46px;
  margin-top: 40px;
  margin-bottom: 22px;
  font-size: 20px;
  line-height: 30px;

}
.cancel {
  @extend %button-white;
  display: block;
  width: 356px;
  height: 46px;
  font-size: 20px;
  line-height: 46px;
  text-decoration: none;
}
</style>