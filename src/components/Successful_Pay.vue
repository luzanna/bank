<template>
    <div>
        <div class="pay-block">
            <h3 class="pay-card"> История транзакций </h3>
            <div class="card-data">
                <div class="label-info tb"> Сумма перевода(руб) </div>
                <div class="label-info tb"> Номер счета </div>
                <div class="label-info tb"> Дата </div>
                <div class="band"></div>
                <div class="tb">
                    <div class="table info price" v-for="(item, id) in this.payment" v-bind:key="id">
                        {{item}},00
                    </div>
                </div>
                <div class="tb">
                    <div class="table info" v-for="(item, ind) in this.acct" v-bind:key="ind">
                        {{item}}
                    </div>
                </div>
                <div class="tb">
                    <div class="table info" v-for="(day, id) in this.datePayment" v-bind:key="id">
                        {{day[0]}}.{{day[1]}}.{{day[2]}}
                    </div>
                </div>
            </div>
            <button type="button" v-on:click="clearHistory" class="pay-button"> Очистить историю</button>
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
        name: "Successful_Pay",
        props:{
            formData: {
                bankAccount: {
                    type: String,
                    required: true,
                },
                price: {
                    type: String,
                    required: true,
                },
                payer: {
                    type: String,
                    required: true,
                },
                datePay: {
                    type: [],
                    required: true,
                },
                transactions: {
                    type: [],
                    required: true,
                },
                accounts: {
                    type: [],
                    required: true,
                },
                dates: {
                    type: [],
                    required: true,
                },
            },
        },
        data(){
            return{
                payment: '',
                acct: '',
                datePayment: '',
            }
        },

        beforeMount(){

            // получение значений старых транзакций из JSON и превращение в объект
            if (localStorage.getItem('transactions')) {
                this.payment = JSON.parse(localStorage.getItem('transactions'));
            }

            if (localStorage.getItem('accounts')) {
                this.acct = JSON.parse(localStorage.getItem('accounts'));
            }

            if (localStorage.getItem('dates')) {
                this.datePayment = JSON.parse(localStorage.getItem('dates'));
            }
        },

        mounted(){
            this.parseData();
        },
        methods: {

            // удаление истории транзакций
            clearHistory(){
                this.payment = null;
                this.acct = null;
                this.datePayment = null;
            },

            // получение данных о транзакциях для вывода пользователю
            parseData(){
                for (let [key, value] of Object.entries(this.formData)) {
                    (key === 'transactions') ? this.payment = value :
                        (key === 'accounts') ? this.acct = value:
                            (key === 'dates') ? this.datePayment = value : false;
                }
            }
        }
    }

</script>

<style scoped>

    @media screen and (min-width: 1000px){
        .pay-block{
            background: #f7f8f8;
            display: block;

            width: 70vw;
            min-width: 580px;
            max-width: 780px;

            /*width: 50vw;*/
            /*min-width: 580px;*/
            min-height: 565px;
            text-align: left;
            padding: 30px;
            font-size: small;
        }
        /*footer*/
        .text-info{
            background: #373c43;
            width: 70vw;
            min-width: 580px;
            max-width: 780px;
            padding: 30px;

        }

        .label-info{
            margin-top: 15px;
        }

        .info{
            margin-top: 5px;
            color: #373c43;}

        .table{
            display: block;
        }
        .price{
            padding-right: 30px;
            text-align: right;
        }

        .tb{
            display: inline-block;
            width: 33%;
            text-align: center;
        }
        .band{
            margin-top: 15px;
            margin-bottom: 15px;
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


        label{
            color: #8494ab;
        }

        p{
            color: #89909d;
            text-align: left;
            font-size: x-small;
        }
    }

    @media screen and (min-width: 768px)  {
        .pay-block{
            background: #f7f8f8;
            display: block;
            width: 70vw;
            min-width: 480px;
            max-width: 580px;
            text-align: left;
            padding: 30px;
            font-size: small;
        }
        /*footer*/
        .text-info{
            background: #373c43;
            width: 70vw;
            min-width: 480px;
            max-width: 580px;
            padding: 30px;

        }


        .label-info{
            margin-top: 15px;
        }

        .info{
            margin-top: 5px;
            color: #373c43;}

        .table{
            display: block;
        }
        .price{
            padding-right: 30px;
            text-align: right;
        }

        .tb{
            display: inline-block;
            width: 33%;
            text-align: center;
        }
        .band{
            margin-top: 15px;
            margin-bottom: 15px;
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

        label{
            color: #8494ab;
        }

        p{
            color: #89909d;
            text-align: left;
            font-size: x-small;
        }

    }

    @media screen and (min-width: 480px){
        .pay-block{
            background: #f7f8f8;
            display: block;
            width: 95%;
            /*height: 465px;*/
            text-align: left;
            padding: 20px;
            font-size: small;
        }

        .label-info{
            margin-top: 15px;
        }

        .info{
            margin-top: 5px;
            color: #373c43;}

        .table{
            display: block;
        }
        .price{
            padding-right: 30px;
            text-align: right;
        }

        .tb{
            display: inline-block;
            width: 33%;
            text-align: center;
        }
        .band{
            margin-top: 15px;
            margin-bottom: 15px;
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
            width: 95%;
            padding: 20px;

        }

        label{
            color: #8494ab;
        }

        p{
            color: #89909d;
            text-align: left;
            font-size: x-small;
        }

    }

    @media screen and (min-width: 320px){
        .pay-block{
            background: #f7f8f8;
            display: block;
            width: 96%;
            /*height: 465px;*/
            text-align: left;
            padding: 7px;
            font-size: small;
        }

        .label-info{
            margin-top: 15px;
        }

        .info{
            margin-top: 5px;
            color: #373c43;}

        .table{
            display: block;
        }
        .price{
            padding-right: 30px;
            text-align: right;
        }

        .tb{
            display: inline-block;
            width: 33%;
            text-align: center;
        }
        .band{
            margin-top: 15px;
            margin-bottom: 15px;
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
            width: 96%;
            padding: 7px;

        }

        label{
            color: #8494ab;
        }

        p{
            color: #89909d;
            text-align: left;
            font-size: x-small;
        }

    }

    .pay-button{
        background: #0054b2;
        border-radius: 45px;
        border: 0 solid;
        color: #f4f6fa;
        width: 135px;
        height: 40px;
        font-size: xx-small;
        margin-top: 30px;
        margin-left: 45px;
    }

</style>
