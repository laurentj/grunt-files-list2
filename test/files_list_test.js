'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.files_list = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/defaultOptions.html');
    var expected = grunt.file.read('test/expected/defaultOptions.html');
    test.equal(actual, expected, 'result files with defaultOptions builded correctly.');

    test.done();
  },
  custom_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/withPrefixAndSuffix.html');
    var expected = grunt.file.read('test/expected/withPrefixAndSuffix.html');
    test.equal(actual, expected, 'result files with prefix and suffix options builded correctly.');

    test.done();
  },
  several_files: function(test) {
    test.expect(2);

    var actual = grunt.file.read('tmp/first.html');
    var expected = grunt.file.read('test/expected/first.html');
    test.equal(actual, expected, 'first generated file is ok');

    actual = grunt.file.read('tmp/second.html');
    expected = grunt.file.read('test/expected/second.html');
    test.equal(actual, expected, 'second generated file is ok');
    test.done();
  },
};
