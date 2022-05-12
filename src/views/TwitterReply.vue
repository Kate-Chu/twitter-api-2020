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

    <ReplyList />
    
  </div>
</template>

<script>
import ReplyList from '../components/ReplyList'
// import ReplyModal from '../components/ReplyModal'

export default {
 name: 'TwitterReply',
 components: {
  ReplyList,
  // ReplyModal
 },
 data() {
  return {
  //  text: '',
  //  dNone: true,
  };
 },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/basic.scss';

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
</style>