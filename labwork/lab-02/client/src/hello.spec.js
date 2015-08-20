describe(
	'Hello World:', function() {

		var Hello,
		    element,
		    React,
		    TestUtils;

		// Require the libraries used for testing.
		beforeEach(
			function() {
				React = require('react/addons');
				TestUtils = React.addons.TestUtils;
			}
		);

		// Require the components under test.
		beforeEach(
			function() {
				Hello = require('./hello');
				element = TestUtils.renderIntoDocument(<Hello />);
			}
		);

		it(
			'should instantiate the Hello World', function() {
				expect(TestUtils.isCompositeComponent(element)).to.be.true;
			}
		);

	}
);