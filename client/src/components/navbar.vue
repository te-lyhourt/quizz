<template v-html="html">
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="Home page.html">
          Quizz!
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
            <a class="nav-link" href="">
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
    mounted() {
        //plugin bootstrap js 
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
};
</script>

<style scoped>
    @import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css");
    @import url("https://cdn.rawgit.com/afeld/bootstrap-toc/v1.0.1/dist/bootstrap-toc.min.css");
    @import url("https://use.fontawesome.com/releases/v5.14.0/css/all.css");
    @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Concert+One&display=swap");

    .navbar
    {
        padding: 20px 10px;
    }
    .navbar-brand
    {
        font-size: 2rem;
        font-weight: 700;
        color: white;
        margin-left: 20px;
    }
    .navbar-brand:hover{
        background: linear-gradient(to right,#feac5e,#c779d0,#4bc0c8 100%)!important;;
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
        color: #989898;
    }
    .nav-link.need-help:hover
    {
        color:white;
    }
    .btn.button-text{
        color: white;
    }
    .navbar-toggler{
        background: white;
    }

</style>
