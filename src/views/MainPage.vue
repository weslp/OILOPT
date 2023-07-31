<script>
import axios from 'axios';
axios.defaults.withCredentials = true;
export default {
    data() {
        return{
            products: [],
            images: {
                "oil-red": '../assets/products/oil-red.png',

            }
        }
    },
    mounted() {
        this.loadThisProducts();
        window.scrollTo(0, 0);
    },
    methods: {
        async loadThisProducts() {
            let response = await axios.get('/load-popular-products');
            this.products = response.data;
        },
        navigator(index) {
            this.$router.push({
                name: index
            })
        },
        open_mail() {
            window.open(`mailto:volgasred@mail.ru?subject=Заказ поставки&body=Ответьте мне на эту почту, пожалуйста!`);
        },
        async open_product(index){
            this.$router.push({name: 'Товар', params: {product: index}})
        }
    }
}

</script>


<template>
    <section class="info-section">
        <div class="shop-info-page">
            <h3>Магазин оптовых поставок Средняя Волга</h3>
            <p>Оптовые поставки автозапчастей для легковых и грузовых автомобилей российского производства</p>
            <button type="button" @click="navigator('Каталог')">Перейти в каталог</button>
            <img src="../assets/shop-info-image.svg" alt="shop-info-image">
        </div>
        <div class="help-info-page">
            <div class="page-one">
                <h3>Доставка и оплата</h3>
                <a class="yacor" href="#quest-section">Подробнее</a>
                <img src="../assets/box.svg" alt="box">
            </div>
            <div class="page-two">
                <h3>Отзывы клиентов</h3>
                <a class="yacor" href="#client-section">Подробнее</a>
                <img src="../assets/people.svg" alt="people">
            </div>
        </div>
    </section>

    <section id="quest-section" class="quest-section">
        <h2>Как мы работаем?</h2>
        <div class="quest-div">
            <div class="info-div-quest">
                <h3>Работаем в 4 этапа</h3>
                <ul>
                    <li>Выберите товар</li>
                    <li>Созвонитесь с менеджером</li>
                    <li>Подготовка товара к загрузке</li>
                    <li>Получение товара</li>
                </ul>
                <img src="../assets/numbers.svg" alt="numbers">
            </div>
            <div class="main-quest-content">
                <h3>Оставьте заявку</h3>
                <p>Наши специалисты подберут для вас подходящий товар</p>
                <button type="button" @click="open_mail()">Оставить заявку</button>
                <img src="../assets/track.svg" alt="track">
            </div>
        </div>
    </section>

    <section class="popular-products-page">
        <h3>Популярные товары</h3>
        <div class="popular-products-frame">
            <a class="popular-products-item" v-for="(item, index) in products" @click="open_product(item._id)">
                <img v-if="item.image == 'oil-red.png'"  src="../assets/products/oil-red.png" alt="product">
                <img v-if="item.image == 'oil-white.png'"  src="../assets/products/oil-white.png" alt="product">
                <img v-if="item.image == 'oil-black.png'"  src="../assets/products/oil-black.png" alt="product">
                <img v-if="item.image == 'lubricant-big.png'"  src="../assets/products/lubricant-big.png" alt="product">
                <img v-if="item.image == 'lubricant-small.png'"  src="../assets/products/lubricant-small.png" alt="product">
                <img v-if="item.image == 'liquid-green.png'"  src="../assets/products/liquid-green.png" alt="product">
                <img v-if="item.image == 'liquid-blue.png'"  src="../assets/products/liquid-blue.png" alt="product">
                <p>{{item.title}}</p>
            </a>
        </div>
    </section>

    <section id="client-section" class="client-section">
        <h3>Отзывы клиентов</h3>
        <div class="div-client">
            <div class="div-client-item">
                <h5>Матюшкин Иван</h5>
                <h6>Предприниматель</h6>
                <p>Ребята молодцы, доставили в Уфу за пару дней. Менеджеры были  всегда на связи и хорошо консультировали</p>
            </div>
            <div class="div-client-item">
                <h5>Матюшкин Иван</h5>
                <h6>Предприниматель</h6>
                <p>Ребята молодцы, доставили в Уфу за пару дней. Менеджеры были  всегда на связи и хорошо консультировали</p>
            </div>
            <div class="div-client-item">
                <h5>Матюшкин Иван</h5>
                <h6>Предприниматель</h6>
                <p>Ребята молодцы, доставили в Уфу за пару дней. Менеджеры были  всегда на связи и хорошо консультировали</p>
            </div>
        </div>
    </section>

    <section id="map-section" class="map-section">
        <h3>Как до нас добраться?</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2455.163708142364!2d47.77961837722281!3d52.022115271934865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x416b8ee59ff4de23%3A0xb01557bcb6457f03!2z0YPQuy4g0JvQtdC90LjQvdCwLCAxMjAsINCR0LDQu9Cw0LrQvtCy0L4sINCh0LDRgNCw0YLQvtCy0YHQutCw0Y8g0L7QsdC7LiwgNDEzODUz!5e0!3m2!1sru!2sru!4v1690635361383!5m2!1sru!2sru" 
            width="100%" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </section>

    <section class="contact-section">
        <div class="main-contacts">
            <div>
                <div class="contact-item">
                    <img src="../assets/Phone-blue.svg" alt="Phone">
                    <p>+7 (495) 502-555-555</p>
                </div>
                <div class="contact-item">
                    <img src="../assets/Phone-blue.svg" alt="Phone">
                    <p>+7 (495) 502-555-555</p>
                </div>
            </div>
            <div>
                <div class="contact-item">
                    <img src="../assets/position.svg" alt="position">
                    <p>г.Балаково</p>
                </div>
                <div class="contact-item">
                    <img src="../assets/mail.svg" alt="mail">
                    <p>volgasred@mail.ru</p>
                </div>
            </div>
        </div>
        <button type="button" @click="open_mail()">Оставить заявку</button>
    </section>
