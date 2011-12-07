/**
 * List functions to be exported from the design doc.
 */

var templates = require('duality/templates');

// Export a list with phrases
exports.phrases = function (head, req) {

    start({code: 200, headers: {'Content-Type': 'text/html'}});

    // fetch all the rows
    var row, rows = [];
    while (row = getRow()) {
        rows.push(row);
    }

    // generate the markup for a list of phrases
    var content = templates.render('phrases.html', req, {
        rows: rows
    });

	return {title: 'List Phrases', content: content};

};
