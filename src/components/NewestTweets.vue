<template>
  <div class="tweets-div__tweets scrollbar">
    <div class="tweets-div__tweet">
      <div class="tweets-div__tweet--img">
        <slot name="avatar">
          <img src="../assets/static/images/noImage@2x.png" alt="" />
        </slot>
      </div>
      <div class="tweets-div__tweet--content">
        <div class="content-info">
          <slot name="name">
            <p class="content-info-name">名字</p>
          </slot>
          <slot name="account">
            <p class="content-info-account">@帳號</p>
          </slot>
          <slot name="time">
            <p class="content-info-time">時間</p>
          </slot>
        </div>
        <div class="content-text">
          <slot name="text">
            <p>內容</p>
          </slot>
        </div>
        <div class="content-counts">
          <div class="content-counts-reply">
            <slot name="replyCounts">
              <img src="" alt="">圖片
              <span>回覆數</span>
            </slot>
          </div>
          <div class="content-counts-like">
            <slot name="likeCounts">
              <img src="" alt="">
              <span>按讚數</span>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewestTweets",
}
</script>


<style lang="scss" scoped>
@import "../assets/scss/basic.scss";

.tweets-div__tweet {
  display: flex;
  border-bottom: 1px solid $border-grey;
  padding: 16px 0;
  &--img img {
    width: 50px;
    height: 50px;
    margin-left: 24px;
    margin-right: 8px;
  }
  &--content .content-info {
    display: flex;
    align-items: center;
  }
}
.tweets-div__tweets {
  width: 100%;
  height: calc(100vh - 215px);
  overflow-y: scroll;
  .tweets-div__tweet {
    position: relative;
    // left: -6px;
  }
}
// scrollbar
.scrollbar {
  &::-webkit-scrollbar {
    width: 8px;
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
.tweets-div__tweet--content {
  width: 849px;
  position: relative;
  .content-info {
    // margin-bottom: 8px;
    &-name {
      @extend %tweet-name;
      margin-right: 8px;
    }
    &-account,
    &-time {
      @extend %tweet-account;
    }
    &-account::after {
      content: "・";
      font-weight: 700;
    }
  }
  .content-text {
    @extend %tweet-text;
    margin-top: 8px;
    margin-right: 82px;
  }
  .content-counts {
    display: flex;
    &-reply,
    &-like {
      display: flex;
      margin-top: 9px;
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
}
</style>