var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport();

var mailOptions = {
    from: 'Teachable <teachable@fablab-karlsruhe.de>'
};

module.exports = {
    send: function(to, subject, text, callback) {
        console.log("Sending mail to '" + to + "' with the subject '" + subject + "'");
        mailOptions.to = to;
        mailOptions.subject = "[Teachable] " + subject;
        mailOptions.html = text;

        transporter.sendMail(mailOptions, function(err, info) {
            if (err) {
                console.error(err);
            } else {
                console.log('Message sent: ' + info.response);
            }

            callback(err, info);
        });
    }
};
