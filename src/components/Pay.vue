<template>
    <form method="post" action="Pay.vue" v-on:submit.prevent="learn">
        <div class="pay-block">
            <label> Информация по оплате: </label> <br>
            <div class="info">
                <div class="pay-info">
                    <div class="pay-info-block">
                        <div class="label-info"> Номер счета: </div>
                        <div class="label-info"> Сумма платежа (руб): </div>
                    </div>
                    <div class="pay-info-block">
                        <input class="data" maxlength="16" minlength="16" pattern="[0-9]{16}" v-model="bankAccount">
                        <input class="data" minlength="1" pattern="[0-9]{1,}" v-model="price">
<!--                        <label>руб.</label>-->
                    </div>
                </div>
            </div>
            <h3 class="pay-card"> Данные банковской карты </h3>
        <div class="both-card">
            <div class="card-data">
                <label class="number-card"> Номер карты </label><br>
                <input class="number-card-enter center" maxlength="4" minlength="4" pattern="[0-9]{4}" v-model="card1">
                <input class="number-card-enter center" maxlength="4" minlength="4" pattern="[0-9]{4}" v-model="card2">
                <input class="number-card-enter center" maxlength="4" minlength="4" pattern="[0-9]{4}" v-model="card3">
                <input class="number-card-enter center" maxlength="4" minlength="4" pattern="[0-9]{4}" v-model="card4">  <br>
                <label class="number-card"> Срок действия </label>  <br>

                <select class="number-card-enter validity" v-model="selectDay">
                    <option v-for="(day, id) in days"
                            v-bind:key="id">
                            <label class="" v-if="day < 10">
                                0{{day}}
                            </label>
                            <label v-else>
                                {{day}}
                            </label>
                    </option>
                </select>
                <select class="number-card-enter validity" v-model="selectYear">
                    <option
                            v-for="(year, idx) in years"
                            v-bind:key="idx">
                        {{year}}
                    </option>
                </select>
                <br>
                <input class="name center" placeholder="Держатель карты" minlength="4"
                       pattern="^[a-zA-Z\s]+$"
                       v-model="payer">
            </div>
            <div class="private-info card-data">
                <div class="band"></div>
                <label class="cvc-label"> Код CVV2 / CVC2 </label> <br>
                <input class="cvc center" placeholder="?" maxlength="3" minlength="3"  pattern="[0-9]{3}" v-model="cvc">
            </div>
        </div>
            <button type="submit" class="pay-button" > Оплатить </button>
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
    </form>
</template>

