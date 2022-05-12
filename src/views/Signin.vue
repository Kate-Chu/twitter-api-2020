<template>
  <div class="container">
    <form 
      class="signin-form"
      @submit.prevent.stop="handleSubmit"
    >
      <div class="logo">
        <img
          class="signin-form__logo-img"
          src="../assets/static/images/logo@2x.jpg"
          alt=""
        />
      </div>

      <div class="title">
        <h1 
          v-if="frontStage"
          class="signin-form__title"
        >
          登入 Alphitter
        </h1>
        <h1 
          v-else
          class="signin-form__title"
        >
          後台登入
        </h1>
      </div>

      <div class="signin-form__div signin-form__input-account">
        <label for="">帳號</label>
        <input 
          id="account" v-model="account" name="account" 
          type="text" placeholder="請輸入帳號" 
          required autofocus
        />
      </div>

      <div class="signin-form__div signin-form__input-password">
        <label for="">密碼</label>
        <input 
          id="password" v-model="password" name="password"
          type="password" 
          placeholder="請輸入密碼" 
        />
      </div>

      <button class="btn btn-signin" type="submit" :disabled="isProcessing">
        登入
      </button>

      <div 
        v-if="frontStage"
        class="cancel-signin"
      >
        <p>
          <router-link class="regist" to="/regist"> 註冊 </router-link>
        </p>
        <p>・</p>
        <p 
          class="backstage-signin" 
          @click="toggleRoute"
        >
          後台登入
        </p>
      </div>
      <div 
        v-else
        class="cancel-signin"
      >
        <p
          class="frontstage-signin" 
          @click="toggleRoute"
        >
          前台登入
        </p>
      </div>
    </form>
  </div>
</template>

<script>
import authorizationAPI from './../apis/authorization'
import {Toast} from './../utils/helpers'

export default {
  name: 'Signin',
  data () {
    return {
      account: '',
      password: '',
      isProcessing: false,
      frontStage: true,
    }
  },
  // beforeRouteUpdate(to, from, next) {
  //   console.log({to, from})
  //   next()
  // },
  methods: {
    async handleSubmit() {
      try {
        this.isProcessing = true

        if ( !this.account || !this.password ) {
          Toast.fire({
            icon: 'warning',
            title: '請輸入帳密'
          })
          return
        } 

        const { data } = await authorizationAPI.signIn({
          account: this.account,
          password: this.password
        })

        console.log(data)
        
        if ( data.status !== 'success' ) {
          throw new Error(data.message)
        }

        // 存 token
        localStorage.setItem('token', data.token)
        
        // 登入成功
        this.$router.push('/twitter')
      } catch (error) {
        // 按鈕可以重複送出
        this.isProcessing = false

        // 將密碼欄位清空
        this.password = ''

        // 給使用者的提示
        Toast.fire({
          icon: 'warning',
          title: '請確認您輸入了正確的帳號密碼'
        })
        console.log('Error', error)
      }
    },
    toggleRoute () {
      const route = this.$route.path
      if (route === '/signin') {
        this.frontStage = true
        this.$router.push('/admin')
      } else if (route === '/admin') {
        this.frontStage = false
        this.$router.push('/signin')
      }
    }
  }
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
  .regist,
  .backstage-signin,
  .frontstage-signin {
    color: $form-link-blue;
    font-size: 16px;
    font-weight: 400;
    text-decoration: none;
    padding: 6px 12px;
  }
}
</style>