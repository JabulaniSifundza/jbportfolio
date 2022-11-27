import React from 'react';
import { motion } from "framer-motion";



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
				<motion.button 
				className="contactBtn" 
				whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
				onClick={()=> window.location = 'mailto:jjsifundza@gmail.com'}>
					Contact Me
				</motion.button>

				<motion.button 
				whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
				className="contactBtn" 
				onClick={downloadResume}>
					Download My Resume
				</motion.button>
			</div>
		</div>
	)
}

export default GetInTouch