<template v-slot:card>
<!-- TODO: v-for -->
  <div>
    <div class="card-div">
      <div class="card-div-avatar">
        <img class="avatar" src="../assets/static/images/noImage@2x.png" alt="">
      </div>
      <div class="card-div-content">
        <div class="content-info">
          <p class="content-info-name">Apple</p>
          <p class="content-info-account">@apple</p>
          <p class="content-info-time">3 小時</p>
        </div>
        <div class="content-replyto">
          回覆 <span>@apple</span>
        </div>
        <div class="content-text">
          <p>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolorla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </p>
        </div>
        <div class="content-counts">
          <div class="content-counts-reply">
            <img 
              src="../assets/static/images/reply@2x.png" 
              alt=""
              @click.stop.prevent="replyModal"
            >
            <span>13</span>
          </div>
          <div class="content-counts-like">
            <img src="../assets/static/images/like@2x.png" alt="">
            <span>76</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  
</template>

<style lang="scss" scoped>
@import "../assets/scss/basic.scss";

.card-div, 
.content-info,
.content-counts {
  display: flex;
}
.card-div {
  padding-top: 16px;
  position: relative;
  &::after {
    content: '';
    display: block;
    width: calc(100% + 32px);
    height: 1px;
    background: $border-grey;
    position: absolute;
    bottom: 0;
    left: -16px;
  }
}
.avatar {
  @extend %avatar;
  margin-right: 8px;
}
.content-info {
  align-items: center;
  &-name {
    @extend %tweet-name;
    margin-right: 8px;
  }
  &-account, &-time {
    @extend %tweet-account;
  }
  &-account::after {
    content: '・';
    font-weight: 700;
  }
}
.content-replyto {
  color: $font-small;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  margin: 8px 0;
  span {
    color: $orange;
  }
}
.content-text {
  color: $font-black;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
}
.content-counts {
  &-reply, &-like {
    display: flex;
    margin: 8px 0 16px 0;
  }
  img {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
  img:hover {
    cursor: pointer;
  }
  span {
    color: $font-small;
    font-family: $number-font;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    margin-right: 40px;
  }
}
</style>