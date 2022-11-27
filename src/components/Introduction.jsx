import {useState, useEffect} from 'react';



const Introduction = () =>{
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const toRotate = [ "Full-Stack Developer.", "Software Developer.", "Creator."];
	const [text, setText] = useState('');
	const [delta, setDelta] = useState(300 - Math.random() * 100)
	const period = 1600;

	const tick = () =>{
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);

		setText(updatedText);

		if(isDeleting){
			setDelta(prevDelta => prevDelta / 2)
		}
				
		if(!isDeleting && updatedText === fullText){
			setIsDeleting(true);
			setDelta(period);
		}
		else if(isDeleting && updatedText === ''){
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setDelta(500);
		}
	}

	useEffect(()=>{
		let ticker = setInterval(()=>{
			tick();
		}, delta)

		return () =>{clearInterval(ticker)};
	}, [delta, text])


	return (
		<div className="container">
			<div className="screen monitor">
				<div className="content">
					<div className="intro">
						<section className="info">
							<h3 className="myName">Hi there, my name is Jabulani.</h3>
							<br />
							<h2 className="occupation">{`I'm a `}<span className="typing">{text}</span></h2>
						</section>
					</div>
				</div>
			<div className="base">
			<div className="grey-shadow"></div>
			<div className="foot top"></div>
				<div className="foot bottom"></div>
					<div className="shadow"></div>
						<div className="keyboard">
							<div className="btm"></div>
							<ul className="keys">
								<li></li>
								<li></li>
								<li></li>
								<li></li>
							</ul>
						<div className="shadow"></div>
					</div>
				</div>
			</div>
		</div>
		
	)
}

export default Introduction;