</template>


<style>
section{
    padding: 0 14rem;
    background-color: #F5F5F5;
}
.info-section{
    display: flex;
    gap: 7.8rem;
    padding-top: 7.9rem;
}
.shop-info-page{
    overflow: hidden;
    position: relative;
    padding: 6rem 0 0 6rem;
    width: 98.3rem;
    height: 56.1rem;
    border-radius: 1.5rem;
    background: #3378D3;
    & h3 {
        width: 82rem;
        color: #F5F5F5;
        font-size: 5.5rem;
        font-weight: 600;
        pointer-events: none;
        letter-spacing: 00.15rem;
    }
    & p {
        pointer-events: none;
        width: 63rem;
        margin-top: 6rem;
        color: #F5F5F5;
        text-align: justify;
        font-weight: 500;
        font-size: 3rem;
    }
    & button {
        width: 31.4rem;
        height: 9.5rem;
        border-radius: 1.9rem;
        color: #000;
        font-size: 2rem;
        background: #FFF;
        transition: background .2s;
        margin-top: 6rem;
        &:hover{
            background: #F5F5F5;
            cursor: pointer;
        }
    }
    & img{
        position: absolute;
        pointer-events: none;
        right: 2rem;
        width: 24.0018rem;
        height: 40.8452rem;
        bottom: -8.7rem;

    }
}
.help-info-page {
    & div {
        position: relative;
        background: #FFF;
        border-radius: 1.5rem;
        width: 57.9rem;
        padding: 3.4rem 0 0 4.3rem;
        overflow: hidden;

        & h3{
            color: #000;
            font-size: 3rem;
            font-weight: 600;
            width: 16.4rem;
        }
        & a{
            position: absolute;
            bottom: 3.4rem;
            left: 4.3rem;
            color: rgba(0, 0, 0, 0.60);
            font-size: 2rem;
        }
        & img {
            position: absolute;
            right: 2rem;
            pointer-events: none;
        }
        & img[alt='box'] {
            width: 29.2rem;
            height: 29rem;
            bottom: 1.6rem;
        }
        & img[alt='people'] {
            width: 31.7328rem;
            height: 22.6669rem;
            bottom: -4.3rem;
        }
    }
}
.page-one{
    height: 32.1rem;
}
.page-two{
    margin-top: 2.3rem;
    height: 21.7rem;
}

.quest-section{
    padding-top: 11.5rem;
    & h2{
        color: #252525;
        font-weight: 700;
        font-size: 5rem;
        padding-bottom: 5.6rem;
    }
}
.quest-div{
    position: relative;
    overflow: hidden;
    width: 100%;
    display: flex;
    height: 75.3rem;
    border-radius: 1.5rem;
    background: #FFF;
    & .info-div-quest{
        width: 88.4rem;
        height: 75.3rem;
        border-radius: 1.5rem;
        background: #3378D3;
    }
    & .info-div-quest, .main-quest-content{
        padding: 4.5rem 0 0 6rem;
        & h3{
            color: #FFF;
            font-size: 5rem;
            font-weight: 600;
            margin-bottom: 2rem;
        }
    }
    & .main-quest-content {
        & h3{
            color: #252525;
        }
        & p{
            color: #252525;
            font-size: 3rem;
            width: 59.5rem;
        }
        & button{
            width: 29.3rem;
            height: 7.3rem;
            border-radius: 1.9rem;
            background: #0060E0;
            box-shadow: 0 .4rem .6rem 0 rgba(0, 0, 0, 0.25);
            color: #FFF;
            font-size: 2rem;
            cursor:pointer;
            margin-top: 2.9rem;
            transition: background .2s;
            &:hover{
                background: #3378D3;
            }
        }
        & img{
            position: absolute;
            width: 74rem;
            height: 58rem;
            bottom: -13rem;
            right: -2rem;
        }
    }
    & .info-div-quest {
        position: relative;
        & li{
            color: #FFF;
            font-size: 3.4rem;
            margin-bottom: 2rem;
            margin-left: 4rem;
            &:first-child{
                margin-top: 10rem;
            }
        }
        & img{
            position: absolute;
            right: 4rem;
            bottom: 3rem;
            pointer-events: none;
            width: 47.8rem;
            height: 10.5rem;
        }
    }
}

