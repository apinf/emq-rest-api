/**
 * Emq-acl.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    id: {
      type: 'string',
    },
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
    clientid: {
      type: 'string',
      size: 1024
    },
    access: {
      type: 'integer'
    },
    topic: {
      type: 'string',
      size: 100
    },
		proxyId: {
			type: 'string',
			size: 100
		}
  }
};
