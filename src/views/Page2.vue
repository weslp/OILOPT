<script>
import axios from 'axios';
axios.defaults.withCredentials = true;
export default {
    data() {
        return{
           info: {
            name: '',
            sity: '',
            tel: ''
           },
           error: ''
        }
    },
    methods: {
        open_mail_form() {
            if(this.info.name == '' || this.info.city == ''  || this.info.tel == '' ) return this.error = 'Заполните все данные!';
            window.open(`mailto:volgasred@mail.ru?subject=Поставка в г.${this.info.city}&body=Свяжитесь со мной по телефону ${this.info.tel} (${this.info.name})`);
        },
        async open_category(index) {
            if(!index) {
                this.$router.push({name: 'Каталог'})
                return;
            }
            this.$router.push({name: 'Товары категории', params: {category: index}})
          
        }
    }
}
</script>


<template>
    <section class="catalog-section">
        <h3>Каталог наших товаров</h3>
        <p>Товары, которые представлены на сайте указаны не все, за дополнительной информацией обращайтесь по телефону</p>
        <div class="main-catalog">
            <div @click='open_category("Моторные ГОСТ")' class="catalog-item">
                <h6>Моторные ГОСТ</h6>
                <img src="../assets/catalog/oil-red.svg" alt="oil-red">
            </div>
            <div @click='open_category("Моторные Евро")' class="catalog-item">
                <h6>Моторные Евро</h6>
                <img src="../assets/catalog/oil-red.svg" alt="oil-red">
            </div>
            <div @click='open_category("Гидравлические масла")' class="catalog-item">
                <h6>Гидравлические масла</h6>
                <img src="../assets/catalog/liquid-gray.svg" alt="liquid-gray">
            </div>
            <div @click='open_category("Индустриальные масла")' class="catalog-item">
                <h6>Индустриальные масла</h6>
                <img src="../assets/catalog/liquid-white.svg" alt="liquid-white">
            </div>
            <div @click='open_category("Трансмиссионные масла")' class="catalog-item">
                <h6>Трансмиссионные масла</h6>
                <img src="../assets/catalog/liquid-black.svg" alt="liquid-black">
            </div>
            <div @click='open_category("Охлаждающие жидкости")' class="catalog-item">
                <h6>Охлаждающие жидкости</h6>
                <img src="../assets/catalog/watter-green.svg" alt="watter-green">
            </div>
            <div @click='open_category("Смазки")' class="catalog-item">
                <h6>Смазки</h6>
                <img src="../assets/catalog/red.svg" alt="red">
            </div>
        </div>
    </section>

    <section class="form-list-section">
        <div class="main-list">
            <h4>Не нашли подходящий товар?</h4>
            <p>Ваш товар обязательно есть на нашем складе, вам нужно сделать запрос нашему менеджеру и мы вышлем вам коммерческое предложение</p>
            <img src="../assets/account.svg" alt="account">
        </div>
        <div class="form-main" id="main-form-section">
            <div class="main-text-form">
                <h3>Оставьте заявку нашему менеджеру</h3>
                <p>Нужна срочная поставка? <span>Звоните!</span></p>
                <h6>8(800)555-45-54</h6>
            </div>
            <img src="../assets/shop-info-image.svg" alt="...">
            <div class="form-selected">
                <form action="#">
                    <label for="form_1">
                        <p>ФИО</p>
                        <input v-model="info.name" type="text" id="form_1">
                    </label>
                    <label for="form_3">
                        <p>Телефон</p>
                        <input v-model="info.tel" type="text" id="form_3">
                    </label>
                    <label for="form_4">
                        <p>Город</p>
                        <input v-model="info.city" type="text" id="form_4">
                    </label>
                </form>
                <button type="button" @click="open_mail_form()">Оставить заявку</button>
                <p class="error" if="error">{{ error }}</p>
            </div>
        </div>
    </section>
</template>


