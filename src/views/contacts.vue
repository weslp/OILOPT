<script>
import axios from 'axios';
axios.defaults.withCredentials = true;
export default {
    data() {
        return{
            
        }
    },
    mounted() {
        window.scrollTo(0, 0);
    },
    methods: {
        navigator(index) {
            this.$router.push({
                name: index
            })
        },
        open_mail() {
            window.open(`mailto:volgasred@mail.ru?subject=Заказ поставки&body=Ответьте мне на эту почту, пожалуйста!`);
        }
    }
}

</script>


<template>
    <section id="map-section" class="map-section">
        <h3>Как до нас добраться?</h3>
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2456.2832379780716!2d47.76609107722188!3d52.00171657192993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x416b8f3cc19650b1%3A0x9df4c9567ffcc534!2z0JjQstCw0L3QvtCy0YHQutC-0LUg0YguLCAxMiwg0JHQsNC70LDQutC-0LLQviwg0KHQsNGA0LDRgtC-0LLRgdC60LDRjyDQvtCx0LsuLCA0MTM4NDA!5e0!3m2!1sru!2sru!4v1690041227946!5m2!1sru!2sru" 
            width="100%" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </section>

    <section class="contact-section contact-section2">
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
    .contact-section2{
        height: 80rem;
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

</style>