<template>
    <div class="menu">
        <router-link to="/lk" class="nav-link">
            <div class="text-link">Личный кабинет</div>
        </router-link>
        <router-link to="/pay" class="nav-link">
            <div class="text-link">Платежи</div>
        </router-link>
        <router-link to="/successful_pay" class="nav-link">
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
            width: 270px;
        }
        .text-link{
            padding-left: 30px;
            padding-top: 10%;
        }

        .nav-link{
            width: 270px;
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

    @media screen and (min-width: 768px)  and (max-width: 999px) {

        .menu {
            background: #191c24;
            width: 170px;
            display: inline-block;
        }
        .text-link{
            display: inline-block;
            width: 40px;

        }

        .text-link{
            padding-left: 5px;
            padding-top: 10%;
        }

        .nav-link{
            width: 170px;
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



</style>
