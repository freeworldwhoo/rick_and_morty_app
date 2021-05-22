import './slider_image.css'
import { useState,useEffect } from 'react'
import {motion} from 'framer-motion'

function SliderImage(){
	const image_array = ['/slide_images/1.jpg', '/slide_images/2.jpg', '/slide_images/3.jpg', '/slide_images/4.jpg', '/slide_images/5.jpg', '/slide_images/6.jpg', '/slide_images/7.jpeg', '/slide_images/8.jpg', '/slide_images/9.jpg', '/slide_images/10.jpg']
	
	const len = image_array.length
	const [curent,setCurent] = useState(0)
	const [imageShow,setImageShow] = useState([])
	const [direction,setDirection] = useState(true)


	useEffect(()=>{
		const start = curent - 2 < 0 ? len + curent  -  2 : curent - 2
		setImageShow([...Array(7).keys()].map((i)=> {return((i+start)%len)}))
	},[curent,len])


	return(
		<div className="slider-container">
			<div className="images-slider">
				{
					imageShow.map((item,index)=>{
						return(
								<motion.div key={item} className="slider-image"
									initial = {{x: 500 * (index - (direction ? 2 : 5)),

												// scale:
												
									}}
									animate = {{x: 500 * (index - 3)}}
								>
									<img src={image_array[item]} alt={index} />
								</motion.div>
							)
					})

				}

			</div>
			<div className="buttons-container">
				<div onClick = {()=>{setCurent(curent - 1 < 0 ? len + curent - 1 : curent - 1); setDirection(false)}} className="left-button">

				</div>
				<div onClick = {()=>{setCurent((curent + 1) % len); setDirection(true)}} className="right-button">

				</div>
			</div>

		</div>
		
	)

}
export default SliderImage