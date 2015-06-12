'use strict';

var nodemailer = require('nodemailer');
var logger = require('./log');

var transporter = nodemailer.createTransport();

var mailOptions = {
    from: 'Teachable <teachable@fablab-karlsruhe.de>'
};

module.exports = {
    send: function(to, cc, subject, text, callback) {
        logger.info('Sending mail to "' + to + '" with the subject "' + subject + '"');

        if (to.constructor === Array) {
           to = to.join(', ');
        }

        mailOptions.to = to;
        mailOptions.cc = cc || '';
        mailOptions.subject = '[Teachable] ' + subject;
        mailOptions.html = text;

        transporter.sendMail(mailOptions, function(err, info) {
            if (err) {
                console.error(err);
            } else {
                console.info('Message sent: ', info);
            }

            callback(err, info);
        });
    }
};
