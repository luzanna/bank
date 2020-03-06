<template>
    <div class="menu">
        <router-link to="/lk" class="nav-link">
            <div class="text-link">Личный кабинет</div>
        </router-link>
        <router-link to="/pay" class="nav-link">
            <div class="text-link">Платежи</div>
        </router-link>
        <router-link to="/history" class="nav-link">
            <div class="text-link">История платежей</div>
        </router-link>
        <router-link to="/lk" class="nav-link">
            <div class="text-link"> Настройки</div>
        </router-link>
        <router-link to="/lk" class="nav-link">
            <div class="text-link"> Выйти</div>
        </router-link>

    </div>
</template>

<script>
    export default {
        name: "Menu",
    }
</script>

<style scoped>

    @media screen and (min-width: 1000px) {

        .menu {
            background: #191c24;
            min-width: 270px;
            width: 25vw;
        }
        .text-link{
            padding-left: 30px;
            padding-top: 10%;
        }

        .nav-link{
            min-width: 270px;
            width: 25vw;
            height: 76px;
            display: block;
            color: #dfdfdf;
            text-decoration: none;
            text-align: left;
            margin-right: 30px;
        }
        .nav-link:focus{
            color: #6d717d;
            background: #2a2d37;

        }
    }


    @media screen and (min-width: 768px)  and (max-width: 999px){
        .menu {
            background: #191c24;
            width: 15vw;
        }

        .text-link{
            padding-left: 10px;
            padding-top: 10px;
            padding-bottom: 10px;
        }

        .nav-link{
            width: 15vw;
            color: #dfdfdf;
            text-decoration: none;
            display: block;
        }
        .nav-link:focus{
            color: #6d717d;
            background: #2a2d37;

        }
    }


    @media screen and (min-width: 480px)  and (max-width: 767px) {

        .menu {
            background: #191c24;
            /*flex: 100vw;*/
            width: 100vw;
            display: inline-block;
            padding-top: 20px;
            padding-bottom: 20px;
            text-align: center;
        }
        .text-link{
            display: inline-block;
            margin-right: 5px;
        }

        .text-link{
            padding-left: 5px;
        }

        .nav-link{
            padding-top: 20px;
            padding-bottom: 20px;
            color: #dfdfdf;
            text-decoration: none;
            text-align: center;
            margin: auto;
        }
        .nav-link:focus{
            color: #6d717d;
            background: #2a2d37;
        }
    }

    @media screen and (min-width: 320px)  and (max-width: 479px) {
        .menu {
            background: #191c24;
            width: 100%;
            font-size: small;
            display: inline-block;
        }
        .text-link{
            padding-left: 5px;
            padding-right: 5px;
            padding-top: 20px;
            padding-bottom: 20px;
            width: auto;

        }

        .nav-link{
            width: auto;
            display: inline-block;
            color: #dfdfdf;
            text-decoration: none;
        }
        .nav-link:focus{
            color: #6d717d;
            background: #2a2d37;

        }
    }
</style>

