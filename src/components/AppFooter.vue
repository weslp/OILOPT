<script>

</script>

<template>
    <footer>
        <div>
            <h3>СРЕДНЯЯ ВОЛГА</h3>
            <h4>ООО “СРЕДНЯЯ ВОЛГА”</h4>
            <h5>ИНН 6439095987</h5>
            <h5>ОГРН 1196451003231</h5>
            <p>Разработали сайт:</p>
            <p><a href="https://merelytech.ru/">merelytech.ru</a></p>
        </div>
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
    </footer>
</template>

<style>
footer{
    width: 100%;
    padding: 0 14rem;
    height: 27.6rem;
    background: #3378D3;
    display: flex;align-items: center;
    gap: 60rem;
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
                color: #ffffff;
                font-size: 2.4rem;
                font-weight: 600;
            }
            & img{
                width: 2.6rem;
                height: 3.2rem;
                filter: invert(1000%) sepia(0%) saturate(0%) hue-rotate(87deg) brightness(1000%) contrast(1000%);
            }

        }
    }
    &  h3{
        color: #FFF;
        font-size: 3rem;
    }
    &  h4{
        color: #FFF;
        font-size: 2rem;
        margin-top: .8rem;
        margin-bottom: .8rem;
    }
    &  h5{
        color: rgba(255, 255, 255, 0.50);
        font-size: 2rem;
        margin-bottom: .5rem;
    }
    &  p{
        color: #FFF;
        font-size: 2rem;
        margin-top: 2.1rem;
        &:last-child{
            margin-top: 0;
        }
    }
    &  a{
        color: #FFF;
        text-decoration: none;
    }
    
}
@media (max-width: 768px) {
    footer{
    padding: 2rem 2.7rem 0 2.8rem;
    height: 20rem;
    gap: 3rem;
    & .main-contacts {
        display: flex;
        flex-wrap: wrap;
        width: 16rem;
        gap: 1rem;
        & .contact-item {
            display: flex;
            gap: 1rem;
            margin-bottom: 1rem;
            & p{
                color: #ffffff;
                font-size: 1rem;
                font-weight: 600;
            }
            & img{
                width: 1rem;
                height: 1rem;
                filter: invert(1000%) sepia(0%) saturate(0%) hue-rotate(87deg) brightness(1000%) contrast(1000%);
            }

        }
    }
    &  h3{
        color: #FFF;
        font-size: 1rem;
    }
    &  h4{
        color: #FFF;
        font-size: 1rem;
        margin-top: .8rem;
        margin-bottom: .8rem;
    }
    &  h5{
        color: rgba(255, 255, 255, 0.50);
        font-size: 1rem;
        margin-bottom: .5rem;
    }
    &  p{
        color: #FFF;
        font-size: 1rem;
        margin-top: 2rem;
        &:last-child{
            margin-top: 0;
        }
    }
    &  a{
        color: #FFF;
        text-decoration: none;
    }
    
}
}
@media (min-width: 500px) and (max-width: 768px) {
    footer{
    padding: 2rem 2.7rem 0 2.8rem;
    height: 20rem;
    gap: 16rem;

    
}
}
</style>