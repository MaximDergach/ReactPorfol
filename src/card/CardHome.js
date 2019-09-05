import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Card from './components/Card'

const deramTeam = [
	{	
		id: 'gh73h3h8f==f=f=-f3-f', 
		name: "Maxim Dergach",
		profession: "Developer",
		avatar: "https://cdn.igromania.ru/mnt/news/f/6/3/9/4/b/73601/bce1bec0af805b55_1200xH.jpg"
	},
	{	
		id: 'hj2k2j=clccp2kl2mlsd',
		name: "Maya Luchizarnaiy",
		profession: "Light atletico",
		avatar: "http://img0.reactor.cc/pics/post/full/Widowmaker-Overwatch-%D0%98%D0%B3%D1%80%D1%8B-lonefirewarrior-2704418.jpeg"
	},
	{	
		id: 'hj3k-fk-3fffjkld92=d',
		name: "Jone Snowe",
		profession: "Bastard",
		avatar: "http://poradnykzhinky.com/sites/poradnyk/files/images/2017/01/landscape-1485555878-elle-photocredit-mattsayles-cpisyndication.jpg"
	}
]

class CardHome extends Component {
	renderCards = (infoArray) => infoArray.map(info => (
		<Card info={info} key={info.id} />
		))

	render() {
		return (
			<div>
				{
					this.renderCards(deramTeam)
				}
			</div>
		)
	}
}

export default CardHome