<template>
  <div class="container">
    <Sidebar />
    <div class="tweets-div" action="">
      <div class="title">
        <h1 class="tweets-div__title">推文清單</h1>
      </div>
      <div class="tweets-div__tweets scrollbar">
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
            <p>{{ ellipsisWords() }}</p>
          </div>
          <button 
            class="btn close-btn"
            @click.stop.prevent="deleteTweet"
          >
            <img src="../assets/static/images/close@2x.png" alt="">
          </button>
        </div>   
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'

export default {
  components: { 
    Sidebar 
  },
  data () {
    return {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sed suscipit incidunt veniam ipsa, laboriosam quo fugit earum nisi sunt? Nesciunt sint nam vitae facilis quam nemo, laboriosam aspernatur distinctio.loremLorem ipsum dolor sit amet consectetur adipisicing elit. Eius sed suscipit incidunt veniam ipsa, laboriosam quo fugit earum nisi sunt? Nesciunt sint nam vitae facilis quam nemo, laboriosam aspernatur distinctio.lorem',
      isAdmin: true,
    }
  },
  methods: {
    ellipsisWords () {
      const words = this.text
      const word = words.split(' ')
      const wordLength = word.length

      if (wordLength > 50) {
        let txt = word.slice(0, 50).join(' ') + '...'
        return txt
      }
    },
    deleteTweet () {
      console.log('Delete')
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/basic.scss";

.container {
  display: grid;
  grid-template-columns: 178px 937px auto;
  grid-template-rows: 100vh;
  grid-gap: 24px;
}
.tweets-div {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  border-left: 1px solid $border-grey;
  border-right: 1px solid $border-grey;
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
  width: 937px;
  overflow-y: scroll;
  .tweets-div__tweet {
    position: relative;
    // left: -6px;
  }
}
.scrollbar {
  // padding-left: 6px;
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: rgba(0, 0, 0, 0.1);
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
    
    // height: 52px;
    // display: -webkit-box;
    // -webkit-box-orient: vertical;
    // -webkit-line-clamp: 2;
    // overflow: hidden;
    // text-overflow: ellipsis;
  }
  .close-btn {
    position: absolute;
    top: 1px;
    right: 1px;
    img {
      width: 24px;
      height: 24px;
    }
  }
}
</style>