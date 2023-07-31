import { createRouter, createWebHistory } from 'vue-router'


// Компоненты страниц
import MainPage from './views/MainPage.vue';
import Page2 from './views/Page2.vue';
import product from './views/product.vue';
import c1 from './views/products.vue';
import contacts from './views/contacts.vue';

export default createRouter({
    // История переходов сохраняется
    history: createWebHistory(),


    // Роуты и компоненты
    routes: [
        {
            path: '/',
            name: 'Главная',
            component: MainPage,
        },
        {
            path: '/catalog',
            name: 'Каталог',
            component: Page2,
        },
        {
            path: '/thisproduct:product',
            name: 'Товар',
            component: product,
        },
        {
            path: '/products:category',
            name: 'Товары категории',
            component: c1
        },
        {
            path: '/contacts',
            name: 'Контакты',
            component: contacts
        },
    ]
})