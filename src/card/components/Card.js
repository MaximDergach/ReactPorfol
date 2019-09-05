import React from 'react'

const avatarStyle = {
	width: '100%',
	borderRadius: '50%'
}

const cardStyle = {
	width: '300px',
	margin: '0 auto',
	padding: '16px',
	background: 'lightblue',
	borderBottom: '2px solid green',
	fontFamily: 'sans-serif'
}

const Avatar = ({ url }) => <img src={url} style={avatarStyle}/>

const Content = ({ name, profession }) => (
	<div>
		<h1>{name}</h1>
		<span>{profession}</span>
	</div>
)

const Card = ({ info: {name, profession, avatar} }) => (
	<div style={cardStyle}>
		<Avatar url={avatar} />
		<Content name={name} profession={profession} />
	</div>
)

export default Card