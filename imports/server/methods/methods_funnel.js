Meteor.methods({
  funnel_trialExpired: function() {
    Meteor.call('crm_updateTrialExpired');
    Meteor.call('email_sendTrialExpired');    
  },

});
