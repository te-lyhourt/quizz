<template>
  <div>
    <navbar style="background:black"></navbar>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'

export default {
  name: 'App',
  components: {
    navbar
  }
}
</script>

<style>
  @import url("https://use.fontawesome.com/releases/v5.14.0/css/all.css");
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Concert+One&display=swap");
  body{
    background: #1F1F1F;
    font-family: 'Concert One', sans-serif;
  }

</style>
