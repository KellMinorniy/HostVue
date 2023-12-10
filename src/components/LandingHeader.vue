<script>

</script>

<template>
<header class="header" id="start">
        <div class="nav">
            <div class="logo"><a href="#start" class="logo-text">Aurorix</a></div>
            <div class="link">
                <a href="/main" class="nav-link">главная</a>
                <a href="#" class="nav-link">тарифы</a>
                <a href="#" class="nav-link">новости</a>
                <a href="#" class="nav-link">поддержка</a>
            </div>
        </div>
        <div class="sign">
            <button class="btn-sign" id="btn-in"><a href="sign-in" class="sign-link">Войти</a></button>
            <button class="btn-sign" id="btn-up"><a href="sign-up" class="sign-link">Регистрация</a></button>
        </div>
    </header>
</template>

<style scoped>
.header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: rgba(239, 173, 255, 0.02);
    height: 65px;
    position: sticky;
}

.nav {
    display: flex;
    flex-direction: row;
    width: 50%;
    padding-left: 5%;
    align-items: center;
}

.logo-text {
    color: #fff;
    font-weight: 500;
    font-size: 28px;
    text-decoration: none;
}

.link {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 10%;
}

.nav-link {
    margin: 10%;
    text-decoration: none;
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.nav-link:hover {
    transform: translateY(5px);
    transition: 0.5s;
}

.sign {
    display: flex;
    flex-direction: row;
    width: 20%;
}

.btn-sign {
    border-radius: 16px;
    border: 1px solid #CA7FFD;
    background: none;
    margin: 2%;
    cursor: pointer;
}

#btn-in {
    width: 90px;
    height: 35px;
    flex-shrink: 0;
}

#btn-up {
    width: 135px;
    height: 35px;
    flex-shrink: 0;
}

.sign-link {
    color: #CA7FFD;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-decoration: none;
}

@media(max-width:768px) {

    .nav {
        flex-direction: column;
        margin: 0;
        width: 100%;
    }

    .link {
        width: 100%;
        margin: 2% auto;
        justify-content: space-around;
    }

    .nav-link {
        margin: 0;
    }

    .sign {
        margin: 2% auto;
        width: 100%;
        justify-content: space-around;
    }

    .header {
        flex-direction: column;
        height: max-content;
        padding: 0;
        width: 100%;
    }
}
</style>