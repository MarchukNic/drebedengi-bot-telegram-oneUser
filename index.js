const { Composer } = require('micro-bot')
const app = new Composer()
const nodemailer = require('nodemailer');

function sendMail(ctx) {
    nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp.yandex.ru',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL, // generated ethereal user
                pass: process.env.PASSWORD // generated ethereal password
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: process.env.EMAIL, // sender address
            to: 'parser@x-pro.ru', // list of receivers
            subject: process.env.SUBJECT,
            text: ctx.message.text, // plain text body
            attachments: [{ 'filename': 'attachment.txt', 'content': ctx.message.text }]
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                // ctx.reply(error);
                return (error);
                // app.telegram.sendMessage(error)

            }
//             return ('Message sent: %s', info.messageId);
            ctx.yyyyyy = `Сообщение [${ctx.message.text}] отправлено.`
            return ctx.reply(ctx.yyyyyy);
        });
    });
}
app.start((ctx) => ctx.reply('Добро пожаловать в пользовательский бот для Дребеденег! Можно отправить "Hi" для проверки работоспособности бота.'))
app.hears('Hi', ({ reply }) => reply('Все нормально, бот работает!'))
app.on('message', function (ctx, next) {
    sendMail(ctx);
    return ctx.reply(ctx.yyyyyy);
});
// Export bot handler
module.exports = app
