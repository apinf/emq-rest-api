/**
 * Emq-acl.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    allow: {
      type: 'integer',
    },
    ipaddr: {
      type: 'string',
      size: 60
    },
    username: {
      type: 'string',
      size: 100
    },
    clientId: {
      type: 'string',
      size: 100
    },
    access: {
      type: 'integer'
    },
    topic: {
      type: 'string',
      size: 100
    }
  }
};
