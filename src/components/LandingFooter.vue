<script>

</script>

<template>
<footer class="footer">
        <div class="footer-left">
            <div class="logo-footer"><img src="../assets/img/logo footer.png" alt=""></div>
            <div class="payment">
                <div class="water">Aurorix, 2023.
                    Все права защищены.</div>
                <div class="pay">
                    <img src="../assets/img/mir.png" alt="">
                    <img src="../assets/img/Visa.png" alt="">
                    <img src="../assets/img/master.png" alt="">
                    <img src="../assets/img/payPal.png" alt="">
                    <img src="../assets/img/qiwi.png" alt="">
                </div>
            </div>
        </div>

        <div class="footer-right">
            <div class="main-nav">
                <h2 class="title-text">Главная</h2>
                <a href="" class="nav-footer">Главная страница</a>
                <a href="#" class="nav-footer">Тарифы</a>
                <a href="#" class="nav-footer">Новости</a>
                <a href="#" class="nav-footer">Поддержка</a>
                <a href="#" class="nav-footer">панель управления</a>
            </div>

            <div class="main-nav">
                <h2 class="title-text">Полезные ссылки</h2>
                <a href="#" class="nav-footer">Гайд по созданию сервера</a>
                <a href="#" class="nav-footer">Политика конфиденциальности</a>
                <a href="#" class="nav-footer">Договор оферты</a>
            </div>

            <div class="main-nav">
                <h2 class="title-text">Соц. сети</h2>
                <a href="https://discord.gg/aurorix" class="nav-footer">Discord</a>
                <a href="https://vk.me/aurorix" class="nav-footer">ВКонтакте</a>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    background-color: #1A1A1A;
    margin-top: 10%;
    padding: 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.footer-left {
    display: flex;
    width: 40%;
    flex-direction: row;
    justify-content: flex-start;
}

.payment {
    display: flex;
    flex-direction: column;
    align-content: space-around;
    height: max-content;
}

.pay {
    margin-top: 20%;
}

.water {
    color: #fff;
    font-weight: 500;
    font-size: 20px;
    width: 100%;
}

.footer-right {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 80%;
}

.main-nav {
    display: flex;
    flex-direction: column;
}

.title-text {
    text-transform: uppercase;
    color: #424242;
    margin-bottom: 0;
    font-size: 24px;
}

.nav-footer {
    color: #6C6C6C;
    text-decoration: none;
    margin-top: 3%;
}

.footer-bot {
    width: 100%;
    background-image: url(../img/footer.png);
    background-size: cover;
    height: max-content;
}

@media(max-width:768px) {

    .footer {
        flex-direction: column;
        display: none;
    }

    .footer-left {
        width: 100%;
    }

   
    .logo-footer img {
        width: 70%;
    }

    .title-text {
        font-size: small;
    }

    .nav-footer {
        font-size: small;
    }

    .water {
        font-size: small;
    }

    .pay img {
        width: 10%;
    }

    .pay {
        display: flex;
        align-items: center;
        width: max-content;
    }
}
</style>