.popular-products-page{
    padding-top: 11.5rem;
    & h3{
        color: #252525;
        font-weight: 700;
        font-size: 5rem;
        padding-bottom: 5.6rem;
    }
    & .popular-products-frame{
        display: flex;
        flex-wrap: wrap;
        gap: 11.1rem;
        & .popular-products-item {
            cursor: pointer;
            & img {
                width: 32.5rem;
                height: 32.5rem;
                pointer-events: none;
            }
            & p {
                color: #000;
                text-align: center;
                font-size: 3rem;
                margin-top: 2rem;
            }
        }
    }
}

.client-section{
    padding-top: 11.5rem;
    & h3{
        color: #252525;
        font-weight: 700;
        font-size: 5rem;
        padding-bottom: 5.6rem;
    }
    & .div-client{
        display: flex;
        gap: 7rem;
        & .div-client-item{
            width: 50rem;
            height: 20rem;
            border-radius: 1.5rem;
            background: #FFF;
            padding: 3.3rem 0 0 2.6rem;
            & h5{
                color: #000;
                font-size: 2rem;
                font-weight: 600;
            }
            & h6{
                color: rgba(0, 0, 0, 0.50);
                font-size: 1.6rem;
            }
            & p{
                color: #000;
                font-size: 2rem;
                width: 41.9rem;
                margin-top: 2rem;
            }
        }
    }
}

.map-section{
    padding-top: 11.5rem;
    & h3{
        color: #252525;
        font-weight: 700;
        font-size: 5rem;
        padding-bottom: 5.6rem;
    }
    & iframe {
        height: 53.5rem;
        border-radius: 1.5rem;
    }
}

.contact-section{
    position: relative;
    padding-top: 5.1rem;
    padding-bottom: 5.1rem;
    & .main-contacts {
        display: flex;
        flex-wrap: wrap;
        width: 70rem;
        gap: 5rem;
        & .contact-item {
            display: flex;
            gap: 3rem;
            margin-bottom: 2rem;
            & p{
                color: #000;
                font-size: 2.4rem;
                font-weight: 600;
            }
            & img{
                width: 2.6rem;
                height: 3.2rem;
            }

        }
    }
    & button{
        position: absolute;
        right: 14rem;
        top: 5.1rem;
        width: 29.3rem;
        height: 7.3rem;
        background: #0060E0;
        box-shadow: 0 .4rem .6rem 0 rgba(0, 0, 0, 0.25);
        color: #FFF;
        font-size: 2.4rem;
        cursor: pointer;
        transition: background .2s;
        &:hover{
            background: #3378D3;
        }
    }
}


