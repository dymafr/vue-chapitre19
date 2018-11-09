<template>
  <div id="app" class="container-fluid d-flex flex-column">
    <div class="d-flex flex-row align-items-center bg-light mb-5" style="height:50px;position:fixed;width:100%;top:0;left:0;z-index:1;">
      <router-link class="px-5" to="/"> Component 1</router-link>
      <router-link class="px-5" to="/a#here" > Component 2 </router-link>
    </div>
    <div class="m-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
}


</script>

<style>
  #app {
    padding: 0;
  }

  #nav { 
    height: 50px;

  }

  a {
    cursor: pointer;
  }



</style>
