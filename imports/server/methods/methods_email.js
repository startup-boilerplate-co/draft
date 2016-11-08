import { Accounts } from 'meteor/accounts-base';

// initialize sendgrid on startup with api key
const sendgrid  = require('sendgrid')(Meteor.settings.sendgrid.api_key);
const chargebee = require('chargebee');
// const helper = require('sendgrid').mail;


// Meteor.methods({
//   /* Profile retrieval & updating
//    *
//    * Contains three subscriptions
//    * Retrieve user.services facebookd id & first_name
//    * Retrieve user.profile
//    * Update profile
//    */
//    SendNewUserMail: function (address) {
//     //  SendNewUserMail: function (address) {
//
//
//       // Accounts.createUser({
//       //   username: address,
//       //   password: 'admin'
//       // });
//
//      const tokenRecord = {
//        token: Random.secret(),
//        address: address,
//        when: new Date()
//      };
//
//      console.log(Meteor.user());
//      console.log(this.user);
//      Meteor.users.update(
//        {_id: this.userId},
//        {
//          $push: {'services.email.verificationTokens': tokenRecord}
//        },
//        (error, result) => {
//          if(error) {
//            console.log('error');
//            console.log(error);
//          } else {
//            console.log('result');
//            console.log(result);
//          }
//        }
//      );
//    }
// });


Meteor.methods({

  addHubspotContact: function () {
    HTTP.call('POST', 'https://api.hubapi.com/contacts/v1/contact/?hapikey=878c949b-0d6d-4534-bd17-9e4a2be053a8',
      {data: {
        'properties': [
            {
                'property': 'email',
                'value': 'andreasss@pigments.io'
            },
            {
                'property': 'firstname',
                'value': 'Andreasss'
            },
            {
                'property': 'lastname',
                'value': 'Meranda'
            },
            {
                'property': 'company',
                'value': 'Pigmentseddra'
            },
            {
                'property': 'funnelstage',
                'value': 'Trial'
            }
        ]
      }}
    );
  },
  SendVerificationMail: function (address) {
    // creates a verification token and verification url to send to the user
    console.log(address);
    if(!address) {
      console.log('no address');
      let address = Meteor.user().emails[0].address;
    }
    console.log(address);
    const tokenRecord = {
      token: Random.secret(),
      address: address,
      when: new Date()
    };
    Meteor.users.update({ _id: this.userId }, { $push: { 'services.email.verificationTokens': tokenRecord } });
    const verifyEmailUrl = Accounts.urls.verifyEmail(tokenRecord.token);

    console.log(tokenRecord.token);


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

  }

  //
  // SendNewUserMail: function (address) {
  //
  //   // console.log(this.userId);
  //   // console.log(Meteor.users);
  //   // console.log(sendgrid);
  //
  //
  //   // creates a verification token for the email.
  //   // pushes the token to the user document and
  //   // creates url from verification token to send to user.
  //
  //   const tokenRecord = {
  //     token: Random.secret(),
  //     address: address,
  //     when: new Date()
  //   };
  //                                                                                           // 762
  //   Meteor.users.update({ _id: this.userId }, { $push: { 'services.email.verificationTokens': tokenRecord } });
  //   //
  //   // Meteor.users.upsert(
  //   //   {_id: Meteor.userId()},
  //   //   {$push: {'services.email.verificationTokens': tokenRecord}},
  //   //   function (error, result) {
  //   //     if(error) {
  //   //       console.log(error);
  //   //     }
  //   //     else {
  //   //       console.log(result);
  //   //     }
  //   //   }
  //   // );
  //
  //   const verifyEmailUrl = Accounts.urls.verifyEmail(tokenRecord.token);
  //   const email = new sendgrid.Email({
  //     to:       address,
  //     from:     'andreas+userverify@pigments.io',
  //     subject:  'Hello World',
  //     text:     'My first email through SendGrid.',
  //     html:     '<h1>Hi there!</h1>',
  //   });
  //
  //   // defines the variables/data to insert into the email template
  //   email.setSubstitutions({
  //     name: [verifyEmailUrl],
  //     // name: ['Alice'],
  //     price: ['$4']
  //   });
  //
  //   // defines which email template to use via template id.
  //   // templates are defined in andreas@pigments.io account.
  //   email.setFilters({
  //     'templates': {
  //       'settings': {
  //         'enable': 1,
  //         'template_id' : '82d70de8-5024-4785-bce1-1ca2a9e6c50a',
  //       }
  //     }
  //   });
  //
  //   // sends the email via sendgrid
  //   // sendgrid.send(email, function(err, json) {
  //   //   if (err) { return console.error(err); }
  //   //   else { console.log(json); }
  //   // });
  //
  //   // Accounts.sendVerificationEmail( Meteor.userId(), Meteor.user().emails[0].address);
  //
  // }
});
