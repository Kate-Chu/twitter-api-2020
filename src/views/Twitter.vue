<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-3 sidebar">
      <Sidebar />
      </div>
      <div class="col-6 content-container">

      </div>
      <div class="col-3  popular-users">
        <Popular />
      </div>
      </div>      
    </div>  
  </main>
 
</template>
<script>
import Popular from '../components/Popular.vue'
import Sidebar from '../components/Sidebar.vue'
export default {
  components:{
     Popular,
     Sidebar
  } 
}
</script>
<style lang="scss" scoped>
  main{
    max-width: 1140px;
    margin: 0 auto;    
  }

</style>