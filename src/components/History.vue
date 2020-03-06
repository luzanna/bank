<template>
    <div>
        <div class="pay-block">
            <h3 class="pay-card"> Оплата прошла успешно </h3>
            <div class="card-data">
                <label class="label-info"> Ваши данные: </label> <br>
                <div class="band"></div>
                <div class="info">
                    <div class="pay-info">
                        <div class="pay-info-block">
                            <div class="label-info"> Номер счета: </div>
                            <div class="label-info"> Сумма платежа (руб): </div>
                        </div>
                        <div class="pay-info-block">
                            <div class="label-info data"> {{formData.bankAccount}} </div>
                            <div class="label-info data"> {{formData.price}} </div>
                        </div><br>
                        <div class="pay-info-block">
                            <div class="label-info"> Держатель карты: </div>
                            <div class="label-info"> Дата оплаты: </div>
                        </div>
                        <div class="pay-info-block">
                            <div class="label-info data"> {{formData.payer}} </div>
                            <div class="label-info data">
                                {{formData.datePay[0]}}.{{formData.datePay[1]}}.{{formData.datePay[2]}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-info">
            <p>
                Исходя из астатической системы координат Булгакова, соединение Исходя из астатической
                системы координат Булгакова, соединение Исходя из астатической системы координат Булгакова,
                соединение Исходя из астатической системы координат Булгакова, соединение Исходя из астатической
                системы координат Булгакова, соединение Исходя из астатической системы координат Булгакова,
                соединение Исходя из астатической системы координат Булгакова, соединение
            </p>
            <p>
                Исходя из астатической системы координат Булгакова, соединение Исходя из астатической
            </p>
            <p>
                Исходя из астатической системы координат Булгакова, соединение Исходя из астатической
            </p>
            <p>Исходя из астатической системы координат Булгакова, соединение Исходя из астатической
                системы координат Булгакова, соединение Исходя из астатической системы координат Булгакова,
                соединение Исходя из астатической системы координат Булгакова, соединение Исходя из астатической
                системы координат Булгакова, соединение Исходя из астатической системы координат Булгакова,
                соединение Исходя из астатической системы координат Булгакова, соединение
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "History",
        props: {
            formData: Object,
        },

        mounted(){
            this.checkInf();
        },

        methods: {

            // редирект на страницу Pay, если пользователь перешел по прямой ссылке
            checkInf(){
                if (Object.keys(this.formData).length == 0)
                    return this.$router.push({ path: 'Pay'});
            }
        }
    }
</script>

<style scoped>

    @media screen and (min-width: 1000px){
        .pay-block{
            background: #f7f8f8;
            display: block;
            width: 580px;
            height: 565px;
            text-align: left;
            padding: 30px;
            font-size: small;
        }
    }

    @media screen and (min-width: 768px)  {
        .pay-block{
            background: #f7f8f8;
            display: block;
            width: 620px;
            min-height: 565px;
            text-align: left;
            padding: 10px;
            font-size: small;
            /*padding-left: 100px;*/
        }

    }

    label{
        color: #8494ab;
    }

    .pay-info{
        display: block;
        color: #8494ab;
        width: inherit;
        font-size: small;
    }

    .info{
        display: inline-block;
    }
    .pay-info-block{
        display: inline-block;
        margin-top: 13px;
        width: 170px;
    }

    .label-info{
        margin-top: 15px;
    }
    .data{
        color: #5e6165;
    }


    .band{
        margin-top: 15px;
        /*margin-bottom: 20px;*/
        height: 40px;
        background: #e4e9ee;
        width: 420px;
        margin-left: -30px;

    }

    /*информация о карте*/
    .card-data{
        margin-top: 20px;
        display: inline-block;
        color: #8494ab;
        border: 1px solid #e4e9ee;
        border-radius: 10px;
        padding: 30px;
        width: 360px;
    }


    /*footer*/
    .text-info{
        background: #373c43;
        width: 580px;
        padding: 30px;

    }
    p{
        color: #89909d;
        text-align: left;
        font-size: x-small;
    }

</style>
