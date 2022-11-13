import React from 'react';
import {MailToButton} from './MailToButton';





export const GetInTouch = ()=>{
	const downloadResume = () =>{
		fetch('JabulaniSifundza.pdf').then(response =>{
			response.blob().then(blob =>{
				const fileURL = window.URL.createObjectURL(blob);
				let alink = document.createElement('a');
				alink.href = fileURL;
				alink.download = 'JabulaniSifundza.pdf';
				alink.click();
			})
		})
	}

	return (
		<div className="getIntouch">
		{/*Remember to place RESUMER PDF in the Public Directory so the download works*/}
		<h3>
		Would you like to learn more about me or get in touch?
		</h3>

		<div className="contactOptions">
			<MailToButton label="Email Me" mailto="mailto:jjsifundza@gmail.com"/>
			<button className="contactBtn" onClick={downloadResume}>Download My Resume</button>
		</div>
		</div>
	)
}