<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-3 sidebar">
          <Sidebar />
        </div>

        <!-- 首頁 -->
        <div 
          v-show="false"
          class="col-6 content-container"
        >
          <div class="title">
            <h1>首頁</h1>
          </div>
          <div class="tweet-div">
            <form action="">
              <img src="../assets/static/images/noImage@2x.png" alt="" />
              <label for=""></label>
              <textarea
                v-model="text"
                name="tweet"
                placeholder="有什麼新鮮事？"
              >
              </textarea>
              <button 
                class="btn tweet-btn" 
                @click.stop.prevent="tweetModal"
              >
                推文
              </button>
            </form>
          </div>
          <NewestTweets />
        </div>
        
        <!-- 推文 -->
        <div 
          v-show="true"
          class="col-6 content-container"
        >
          <div class="title">
            <img src="../assets/static/images/back@2x.png" alt="" />
            <h1>推文</h1>
          </div>
          <ReplyList />
        </div>

        <TweetModal 
          :d-none="dNone" 
          @tweet-modal="tweetModal" 
        />

        <div class="col-3 popular-users">
          <Popular />
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import Popular from "../components/Popular.vue";
import Sidebar from "../components/Sidebar.vue";
import NewestTweets from "../components/NewestTweets.vue";
import TweetModal from "../components/TweetModal"
import ReplyList from '../components/ReplyList'
// import ReplyModal from '../components/ReplyModal'

export default {
  name: "Twitter",
  components: {
    Popular,
    Sidebar,
    NewestTweets,
    TweetModal,
    ReplyList
    //  ReplyModal
  },
  data() {
    return {
      text: "",
      dNone: true,
    };
  },
  methods: {
    tweetModal() {
      this.dNone = !this.dNone;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/basic.scss";
main {
  max-width: 1140px;
  margin: 0 auto;
}
.content-container {
  border-left: 1px solid $border-grey;
  border-right: 1px solid $border-grey;
  padding: 0;
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