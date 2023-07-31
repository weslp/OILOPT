<script>
    const body = document.body;

    export default {
        data () {
            return {
                'open_menu': false,
                'active_page' : 'Главная'
            }
        },
        methods: {
            open_burger() {
                if (this.open_menu) {
                    this.open_menu = false;
                    body.classList.remove('lock');
                } else {
                    this.open_menu = true;
                    window.scrollTo(0, 0);
                    body.classList.add('lock');
                }
            },
            openbody() {
                if (this.open_menu) {
                    this.open_menu = false;
                    body.classList.remove('lock');
                }
            },
            navigator(index) {
                this.$router.push({
                    name: index
                })
                this.active_page = index;
                if (this.open_menu) {
                    this.open_menu = false;
                    body.classList.remove('lock');
                }
            }
        }
    }
</script>
<template>
    <header>
        <div class="list">
            <div class="header_menu">
                <div class="header_burger" @click="open_burger()">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav class="menu_body" :class="open_menu == true ? 'active' : 'disactive'">
                    <ul class="menu_list">
                        <li @click="navigator('Главная')"  class="menu_item"><a class="menu_link">Главная</a></li>
                        <li @click="navigator('Каталог')"  class="menu_item"><a class="menu_link">Каталог</a></li>
                        <a @click="openbody()" href="/#map-section"><li class="menu_item"><a class="menu_link">Контакты</a></li></a>
                        <a class="telphone" href="tel:+74955022421">Позвоните нам!<br>+7 (495) 502-24-21</a>
                        <li class="menu_item">
                        <div class="phone">
                            <div class="image-phone"></div>
                            <a href="tel:+74955022421" class="phone-number">+7 (495) 502-24-21</a>
                        </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
       
        <img src="../assets/logo.svg" alt="logo">
        <img src="../assets/priston.svg" alt="priston">
    </header>
</template>

<style>
.active-page{
    background: #F5F5F5;
    
}
.active-page .menu_link{
    color: #3378D3;
    font-weight: 600;
}

.phone{
    height: 100%;
    display: flex;
    align-items: center;
    gap: 1.3rem;
    position: absolute;
    right: 2.5rem;
}
.phone-number{
    color: #F5F5F5;
    font-size: 2rem;
}
.image-phone{
    width: 2rem;
    height: 2.5rem;
    background-image: url('../assets/Phone.svg');
    background-repeat:no-repeat;-webkit-background-size:cover;-o-background-size:cover;background-size:cover;background-position:center center;
}
img[alt='logo'] {
    width: 79.7025rem;
    height: 14.2rem;
    margin-left: 29rem;
    margin-top: 20rem;
}
img[alt='priston'] {
    position: absolute;
    width: 50.89rem;
    height: 59.3rem;
    right: 2.1rem;
    bottom: -16.3rem;
}
header{
    overflow-y: hidden;
    position: relative;
    z-index: 10000;
    padding-top: 5.6rem;
    width: 100%;
    height: 71.4rem;
    background-image: url('../assets/Intersect.svg');
    background-repeat:no-repeat;-webkit-background-size:cover;-o-background-size:cover;background-size:cover;background-position:center center;
}
body .lock {
    overflow: hidden;
}
.header_burger{
    display: block;
    width: 3rem;
    height: 1.8rem;
    position: relative;
    z-index: 6;
    cursor: pointer;
    
}
.header_burger span{
    position: absolute;
    width: 100%;
    height: 0.2rem;
    background-color: #fff;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 1rem;
}
.header_burger span:first-child{
 top: 0;
 transform: translateY(0);
}
.header_burger span:last-child{
bottom: 0;
transform: translateY(0);
top: auto;
}
.list{
    width: 134rem;
    height: 6.2rem;
    border-radius: 1.8rem;
    margin: 0 auto;
    background: rgba(245, 245, 245, 0.25);
}
/* .header_menu {
   
}
.menu_body {
   
} */
.menu_list {
    position: relative;
   list-style-type: none;
   display: flex;
   gap: 0;
}
.menu_list .telphone{
    display: none;
}
.menu_item {
    border-radius: 1.8rem;
    cursor: pointer;
    width: 22.1rem;
    height: 6.2rem;
    display: flex;justify-content: center;align-items: center;
}
.menu_link {
    font-size: 2rem;
    font-weight: 500;
    color: #ececec;
    text-decoration: none;
}
.header_burger {
    display: none;
}
@media (max-width: 768px) {
    .menu_list .telphone{
        display: block;
        font-size: 1.8rem;
        font-weight: 500;
        width: 100%;
        height: 6rem;
        color: #ececec;
        margin-top: 5rem;
        text-align: center;
    }
    img[alt='logo'] {
        position: absolute;
        width: 20rem;
        height: 5rem;
        margin: 0;
        top: 1.45rem;left: 3rem;
    }
    img[alt='priston'] {
        display: none;
    }
    .phone{
        display: none;
    }
    header{
        position: relative;
        overflow-y: visible;
        width: 100%;
        height: 8rem;
        padding: 3rem 10rem 0 10rem;
    }
     .lock{
        overflow: hidden;
    }
    .header_burger{
        display: block;
        position: absolute;
        top: 3rem;
        right: 3rem;
    }
    .list{
        width: 100%;
        height: 100%;
        background-color: transparent;
    }
    .menu_body {
        position: absolute;
        top: 0;
        height: 100vh;
        transition: left .2s;
        width: 100%;
        background: #3378D3 ;  
     }
     .active{
        display: flex;
        left: 0%;
     }
     
     .disactive{
        display: none;
        left: 100%;
     }
     .menu_item {
        width: 100%;
        height: 6rem;
    }
     .menu_link {
        
        font-size: 1.8rem;
        line-height: 5rem;
        font-weight: 500;
    }   
     .menu_list {
        width: 100%;
        padding: 0 4rem;
        flex-direction: column;
        gap: 0;
        margin: auto;
    }
}
</style>