@media(max-width: 768px) {
    section{
        padding: 0 2.7rem 0 2.8rem;
        background-color: #F5F5F5;
    }
    .info-section{
        display: flex;
        flex-wrap: wrap;
        gap: 1.6rem;
        padding-top: 2.8rem;
    }
    .shop-info-page{
        padding: 2.3rem 0 0 2.2rem;
        width: 100%;
        height: 20.2rem;
        border-radius: 1rem;
        & h3 {
            width: 26.6rem;
            color: #F5F5F5;
            font-size: 2rem;
            letter-spacing: 0rem;
        }
        & p {
            width: 26.5rem;
            margin-top: 1.2rem;
            font-size: 1.3rem;
        }
        & button {
            width: 13.6rem;
            height: 3.4rem;
            border-radius: 1rem;
            font-size: 1rem;
            margin-top: 1.9rem;
        }
        & img{
            position: absolute;
            pointer-events: none;
            right: 1rem;
            width: 8.2rem;
            height: 14.2rem;
            bottom: -7rem;

        }
    }
    .help-info-page {
        width: 100%;
        & div {
            border-radius: 1rem;
            width: 100%;
            padding: 2.1rem 0 0 2.2rem;

            & h3{
                font-size: 2rem;
                width: 17.1rem;
            }
            & a{
                bottom: 1.6rem;
                left: 2.2rem;
                font-size: 1.2rem;
            }
            & img {
                position: absolute;
                pointer-events: none;
            }
            & img[alt='box'] {
                width: 14.2rem;
                height: 14.1rem;
                right: -0.5rem;
                bottom: -4.7rem;
            }
            & img[alt='people'] {
                width: 18.7132rem;
                height: 13.3669rem;
                bottom: -2.2rem;
                right: -2.1rem;
            }
        }
    }
    .page-one, .page-two{
        height: 13.2rem;
        margin-top: 0;
    }
    .page-one {
        margin-bottom: 1.6rem;
    }

    .quest-section{
        padding-top: 5.3rem;
        & h2{
            font-size: 2rem;
            padding-bottom: 1.8rem;
        }
    }
    .quest-div{
        display: block;
        height: 42.6rem;
        border-radius: 1rem;
        & .info-div-quest{
            width: 100%;
            height: 23rem;
            border-radius: 1rem;
        }
        & .info-div-quest, .main-quest-content{
            padding: 1.8rem 0 0 2.3rem;
            & h3{
                font-size: 2rem;
                margin-bottom: .9rem;
            }
        }
        & .main-quest-content {
            & p{
                font-size: 1.3rem;
                width: 23.7rem;
            }
            & button{
                width: 13.6rem;
                height: 3.4rem;
                border-radius: 1rem;
                box-shadow: none;
                font-size: 1rem;
                margin-top: 1.3rem;
            }
            & img{
                position: absolute;
                width: 28rem;
                height: 12rem;
                bottom: -2rem;
                right: -4rem;
            }
        }
        & .info-div-quest {
            & li{
                font-size: 1.3rem;
                margin-bottom: .4rem;
                margin-left: 2rem;
                &:first-child{
                    margin-top: 1.6rem;
                }
            }
            & img{
                position: absolute;
                right: 1.6rem;
                bottom: .6rem;
                pointer-events: none;
                width: 20rem;
                height: 6rem;
            }
        }
    }

    .popular-products-page{
        padding-top: 5.3rem;
        & h3{
            font-size: 2rem;
            padding-bottom: 1.8rem;
        }
        & .popular-products-frame{
            width: 100%;
            gap: 1.3rem;
            & .popular-products-item {
                & img {
                    width: 14.8rem;
                    height: 14.8rem;
                }
                & p {
                    display: none;
                    font-size: 3rem;
                    margin-top: 2rem;
                }
            }
        }
    }

    .client-section{
        padding-top: 5.3rem;
        & h3{
            font-size: 2rem;
            padding-bottom: 1.8rem;
        }
        & .div-client{
            width: 100%;
            gap: 1.2rem;
            display: flex;
            flex-wrap: wrap;
            & .div-client-item{
                width: 100%;
                height: 11.2rem;
                border-radius: 1rem;
                padding: .9rem 0 0 2.3rem;
                & h5{
                    font-size: 1.2rem;
                }
                & h6{
                    font-size: 1rem;
                }
                & p{
                    font-size: 1.2rem;
                    width: 27rem;
                    margin-top: 1.2rem;
                }
            }
        }
    }

    .map-section{
        padding-top: 5.3rem;
        & h3{
            font-size: 2rem;
            padding-bottom: 1.8rem;
        }
        & iframe {
            height: 21.5rem;
            border-radius: 1rem;
        }
    }

    .contact-section{
        padding-top: 2rem;
        padding-bottom: 2rem;
        & .main-contacts {
            width: 33rem;
            gap: 1.2rem;
            & .contact-item {
                gap: .6rem;
                margin-bottom: 1.6rem;
                & p{
                    font-size: 1.3rem;
                }
                & img{
                    width: 1.2rem;
                    height: 1.7rem;
                }

            }
        }
        & button{
            display: none;
            width: 13.6rem;
            height: 3.4rem;
            border-radius: 1rem;
            box-shadow: none;
            font-size: 1.3rem;
        }
    }
}
@media (min-width: 500px) and (max-width: 768px) {
    .popular-products-page{
        & .popular-products-frame{
            & .popular-products-item {
                & img {
                    width: 21.6rem;
                    height: 21.6rem;
                }
            }
        }
    }      
    .client-section{
        & .div-client{
            & .div-client-item{
                height: 9.6rem;
                border-radius: 1rem;
                padding: 1.2rem 0 0 2.3rem;
                & p{
                    font-size: 1.2rem;
                    width: 40rem;
                    margin-top: 1.2rem;
                }
            }
        }
    }
}
</style>