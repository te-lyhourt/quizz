<template>
  <div>
    <!-- <navbar style="background:black"></navbar> -->
    <!-- <log-in></log-in> -->
    <sign-up></sign-up>
  </div>
</template>

<script>
import SignUp from './components/signUp.vue';
// import navbar from '@/components/navbar.vue'
// import LogIn from '@/components/logIn.vue'

export default {
  name: 'App',
  components: {
    SignUp,
    // navbar,
    // LogIn,

  },
   mounted() {

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
}
</script>

<style>
  @import url("https://use.fontawesome.com/releases/v5.14.0/css/all.css");
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Concert+One&display=swap");
  

  body{
    background: #1F1F1F;
    font-family: 'Concert One', sans-serif;
    color: white;
  }
  
</style>
