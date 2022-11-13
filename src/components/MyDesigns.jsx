import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


export const MyDesigns = ()=>{
	
	const prototypes = [{

	}]

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
			prototypes.map((app)=>{
				return (
					<div className="appCard" key={app.name}>
						<img src={app.img} alt="" className="appPic" />
						<h4>{app.name}</h4>
						<p className="appDesc">{app.description}</p>
						<div className="appLinks">
							<a href={app.link}>Demo</a>
						</div>
					</div>
				)
			})
		}
		</Carousel>
	)
}