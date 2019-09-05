import React, {Fragment} from 'react'

const styles = {
	fontSize: 24
}
const date = new Date()

const minutes = date.getMinutes();

let timeOfDay;
if (date.getHours() < 12){
	timeOfDay = 'Доброе Утро'
	styles.backgroundColor = "#FFCC33"
} else if(
		date.getHours() >= 12 && date.getHours() < 17){
	timeOfDay = 'Ясный день'
	styles.background = "#FF0066"
} else {
	timeOfDay = 'Глубокая ночь'
	styles.background = "#330099"
	styles.color = "#fff"
}

const CompMain = () => (
	<Fragment>
		<h2>Тут компонент в функциональном стиле</h2>
			<ul>
				<li>{Date()}</li>
				<li>{date.getHours() % 12} часа</li>
				<li>{date.getMinutes()} минут</li>
				<li>{date.getSeconds()} секунд</li>
				<li style={styles}>{timeOfDay} Генерируется 
				условием из функции. Определяет сколько время 
				и выводит значение с нужными стилями</li>
			</ul>
	</Fragment>			
	) 
export default CompMain