/**
 * Show functions to be exported from the design doc.
 */

var templates = require('duality/templates'),
    forms = require('couchtypes/forms'),
    types = require('./types');

// Show the loginok page
exports.loginok = function (doc, req) {

    return {
		title: 'Login performed',
		content: templates.render('loginok.html', req, {})
    };
};

// Show the logoutok page
exports.logoutok = function (doc, req) {

    return {
		title: 'Logout performed',
		content: templates.render('logoutok.html', req, {})
    };
};

// Show login form
exports.login = function (doc, req) {

	// New form
	var form = new forms.Form(types.login, null, {});

    // render the markup for a login form
    var content = templates.render('login.html', req, {
        form_title: 'Login',
		form: form.toHTML(req)
    });

	// return the title and the rendered form
    return {
		title: 'Login',
		content: content
	};
};

// Show add a phrase form
exports.addphrase = function (doc, req) {

	// New form
	var form = new forms.Form(types.phrase, null, {
        exclude: ['created']
    });

    // render the markup for a add form
    var content = templates.render('addphrase.html', req, {
        form_title: 'Add new phrase',
		form: form.toHTML(req)
    });

	// return the title and the rendered form
    return {
		title: 'Add new phrase',
		content: content
	};
};

// Show change a phrase form
exports.changephrase = function (doc, req) {

		// New form populated with values from the doc that should be changed
		var form = new forms.Form(types.phrase, doc, {
    	    exclude: ['created']
    	});

    	// render the markup for a change form
    	var content = templates.render('changephrase.html', req, {
    	    form_title: 'Change phrase',
			form: form.toHTML(req)
    	});
	
		// return the title and the rendered form
    	return {
			title: 'Change phrase',
			content: content
		};
};

// Show one phrase
exports.phrase = function (doc, req) {
    return {
        title: doc.title,
        content: templates.render('phrase.html', req, doc)
    };
};

// Show the start page
exports.start = function (doc, req) {

    return {
		title: 'Startpage',
		content: templates.render('start.html', req, {})
    };
};

// Show 404 - not found page
exports.not_found = function (doc, req) {
    return {
        title: '404 - Not Found',
        content: templates.render('404.html', req, {})
    };
};
