'use strict';

/**
 * product-enrichment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::product-enrichment.product-enrichment');
