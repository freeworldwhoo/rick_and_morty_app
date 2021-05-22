import './slider_image.css'
import { useState,useEffect } from 'react'
import {motion} from 'framer-motion'

function SliderImage(){
	const image_array = ['/slide_images/1.jpg', '/slide_images/2.jpg', '/slide_images/3.jpg', '/slide_images/4.jpg', '/slide_images/5.jpg', '/slide_images/6.jpg', '/slide_images/7.jpeg', '/slide_images/8.jpg', '/slide_images/9.jpg', '/slide_images/10.jpg']
	
	const len = image_array.length
	const [curent,setCurent] = useState(0)
	const [imageShow,setImageShow] = useState([])
	const [direction,setDirection] = useState(true)
	const [X,setX] = useState([])
	const [Scale,setScale] = useState([])

	const get_x_sacale = ()=>{
		const Scale = [...Array(9).keys()].map((i)=>{
			return( Math.pow(0.5, Math.abs(i-4)))
		})

		let X = [...Array(9).keys()].map((i)=>{
			const signe = ((i-4)/Math.abs(i-4))
			return( (signe ? signe : 0 ) *  Math.pow(0.5, Math.abs(i-4)) * 500 )
		})
		for (let i = 0 ; i < 5 ; i++){
			for (let j = i + 1; j < 5; j++){
				X[i] += X[j]
				X[8 - i] += X[8 - j]
			}
		}
		return([X,Scale])
	}
	useEffect(()=>{
		const [x,s] = get_x_sacale()
		setX(x)
		setScale(s)
		console.log('here')
	},[])
		
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
								<motion.div  key={item} className="slider-image"

									style={{zIndex:10-Math.abs(3-index)}}
									initial = {{x: direction ? X[index] : X[index+2],
												scale: direction ? Scale[index] : Scale[index+2]
									}}
									animate = {{x: X[index + 1],
												scale:Scale[index + 1]
									 }}
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