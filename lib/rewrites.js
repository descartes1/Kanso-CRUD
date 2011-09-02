/**
 * Rewrite settings to be exported from the design doc
 */

// The position of rewrites does matter!
module.exports = [

    {from: '/static/*', to: 'static/*'},

	// Login
    {from: '/login', to: '_update/login', method: 'POST'},
    {from: '/login', to: '_show/login'},

	// Logout
    {from: '/logout', to: '_update/logout'},

	// Add a phrase
    {from: '/addphrase', to: '_update/addphrase', method: 'POST'},
    {from: '/addphrase', to: '_show/addphrase'},

	// Change a phrase
    {from: '/changephrase/:id', to: '_update/changephrase/:id', method: 'POST'},
    {from: '/changephrase/:id', to: '_show/changephrase/:id'},

	// Delete a phrase
    {from: '/delete/:id', to: '_update/delphrase/:id', method: 'POST'},

	// List all phrases
    {from: '/phrases', to: '_list/phrases/phrases_by_created'},

	// Show one phrase
    {from: '/:id', to: '_show/phrase/:id'},

	// Show the start page
    {from: '/', to: '_show/start'},

	// Fall back to 404 page
    {from: '*', to: '_show/not_found'}
];
