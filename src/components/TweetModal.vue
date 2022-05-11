<template>
  <main :class="{'d-none': dNone}">
    <div class="container">
      <div class="modal row">
        <form 
          class="modal-content col-6" 
          action=""
        >
          <div class="modal-content-cancel">
            <button class="btn" @click.stop.prevent="handleCloseBtn">
              <img src="../assets/static/images/orangeClose@2x.png" alt="">
            </button>
          </div>
          <img class="modal-content-avatar" src="../assets/static/images/noImage@2x.png" alt="">
          <textarea 
            v-model="text"
            class="scrollbar"
            name="tweet"  
            placeholder="有什麼新鮮事？" 
          >
          </textarea>
          <p class="modal-alert">字數不可超過 140 字</p>
          <button 
            class="btn modal-tweet"
            @click.stop.prevent
          >
            推文
          </button>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
name: 'TweetModal',
props: {
  dNone: {
    type: Boolean,
    default: true
  }
},
data () {
  return {
    text: ''
  }
},
methods: {
  handleCloseBtn() {
    this.$emit('tweet-modal')
    this.text = ''
  }
}
}
</script>


<style lang="scss" scoped>
@import "../assets/scss/basic.scss";

main{
  max-width: 1140px;
  margin: 0 auto;    
}

.modal {
  background-color: $modal-background; 
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
}
.modal-content {
  // width: 634px;
  height: 300px;
  background-color: $white;
  border-radius: 14px;
  margin: auto;
  margin-top: 56px;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
  &-cancel {
    width: 100%;
    border-bottom: 1px solid $border-grey;
    position: absolute;
    top: 0;
    left: 0;
  }
  &-cancel img {
    width: 24px;
    height: 24px;
    margin: 16px;
  }
  &-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: absolute;
    top: 73px;
    left: 24px;
  }
}
textarea {
  width: calc(100% - 110px);
  height: calc(243px - 40px - 48px);
  border: none;
  resize : none;
  color: $font-black;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  overflow-y: scroll;
  position: absolute;
  top: 83px;
  right: 27p  x;
  left: 83px;
  &::placeholder {
    color: $font-small;
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
.modal-tweet {
  @extend %button-orange;
  width: 64px;
  height: 40px;
  position: absolute;
  bottom: 16px;
  right: 16px;
}
.modal-alert {
  color: $modal-alert;
  font-weight: 500;
  font-size: 15px;
  line-height: 15px;
  position: absolute;
  bottom: 27px;
  right: 108px;
}
</style>