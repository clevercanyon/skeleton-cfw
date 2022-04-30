/**
 * Cloudflare worker.
 *
 * @since 2022-02-26
 */
// <editor-fold desc="Imports and other headers.">

/**
 * Lint configuration.
 *
 * @since 2022-02-26
 */
/* eslint-env worker, es6 */

/**
 * Imports.
 *
 * @since 2022-02-26
 */
// Nothing at this time.

// </editor-fold>

/**
 * Adds event listener.
 *
 * @since 2022-02-26
 */
addEventListener( 'fetch', event => {
	event.respondWith( handleRequest( event.request ) );
} );

/**
 * Handles request.
 *
 * @since 2022-02-26
 *
 * @param request Request.
 *
 * @returns {Promise<Response>} Response.
 */
async function handleRequest( request ) {
	return fetch( request );
}
