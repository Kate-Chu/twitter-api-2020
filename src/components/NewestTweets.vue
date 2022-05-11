<template>
  <div class="tweets-div__tweets scrollbar">
    <!-- TODO: v-for -->
    <div class="tweets-div__tweet">
      <div class="tweets-div__tweet--img">
        <img src="../assets/static/images/noImage@2x.png" alt="">
      </div>
      <div class="tweets-div__tweet--content">
        <div class="content-info">
          <p class="content-info-name">Apple</p>
          <p class="content-info-account">@apple</p>
          <p class="content-info-time">3 小時</p>
        </div>
        <div class="content-text">
          <p>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </p>
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
    <ReplyModal 
      :d-none="dNone"
      @reply-modal="replyModal"
    />
  </div>
</template>

<script>
import ReplyModal from '../components/ReplyModal'

export default {
  name: 'NewestTweets',
  components: {
    ReplyModal
  },
  data () {
    return {
      dNone: true,
    }
  },
  methods: {
    replyModal () {
      this.dNone = !this.dNone;
    }
  }
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
    &-account, &-time {
      @extend %tweet-account;
    }
    &-account::after {
      content: '・';
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
    &-reply, &-like {
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