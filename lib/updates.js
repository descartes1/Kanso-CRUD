/**
 * Update functions to be exported from the design doc.
 */

var templates = require('kanso/templates'),
    forms = require('kanso/forms'),
    utils = require('kanso/utils'),
	db = require('kanso/db'),
	session = require('kanso/session'),
    types = require('./types');


// a login is performed
exports.login = function (doc, req) {

	// bind login type to form
	var form = new forms.Form(types.login, null, {
	});

	// parse the request data and check validation and permission functions
    form.validate(req);	

	// log the user in
	if (form.values.user && form.values.pass) {
		session.login(form.values.user, form.values.pass, function (err) {});
    }

	// redirect user to startpage
	return [null, utils.redirect(req, '/')];
};

// a logout is performed
exports.logout = function (doc, req) {

	// log the user out
	session.logout();

	// redirect user to startpage
	return [null, utils.redirect(req, '/')];
};

// a phrase should be deleted
exports.delphrase = function (doc, req) {
	
	// remove the document with the phrase
	db.removeDoc(doc ,function (err, resp) {
	
	});
    
	// redirect user to startpage 
	return [null, utils.redirect(req, '/')];

};

// a phrase should be added
exports.addphrase = function (doc, req) {

	// bind phrase type to form
    var form = new forms.Form(types.phrase, null, {
        exclude: ['created']
    });

	// parse the request data and check validation and permission functions
    form.validate(req);

 if (form.isValid()) {
        // the form is valid, save the document and redirect to the new page
        return [form.values, utils.redirect(req, '/' + form.values._id)];
    }
    else {
        // the form is not valid, so render it again with error messages
        var content = templates.render('addphrase.html', req, {
            form_title: 'Add new phrase',
            form: form.toHTML(req)
        });
        // return null as the first argument so the document isn't saved
        return [null, {content: content, title: 'Add new phrase'}];
    }
};

// a phrase should be changed
exports.changephrase = function (doc, req) {

	// bind phrase type to form
    var form = new forms.Form(types.phrase, doc, {
        exclude: ['created']
    });

	// parse the request data and check validation and permission functions
    form.validate(req);

 if (form.isValid()) {
        // the form is valid, save the document and redirect to the changed page
        return [form.values, utils.redirect(req, '/' + form.values._id)];
    }
    else {
        // the form is not valid, so render it again with error messages
        var content = templates.render('changephrase.html', req, {
            form_title: 'Change phrase',
            form: form.toHTML(req)
        });
        // return null as the first argument so the document isn't saved
        return [null, {content: content, title: 'Change phrase'}];
    }
};
