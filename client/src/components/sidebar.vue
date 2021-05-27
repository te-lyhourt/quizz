<template v-html="html">
  <div class="sidebar">

      
      <ul class="nav_list">
          <li>
              <i class="bx bx-menu" id="btn"></i>
          </li>
        
        <li>
          <a href="#">
            <i class='bx bxs-message-rounded-add'></i>
            <span class="links_name">Create quiz</span>
          </a>
          <span class="tooltip">Create quiz</span>
        </li>
        <li>
          <a href="#">
           <i class='bx bxs-message-edit' ></i>
            <span class="links_name">Attem quiz</span>
          </a>
          <span class="tooltip">Messages</span>
        </li>
        <li>
          <a href="#">
            <i class='bx bx-history'></i>
            <span class="links_name">History</span>
          </a>
          <span class="tooltip">History</span>
        </li>
        <li>
          <a href="#">
            <i class="bx bx-cog"></i>
            <span class="links_name">Setting</span>
          </a>
          <span class="tooltip">Setting</span>
        </li>
      </ul>
    </div>
</template>
<script>

export default {
    components:{

    },
    mounted() {
        let btn = document.querySelector("#btn");
        let sidebar = document.querySelector(".sidebar");

        btn.onclick = function() {
            sidebar.classList.toggle("active");
            if(btn.classList.contains("bx-menu")){
                btn.classList.replace("bx-menu" , "bx-menu-alt-right");
            }else{
                btn.classList.replace("bx-menu-alt-right", "bx-menu");
            }
        }

    },
};
</script>
<style scoped>
/* Boxicons CDN Link */
@import url("https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css");
/* Google Font CDN Link */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
}

::selection {
  color: #fff;
  background: #11101d;
}
.sidebar {

  position: fixed;
  width: 78px;
  height: 100%;
  background: #11101d;
  padding: 6px 14px;
  z-index: 99;
  transition: all 0.5s ease;
}
.sidebar.active {
  width: 240px;
}

.sidebar #btn {

  color: #fff;
  top: 6px;
  left: 50%;
  font-size: 30px;
  height: 50px;
  width: 50px;
  text-align: center;
  line-height: 50px;
}

.sidebar.active #btn {
  left: 90%;
}
.sidebar ul {
  margin-top: 20px;
}
.sidebar ul li {
  position: relative;
  height: 50px;
  width: 100%;
  list-style: none;
  line-height: 50px;
  margin: 20px 0;
}
.sidebar ul li .tooltip {
  position: absolute;
  left: 125px;
  top: 0;
  transform: translate(-50%, -50%);
  border-radius: 6px;
  height: 35px;
  width: 120px;
  background: #fff;
  line-height: 35px;
  text-align: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: 0s;
  opacity: 0;
  pointer-events: none;
  display: block;
  color: black;
}
.sidebar.active ul li .tooltip {
  display: none;
}
.sidebar ul li:hover .tooltip {
  transition: all 0.5s ease;
  opacity: 1;
  top: 50%;
}
.sidebar ul li a {
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  border-radius: 12px;
  white-space: nowrap;
  transition: all 0.4s ease;
}
.sidebar ul li a:hover {
  color: #11101d;
  background: #fff;
}
.sidebar ul li i {
  font-size: 30px;
  font-weight: 400;
  height: 50px;
  min-width: 50px;
  border-radius: 12px;
  line-height: 50px;
  text-align: center;
}
.sidebar .links_name {
  font-size: 15px;
  font-weight: 400;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
}
.sidebar.active .links_name {
  transition: 0s;
  opacity: 1;
  pointer-events: auto;
}

</style>
