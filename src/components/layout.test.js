import React from "react";
import renderer from "react-test-renderer";

import Layout from './layout';

// https://jestjs.io/docs/en/snapshot-testing
// https://reactjs.org/docs/test-renderer.html
// https://jestjs.io/blog/2016/07/27/jest-14.html
// https://jestjs.io/blog/2016/07/27/jest-14.html
describe("Layout", () => {
	it("renders correctly", () => {
		const tree = renderer
			.create(<Layout></Layout>)
			.toJSON();
		expect(tree).toMatchSnapshot();
	});
});