import React from 'react';
import {Link} from 'react-router-dom';


export const MailToButton = ({mailto, label}) =>{
	return (
		<Link className="contactBtn"
		to='#'
		onClick={(e) =>{
			window.location.href = mailto;
			e.preventDefault();
		}}>
		{label}
		</Link>
		
	)

}