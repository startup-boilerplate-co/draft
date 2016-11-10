import { Accounts } from 'meteor/accounts-base';

// initialize sendgrid on startup with api key
const sendgrid  = require('sendgrid')(Meteor.settings.email.apiKey);

Meteor.methods({
  email_sendVerificationMail: function (address) {
    // creates a verification token and verification url to send to the user
    if(!address) {
      let address = Meteor.user().emails[0].address;
    }
    const tokenRecord = {
      token: Random.secret(),
      address: address,
      when: new Date()
    };
    const hostUrl = Meteor.absoluteUrl();
    const verifyEmailUrl = `${hostUrl}verify-email/${tokenRecord.token}`;
    Meteor.users.update({ _id: this.userId }, { $push: { 'services.email.verificationTokens': tokenRecord } });

    console.log(hostUrl);
    console.log(verifyEmailUrl);

    const email = new sendgrid.Email({
      to:       address,
      from:     'andreas+userverify@pigments.io',
      subject:  'Hello World',
      text:     'My first email through SendGrid.',
      html:     '<h1>Hi there!</h1>',
    });

    // defines the variables/data to insert into the email template
    email.setSubstitutions({
      name: [verifyEmailUrl],
    });

    // defines which email template to use via template id.
    // templates are defined in andreas@pigments.io account.
    email.setFilters({
      'templates': {
        'settings': {
          'enable': 1,
          'template_id' : '82d70de8-5024-4785-bce1-1ca2a9e6c50a',
        }
      }
    });

    // sends the email via sendgrid
    sendgrid.send(email, function(err, json) {
      if (err) { return console.error(err); }
      else { console.log(json); }
    });

  },
  email_sendTrialExpired: function (address) {
    // creates a verification token and verification url to send to the user
    if(!address) {
      let address = Meteor.user().emails[0].address;
    }

    const email = new sendgrid.Email({
      to:       address,
      from:     'andreas+userverify@pigments.io',
      subject:  'Hello World',
      text:     'My first email through SendGrid.',
      html:     '<h1>Hi there!</h1>',
    });

    // defines which email template to use via template id.
    // templates are defined in andreas@pigments.io account.
    email.setFilters({
      'templates': {
        'settings': {
          'enable': 1,
          'template_id' : '82d70de8-5024-4785-bce1-1ca2a9e6c50a',
        }
      }
    });

    // sends the email via sendgrid
    sendgrid.send(email, function(err, json) {
      if (err) { return console.error(err); }
      else { console.log(json); }
    });

  }
});
