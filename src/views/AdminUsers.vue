<template>
  <div class="container">
    <!-- TODO: 待加入 Sidebar.vue -->
    <div>Sidebar</div>
    <div class="users-div" action="">
      <div class="title">
        <h1 class="users-div__title">使用者列表</h1>
      </div>
      <div class="users-div__user scrollbar">
        <div class="users-div__user--card">
          <div class="card-background"></div>
          <img class="card-avatar" src="https://picsum.photos/100
" alt="">
          <div class="card-info">
            <div class="card-info-name">John Doe</div>
            <div class="card-info-account">@heyjohn</div>
            <div class="card-info-tweets-likes">
              <div class="card-info-tweets">
                <img src="../assets/static/images/post@2x.png" alt="">
                <span class="counts">1.5k</span>
              </div>
              <div class="card-info-likes">
                <img src="../assets/static/images/like@2x.png" alt="">
                <span class="counts">20k</span>
              </div>
            </div>
            <div class="card-info-follow">
              <div class="card-info-followings">
                <span class="counts">34 個</span>
                <span class="type">跟隨中</span>
              </div>
              <div class="card-info-followers">
                <span class="counts">59 位</span>
                <span class="type">跟隨者</span>
              </div>
            </div>
          </div>
        </div>
        <div class="users-div__user--card"></div>
        <div class="users-div__user--card"></div>
        <div class="users-div__user--card"></div>
        <div class="users-div__user--card"></div>
        <div class="users-div__user--card"></div>
        <div class="users-div__user--card"></div>
        <div class="users-div__user--card"></div>
        <div class="users-div__user--card"></div>
        <div class="users-div__user--card"></div>
        <div class="users-div__user--card"></div>
        <div class="users-div__user--card"></div>
        
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  methods: {
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/basic.scss";

.container {
  display: grid;
  grid-template-columns: 178px auto;
  grid-template-rows: 100vh;
  grid-column-gap: 24px;
}
.users-div {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  border-left: 1px solid $border-grey;
}
.title {
  width: 100%;
  border-bottom: 1px solid $border-grey;
  h1 {
    font-size: 24px;
    line-height: 26px;
    font-weight: 700;
    color: $font-black;
    margin: 24px auto 24px 25px;
  }
}
.users-div__user {
  display: grid;
  grid-template-columns: repeat(4, 249px);
  grid-template-rows: auto;
  overflow-y: scroll;
  grid-gap: 16px;
  margin-left: 8px;
  padding-top: 16px;
  &--card {
    height: 314px;
  }
}
.scrollbar {
  padding-left: 6px;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: rgba(0, 0, 0, 0.1);
  }
}
// card
.users-div__user--card {
  position: relative;
  background-color: 
  $card-grey;
  border-radius: 10px;
  z-index: -2;
  .card-background {
    width: 247px;
    height: 140px;
    background: url('https://picsum.photos/247/140') no-repeat;
    overflow: hidden;
    border-radius: 10px 10px 0px 0px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .card-avatar {
    width: 100px;
    height: 100px;
    aspect-ratio: 1/1;
    object-fit: cover;
    border: 4px solid $white;
    border-radius: 50%;
    margin: 64px 74px 8px 74px;
  }
}
.card-info {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  &-name {
    color: $font-black;
    font-size: 16px;
    font-weight: 700;
    line-height: 26px;
  }
  &-account {
    color: $font-small;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
  &-tweets-likes, &-follow {
    display: flex;
  }
  &-tweets-likes img {
    width: 24px;
    height: 24px;
  }
  &-tweets, &-likes {
    display: flex;
    align-items: center;
    margin: 16px 8px 8px 8px;
    font-family: $number-font;
    font-size: 16px;
    font-weight: 500;
    line-height: 15px;
  }
  &-follow {
    font-family: $main-font;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
  &-followings, &followers {
    margin: 0 8px;
  }
  img {
    margin-right: 8px;
  }
  .counts {
    color: $font-black;
  }
  .type {
    color: $font-small;
  }
}
</style>