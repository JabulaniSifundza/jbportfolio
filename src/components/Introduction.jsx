import {useState, useEffect} from 'react';



export const Introduction = () =>{
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const toRotate = ["Front-End Developer", "Full-Stack Developer", "UI/UX Designer", "Creator"];
	const [text, setText] = useState('');
	const [delta, setDelta] = useState(300 - Math.random() * 100)
	const period = 2000;

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
		<div className="intro">
			<section className="info">
				<p className="welcome">Wlecome to My World</p>
				<h3 className="myName">My name is Jabulani</h3>
				<h2 className="occupation">{`I'm a `}<span className="typing">{text}</span></h2>
			</section>
		</div>
	)
}