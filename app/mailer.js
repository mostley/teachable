'use strict';

var nodemailer = require('nodemailer');
var logger = require('./log');

var transporter = nodemailer.createTransport();

var mailOptions = {
    from: 'Teachable <teachable@fablab-karlsruhe.de>'
};

module.exports = {
    send: function(to, cc, bcc, subject, text, callback) {
        logger.info('Sending mail to "' + to + '" with the subject "' + subject + '"');

        to = to || '';
        cc = cc || '';
        bcc = bcc || '';

        if (to.constructor === Array) {
           to = to.join(', ');
        }

        if (cc.constructor === Array) {
           cc = cc.join(', ');
        }

        if (bcc.constructor === Array) {
           bcc = bcc.join(', ');
        }

        mailOptions.to = to;
        mailOptions.cc = cc;
        mailOptions.bcc = bcc;
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
