<template>
  <div class="container">
    <!-- TODO: 待加入 Sidebar.vue -->
    <div>Sidebar</div>
    <form class="setting-form" action="">
      <div class="title">
        <h1 class="setting-form__title">帳戶設定</h1>
      </div>

      <div class="setting-form__div setting-form__input-account">
        <label for="">帳號</label>
        <input type="text" name="account" placeholder="請輸入帳號" />
      </div>

      <div class="setting-form__div setting-form__input-name">
        <label for="">名稱</label>
        <input type="text" name="name" placeholder="請輸入使用者名稱" />
      </div>

      <div class="setting-form__div setting-form__input-email">
        <label for="">Email</label>
        <input type="email" name="email" placeholder="請輸入 Email" />
      </div>

      <div class="setting-form__div setting-form__input-password">
        <label for="">密碼</label>
        <input type="password" name="password" placeholder="請設定密碼" />
      </div>

      <div class="setting-form__div setting-form__input-password-check">
        <label for="">密碼再確認</label>
        <input
          type="password"
          name="passwordCheck"
          placeholder="請再次輸入密碼"
        />
      </div>

      <button class="btn btn-setting" type="submit" :disabled="isProcessing">
        儲存
      </button>
    </form>
    <div></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/scss/basic.scss";

.container {
  display: grid;
  grid-template-columns: 178px 641px auto;
  grid-template-rows: 100vh;
  grid-gap: 24px;
}
.setting-form {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  border-left: 1px solid $border-grey;
  border-right: 1px solid $border-grey;
}
.title {
  width: 100%;
  border-bottom: 1px solid $border-grey;
  h1 {
    font-size: 24px;
    line-height: 26px;
    font-weight: 700;
    color: #171725;
    margin: 24px auto 24px 25px;
  }
}
.setting-form__div {
  @extend %input-block;
  width: 593px;
  display: flex;
  flex-flow: column nowrap;
  margin-left: 24px;
  margin-right: 24px;
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
    width: 100%;
  }
}
.setting-form__input-account {
  margin-top: 24px;
}
.btn {
  @extend %button-orange;
  width: 88px;
  height: 46px;
  margin: 40px 24px auto auto;
  font-size: 20px;
  line-height: 30px;
}
</style>