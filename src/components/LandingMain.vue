<script>
export default {
    data: () => {
        return {
            typeValue: '',
            typeStatus: false,
            typeArray: ['Cервера', 'Веб-сайта', 'Бота'],
            typingSpeed: 200,
            erasingSpeed: 100,
            newTextDelay: 2000,
            typeArrayIndex: 0,
            charIndex: 0
        }
    },
    methods: {
        typeText() {
            if(this.charIndex < this.typeArray[this.typeArrayIndex].length){
                if(!this.typeStatus)
                this.typeStatus = true;

                this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex)
                this.charIndex += 1;

                setTimeout(this.typeText, this.typingSpeed);
            }
            else {
                this.typeStatus = false;
                setTimeout(this.eraseText, this.newTextDelay)
            }
        },
        eraseText() {
            if(this.charIndex > 0) {
                if(!this.typeStatus)
                this.typeStatus = true;

            this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
            this.charIndex -= 1;
            setTimeout(this.eraseText, this.erasingSpeed);
            }
            else {
                this.typeStatus = false;
                this.typeArrayIndex += 1;
                if(this.typeArrayIndex >= this.typeArray.length)
                this.typeArrayIndex = 0;

                setTimeout(this.typeText, this.typingSpeed + 1000)
            }
        }
    },
    created() {
        setTimeout(this.typeText, this.newTextDelay + 200);
    }
}
</script>

<template>
<main>
        <div class="wrapper">
            <div class="main-top">
                <div class="top-left">
                    <h1>Идеальный хостинг
                        для вашего
                        <span id="typed-text">{{ typeValue }}</span>
                        <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
                    </h1>   
                        <div id="type">
                            
                        </div> 
                    <p>воплощайте идеи, реализуйте свои проекты вместе с нами!</p>
                    <button class="btnMain"><a href="#">Присоединиться </a><i class="fa-solid fa-arrow-right"></i></button>
                </div>
                <div class="top-right">
                    <img src="../assets/img/mainPhoto.png" alt="" class="img-main">
                </div>
            </div>

            <!-- main-middle -->
            <div class="main-middle">
                <h1 class="title">Почему мы?</h1>
                <div class="card-group">
                    <div class="card">
                        <div class="card-title">
                            <div class="card-img"><img src="../assets/img/Flame.png" alt=""  class="icon-card"></div>
                            <div class="card-name">Быстрые серверы</div>
                        </div>
                        <div class="card-content">Мы используем самые современные процессоры высокой частоты которые
                            гарантируют максимальную производительность вашего сервера.</div>
                    </div>

                    <div class="card">
                        <div class="card-title">
                            <div class="card-img"><img src="../assets/img/shield.png" alt=""  class="icon-card"></div>
                            <div class="card-name">Защита от DDoS</div>
                        </div>
                        <div class="card-content">Все серверы имеют сеть с низкой
                            задержкой и каналом в 1 Гбит/с. На
                            платных тарифах стоит мощная 
                            защита от DDoS-атак</div>
                    </div>

                    <div class="card">
                        <div class="card-title">
                            <div class="card-img"><img src="../assets/img/Computer.png" alt="" class="icon-card"></div>
                            <div class="card-name">Надежный дата-центр</div>
                        </div>
                        <div class="card-content">Серверы раземещены в центре обработки
                            данных “InterXion”, который соответствует
                            самым высоким стандартам с полной
                            физической и аппаратной защитой.</div>
                    </div>

                    <div class="card"  id="last">
                        <div class="card-title">
                            <div class="card-img"><img src="../assets/img/Chat.png" alt="" class="icon-card"></div>
                            <div class="card-name">Опреативная выдержка</div>
                        </div>
                        <div class="card-content">Наша поддержка готова помочь вам
                            в любое время суток и 
                            проконсультировать вас по любому
                            вопросу. Работаем 24/7</div>
                    </div>
                </div>
            </div>

            <!-- info -->
            <div class="main-info">
                <h1 class="title">Немного статистики:</h1>
                <div class="info-main">
                    <div class="info">
                        <h1 class="number">4,681</h1>
                        <h1 class="text">Пользователей зарегистрировано</h1>
                    </div>
                    <div class="info">
                        <h1 class="number">4,306</h1>
                        <h1 class="text">Хостингов на сервере</h1>
                    </div>
                    <div class="info">
                        <h1 class="number">735</h1>
                        <h1 class="text">Игроков онлайн</h1>
                    </div>
                    <div class="info">
                        <h1 class="number">74</h1>
                        <h1 class="text">Платных серверов</h1>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style>
