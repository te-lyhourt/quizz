<template>
  <div class="root" >
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',

  methods: {
    bootStrabJsplugIn(){
      //plugin bootstrap js to the head of document , i couldnt find way to add it at the bottom of body
      const plugin = document.createElement("script");
      plugin.setAttribute(
          "src",
          "//code.jquery.com/jquery-3.5.1.slim.min.js"
      );
      plugin.async = true;
      document.head.appendChild(plugin);

      const plugin1 = document.createElement("script");
      plugin1.setAttribute(
          "src",
          "//cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
      );
      plugin1.async = true;
      document.head.appendChild(plugin1);
    },
  },
   mounted() {
     this.bootStrabJsplugIn()
  },
  
}
</script>

<style>
  /* fontawesome CDN Link */
  @import url("https://use.fontawesome.com/releases/v5.14.0/css/all.css");
  
  /* google fonts CDN Link */
  @import url("https://fonts.googleapis.com/css2?family=Concert+One&display=swap");
  
  /* Boxicons CDN Link */
  @import url("https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css");

  body{
    background: #1F1F1F;
    font-family: 'Concert One', sans-serif;
    color: white;
    height: 100%;

  }
  html{
    height: 100%;
  }
  #app{
    height: 100%;
  }
  .root{
    height: 100%;
  }
  
</style>
