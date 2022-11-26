import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import barChart from '../images/barChart.png';
import coin from '../images/coin.png';
import gameIcon from '../images/gameIcon.png';
import gesture from '../images/handGesture.png';
import stockChart from '../images/stockChart.png';
import bot from '../images/robot.png';
import bicep from '../images/bicepIcon.png';
import toxic from '../images/toxicityIcon.png';
import tv from '../images/tvIcon.png';



export const MyApplications = ()=>{
	const applications = [
		{
			name: "Financial Modelling and Projections",
			img: coin,
			link: "",
			github: "",
			description: "A react application that allows users to read public company financials inlcuding Income Statements, Balance Sheets and Cash Flow Statements. Users can visualize selected financial statistics on different types of graphs. Users can create forecasts for these public companies' financials by adjusting certain factors that impact costs and income to gauge the company's potential financial standing in the future. Users can also create their own income statement by populating inputs to get the value of essential metrics and ratios for their business."

		},
		{
			name: "Gesture Controlled Art Gallery",
			img: gesture,
			link: "",
			github: "",
			description: "A gesture controlled art image gallery viewer. This application is contolled by making certain hand gestures toward the user's webcam; the user never has to you the trackpad or a mouse to scroll or browse through images in the gallery. Images of the art in this application are provided by The Chicago Art Institute API. This application uses TensorFlow's handpose copmputer vision model to estimate the position and gestures made by the user to navigate the application."
	
		},
		{
			name: "Marvel Character Arcade Game",
			img: gameIcon,
			link: "",
			github: "",
			description: "A two player arcade style game featuring some of Marvel's characters. Player controls can be viewed within the game which features battles between selected characters."
	
		},
		{
			name: "NBA Player Statistic Visualizer",
			img: barChart,
			link: "",
			github: "",
			description: "A single page application that allows to search NBA players and visualize their statictics using various types of graphs. Users the types of statistics they want to view. This application uses a free open source to provide statistics.*"
	
		},
		{
			name: "Passage Question and Answer",
			img: bot,
			link: "",
			github: "",
			description: "A single page application that allows the user to pass a passage as an input and then ask a Natural Language Processing Machine Learning Model questions on that passage, which the model provides answers to. This applicaton uses TensorFlow's BERT Q and A model to read the passage and answer the user's questions. This could be useful for users who want to extract information for long passages or in applications as customer support to answer questions about a company's services/ethos."
	
		},
		{
			name: "Text Toxicty Detector",
			img: toxic,
			link: "",
			github: "",
			description: "A simple single page application that takes user input and detects whether that input/message contains any toxicity/profanity in it. This application uses TensorFlow's Toxicity Detection Machine Learning Model to determine whether inputs are toxic or not."
	
		},
		{
			name: "Image Classifier",
			img: bot,
			link: "",
			github: "",
			description: "A react application that allows users to upload or provide links to images they would like classified. The application then uses a TensorFlow Machine Learning Model to analyze and predict/classify the objects that exist within the image."
	
		},
		{
			name: "Workout Helper",
			img: bicep,
			link: "",
			github: "",
			description: "An application that lets users search and find workouts according their own criteria. This application also provides users with links to YouTube videos that provide instructions on how to perform the desired excersises."
	
		},
		{
			name: "Stock Watchlist",
			img: stockChart,
			link: "",
			github: "",
			description: "A single page React application that allows users to search and find company stock prices. Users can access historical data, visualize trajectory using stock charts and add company stocks to their wtachlist to access later."

		},
		{
			name: "Full Stack Netflix Clone",
			img: tv,
			link: "",
			github: "",
			description: "A full-stack streaming service/Netflix clone."
	
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
			<button className={currentSlide === 0 ? 'disable' : 'prevBtn'} onClick={() => previous()}>
				<svg className="prevArrow"></svg>
			</button>
			<button onClick={() => next()} className="nextBtn">
				<svg className="nextArrow"></svg>
			</button>
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
								<a href={app.link} className="appLink1">Demo</a>
								<a href={app.github} className="appLink2">Github Repo</a>
							</div>
						</div>
					)
				})
			}
			</Carousel>
		
	)

}