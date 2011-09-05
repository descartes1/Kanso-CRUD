/**
 * Show functions to be exported from the design doc.
 */


// Sort phrases by date of creation
exports.phrases_by_created = {

    map: function (doc) {
		// Include only if the document contains a phrase
        if (doc.type === 'phrase') {
            emit(doc.created, doc.title);
        }
    }
};
