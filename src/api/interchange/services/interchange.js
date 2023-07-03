'use strict';

/**
 * interchange service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::interchange.interchange');
