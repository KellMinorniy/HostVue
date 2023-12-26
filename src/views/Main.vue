<script>
import { RouterLink, RouterView } from 'vue-router'



</script>

<template>
  <div class="wrapper">

    <div class="panel">
      <nav class="nav">
        <ul class="list-menu">
          <li class="list-nav">
            <router-link to="/main-panel"><span>🏠</span>Главная</router-link>
          </li>
          <li class="list-nav">
            <router-link to="/main-servises"><span>🚀</span>Покупка услуг</router-link>
          </li>
          <li class="list-nav">
            <a href="#"><span>💬</span>Поддержка</a>
          </li>
          <li class="list-nav">
            <a href="#"><span>📑</span>История покупок</a>
          </li>
          <li class="list-nav">
            <a href="#"><span>💲</span>Реферальная система</a>
          </li>
        </ul>
      </nav>
      <div class="profile">
        <ul class="profile-menu">
          <li>
            <a href="#"><span>📥</span>Пополнить баланс</a>
          </li>
          <li>
            <a href="#"><span>💸 </span>Ваш баланс: 0₽</a>
          </li>
        </ul>
      </div>
    </div>
  
  
  <!-- content -->
  <div class="main-content">
    <RouterView />
  </div>
  </div>
  
</template>


<style scoped>
.wrapper {
  width: 100%;
  display: flex;
}
.panel {
  display: flex;
  flex-direction: column;
  margin-left: 0;
  top: 0;
  justify-content: space-between;
  height: 100vh;
  background-color: rgb(8, 8, 8);
  width: 20%;
}

.list-menu, .profile-menu {
  list-style-type: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 0;
  text-align: start;
}

.list-nav {
  margin-top: 15%;
}

.nav {
  width: 100%;
  display: flex;
  justify-content: flex-start;

}

.list-nav:hover {
  transform: translateX(3px);
  transition: 0.3s;
}

.list-nav a, .profile-menu a {
  color: white;
  text-decoration: none;
}

.profile-menu li {
  margin-top: 10%;
}

@media(max-width:500px) {
  .list-nav, .profile-menu {
    font-size: 10px;
  }
}

@media(max-width:768px) {
  .panel {
    width: 30%;
    height: 100vh;
  }

  .list-nav, .profile-menu {
    font-size: 14px;
  }
}
</style>