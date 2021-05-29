<template v-html="html">
  <div class=".bd-navbar">
    <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="Home page.html">
          Quizz!
          <i class="fas fa-pen"></i>
        </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link need-help" href=""
              ><i class="fas fa-question-circle"></i> Need Help</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/signUp">
              <button type="button" class="btn btn-outline-dark button-text">Join</button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>

export default {
    components:{
        
    }
};
</script>

<style scoped>
    
    .navbar
    {
      position: sticky;
      background:black;
      padding: 20px 10px;
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
    /* bootstrapcdn CDN Link */
  @import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css");
  @import url("https://cdn.rawgit.com/afeld/bootstrap-toc/v1.0.1/dist/bootstrap-toc.min.css");
</style>
