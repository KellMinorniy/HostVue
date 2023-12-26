<script></script>

<template>
  <div class="container">
    <div class="welcome-container">
        <h1 class="welcome">Здравствуйте!</h1>
        <p class="subtitle">
          В данном разделе вы можете посмотреть список активных услуг и посмотреть
          данные для входа в них.
        </p>
    </div>
    <div class="main">
        <h2 class="title">Активные услуги</h2>
        <div class="blocks">
            <img src="../assets/img/Frame 10.png" alt="">
            <img src="../assets/img/Frame 11.png" alt="">
        </div>
    </div>
  </div>
</template>

<style scoped>
.container {
    width: 90%;
    margin: auto;
}
.welcome-container {
    width: 70%;
}
.welcome {
  color: white;
}

.subtitle {
    color: white;
}

.main {
    margin-top: 7%;
}

.title {
    color: white;
}

.blocks {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.blocks > img {
    width: 45%;
    cursor: pointer;
}

.blocks > img:hover {
    transform: translateY(5px);
    transition: 0.5s;
}

@media(max-width:768px) {

    .container {
        text-align: center;
    }

    .welcome-container {
        margin: 0 auto;
    }
    .welcome {
        font-size: medium;
    }
}
</style>