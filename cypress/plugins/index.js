/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
    cy.get('.items')
  .trigger('mousedown', { which: 1, pageX: 493, pageY: 391 })
  .trigger('mousemove', { pageX: 271, pageY: 391 })
  .trigger('mouseup', { force: true });

cy.get('.items').should($items => {
  expect($items[0].scrollLeft).to.be.greaterThan(0);
});

    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config
}
