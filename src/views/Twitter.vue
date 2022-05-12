<template>
  <div>
    <div class="title">
      <h1>首頁</h1>
    </div>
    <div class="tweet-div">
      <form action="">
        <img src="../assets/static/images/noImage@2x.png" alt="" />
        <label for=""></label>
        <textarea v-model="text" name="tweet" placeholder="有什麼新鮮事？">
        </textarea>
        <button class="btn tweet-btn" @click.stop.prevent="tweetModal">
          推文
        </button>
      </form>
    </div>

    <!-- slot -->
    <NewestTweets v-for="item in items" :key="item.id">
      <template v-slot:avatar>
        <img 
          :src="item.img" alt="" 
          @click.stop.prevent="onClickAvatar"
        />
      </template>
      <template v-slot:name>
        <p class="content-info-name">{{ item.name }}</p>
      </template>
      <template v-slot:account>
        <p class="content-info-account">@{{ item.account }}</p>
      </template>
      <template v-slot:time>
        <p class="content-info-time">{{ item.time }}</p>
      </template>
      <template v-slot:text>
        <p>{{ item.text }}</p>
      </template>
      <template v-slot:replyCounts>
        <img
          src="../assets/static/images/reply@2x.png"
          alt=""
          @click.stop.prevent="replyModal"
        />
        <span>{{ item.replyCounts }}</span>
      </template>
      <template v-slot:likeCounts>
        <img src="../assets/static/images/like@2x.png" alt="" />
        <span>{{ item.likeCounts }}</span>
      </template>
    </NewestTweets>

    <!-- Modal -->
    <ReplyModal 
      :d-none="dNoneReplyModal" 
      @reply-modal="replyModal"
    />
    <TweetModal 
      :d-none="dNone" 
      @tweet-modal="tweetModal" 
    />

  </div>
</template>

<script>
import NewestTweets from "../components/NewestTweets.vue";
import TweetModal from "../components/TweetModal";
import ReplyModal from "../components/ReplyModal";

export default {
  name: "Twitter",
  components: {
    NewestTweets,
    TweetModal,
    ReplyModal
  },
  data() {
    return {
      text: "",
      dNone: true,
      dNoneReplyModal: true,
      items: [
        {
          id: 1,
          img: require("../assets/static/images/noImage@2x.png"),
          name: "Apple",
          account: "apple",
          time: "3 小時",
          text: "Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum.",
          replyCounts: 13,
          likeCounts: 76,
        },
      ],
    };
  },
  methods: {
    onClickAvatar () {
      this.$router.push('/users/:id')
    },
    tweetModal() {
      this.dNone = !this.dNone;
    },
    replyModal() {
      this.dNoneReplyModal = !this.dNoneReplyModal;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/basic.scss";

.title {
  display: flex;
  align-items: center;
  padding: 24px;
  border-bottom: 1px solid $border-grey;
  h1 {
    color: $font-black;
    font-weight: 700;
    font-size: 24px;
    line-height: 26px;
  }
}
.tweet-div {
  width: 100%;
  height: 140px;
  border-bottom: 10px solid $border-grey;
  position: relative;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    top: 16px;
    left: 25px;
  }
  textarea {
    width: calc(100% - 110px);
    height: 50px;
    border: none;
    resize: none;
    color: $font-black;
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    position: absolute;
    top: 28px;
    right: 27px;
    left: 83px;
    &::placeholder {
      color: $font-small;
      font-weight: 700;
    }
  }
  .tweet-btn {
    @extend %button-orange;
    width: 64px;
    height: 40px;
    position: absolute;
    top: 80px;
    right: 25px;
  }
}
</style>