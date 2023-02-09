import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import coin from '../images/coin.png';
import gameIcon from '../images/gameIcon.png';
import gesture from '../images/handGesture.png';
import stockChart from '../images/stockChart.png';
import bot from '../images/robot.png';
import toxic from '../images/toxicityIcon.png';




export const MyApplications = ()=>{
	const applications = [
		{
			name: "Stock Price and S&P 500 Visualization",
			img: coin,
			link: "https://jabulanisifundza-tickers-app-zhrjio.streamlit.app",
			github: "https://github.com/JabulaniSifundza/Tickers",
			description: "A Python exploratory data analysis application that allows users to visualize various company stock metrics such as stock price highs, closing price and dividends per share since 2010. Users can also view S&P 500 company stock information, filter or select companies by sector and download the data in CSV format. "
		},
		{
			name: "Financial Modelling and Projections",
			img: coin,
			link: "https://jabulanifinmodelling.web.app/",
			github: "https://github.com/JabulaniSifundza/modellingapp",
			description: "A React application that allows users to read public company financials including Income Statements, Balance Sheets and Cash Flow Statements. Users can visualize selected financial statistics on different types of graphs. Users can create forecasts for these public companies' financials by adjusting certain factors that impact costs and income to gauge the company's potential financial standing in the future. Users can also create their own income statement by populating inputs to get the value of essential metrics and ratios for their business."

		},
		{
			name: "Marvel Character Arcade Game",
			img: gameIcon,
			link: "https://marvelgame.web.app/",
			github: "https://github.com/JabulaniSifundza/marvel",
			description: "A two player arcade style game featuring some of Marvel's characters. Player controls can be viewed within the game which features battles between selected characters."
	
		},
		{
			name: "Gesture Controlled Art Gallery",
			img: gesture,
			link: "https://jabulanigesturegallery.web.app/",
			github: "https://github.com/JabulaniSifundza/gallery",
			description: "A gesture controlled art image gallery viewer. This application is contolled by making certain hand gestures toward the user's webcam; the user never has to you the trackpad or a mouse to scroll or browse through images in the gallery. Images of the art in this application are provided by The Chicago Art Institute API. This application uses TensorFlow's Handpose computer vision machine learning model to estimate the position and gestures made by the user to navigate the application."
		},
		{
			name: "Stock Watchlist",
			img: stockChart,
			link: "https://jabulanistockwatch.web.app/",
			github: "https://github.com/JabulaniSifundza/stockapp",
			description: "A single page React application that allows users to search, find and track company stock prices. Users can access historical data for their selected time period, visualize trajectory using stock charts and add company stocks to their wtachlist to access later."

		},
		{
			name: "Image Classifier",
			img: bot,
			link: "https://jabulaniimagerecognition.web.app/",
			github: "https://github.com/JabulaniSifundza/classifier",
			description: "A React application that allows users to upload or provide links to images they would like classified. The application then uses a TensorFlow Machine Learning Model to analyze and predict/classify the objects that exist within the image."
	
		},
		{
			name: "Passage Question and Answer",
			img: bot,
			link: "https://jabulaniqna.web.app",
			github: "https://github.com/JabulaniSifundza/passagereader",
			description: "A single page application that allows the user to pass a passage as an input and then ask a Natural Language Processing Machine Learning Model questions on that passage, which the model provides answers to. This applicaton uses TensorFlow's BERT Q and A model to read the passage and answer the user's questions. This could be useful for users who want to extract information for long passages or in applications as customer support to answer questions about a company's services/ethos."
	
		},
		{
			name: "Text Toxicty Detector",
			img: toxic,
			link: "https://jabulanitoxicity.web.app/",
			github: "https://github.com/JabulaniSifundza/detectToxic",
			description: "A simple single page application that takes user input and detects whether that input/message contains any toxicity/profanity in it. This application uses TensorFlow's Toxicity Detection Machine Learning Model to determine whether inputs are toxic or not."
	
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