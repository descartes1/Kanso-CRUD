/**
 * Kanso document types to export
 */

var Type = require('kanso/types').Type,
    fields = require('kanso/fields'),
    permissions = require('kanso/permissions');


// a phrase
exports.phrase = new Type('phrase', {

	// Only logged in users can add, update or remove a phrase	
	permissions: {
        add:    permissions.loggedIn(),
        update: permissions.loggedIn(),
        remove: permissions.loggedIn(),
    },

	// a phrase has the following fields/schema
    fields: {
        created: fields.createdTime(),
		creator: fields.creator(),
        title: fields.string(),
        text: fields.string(),
    }
});

// a login
exports.login = new Type('login', {

	// a phrase has the following fields/schema
    fields: {
        user: fields.string(),
        pass: fields.string(),
    }
});
