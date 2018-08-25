# drebedengi-bot-telegram-oneUser
Телеграмм бот для сайта http://www.drebedengi.ru, который отправляет ваше сообщение на ящик дребеденег "parser@x-pro.ru" для парсинга.  
Устанавливается и настраивается самим пользователем.  
За основу взят micro-bot от telegraf https://github.com/telegraf/micro-bot.  

Алгоритм работы: Вы пишите сообщение боту. Бот формирует письмо с вложением, и отправляет его на ящик дребеденег для парсинга.  
Как доп функция, возможно настроить проверку в вашем ящике ответов от Дребеденег и бот в телеграмме вам пишет ответ, прошло распознавание или нет. (пока это только идея, не проверенная).  

Что понадобиться от пользователя:  
- Создать своего бота в Телеграмм и получить код.  
- Внести свой email и пароль от почтового ящика (email которого используется для логина в ДД), для отправки писем на ДД от своего имени. В правилах парсинга так указано https://www.drebedengi.ru/?module=v2_aboutParser#email  
- В теме письма должен содержаться специальный код от ДД, получаем по ссылке выше.  
Эти все коды/логин/пароль вносишь в heroku проект как переменные, чтобы не светить в коде.   
  
## Алгоритм установки:  
# Шаг 1. Подготовка.  
- Зарегистрироваться на сайте heroku https://signup.heroku.com/signup/dc  
- Установить Node.JS https://nodejs.org/en/download/  
- Установить Git https://git-scm.com/downloads  
- Установить программу heroku с сайта https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up  
- Установите Visual Code для редактирование проекта https://code.visualstudio.com/Download  

# Шаг 2. Заведение своего бота в Телеграмм.  
- В телеграмме найти пользователя @BotFather  
- Нажать кнопку "Присоедениться" если надо  
- Набрать команду создания бота "/newbot"  
- Выбрать ему имя, главное чтобы было слово "bot" в имени  
- Если все прошло нормально будет сообщение вида "Done! Congrat .... HTTP API 565451654:fdgdfggfdgdfgdfgdgfd-dfgdfgdgdf" это и есть ваш токен.  

# Шаг 3. Создание проекта и публикация.  
Описание будет для системы Windows. В других системах, скорее всего логика такая же, но могут отличаться по виду написания команд и сочетаний клавиш.  
- Запускаем Visual Code  
- Открываем терминал VS (CTRL + `)
- Созданим отдельную папку для проектов.
```bash
cd \
mkdir Project
cd Project
```  
- Клонируем мой проект с Github
```bash
git clone https://github.com/MarchukNic/drebedengi-bot-telegram-oneUser.git
```
- Открываем папку проекта в VSC, "Файл"->"Открыть папку", в окне находим проект "drebedengi-bot-telegram-oneUser" (расположен он в C:\Project\) выделяем его и жмем кнопку "Выбрать папку"  
- Входим в heroku под своим логином, в строке терминала пишем команду и жмем ENTER  
```bash
heroku login
```
вводим email указанный при регистрации в heroku и жмем ENTER  
вводим пароль указанный при регистрации в heroku и жмем ENTER   
- Создаем новый проект в heroku, для этого в терминале VSC пишем команду
```bash
git init
heroku create
```
Heroku создаст проект с произвольным именем вида (https://murmuring-spire-99247.herokuapp.com/) (https://git.heroku.com/murmuring-spire-99247.git) где "murmuring-spire-99247" имя вашего проекта.  
Переменные:  
BOT_TOKEN токен ключ бота телеграмм  
BOT_DOMAIN сайт на котором будет размещен бот, для webhook  
EMAIL - ваш email который указывали при регистрации в дребеденьгах.  
PASSWORD - пароль от ящика выше.  
SUBJECT - ключ от дребеденег который необходимо указать в теме письма на парсинг (пункт 3 https://www.drebedengi.ru/?module=v2_aboutParser#email)
```bash
heroku config:set --app murmuring-spire-99247 BOT_TOKEN='886571058:AAHPLRX7hEk8JkEYfYbVwrNzof0YoPt-qUxM'
heroku config:set --app murmuring-spire-99247 BOT_DOMAIN='https://murmuring-spire-99247.herokuapp.com'
heroku config:set --app murmuring-spire-99247 EMAIL='sample@yandex.ru'
heroku config:set --app murmuring-spire-99247 PASSWORD='passwordEmail'
heroku config:set --app murmuring-spire-99247 SUBJECT='9876886a6h7h77hb7g969967_39a9c672085202cf4237e05a73e916b3'
``` 
Публикуем проект на heroku
```bash
git add index.js package.json
git push heroku master
```
Можно перейти по ссылке 'https://murmuring-spire-99247.herokuapp.com', откроется просто пустое окно, если нет никаких ошибок.
В телеграмме проверить работоспособность бота, можно отправив боту "Hi", если все работает, получите ответ.

Еще одно замечание, у меня не распозновались письма где суммы написаны без точки.  
Пишите сумму с точкой "30.0" т.е. 30 рублей 0 копеек.  

Все готово. можете отправлять сообщения, бот их перешлет на почту ДД и обработает согласно настроенными вами правилами https://www.drebedengi.ru/?module=v2_homeBuhPrivateImport&action=rules .

  

