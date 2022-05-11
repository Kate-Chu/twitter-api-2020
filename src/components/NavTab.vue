<template>
  <div class="nav__tab">
    <li class="nav__tab__list__item">
      <slot name="nav-item"></slot>
    </li>
  </div>
</template>
<style lang="scss" scoped>
  @import "../assets/scss/_basic.scss";
  .nav__tab{  
    cursor: pointer;
    &__list__item{
      padding: 15px 0;  
      width:130px;
      text-align: center;
      color: #657786;
      font-weight: 700;
      a{
        color: #657786;
      }
      &:hover{
        color: $orange;
        border-bottom: 2px solid $orange;
        a{
          color: $orange;      
        }
      }
    }
  }

</style>