# bank

Приложение реализует частичный функционал оплаты счетов  и хранит информацию об оплате. 
При вводе данных пользователем происходит валидация. После успешной отправки формы пользователь попадает на страницу
успешной оплаты, где предоставлена информация о последней транзакции. По прямой ссылке на эту страницу доступа нет.
Также приложение сохраняет данные по всем транзакциям и выводит на отдельной странице. Если список транзакций кажется слишком длинным,
его можно очистить.

# Technical specifications

Vue 2.6.11

## Getting started

```
git clone https://github.com/luzanna/bank
```

```
cd bank
```

```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
## Screens

Страница оплаты

![Image alt](https://github.com/luzanna/bank/blob/images/pay.PNG)

Страница успешной оплаты

![Image alt](https://github.com/luzanna/bank/blob/images/pay_ok.PNG)


Страница истории

![Image alt](https://github.com/luzanna/bank/blob/images/history.PNG)
