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
            width: 580px;
            min-height: 565px;
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
        }

    }


    label{
        color: #8494ab;
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
