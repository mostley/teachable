
// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : 'your-secret-clientID-here',
        'clientSecret'  : 'your-client-secret-here',
        'callbackURL'   : 'http://teachable.shdev.de/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',
        'consumerSecret'    : 'your-client-secret-here',
        'callbackURL'       : 'http://teachable.shdev.de/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '119654718312-elimel05mdk986nk573703essa19vae4.apps.googleusercontent.com',
        'clientSecret'  : 'FV8AxtGdMUhb9H7M-KdSmSel',
        'callbackURL'   : 'http://teachable.shdev.de/auth/google/callback'
    }

};
