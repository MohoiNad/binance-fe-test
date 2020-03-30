/***
 * Return node(s) with the given data-test attr
 * @param {ShallowWrapper} wrapper
 * @param {string} val
 * @return {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
	return wrapper.find(`[data-test='${val}']`);
};
/***
 * Check if component do not show warning with conforming props
 * @param {ReactComponent} component - React Component
 * @param {string} conformingProps - Props to check
 * @return - Jest test result
 */

