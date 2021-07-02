<template v-html="html">
  <div class=".bd-navbar">
    <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="/">
          Quizz!
          <i class="fas fa-pen"></i>
        </a>
      
      <ul class="navbar-nav ml-auto">
          
          <li class="nav-item">
            <div v-if="login">
              <div type="button" class="btn btn-outline-dark button-text">{{username}}</div>
              <button type="button" class="btn btn-outline-dark button-text logout" @click="logout()">log out</button>
            </div>
            
            <a v-if="!login" class="nav-link" href="/logIn">
              <button type="button" class="btn btn-outline-dark button-text">Join</button>
            </a>
          </li>
        </ul>
    </nav>
  </div>
</template>
<script>

import axios from 'axios'
export default {
  props:["username","login"],
  methods: {
    async logout(){

      const result = await axios.get('http://localhost:8080/logOut')
      
      if(result.data.logout){
        //relaod home page after log out
        location.reload();
      }
      
      
    }
  },
};
</script>

<style scoped>

    .navbar
    {
      position: fixed;
      background:black;
      padding: 20px 10px;
      width: 100%;
      z-index: 99;
    }
    .navbar-brand
    {
        font-size: 2rem;
        font-weight: 700;
        color: white;
        margin-left: 40px;
    }
    
    .navbar-brand:hover{
        color: white;
        text-shadow: 0 0 10px #03bcf4,
        0 0 20px #03bcf4,
        0 0 40px #03bcf4 
    }
    .navbar-nav
    {
        border-radius: 0 0 30px;
        float: right;
        margin-right: 120px;
    }
    .nav-item
    {
        padding: 0 18px;
        height: 100%;
    }
    .nav-link.need-help
    {
        margin-top: 5px;
        color:white;
    }
    .nav-link.need-help:hover
    {
        color: white;
        text-shadow: 0 0 10px #03bcf4,
        0 0 20px #03bcf4,
        0 0 40px #03bcf4 
    }
    .btn.button-text{
        color: white;
        
    }
    .btn.button-text:hover{
        text-shadow: 0 0 10px #03bcf4,
        0 0 20px #03bcf4,
        0 0 40px #03bcf4 
    }

    .navbar-toggler{
        background: white;

    }
    .logout{
      margin-left: 10px
    }
    /* bootstrapcdn CDN Link */
  @import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css");
  @import url("https://cdn.rawgit.com/afeld/bootstrap-toc/v1.0.1/dist/bootstrap-toc.min.css");
</style>
