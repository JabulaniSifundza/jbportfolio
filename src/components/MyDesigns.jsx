import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import select from '../images/selectDesign.png';
import united from '../images/unitedAssureDesign.png';
import cashbuild from '../images/cashBuildDesign.png';
import stockExchange from '../images/eseDesign.png';


export const MyDesigns = ()=>{
	
	const prototypes = [
	{
		name: "Micro Loan Management",
		img: select,
		description: "This design proptotype was creacted for a multinational micro-loan company. The aim was to enable users to request loans online and kepp track of outstanding amounts and interest payments.",
		link: ""
	},
	{
		name: "Local Stock Exchange",
		img: stockExchange,
		description: "This design proptotype was creacted for a multinational micro-loan company. The aim was to enable users to request loans online and kepp track of outstanding amounts and interest payments.",
		link: ""
	},
	{
		name: "Online Hardware Store",
		img: cashbuild,
		description: "This design proptotype was creacted for a multinational micro-loan company. The aim was to enable users to request loans online and kepp track of outstanding amounts and interest payments.",
		link: ""
	},
	{
		name: "Life Insurance",
		img: united,
		description: "This design proptotype was creacted for a multinational micro-loan company. The aim was to enable users to request loans online and kepp track of outstanding amounts and interest payments.",
		link: ""
	},

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
			<button className={currentSlide === 0 ? 'disable' : 'prevBtn'} onClick={() => previous()} >
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
			prototypes.map((app)=>{
				return (
					<div className="appCard" key={app.name}>
						<img src={app.img} alt="" className="designPic" />
						<h4 className="projectName">{app.name}</h4>
						<p className="appDesc">{app.description}</p>
						<div className="prototypeDemo">
							<a href={app.link} className="prototypeLink">Demo</a>
						</div>
					</div>
				)
			})
		}
		</Carousel>
	)
}