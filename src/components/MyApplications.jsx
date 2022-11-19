import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const MyApplications = ()=>{
	const applications = [
		{
			name: "Financial Modelling and Projections",
			img: "",
			link: "",
			github: "",
			description: ""

		},
		{
			name: "Gesture Controlled Art Gallery",
			img: "",
			link: "",
			github: "",
			description: ""
	
		},
		{
			name: "Marvel Character Arcade Game",
			img: "",
			link: "",
			github: "",
			description: ""
	
		},
		{
			name: "NBA Player Statistic Tracker",
			img: "",
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
			img: "",
			link: "",
			github: "",
			description: ""

		}
		

	]

	const responsive ={
		desktop: {
			breakpoint: {max: 3000, min: 1024},
			items: 3, 
			slidesToSlide: 3
		},
		tablet: {
			breakpoint: {max: 1024, min: 464},
			items: 2, 
			slidesToSlide: 2
		},
		mobile: {
			breakpoint: {max:464, min: 0},
			items: 1, 
			slidesToSlide: 1
		}
	}

	return (
		<Carousel
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
						<h4>{app.name}</h4>
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