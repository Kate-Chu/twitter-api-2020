<template>
  <nav id="sidebar">  
    <ul class="nav__list">
      <img class="logo" src="../assets/static/images/navLogo@2x.png" alt="">
      <template v-if="!isAdmin">
      <li 
        v-for="item in navList"
        :key="item.id"
        class="nav__list__item ">
        <div class="nav__list__item__wrapper">
          <img class="active" :src="item.iconActive" alt="">
          <img class="inactive" :src="item.iconInactive" alt="">
          <p>{{item.title}}</p>
        </div>       
      </li>
      </template>
      <template v-else>
        <li 
          v-for="item in navAdmin"
          :key="item.id"
          class="nav__list__item ">
          <div class="nav__list__item__wrapper">
            <img class="active" :src="item.iconActive" alt="">
            <img class="inactive" :src="item.iconInactive" alt="">
            <p>{{item.title}}</p>
          </div>       
        </li> 
      </template>
           
    </ul>  
    <button>推文</button>  
    <div class="logout nav__list__item__wrapper ">
      <img class="active" src="../assets/static/images/orangeLogout@2x.png" alt="">
      <img class="inactive" src="../assets/static/images/logout@2x.png" alt="">
      <p>登出</p>
    </div>       
  </nav>
</template>
<script>
export default {
  data(){
    return{
      isAdmin: false,
      navAdmin:[
         {
          title: '推文清單',
          id:4,
          iconActive: require('../assets/static/images/orangeHome@2x.png'),
          iconInactive: require('../assets/static/images/home@2x.png')        
        },{
          title: '使用者列表',
          id:5,
          iconActive: require('../assets/static/images/orangeUser@2x.png'),
          iconInactive: require('../assets/static/images/user@2x.png')        
        }
      ],
      navList:[
        {
          title: '首頁',
          id:1,
          iconActive: require('../assets/static/images/orangeHome@2x.png'),
          iconInactive: require('../assets/static/images/home@2x.png')        
        },
        {
          title: '個人資料',
          id:2,
          iconActive: require('../assets/static/images/orangeUser@2x.png'),
          iconInactive: require('../assets/static/images/user@2x.png')        
        },
        {
          title: '設定',
          id:3,
          iconActive: require('../assets/static/images/orangeSet@2x.png'),
          iconInactive: require('../assets/static/images/setIcon@2x.png')        
        }      
      ]
      // navList: require()
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/_basic.scss";
  nav{ 
    height:100%;
    position: relative;
    padding-top: 13px;
    .nav__list{
      padding-left: 20px;
      .logo{
        width: 40px;
        height: 40px;
      }
    }    
    .nav__list__item{  
      margin-top:40px;
      margin-bottom:40px;
      cursor: pointer;    
      &__wrapper{
        display: flex;
        img{
          width:20px;
          height:20px;
        }
        p{
          margin-left: 17px;
          font-weight: 700;
          color: #44444F;
        }
        .active{
          display: none;
        }
        &:hover{
          p{
            color: $orange;
          }
          .active{
            display: block;
          }
          .inactive{
            display: none;
          }
        }
      }
    }
    button{
      @extend %button-orange;
      width:100%;
      max-width: 178px;
      height: 46px;
      font-size: 20px;
    }
    .logout{
      position: absolute;
      bottom: 13px;
      left: 13px;
    }
  }

</style>
