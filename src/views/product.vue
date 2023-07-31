

<script>
import axios from 'axios';
axios.defaults.withCredentials = true;
export default {
    data() {
        return{
            product: {},
            info: {
                name: '',
                sity: '',
                tel: ''
            },
           error: ''
        }
    },
    mounted() {
        this.loadProduct();
        window.scrollTo(0, 0);
    },
    methods: {
        open_mail_form() {
            if(this.info.name == '' || this.info.city == ''  || this.info.tel == '' ) return this.error = 'Заполните все данные!';
            window.open(`mailto:volgasred@mail.ru?subject=Поставка в г.${this.info.city}&body=Свяжитесь со мной по телефону ${this.info.tel} (${this.info.name})`);
        },
        async loadProduct() {
            if(!this.$route.params.product) return this.$router.push({name: 'Каталог'});
            let response = await axios.get('/save-a-product', {params: {'product': this.$route.params.product}});
            try {
                if (response.data == false) {
                this.$router.push({name: 'Каталог'})
            } else{
                this.product = response.data;
            }
            } catch {
                this.$router.push({name: 'Каталог'})
            }
            
        }
    }
}
</script>


<template>
    <section class="this-category-section">
        <div class="main-info-for-category">
            <h2>{{product.category}}</h2>
            <p>Товары, которые представлены на сайте указаны не все, за дополнительной информацией обращайтесь по телефону</p>
            <img v-if="product.category == 'Моторные ГОСТ'" src="../assets/main-category/oil.svg" class="img1">
            <img v-if="product.category == 'Моторные Евро'" src="../assets/main-category/oil.svg" class="img1">
            <img v-if="product.category == 'Гидравлические масла'" src="../assets/main-category/oil2.svg" class="img2">
            <img v-if="product.category == 'Индустриальные масла'" src="../assets/main-category/oil.svg" class="img1">
            <img v-if="product.category == 'Трансмиссионные масла'" src="../assets/main-category/oil3.svg" class="img1">
            <img v-if="product.category == 'Охлаждающие жидкости'" src="../assets/main-category/oil4.svg" class="img2">
            <img v-if="product.category == 'Смазки'" src="../assets/main-category/oil5.svg" class="img2">
        </div>
    </section>

    <section class="info-product-section">
        <div class="info-product-action1">
            <h3 v-if="product.description">ОПИСАНИЕ:</h3>
            <p>{{ product.description }}</p>       
            <h3 v-if="product.application">ПРИМЕНЕНИЕ:</h3>
            <p>{{ product.application }}</p>   
            <h3 v-if="product.features != []">СВОЙСТВА И ПРЕИМУЩЕСТВА:</h3>
            <ul>
                <li v-for="(item, index) in product.features">{{ item }}</li>
            </ul> 
        </div> 
        <div class="info-product-action2">
            <img v-if="product.image == 'oil-red.png'"  src="../assets/products/oil-red.png">
            <img v-if="product.image == 'oil-white.png'"  src="../assets/products/oil-white.png">
            <img v-if="product.image == 'oil-black.png'"  src="../assets/products/oil-black.png">
            <img v-if="product.image == 'lubricant-big.png'"  src="../assets/products/lubricant-big.png">
            <img v-if="product.image == 'lubricant-small.png'"  src="../assets/products/lubricant-small.png">
            <img v-if="product.image == 'liquid-green.png'"  src="../assets/products/liquid-green.png">
            <img v-if="product.image == 'liquid-blue.png'"  src="../assets/products/liquid-blue.png">
            <div>
                <p>{{ product.title }}</p>
                <h6>{{ product.minPrice }}р</h6>
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
.info-product-section{
    width: 100%;
    position: relative;
    display: flex;
    padding-top: 10rem;
    & .info-product-action1{
        & h3{
            color: #000;
            font-size: 3rem;
            font-weight: 600;
            margin-top: 4rem; 
            &:first-child{
                margin-top: 0;
            }
        }
        & p{
            color: #000;
            width: 104rem;
            font-size: 3rem;
            font-weight: 500;
            margin-top: 2rem;
        }
        & li{
            color: #000;
            width: 104rem;
            font-size: 3rem;
            font-weight: 500;
            margin-top: 1rem;
            margin-left: 3rem;
            &:first-child{
                margin-top: 2rem;
            }
        }
        
    }
    & .info-product-action2{
        margin-left: 4.8rem;
        & img{
            width: 51.7rem;
            height: 51.7rem;
            pointer-events: none;
        }
        & p{
            color: #000;
            text-align: center;
            font-size: 4rem;
            margin-top: 3rem;
        }
        & h6{
            color: #000;
            text-align: center;
            font-size: 5rem;
            margin-top: 3rem;
            font-weight: 600;
        }
    }
}

