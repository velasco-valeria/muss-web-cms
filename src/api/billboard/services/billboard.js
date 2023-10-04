'use strict';

/**
 * billboard service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::billboard.billboard');
