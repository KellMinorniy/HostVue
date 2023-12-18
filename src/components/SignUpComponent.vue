<script>
import axios from 'axios';

export default {
  name: 'SignUpComponent',
  data() {
    return {
      register: {
        email: "",
        password: "",
        nickname: "",
      },
      errorMessage: null,
    };
  },
  methods: {
    async submitForm() {
      const user = {
        email: this.register.email,
        password: this.register.password,
        username: this.register.username,
      };

      try {
        const response = await axios.post('http://46.174.54.123:3000/auth/sign-up', user);
        console.log(response.data);
        this.errorMessage = null;
      } catch (error) {
        console.error(error);
        if (error.response && error.response.status === 400) {
          this.errorMessage = 'Email уже используется';
        } else if (error.response && error.response.status === 500) {
          this.errorMessage = 'Внутренняя ошибка сервера';
        } else {
          this.errorMessage = 'Неизвестная ошибка';
        }
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="sign">
      <img src="../assets/img/LogoSign.png" alt="" />
      <h3 class="title">Регистрация</h3>
      <input
        type="text"
        placeholder="Никнейм"
        class="input"
        v-model="register.nickname"
        required="true"
      />
      <input
        type="text"
        placeholder="email"
        class="input"
        v-model="register.email"
        required="true"
      />
      <input
        type="password"
        placeholder="Пароль"
        class="input"
        v-model="register.password"
        required="true"
      />
      
      <a href="/sign-in" class="link">Войти</a>
      <button class="signIn" @click="submitForm">Регистрация</button>
    </div>

    <div class="text">
      <h1>Aurorix - идеальный хостинг для вашего <span>сервера</span></h1>
      <a href="/" class="link-back">вернуться на главную</a>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  margin: 10% auto;
  align-items: center;
}

.sign {
  background-color: rgba(30, 30, 30, 0.6);
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 50%;
  padding-top: 2%;
  border-radius: 10px;
}

.sign img {
  width: max-content;
  margin: 0 auto;
  width: calc(max-content + 2vw);
}

.title {
  color: white;
  font-size: 20px;
  font-weight: lighter;
}
.input {
  width: 70%;
  margin: 2% auto;
  background: none;
  border: 1px solid #454545;
  color: #454545;
  height: 3.5rem;
  border-radius: 12px;
  outline: none;
  font-size: larger;
}

.input::placeholder {
  text-align: center;
}

.link {
  color: #454545;
  text-decoration: none;
}

.signIn {
  width: 40%;
  margin: 2% auto;
  background: none;
  border: 1.5px solid #c173ff;
  height: 2.5rem;
  color: #c173ff;
  border-radius: 10px;
  cursor: pointer;
}

.discord {
  border-color: #7673ff;
  color: #7673ff;
}

.text {
  width: 40%;
}

.text h1 span {
  color: #e375ff;
}

.link-back {
  color: #afafaf;
  text-decoration: none;
}
</style>
