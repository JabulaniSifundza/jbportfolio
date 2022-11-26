import React from 'react';



const GetInTouch = ()=>{
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
			<h3 className="centered">
				Would you like to learn more about me or contact me?
			</h3>

			<div className="contactOptions">
				<button className="contactBtn" onClick={()=> window.location = 'mailto:jjsifundza@gmail.com'}>Contact Me</button>
				<button className="contactBtn" onClick={downloadResume}>Download My Resume</button>
			</div>
		</div>
	)
}

export default GetInTouch