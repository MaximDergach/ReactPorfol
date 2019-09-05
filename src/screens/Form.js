import React, { Component } from 'react';
import CompMain from './FormFn/leftCompon/LeftCompon'
import './FormFn/leftCompon/style.css'

	 
class Form extends Component{
	render(){
		return(

			<div>
				<h1>Работа с Формой</h1>
				<CompMain/>
				<span>
					<input className="styelForm" name="form" placeholder="Введите слово"/>
					<input className="btnForm" type="submit" value="Отправить"/>
					<br/>
					<span>	
						<input type="checkbox"/>Сменить цвет кнопки 

					</span>
				</span>
			</div>
		)
	}
}

export default Form