import React from 'react';

import './card.style.css';

export const Card = (props) => (
	<div className='card-container'>
		<img alt='monster' 
		src={`https://robohash.org/${props.monster.id}?set=set2`} />
		<h2 align='center'> {props.monster.name} </h2>
		<p align='center'>{props.monster.email}</p> 
	</div>

);