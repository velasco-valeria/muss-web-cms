'use strict';

/**
 * send-email controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::send-email.send-email');