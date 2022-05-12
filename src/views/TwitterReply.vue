<template>
  <div>
    <div class="title">
      <img
        src="../assets/static/images/back@2x.png"
        alt=""
        @click="$router.back()"
      />
      <h1>推文</h1>
    </div>
    <div class="reply-div scrollbar">
      <div class="reply-div-user">
        <div class="user-img avatar">
          <img src="../assets/static/images/noImage@2x.png" alt="" />
        </div>
        <div class="user-info">
          <p class="user-info-name">Apple</p>
          <p class="user-info-account">@apple</p>
        </div>
      </div>
      <div class="reply-div-content">
        <div class="content-text">
          <p>
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
            cillum dolor. Voluptate exercitation incididunt aliquip deserunt
            reprehenderit elit laborum.
          </p>
        </div>
        <div class="content-when">
          <p class="content-when-time">上午 10:05</p>
          <p class="content-date">2021年11月10日</p>
        </div>
        <div class="content-counts">
          <div class="content-counts-reply"><span>13</span> 回覆</div>
          <div class="content-counts-like"><span>76</span> 喜歡次數</div>
        </div>
        <div class="content-response">
          <img
            class="content-response-reply"
            src="../assets/static/images/reply@2x.png"
            alt=""
            @click.stop.prevent="replyModal"
          />
          <img
            class="content-response-like"
            src="../assets/static/images/like@2x.png"
            alt=""
          />
        </div>
      </div>
      <!-- slot -->
      <UserTweetCard 
        v-for="reply in replies"
        :key="reply.id"
        >
        <template v-slot:avatar>
          <img class="avatar" :src="reply.img" alt="">
        </template>
        <template v-slot:name>
          {{reply.name}}
        </template>
        <template v-slot:id>
          {{reply.account}}
        </template>
        <template v-slot:post-time>
          {{reply.createTime}}
        </template>
        <template v-slot:text>
          <div class="reply-tag">回覆 <span>@{{reply.to}}</span></div>
          {{reply.text}}
        </template>   
      </UserTweetCard>  

    </div>
    <ReplyModal 
      :d-none="dNoneReplyModal"
      @reply-modal="replyModal"
    />
  </div>
</template>

<script>
import UserTweetCard from '../components/UserTweetCard.vue'
import ReplyModal from "../components/ReplyModal";

export default {
  name: "TwitterReply",
  components: {
    UserTweetCard,
    ReplyModal,
  },
  data() {
    return {
      replies:[
         {
           id: 1,
           name: 'John Doe',
           img: require('../assets/static/images/noImage@2x.png'),
           account: '@johndoe',
           text:'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to.',
           likeNum: 50,
           replyNum: 30,
           createTime: 3,
           to: 'apple' 
         },
          {
           id: 2,
           name: 'John Doe',
           img: require('../assets/static/images/noImage@2x.png'),
           account: '@johndoe',
           text:'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English.',
           likeNum: 50,
           replyNum: 30,
           createTime: 3,
           to: 'apple' 
         },
          {
           id: 3,
           name: 'John Doe',
           img: require('../assets/static/images/noImage@2x.png'),
           account: '@johndoe',
           text:'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using making it look like readable English.',
           likeNum: 50,
           replyNum: 30,
           createTime: 3,
           to: 'apple' 
         }
      ],
      dNoneReplyModal: true,
    };
  },
  methods: {
    replyModal() {
      this.dNoneReplyModal = !this.dNoneReplyModal;
    },
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/basic.scss";

.title {
  display: flex;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid $border-grey;
}
.title h1 {
  color: $font-black;
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
}
.title img {
  width: 24px;
  height: 24px;
  margin-right: 16px;
}
.reply-div {
  height: calc(100vh - 72px);
  padding: 16px 0;
  overflow-y: scroll;
}
.reply-div-user,
.reply-div-content {
  padding: 0 16px;
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
    content: "・";
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
    content: "";
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
    cursor: pointer;
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
.reply-tag{
    @extend %tweet-account;
    margin-bottom: 8px;
    span{
      color: $orange;
      font-family: $number-font;
    }
  }
</style>