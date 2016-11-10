const chargebee = require('chargebee');
chargebee.configure({
  site : Meteor.settings.billing.site,
  api_key : Meteor.settings.billing.apiKey
});

Meteor.methods({
  subscription_cancelNow: function() {
    chargebee.subscription.cancel('cbdemo_dave-sub1').request(
    function(error,result){
      if(error){
        //handle error
        console.log(error);
      }else{
        console.log(result);
        var subscription = result.subscription;
        var customer = result.customer;
        var card = result.card;
        var invoice = result.invoice;
      }
    });
  },
  subscription_cancelLater: function() {
    chargebee.subscription.cancel('cbdemo_dave-sub1', {end_of_term: true}).request(
    function(error,result){
      if(error){
        //handle error
        console.log(error);
      }else{
        console.log(result);
        var subscription = result.subscription;
        var customer = result.customer;
        var card = result.card;
        var invoice = result.invoice;
      }
    });
  },
  subscription_renew: function() {
    chargebee.subscription.remove_scheduled_cancellation('cbdemo_dave-sub1').request(
      function(error,result){
        if(error){
          //handle error
          console.log(error);
        }else{
          console.log(result);
          var subscription = result.subscription;
          var customer = result.customer;
          var card = result.card;
        }
      }
    );
  },
  subscription_reactivate: function() {
    chargebee.subscription.reactivate('cbdemo_dave-sub1').request(
      function(error,result){
        if(error){
          //handle error
          console.log(error);
        }else{
          console.log(result);
          var subscription = result.subscription;
          var customer = result.customer;
          var card = result.card;
          var invoice = result.invoice;
        }
      }
    );
  },


  subscription_create: function (credentials) {
    chargebee.subscription.create({
      plan_id : 'one_day_trial',
      customer : {
        email : credentials.email,
        first_name : credentials.firstName,
        last_name : credentials.lastName,
        auto_collection: 'off',
      }
    }).request(function(error,result){
      if(error){
        //handle error
        console.log(error);
      }else{
        console.log(result);
        var subscription = result.subscription;
        var customer = result.customer;
        var card = result.card;
        var invoice = result.invoice;
      }
    });
  },
  async getSubscriptionStatus() {
    function subscriptionPromise() {
      return new Promise( (resolve, reject) => {
        // cbdemo_john-sub       in_trial
        // cbdemo_shelley-sub    cancelled
        // cbdemo_dave-sub1      active
        // cbdemo_dave-sub2      non_renewing

        chargebee.subscription.retrieve('cbdemo_dave-sub2').request(
          (error,result) => {
            if(error){
              console.log(error);
            } else{
              // future: The Subscription is scheduled to start in a future date.
              // in_trial: The subscription is in trial.
              // active: The subscription is in active state and will be charged at start of each term based on the recurring items(plan & addons etc.,).
              // non_renewing: The subscription will be cancelled at end of the current term.
              // cancelled: The subscription has been cancelled. No new recurring actions will take place, but any pending payments will be collected.
              // console.log(result.subscription.status);
              resolve(result.subscription.status);
            }
          }
        );
      });
    }

    let subscription = subscriptionPromise();
    return subscription;


    // console.log(await subscription);

    // subscription.then((value) => console.log(value));
    // console.log(subscription);
    // // console.log(subscription.then(value);
    // subscription.then((value) => value);

    // //
    // // console.log("here");
    //

  },

  getInvoices: function () {
    chargebee.invoice.list({
      limit : 25,
      'customer_id[is]' : 'cbdemo_dave',
      'sort_by[asc]': 'date'
    }).request(function(error,result){
      if(error){
        //handle error
        console.log(error);
      }else{
        for(var i = 0; i < result.list.length;i++){
          var entry=result.list[i]
          console.log(entry);
          var invoice = entry.invoice;
        }
      }
    });
  },
  async getInvoicePDF() {
    function invoicePromise() {
      return new Promise( (resolve, reject) => {
        chargebee.invoice.pdf('DemoInv_104').request(
          (error,result) => {
            if(error){
              console.log(error);
            } else{
              resolve(result.download.download_url);
            }
          }
        );
      });
    }

    let invoice = invoicePromise();
    return invoice;
  },
  getCustomer: function () {
    chargebee.customer.retrieve('IG5ryoQQ1WdRWX1WEI').request(
      function(error,result){
        if(error){
          //handle error
          console.log(error);
        }else{
          console.log(result);
          var customer = result.customer;
          var card = result.card;
        }
      });
    },
});
