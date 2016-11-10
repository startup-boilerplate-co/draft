Meteor.methods({
  crm_getGroups: function () {
    HTTP.call('GET', 'https://api.hubapi.com/contacts/v2/properties?hapikey=' + Meteor.settings.crm.apiKey, function(err,res) { console.log(res)});
  },
  crm_deleteFunnelStages: function () {
    HTTP.call('DELETE', 'https://api.hubapi.com/properties/v1/contacts/properties/named/funnel_stages?hapikey=' + Meteor.settings.crm.apiKey, function(err,res) { console.log(res)});
  },
  crm_addFunnelStages: function () {
    HTTP.call('POST', 'https://api.hubapi.com/properties/v1/contacts/properties/?hapikey=' + Meteor.settings.crm.apiKey,
      {data: {
        'name': 'funnel_stages',
        'label': 'Funnel Stages',
        'description': 'Sales funnel stage of the customer',
        'groupName': 'contactinformation',
        'type': 'enumeration',
        'fieldType': 'select',
        'formField': true,
        'hidden': false,
        'options': [
          {
            'label' : 'Trial started',
            'value' : 'Trial started',
            'displayOrder' : 0
          },
          {
            'label' : 'Trial expired',
            'value' : 'Trial expired',
            'displayOrder' : 1
          },
          {
            'label' : 'Paid Plan',
            'value' : 'Paid Plan',
            "displayOrder" : 2
          }
        ]
      }}
    );
  },
  crm_addContact: function (credentials) {
    HTTP.call('POST', 'https://api.hubapi.com/contacts/v1/contact/?hapikey=' + Meteor.settings.crm.apiKey,
      {data: {
        'properties': [
            {
                'property': 'email',
                'value': credentials.email
            },
            {
                'property': 'firstname',
                'value': credentials.firstName
            },
            {
                'property': 'lastname',
                'value': credentials.lastName
            },
            {
                'property': 'funnelstage',
                'value': 'Trial'
            }
        ]
      }}
    );
  },
  crm_updateTrialExpired: function (credentials) {
    console.log(this.user);
    HTTP.call('POST', 'https://api.hubapi.com/contacts/v1/contact/vid/' + + '/profile?hapikey=' + Meteor.settings.crm.apiKey,
      {data: {
        'properties': [
            {
                'property': 'funnelstage',
                'value': 'Trial expired'
            }
        ]
      }}
    );
  },

});
