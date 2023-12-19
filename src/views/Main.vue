<script>
import { RouterView } from 'vue-router';



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
            <a href="#" @click="activePage = 2"><span>🚀</span>Покупка услуг</a>
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.main-content {
  margin-left: 20vw; /* Это должно быть равно ширине вашей панели */
}
.panel {
  background-color: rgba(30, 30, 30, 0.6);
  width: 20vw;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}




.list-menu {
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: space-between;
  margin-top: 10%;
  top: 0;
}

.list-nav {
  color: white;
  list-style-type: none;
  display: flex;
  flex-direction: row;
}

.list-nav a {
  color: white;
  text-decoration: none;
  position: relative;
  width: 100%;
  display: flex;
  padding-left: 10%;

}

.list-nav span {
  position: absolute;
  left: 0;
}

/* Profile Panel */

.profile-menu {
  display: flex;
  flex-direction: column;
  list-style-type: none;
  gap: 20px;
  margin-bottom: 30%;
}

.profile-menu a {
  color: white;
  text-decoration: none;
  position: relative;
  width: 100%;
  display: flex;
  padding-left: 10%;
}

.profile-menu span {
  position: absolute;
  left: 0;
}
</style>