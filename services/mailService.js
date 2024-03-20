const nodemailer = require('nodemailer')

module.exports = {
    sendEmailToMyself: function (name, userEmail, subject, message) {
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'xpresscommerceglobal@gmail.com',
                pass: 'xiaoftlvhyudjana'
            }
        });

        var mailOptions = {
            from: userEmail,
            to: "jotsamikael@gmail.com",
            subject: `PORTFOLIO CONTACT: ${subject}`,
            text: `Visitor name: ${name}
            The message: ${message}`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    },

    add: function (x, y) {
        return x + y
    }
}