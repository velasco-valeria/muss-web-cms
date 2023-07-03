'use strict';

/**
 * interchange router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::interchange.interchange');
