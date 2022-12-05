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
		link: "https://xd.adobe.com/view/39c151de-8190-4fd7-a0a9-8ac8506ce478-6c92/?fullscreen&hints=off"
	},
	{
		name: "Local Stock Exchange",
		img: stockExchange,
		description: "This design proptotype was creacted for a multinational micro-loan company. The aim was to enable users to request loans online and kepp track of outstanding amounts and interest payments.",
		link: "https://xd.adobe.com/view/87a8b719-989a-47e5-ba29-f49fd06e7089-d2fb/?fullscreen&hints=off"
	},
	{
		name: "Online Hardware Store",
		img: cashbuild,
		description: "This design proptotype was creacted for a multinational micro-loan company. The aim was to enable users to request loans online and kepp track of outstanding amounts and interest payments.",
		link: "https://xd.adobe.com/view/95c40449-c0d3-4b99-86a4-89b90a3aa5b9-c097/?fullscreen&hints=off"
	},
	{
		name: "Life Insurance",
		img: united,
		description: "This design proptotype was creacted for a multinational micro-loan company. The aim was to enable users to request loans online and kepp track of outstanding amounts and interest payments.",
		link: "https://xd.adobe.com/view/ff292a6d-d6ce-4ee2-ac5e-37f53a50323e-aa7a/?fullscreen&hints=off"
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