<style>
section{
    padding: 0 14rem;
    background-color: #F5F5F5;
}
.catalog-section{
    padding-top: 7.9rem;
    & h3{
        color: #252525;
        font-size: 5rem;
        font-weight: 600;
    }
    & p{
        color: #252525;
        font-size: 3rem;
        width: 105rem;
        margin-top: 0.9rem;
    }
    & .main-catalog{
        margin-top: 15rem;
        display: flex;
        flex-wrap: wrap;
        gap: 5rem;
        & .catalog-item{
            width: 79rem;
            height: 22rem;
            border-radius: 2.7rem;
            background: #FFF;
            cursor: pointer;
            margin-bottom: 5.8rem;
            position: relative;
            color: #000;
            display: flex;justify-content: start;align-items: center;
            & h6{
                pointer-events: none;
                font-size: 4rem;
                margin-left: 7.4rem;
                width: 41rem;
            }
            & img{
                pointer-events: none;
                position: absolute;
                right: 2rem;
                bottom: 0;
                height: 26rem;
            }
            &:hover{
                background: linear-gradient(90deg, #3378D3 0%, #FFF 72.41%, #FFF 100%);
                color: #FFF;
            }
        }
    }
}

@media (max-width: 768px) {
    section{
        padding: 0 2.7rem 0 2.8rem;
        background-color: #F5F5F5;
    }
    .catalog-section{
        padding-top: 2.8rem;
        width: 100%;
        & h3{
            font-size: 2rem;
        }
        & p{
            font-size: 1.3rem;
            width: 30rem;
            margin-top: 0.9rem;
        }
        & .main-catalog{
            margin-top: 5rem;
            gap: 1rem;
            & .catalog-item{
                width: 100%;
                height: 12rem;
                border-radius: 1rem;
                margin-bottom: 2rem;
                & h6{
                    font-size: 1.6rem;
                    margin-left: 2rem;
                    width: 16rem;
                }
                & img{
                    right: .6rem;
                    height: 13rem;
                }
            }
        }
    }
}
@media (min-width: 500px) and (max-width: 768px) {
    .catalog-section{
        & p{
            font-size: 1.3rem;
            width: 40rem;
            margin-top: 0.9rem;
        }
        & .main-catalog{
            & .catalog-item{
                height: 14rem;
                margin-bottom: 2.4rem;
                & h6{
                    font-size: 1.6rem;
                    margin-left: 3rem;
                    width: 16rem;
                }
                & img{
                    right: 4rem;
                    height: 16rem;
                }
            }
        }
    }
}

.form-list-section{
    padding-top: 7.9rem;
    padding-bottom: 7.9rem;
    & .main-list{
        width: 100%;
        height: 25.5rem;
        position: relative;
        border-radius: 2.7rem;
        background: #FFF;
        padding: 5rem 0 0 6rem;
        overflow: hidden;
        & h4{
            color: #000;
            font-size: 4rem;
            font-weight: 600;
        }
        & p{
            color: #000;
            font-size: 3rem;
            margin-top: 2rem;
            width: 123.4rem;
        }
        & img{
            position: absolute;
            pointer-events: none;
            right: 3rem;
            width: 21.5rem;
            height: 35.9rem;
            bottom: -7rem;
        }
    }
    & .form-main{
        width: 100%;
        height: 83.1rem;
        border-radius: 2.7rem;
        background: #3378D3;
        margin-top: 12rem;
        position: relative;
        overflow: hidden;
        display: flex;gap:0;
        & img{
            width: 24rem;
            height: 40.8rem;
            position: absolute;
            bottom: -5.6rem;
            left: 60.4rem;
        }
        & .main-text-form{
            height: 100%;
            width: 78.5rem;
            padding: 8rem 0 0 9rem;
            & h3{
                color: #FFF;
                width: 45rem;
                font-size: 4rem;
            }
            & p{
                color: #FFF;
                margin-top: 10rem;
                font-size: 5rem;
                width: 62rem;
                & span{
                    text-decoration: underline solid rgb(255, 255, 255) .6rem;
                }
            }
            & h6{
                color: #FFF;
                margin-top: 25rem;
                font-size: 5rem;
            }
        }
        & .form-selected{
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 5;
            border-radius: 2.7rem;
            background: #FFF;
            padding: 9rem 0 0 6rem;
            & p{
                color: #2F2F2F;
                font-size: 2rem;
            }
            & input{
                margin-top: .1rem;
                width: 72.6rem;
                margin-bottom: 2rem;
                height: 8.2rem;
                color: #2F2F2F;
                font-size: 3rem;
                padding-left: 3rem;
                border-radius: 1.8rem;
                background: #FFF;
                box-shadow: 0 .4rem 1.4rem 0 rgba(24, 65, 83, 0.25) inset;
            }
            & button{
                width: 37.7rem;
                height: 9.4rem;
                margin-top: 5rem;
                color: #FFF;
                font-size: 2rem;
                cursor: pointer;
                background: #3378D3;
                box-shadow: 0 .4rem .6rem 0 rgba(0, 0, 0, 0.25);
            }
            & .error{
                color: #eb5454;
                margin-top: 1rem;
                font-size: 2rem;
            }
        }
    }
}
@media (max-width: 768px) {
    .form-list-section{
        padding-top: 2.8rem;
        padding-bottom: 2.8rem;
        & .main-list{
            height: 16rem;
            border-radius: 1rem;
            padding: 2rem 0 0 2rem;
            & h4{
                font-size: 2rem;
            }
            & p{
                font-size: 1.3rem;
                margin-top: .9rem;
                width: 26rem;
            }
            & img{
                display: none;
            }
        }
        & .form-main{
            height: 50rem;
            border-radius: 1rem;
            margin-top: 2rem;
            flex-wrap: wrap; 
            gap:0;
            & img{
                display: none; 
            }
            & .main-text-form{
                height: 20rem;
                width: 78.5rem;
                padding: 2rem 0 0 2rem;
                & h3{
                    width: 25rem;
                    font-size: 2rem;
                }
                & p{
                    margin-top: 2rem;
                    font-size: 1.6rem;
                    width: 20rem;
                    & span{
                        text-decoration: underline solid rgb(255, 255, 255) .3rem;
                    }
                }
                & h6{
                    margin-top: 2rem;
                    font-size: 2rem;
                }
            }
            & .form-selected{
                width: 100%;
                height: 100%;
                border-radius: 1rem;
                padding: 2rem 0 0 2rem;
                & p{
                    font-size: 1.3rem;
                }
                & input{
                    width: 90%;
                    margin-bottom: 1rem;
                    height: 4rem;
                    font-size: 1.6rem;
                    padding-left: 2rem;
                    border-radius: 1rem;
                    box-shadow: 0 .4rem 1.4rem 0 rgba(24, 65, 83, 0.25) inset;
                }
                & button{
                    width: 18rem;
                    height: 4rem;
                    margin-top: 1rem;
                    font-size: 1.3rem;
                    box-shadow: none;
                    border-radius: 1rem;
                }
                & .error{
                    margin-top: .5rem;
                    font-size: 1rem;
                }
            }
        }
    }
}
@media (min-width: 500px) and (max-width: 768px) {
    .form-list-section{
        padding-top: 2.8rem;
        & .main-list{
            height: 14rem;
            border-radius: 1rem;
            padding: 2rem 0 0 2rem;
            & h4{
                font-size: 2rem;
            }
            & p{
                font-size: 1.3rem;
                margin-top: .9rem;
                width: 26rem;
            }
            & img{
                display: block;
                right: 1rem;
                width: 12rem;
                height: 16rem;
                bottom: -4rem;
            }
        }
    }
}
</style>