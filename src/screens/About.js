import React from 'react'
import ApiReq from '.././apiReq/ApiReq'

const About = () =>(
		<React.Fragment>
			<h1>Работа с ApiReq #2</h1>
			<main>
				<div>Тут я настроил запросы к серверу картинок собак через API</div>
				<ApiReq />
				
			</main>
		</React.Fragment>
	)

export default About