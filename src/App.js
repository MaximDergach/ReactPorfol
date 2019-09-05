import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import { BrowserRouter, Route, Switch, NavLink as NavLinkBase} from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';
import Form from './screens/Form';
import Shop from './shop/App';
import Footer from './footer/Footer'
//import Magazine from './screens/Magazine';
import Error from './screens/ErrorNotFound';


const navLinkStyle = {
	padding: 4,
	transition: '0.4s',
	textDecoration: 'none',
	fontSize: '28px',
	marginRight: '100px',

}

const headerStyle = {
	background: '#737373' ,
	padding: '20px'
}

const navLinkStyleActive = {
	color: '#000',
	fontSize: '32px',
	textDecoration: 'underline'


}

const NavLink = (props) => (//Пропсы переносим в navLinkBase
	<NavLinkBase 
	{...props} 
	style={navLinkStyle} 
	activeStyle={navLinkStyleActive}
	/>//Присвоили стили всем пропсам navLink что бы не писать для каждого navLink
)

class App extends Component{
	state={
		username: 'Pro100_MAX'
	}

	render(){
		const { username } = this.state
		return(
			<BrowserRouter>
				<React.Fragment>

					<nav style={headerStyle}>
						<NavLink to = '/' exact>Cards</NavLink>
						<NavLink to = '/ApiReq' exact>ApiReq</NavLink>
						<NavLink to = '/form' exact>Form</NavLink>
						<NavLink to = '/shop' exact>Shop</NavLink>



					</nav>/
					<Switch>
						<Route path='/' render={() => <Home username={username}/>} exact/>
						<Route path='/ApiReq' component={About} exact/>
						<Route path='/form' component={Form} exact/>
						<Route path='/shop' component={Shop} exact/>
						
					
						<Route  component={Error} exact/>
					</Switch>
				</React.Fragment>
				<Footer/>
			</BrowserRouter>
			
			)
		}
	}

export default App

//для Ошибки нету парраметра PATH
//Если в Switch поместить все роуты то они будут отображатся по отдельности не смотря на exact
//LINK нужен для навигации (style and className)
//NAVLINK содержит ещё пропы (activeStyle, activeClassName)
//EXACT для того что бы ссылки отображались по отдельности
//render возращвет функцию
	///*<Route path='/user/:user' render={(props)=> <User {...props}/>} exact/>*/