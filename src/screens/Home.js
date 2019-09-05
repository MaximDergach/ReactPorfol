import React from 'react'
import CardHome from '.././card/CardHome';
import ApiReq from '.././apiReq/ApiReq'

const divStyle = {
	fontSize: '18px'
}
const imgApiDog = {
	 width: '800px',
	 position: 'relative',
	  top: '-800px',
	  display: 'flex',
	  flexWrap:'wrap'
}

const mainStyle = {
	height: 1000
}
const Home = ({ username }) =>(
		<React.Fragment>
			<main style={mainStyle}> 	

				<React.Fragment>
				<h1>Работа с лентой</h1>
					<div style={divStyle}>Тут я отобразил работу с лентой контактов, которая берёт из баззы данные в будущем</div>	
					<CardHome />
					<div style={imgApiDog}>	
						<ApiReq />
						<ApiReq />
						<br/>
						<ApiReq />
						<ApiReq />
					</div>
				</React.Fragment>
				
				
			</main>
		</React.Fragment>
	)

export default Home