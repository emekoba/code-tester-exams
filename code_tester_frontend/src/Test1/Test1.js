import React, { PureComponent } from "react";

class Test1 extends PureComponent {
	//** revise this components lifecycle hooks **//

	//** youve gone through the code and discovered that the dev team is using
	//** componentWillMount lifecycle method. As an experienced code quality tester youve
	//** done your research and found that this is a deprecated method.
	//** advice the team on the best replacement for this method as recommended by the react
	//** official documentation that achieves the same effect.

	constructor(props) {
		super(props);

		this.state = {
			message: "second message",
		};
	}

	componentWillMount() {
		this.setState({
			message: "first message",
		});
	}

	render() {
		return <div>{this.state.message}</div>;
	}
}

export default Test1;

//** Error documentation */

//? what was componentWillMount intended for? 
/*
Once the componentWillMount gets initiated, the previous message value will be overridden with the updated message value. 
Therefore message will now be 'first message', but keep in mind this happens once in a lifetime of a component.
*/

//? why is it deprecated? 
//It means the function can be replaced by newer functions

//? what other lifecycle hook(s) can be used to achieve the same effect? 
//ComponentDidMount

