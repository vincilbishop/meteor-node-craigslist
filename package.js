Package.describe({
  name: 'node-craigslist',
  summary: 'Npm node-craigslist packaged for Meteor.'
});

Npm.depends ({
  'node-craigslist': '0.1.6'
});

Package.on_use(function (api) {
  /* Use or imply other packages.

   * Example:
   *  api.use('ui', 'client');
   *  api.use('iron-router', ['client', 'server']);
   */

   /*
    * Add files that should be used with this
    * package.
    */
   api.add_files('node-craigslist.js', ['server']);

  /*
   * Export global symbols.
   *
   * Example:
   *  api.export('GlobalSymbol');
   */

  api.export('Craigslist');
});

Package.on_test(function (api) {
  api.use('node-craigslist');
  api.use('tinytest');
  
  api.add_files('node-craigslist_tests.js');
});
