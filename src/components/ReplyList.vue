<template>
  <div class="reply-div scrollbar">
    <div class="reply-div-user">
      <div class="user-img avatar">
        <img src="../assets/static/images/noImage@2x.png" alt="">
      </div>
      <div class="user-info">
        <p class="user-info-name">Apple</p>
        <p class="user-info-account">@apple</p>
      </div>
    </div>
    <div class="reply-div-content">
      <div class="content-text">
        <p>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </p>
      </div>
      <div class="content-when">
        <p class="content-when-time">上午 10:05</p>
        <p class="content-date">2021年11月10日</p>
      </div>
      <div class="content-counts">
        <div class="content-counts-reply">
          <span>13</span> 回覆
        </div>
        <div class="content-counts-like">
          <span>76</span> 喜歡次數
        </div>
      </div>
      <div class="content-response">
        <img 
          class="content-response-reply"
          src="../assets/static/images/reply@2x.png" 
          alt=""
          @click.stop.prevent="replyModal"
        >
        <img 
          class="content-response-like"
          src="../assets/static/images/like@2x.png" 
          alt=""
        >
      </div>
    </div>   
    <ReplyListCard />
  </div>
</template>

<script>
import ReplyListCard from '../components/ReplyListCard'

export default {
name: 'ReplyList',
components: {
  ReplyListCard
},
}
</script>


<style lang="scss" scoped>
@import "../assets/scss/basic.scss";

.reply-div {
  height: calc(100vh - 72px);
  padding: 16px;
  overflow-y: scroll;
}
.reply-div-user,
.content-when,
.content-counts {
  display: flex;
  align-items: center;
}
.user-img img {
  @extend %avatar;
  margin-right: 8px;
}
.user-info-name {
  @extend %tweet-name;
}
.user-info-account {
  @extend %tweet-account;
}
.content-text {
  @extend %tweet-text;
  font-size: 24px;
  line-height: 36px;
}
.content-when {
  @extend %tweet-account;
  padding: 8px 0;
  border-bottom: 1px solid $border-grey;
  &-time::after {
    content: '・';
    font-weight: 700;
  }
}
.content-counts {
  color: $font-small;
  padding: 16px 0;
  border-bottom: 1px solid $border-grey;
  span {
    color: $font-black;
    font-family: $number-font;
    font-weight: 700;
    font-size: 19px;
    line-height: 23px;
  }
  &-reply {
    margin-right: 24px;
  }
}
.content-response {
  padding: 20px 0;
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
  img {
    @extend %icon-30;
  }
  &-reply {
    margin-right: 128px;
  }
}
// scrollbar
.scrollbar {
  &::-webkit-scrollbar {
    width: 2px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 1px $scrollbar; 
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: $scrollbar;
  }
}
</style>

