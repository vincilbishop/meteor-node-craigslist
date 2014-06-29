/*
 * Test this package by running this command from you app
 * folder:
 * 
 * > meteor test-packages node-craigslist
 *
 */

Tinytest.add('node-craigslist - main test', function (test) {

  test.isTrue(Craigslist != undefined,'Craigslist export cannot be undefined');

});
