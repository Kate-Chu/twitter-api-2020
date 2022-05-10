<template>
  <main>
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="content-container">

    </div>
    <div class="popular-users">
       <Popular />
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
    display: grid;
    grid-template-columns: 15% 60% 25%;
    
    .side-bar{
      grid-column: 1/2;
    
    }
    .content-container{
      grid-column: 2/3;
 
    }
    .popular-users{
      grid-column: 3/4;
     
    }
  }

</style>