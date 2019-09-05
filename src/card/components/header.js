import React, { Component } from 'react'


const headerStyle = {
	background: 'lightgreen',
	fontSize: '1.6rem',
	color:'crimson'
}
class Header extends Component {
	render() {
		//const { content } = this.props
		const { logo, children } = this.props
			//return <h1>{`${this.props.children} ${logo}`}</h1>
			return <h1 style={headerStyle}>{ children }</h1>
		}
		 
	}

export default Header	