.this-category-section{
    padding-top: 10rem;
    & .main-info-for-category{
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 40.9rem;  
        background: #FFF;
        border-radius: 2.7rem;
        padding: 9rem 0 0 7rem;
        & .img1{
            position: absolute;
            height: 40rem;
            right: 5rem;
            bottom: -3rem;
            pointer-events: none;
        }
        & .img2{
            position: absolute;
            height: 40rem;
            right: 5rem;
            bottom: -3rem;
            pointer-events: none;
        }
        & h2{
            color: #000;
            font-size: 5rem;
            font-weight: 700;
        }
        & p{
            color: #252525;
            font-size: 3rem;
            width: 83rem;
            margin-top: 5rem;
        }
    }
}
@media (max-width: 768px) {
    section{
        padding: 0 2.7rem 0 2.8rem;
        background-color: #F5F5F5;
    }
    .info-product-section{
    display: flex;
    flex-wrap: wrap;
    flex-direction:column-reverse;
    padding-top: 2rem;
    & .info-product-action1{
        & h3{
            font-size: 2rem;
            margin-top: 2rem; 
            &:first-child{
                margin-top: 4rem;
            }
        }
        & p{
            width: 30rem;
            font-size: 1.4rem;
            margin-top: 2rem;
        }
        & li{

            width: 30rem;
            font-size: 1.4rem;
            margin-top: 1rem;
            margin-left: 2rem;
            &:first-child{
                margin-top: 2rem;
            }
        }
        
    }
    & .info-product-action2{
        margin-left: 0rem;
        width: 100%;
        display: flex;justify-content: center;
        flex-wrap: wrap;
        & img{
            width: 20rem;
            margin: 0 5rem;
            height: 20rem;
        }
        & div{
            display: flex;gap: 1rem;
        }
        & p{
            font-size: 2rem;
            margin-top: 2rem;
        }
        & h6{
            font-size: 2rem;
            margin-top: 2rem;
        }
    }
    }
    .this-category-section{
        padding-top: 2.8rem;
        width: 100%;
        & .main-info-for-category{
            height: 14rem;  
            border-radius: 1rem;
            padding: 2rem 0 0 2rem;
            & .img1{
                display: none;
                height: 51.4rem;
                right: 5rem;
                bottom: -1rem;
            }
            & h2{
                font-size: 2rem;
            }
            & p{
                font-size: 1.3rem;
                width: 24rem;
                margin-top: .9rem;
            }
        }
    }
    
}
@media (min-width: 500px) and (max-width: 768px) {
    .this-category-section{
        & .main-info-for-category{
            overflow: hidden;
            & .img1{
                display: block;
                height: 13rem;
                right: 2rem;
                bottom: -1rem;
            }
            & .img2{
                display: block;
                height: 13rem;
                right: 2rem;
                bottom: -1rem;
            }
            & h2{
                font-size: 2rem;
            }
            & p{
                font-size: 1.3rem;
                width: 24rem;
                margin-top: .9rem;
            }
        }
    }
    .info-product-section{

    & .info-product-action1{
        & p{
            width: 42rem;
        }
        & li{
            width: 42rem;
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