<script>

    export default {
        name: "Pay",
        props: {
            onLearn: {
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
        }
        },
        data(){
            return{
                days: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
                        15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 20, 31],
                years: [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 3020],
                card1: null,
                card2: null,
                card3: null,
                card4: null,
                selectDay: null,
                selectYear: null,
                bankAccount: '5555555555555555',
                price: '3000',
                payer:null,
                datePay: null,
                cvc: null,
                transactions: [],
                accounts: [],
                dates: [],
                values: false,
            }
        },

        mounted(){
            // localStorage.clear();
            // получение значений старых транзакций из JSON и превращение в объект
            if (localStorage.getItem('transactions')) {
                this.transactions = JSON.parse(localStorage.getItem('transactions'));
            }

            if (localStorage.getItem('accounts')) {
                this.accounts = JSON.parse(localStorage.getItem('accounts'));
            }

            if (localStorage.getItem('dates')) {
                this.dates = JSON.parse(localStorage.getItem('dates'));
            }

        },
        methods:{

            // добавление транзакций в список всех транзакций
            addTransaction() {
                if (!this.price)
                    return;
                this.transactions.push(this.price);
                this.saveTransactions();

                if (!this.bankAccount)
                    return;
                this.accounts.push(this.bankAccount);
                this.saveTransactions();

                if (!this.datePay)
                    return;
                this.dates.push(this.datePay);
                this.saveTransactions();
            },

            // сохранение транзакций в списке всех транзакций
            saveTransactions(){
                const parsedTr = JSON.stringify(this.transactions);
                localStorage.setItem('transactions', parsedTr);

                const parsedAcc = JSON.stringify(this.accounts);
                localStorage.setItem('accounts', parsedAcc);

                const parsedDate = JSON.stringify(this.dates);
                localStorage.setItem('dates', parsedDate);
            },

            // проверка корректности данных, введенных пользователем + преобразование формата даты
            // + добавление транзакции, если данные корректные
            checkData(){
                // localStorage.clear();
                // alert("go to checkdata")


                //// добавить цену и номер счета!!!!


                if (
                    this.card1 != null &&
                    this.card2 != null &&
                    this.card3 != null &&
                    this.card4 != null &&
                    this.selectDay != null &&
                    this.selectYear != null &&
                    // this.bankAccount != null &&
                    // this.price != null &&
                    this.payer != null &&
                    this.cvc != null) {
                        return true;
                } else return false;
            },

            // преобразование даты в нужный для вывода формат
            getDateOfPay(){

                let datePayment = new Date();
                let yearPayment = datePayment.getFullYear();
                let monthPayment = datePayment.getMonth() + 1;
                let dayPayment = datePayment.getDate();

                (monthPayment < 10) ? monthPayment = '0' + monthPayment : monthPayment;
                (dayPayment < 10) ? dayPayment = '0' + dayPayment : dayPayment;

                return this.datePay = [dayPayment, monthPayment, yearPayment];
            },

            // передача данных о транзакции в родительский компонент App
            learn(){
                if (this.checkData()) {

                    // localStorage.clear();


                    this.getDateOfPay();
                    this.addTransaction();
                    this.onLearn({
                        bankAccount: this.bankAccount,
                        price: this.price,
                        payer: this.payer,
                        datePay: this.datePay,
                        transactions: this.transactions,
                        accounts: this.accounts,
                        dates: this.dates,
                    });
                    this.$router.push({ path: 'History'});


                } else return alert("Поля пустые")
            },
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
            height: 565px;
            text-align: left;
            padding: 30px;
            font-size: small;
        }


        label{
            color: #8494ab;

        }

        input {
            margin-top: 10px;
            margin-right: 10px;
            margin-bottom: 5px;
            color: #5e6165;

        }

        input:invalid{
            border: 1px solid red;
        }


        .pay-info{
            display: block;
            color: #8494ab;
            width: inherit;
            font-size: small;
        }

        .info{
            /*padding: 10px;*/
            display: inline-block;
            margin-top: 10px;
        }

        .pay-info-block{
            display: inline-block;
            margin-top: 5px;
        }

        .center{
            text-align: center;
        }
        .data{
            display: block;
            color: #5e6165;
            background: #f7f8f8;
            border: none;
            height: 28px;
            /*margin-top: 17px;*/
        }

        .label-info{
            margin-top: 20px;
            margin-right: 30px;
            /*min-width: 100px;*/
        }

        /*информация о карте*/

        .both-card{
            vertical-align: top;
        }

        .card-data{
            position: relative;
            z-index: 3;
            display: block;
            color: #8494ab;
            border: 1px solid #e4e9ee;
            border-radius: 10px;
            padding: 20px;
            width: 320px;
            height: 205px;
            background: #f7f8f8;
        }

        .number-card{
            background: #f7f8f8;
            margin: 5px;
        }

        .number-card-enter{
            width: 60px;
            height: 40px;
            border-radius: 2px;
            border: 1px solid #e4e9ee;
        }

        .validity{
            margin-top: 10px;
            margin-right: 10px;
            margin-bottom: 5px;
            z-index: 2;
            /*margin-left: 5px;*/
            width: auto;
            color: #5e6165;
        }

        .name{
            width: 315px;
            height: 40px;
            border-radius: 2px;
            border: 1px solid #e4e9ee;
            /*margin-right: 5px;*/
        }

        .name::placeholder{
            text-align: left;
            color: #e4e9ee;
            padding-left: 10px;
        }

        .private-info{
            position: absolute;
            top: 300px;
            /*top: 300px;*/
            left: 500px;
            z-index: 1;
            display: block;
            color: #8494ab;
            border: 1px solid #e4e9ee;
            border-radius: 10px;
            padding: 0px;
            width: 370px;
            height: 235px;
            text-align: right;

        }

        .band{
            margin-top: 20px;
            margin-bottom: 20px;
            height: 40px;
            background: #e4e9ee;

        }

        .cvc-label{
            margin-right: 65px;
        }

        .cvc{
            margin-right: 30px;
            width: 140px;
            min-height: 40px;
            margin-bottom: 5px;
            color: #5e6165;
            border-radius: 2px;
            border: 1px solid #e4e9ee;
        }

        .cvc::placeholder{
            color: #e4e9ee;
            text-align:right;
            padding-right: 10px;
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







        /*footer*/
        .text-info{
            background: #373c43;
            width: 70vw;
            min-width: 580px;
            max-width: 780px;
            padding: 30px;

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
            /*height: 565px;*/
            text-align: left;
            padding: 30px;
            font-size: small;
        }


        input {
            margin-top: 10px;
            margin-right: 10px;
            margin-bottom: 5px;
            color: #5e6165;

        }

        input:invalid{
            border: 1px solid red;
        }



        .pay-info{
            /*margin: 5px;*/
            display: block;
            color: #8494ab;
            width: inherit;
            font-size: small;
        }

        .info{
            /*padding: 10px;*/
            display: inline-block;
            margin-top: 10px;
        }

        .pay-info-block{
            display: inline-block;
            margin-top: 5px;
        }

        .center{
            text-align: center;
        }
        .data{
            display: block;
            color: #5e6165;
            background: #f7f8f8;
            border: none;
            height: 28px;
            /*margin-top: 17px;*/
        }

        .label-info{
            margin-top: 20px;
            margin-right: 30px;
            /*min-width: 100px;*/
        }

        /*информация о карте*/

        .both-card{
            vertical-align: top;
        }

        .card-data{
            position: relative;
            z-index: 3;
            display: block;
            color: #8494ab;
            border: 1px solid #e4e9ee;
            border-radius: 10px;
            padding: 20px;
            width: 320px;
            height: 205px;
            background: #f7f8f8;
        }

        .number-card{
            background: #f7f8f8;
            margin: 5px;
        }

        .number-card-enter{
            width: 60px;
            height: 40px;
            border-radius: 2px;
            border: 1px solid #e4e9ee;
        }

        .validity{
            margin-top: 10px;
            margin-right: 10px;
            margin-bottom: 5px;
            z-index: 2;
            /*margin-left: 5px;*/
            width: auto;
            color: #5e6165;
        }

        .name{
            width: 315px;
            height: 40px;
            border-radius: 2px;
            border: 1px solid #e4e9ee;
            /*margin-right: 5px;*/
        }

        .name::placeholder{
            text-align: left;
            color: #e4e9ee;
            padding-left: 10px;
        }



        .band{
            margin-top: 20px;
            margin-bottom: 20px;
            height: 40px;
            background: #e4e9ee;

        }

        .cvc-label{
            margin-right: 65px;
        }

        .cvc{
            margin-right: 30px;
            width: 140px;
            min-height: 40px;
            margin-bottom: 5px;
            color: #5e6165;
            border-radius: 2px;
            border: 1px solid #e4e9ee;
        }

        .cvc::placeholder{
            color: #e4e9ee;
            text-align:right;
            padding-right: 10px;
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





        /*footer*/
        .text-info{
            background: #373c43;
            width: 70vw;
            min-width: 480px;
            max-width: 580px;
            padding: 30px;

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

    @media screen and (min-width: 480px) {
        .pay-block{
            background: #f7f8f8;
            display: block;
            width: 95%;
            /*height: 465px;*/
            text-align: left;
            padding: 20px;
            font-size: small;
        }

        input {
            margin-top: 10px;
            margin-right: 10px;
            margin-bottom: 5px;
            color: #5e6165;

        }

        input:invalid{
            border: 1px solid red;
        }



        .pay-info{
            /*margin: 5px;*/
            display: block;
            color: #8494ab;
            width: inherit;
            font-size: small;
        }

        .info{
            /*padding: 10px;*/
            display: inline-block;
            margin-top: 10px;
        }

        .pay-info-block{
            display: inline-block;
            margin-top: 5px;
        }

        .center{
            text-align: center;
        }
        .data{
            display: block;
            color: #5e6165;
            background: #f7f8f8;
            border: none;
            height: 28px;
            /*margin-top: 17px;*/
        }

        .label-info{
            margin-top: 20px;
            margin-right: 30px;
            /*min-width: 100px;*/
        }

        /*информация о карте*/

        .both-card{
            vertical-align: top;
        }

        .card-data{
            position: relative;
            z-index: 3;
            display: block;
            color: #8494ab;
            border: 1px solid #e4e9ee;
            border-radius: 10px;
            padding: 20px;
            width: 320px;
            height: 205px;
            background: #f7f8f8;
        }

        .number-card{
            background: #f7f8f8;
            margin: 5px;
        }

        .number-card-enter{
            width: 60px;
            height: 40px;
            border-radius: 2px;
            border: 1px solid #e4e9ee;
        }

        .validity{
            margin-top: 10px;
            margin-right: 10px;
            margin-bottom: 5px;
            z-index: 2;
            /*margin-left: 5px;*/
            width: auto;
            color: #5e6165;
        }

        .name{
            width: 315px;
            height: 40px;
            border-radius: 2px;
            border: 1px solid #e4e9ee;
            /*margin-right: 5px;*/
        }

        .name::placeholder{
            text-align: left;
            color: #e4e9ee;
            padding-left: 10px;
        }

        /*.private-info{*/
        /*    position: absolute;*/
        /*    top: 300px;*/
        /*    left: 500px;*/
        /*    z-index: 1;*/
        /*    display: block;*/
        /*    color: #8494ab;*/
        /*    border: 1px solid #e4e9ee;*/
        /*    border-radius: 10px;*/
        /*    padding: 0px;*/
        /*    width: 370px;*/
        /*    height: 235px;*/
        /*    text-align: right;*/

        /*}*/

        .band{
            margin-top: 20px;
            margin-bottom: 20px;
            height: 40px;
            background: #e4e9ee;

        }

        .cvc-label{
            margin-right: 65px;
        }

        .cvc{
            margin-right: 30px;
            width: 140px;
            min-height: 40px;
            margin-bottom: 5px;
            color: #5e6165;
            border-radius: 2px;
            border: 1px solid #e4e9ee;
        }

        .cvc::placeholder{
            color: #e4e9ee;
            text-align:right;
            padding-right: 10px;
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

    @media screen and (min-width: 320px) {
        .pay-block{
            background: #f7f8f8;
            display: block;
            width: 96%;
            /*height: 465px;*/
            text-align: left;
            padding: 7px;
            font-size: small;
        }




        input {
            margin-top: 10px;
            margin-right: 10px;
            margin-bottom: 5px;
            color: #5e6165;

        }

        input:invalid{
            border: 1px solid red;
        }



        .pay-info{
            /*margin: 5px;*/
            display: block;
            color: #8494ab;
            width: inherit;
            font-size: small;
        }

        .info{
            /*padding: 10px;*/
            display: inline-block;
            margin-top: 10px;
        }

        .pay-info-block{
            display: inline-block;
            margin-top: 5px;
        }

        .center{
            text-align: center;
        }
        .data{
            display: block;
            color: #5e6165;
            background: #f7f8f8;
            border: none;
            height: 28px;
            /*margin-top: 17px;*/
        }

        .label-info{
            margin-top: 20px;
            margin-right: 30px;
            /*min-width: 100px;*/
        }

        /*информация о карте*/

        .both-card{
            vertical-align: top;
        }

        .card-data{
            position: relative;
            z-index: 3;
            display: block;
            color: #8494ab;
            border: 1px solid #e4e9ee;
            border-radius: 10px;
            padding: 20px;
            width: 320px;
            height: 205px;
            background: #f7f8f8;
        }

        .number-card{
            background: #f7f8f8;
            margin: 5px;
        }

        .number-card-enter{
            width: 60px;
            height: 40px;
            border-radius: 2px;
            border: 1px solid #e4e9ee;
        }

        .validity{
            margin-top: 10px;
            margin-right: 10px;
            margin-bottom: 5px;
            z-index: 2;
            /*margin-left: 5px;*/
            width: auto;
            color: #5e6165;
        }

        .name{
            width: 315px;
            height: 40px;
            border-radius: 2px;
            border: 1px solid #e4e9ee;
            /*margin-right: 5px;*/
        }

        .name::placeholder{
            text-align: left;
            color: #e4e9ee;
            padding-left: 10px;
        }


        .band{
            margin-top: 20px;
            margin-bottom: 20px;
            height: 40px;
            background: #e4e9ee;

        }

        .cvc-label{
            margin-right: 65px;
        }

        .cvc{
            margin-right: 30px;
            width: 140px;
            min-height: 40px;
            margin-bottom: 5px;
            color: #5e6165;
            border-radius: 2px;
            border: 1px solid #e4e9ee;
        }

        .cvc::placeholder{
            color: #e4e9ee;
            text-align:right;
            padding-right: 10px;
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





    .card-data{
        position: relative;
        z-index: 3;
        display: block;
        color: #8494ab;
        border: 1px solid #e4e9ee;
        border-radius: 10px;
        padding: 20px;
        width: 320px;
        height: 205px;
        background: #f7f8f8;
    }


    .validity{
        margin-top: 10px;
        margin-right: 10px;
        margin-bottom: 5px;
        z-index: 2;
        /*margin-left: 5px;*/
        width: auto;
        color: #5e6165;
    }


    .private-info{
        position: absolute;
        top: 270px;
        /*top: 300px;*/
        left: 40%;
        z-index: 1;
        display: block;
        color: #8494ab;
        border: 1px solid #e4e9ee;
        border-radius: 10px;
        padding: 0px;
        width: 370px;
        height: 235px;
        text-align: right;

    }


    .text-info{
        background: #373c43;
        width: 30vw;
        min-width: 580px;
        max-width: 780px;
        padding: 30px;

    }

    label{
        color: #8494ab;
    }

    p{
        color: #89909d;
        text-align: left;
        font-size: x-small;
    }
</style>
