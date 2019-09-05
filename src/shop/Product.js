import React from 'react'

const prodStyle = {
	border: '2px solid #ccc',
	width: 500,
	padding: 10,
	marginBottom: 5
}

function Product(props) {
	return (	
		<div style={prodStyle}>
		
			<h2><font>{props.product.name}</font></h2>
				<p>{props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })} - {props.product.description}</p>
		</div>
		)
	}

export default Product