.wrapper {
    width: 95%;
    margin: 0 auto;
}

.main-top {
    margin-top: 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
}

.top-left {
    width: 50%;

}

.top-left h1 {
    color: white;
    font-size: 45px;
    margin-bottom: 0;
}

.top-left h1 span {
    color: #CA7FFD;
}

span.cursor {
    display: inline-block;
    margin-left: 3px;
    width: 4px;
    background-color: #fff;
    animation: cursorBlink 1s infinite;
}

span.cursor.typing {
    animation: none;
}

@keyframes cursorBlink {
    49% { background-color: #fff; }
    50%{ background-color: transparent; } 
    99% { background-color: transparent; }
}

.top-left p {
    color: #A7A7A7;
    margin-top: 0;
}

.btnMain {
    border-radius: 32px;
    background: #CA7FFD;
    width: 200px;
    height: 50px;
    flex-shrink: 0;
    align-items: center;
    border: none;
    display: flex;
    justify-content: center;
    vertical-align: middle;
    text-align: center;
    justify-content: center;
}

.btnMain a {
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-decoration: none;
    display: flex;
    align-items: center;
    vertical-align: middle;
    margin-right: 0;
    margin-bottom: 2%;
}

.btnMain i {
    color: white;
    margin-left: 0;
    margin-left: 2%;
}

.top-right {
    display: flex;
    justify-content: flex-end;
}

.img-main {
    width: 70%;
}

@media(max-width: 768px) {
    .top-left {
        width: max-content;
        width: 100%;
        text-align: center;
    }

    .top-left h1 {
        font-size: x-large;
    }

    .top-left p {
        font-size: small;
    }

    .btnMain {
        margin: 0 auto;
    }

    .btnMain a {
        font-size: large;
    }

    .top-right {
        display: none;
    }
}

@media(min-width:768px) and (max-width:900px) {
    .top-left {
        width: max-content;
        width: 100%;
        text-align: center;
    }

    .btnMain {
        margin: 0 auto;
    }
}

/* main-middle */
.main-middle {
    margin-top: 5%;
}

.title {
    color: #fff;
}

.card-group {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
}

.card {
    display: flex;
    flex-direction: column;
    width: 30%;
}

.card-title {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}

.card-name {
    color: #fff;
    font-size: 26px;
    margin-left: 2%;
}

.card-content {
    color: #F0F0F0;
    margin-top: 1%;
}

#last {
    margin-top: 6%;
}

@media(max-width:768px) {
    .card-group {
        justify-content: flex-start;
        width: 100%;
    }

    .card {
        flex-direction: row;
        width: 100%;
        justify-content: space-around;
        margin-top: 5%;
        align-items: center;
    }

    .card-title {
        flex-direction: column-reverse;
        text-align: center;
    }

    .card-name {
        font-size: small;
    }

    .card-content {
        margin-left: 5%;
        font-size: small;
    }

    #last {
        margin-top: 5%;
    }
}

@media(min-width:768px) and (max-width:900px) {
    
}


.main-info {
    margin-top: 10%;
}

.info-main {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.info {
    display: flex;
    flex-direction: column;
}

.number {
    color: #F4B2FF;
    margin-bottom: 0;
    font-size: 40px;
}

.text {
    font-size: medium;
    margin-top: 0;
    color: #fff;
}

@media(max-width:768px) {
    .title {
        font-size: large;
    }

    .info-main {
        justify-content: space-between;
    }

    .info {
        margin: 1%;
        justify-content: flex-start;
    }



    .number {
        font-size: larger;
    }

    .text {
        font-size: smaller;
    }
}
</style>