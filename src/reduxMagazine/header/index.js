import React, { Component } from 'react'
import App from '../routes/app'

class Header extends Component {
	render() {
		return(
			<div id='header'>
				<h1>Routes</h1>
				<App />
			</div>
		)
	}
}

export default Header