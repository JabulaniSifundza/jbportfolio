import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import barChart from '../images/barChart.png';
import coin from '../images/coin.png';
import gameIcon from '../images/gameIcon.png';
import gesture from '../images/handGesture.png';
import stockChart from '../images/stockChart.png';


export const MyApplications = ()=>{
	const applications = [
		{
			name: "Financial Modelling and Projections",
			img: coin,
			link: "",
			github: "",
			description: ""

		},
		{
			name: "Gesture Controlled Art Gallery",
			img: gesture,
			link: "",
			github: "",
			description: ""
	
		},
		{
			name: "Marvel Character Arcade Game",
			img: gameIcon,
			link: "",
			github: "",
			description: ""
	
		},
		{
			name: "NBA Player Statistic Visualizer",
			img: barChart,
			link: "",
			github: "",
			description: ""
	
		},
		{
			name: "Passage Question and Answer",
			img: "",
			link: "",
			github: "",
			description: ""
	
		},
		{
			name: "Text Toxicty Detector",
			img: "",
			link: "",
			github: "",
			description: ""
	
		},
		{
			name: "Image Classifier",
			img: "",
			link: "",
			github: "",
			description: ""
	
		},
		{
			name: "Full Stack Netflix Clone",
			img: "",
			link: "",
			github: "",
			description: ""
	
		},
		{
			name: "Workout Helper",
			img: "",
			link: "",
			github: "",
			description: ""
	
		},
		{
			name: "Stock Watchlist",
			img: stockChart,
			link: "",
			github: "",
			description: ""

		}
		

	]

	const responsive ={
		desktop: {
			breakpoint: {max: 3000, min: 1024},
			items: 1, 
			slidesToSlide: 1
		},
		tablet: {
			breakpoint: {max: 1024, min: 464},
			items: 1, 
			slidesToSlide: 1
		},
		mobile: {
			breakpoint: {max:464, min: 0},
			items: 1, 
			slidesToSlide: 1
		}
	}

	const ButtonGroup = ({ next, previous, ...rest }) => {
		const { carouselState: { currentSlide } } = rest;
		return (
		  <div className="carousel-button-group">
			<button className={currentSlide === 0 ? 'disable' : 'prevBtn'} onClick={() => previous()} />
			<button onClick={() => next()} className="nextBtn"/>
		  </div>
		);
	  };

	

	return (
		
			<Carousel
			className="carousel"
			arrows={false} 
			customButtonGroup={<ButtonGroup />}
			swipeable={true}
			draggable={false}
			showDots={false}
			responsive={responsive}
			infinite={true}
			keyBoardControl={true}
			transitionDuration={800}
			removeArrowOnDeviceType={["tablet", "mobile"]}>
			{
				applications.map((app)=>{
					return (
						<div className="appCard" key={app.name}>
							<img src={app.img} alt="" className="appPic" />
							<h4 className="projectName">{app.name}</h4>
							<p className="appDesc">{app.description}</p>
							<div className="appLinks">
								<a href={app.link}>Demo</a>
								<a href={app.github}>Github Repo</a>
							</div>
						</div>
					)
				})
			}
			</Carousel>
		
	)

}