/**
 * Kanso document types to export
 */

var Type = require('couchtypes/types').Type,
    fields = require('couchtypes/fields'),
    permissions = require('couchtypes/permissions');


// a phrase
exports.phrase = new Type('phrase', {

	// Only logged in users can add, update or remove a phrase	
	permissions: {
        add:    permissions.loggedIn(),
        update: permissions.loggedIn(),
        remove: permissions.loggedIn()
    },

	// a phrase has the following fields/schema
    fields: {
        created: fields.createdTime(),
		creator: fields.creator(),
        title: fields.string(),
        text: fields.string()
    }
});

// a login
exports.login = new Type('login', {

	// we need a username and password to login a user
    fields: {
        user: fields.string(),
        pass: fields.string()
    }
});
