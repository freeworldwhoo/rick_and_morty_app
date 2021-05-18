import './slider_image.css'
import { useState,useEffect } from 'react'

function SliderImage(){
	let down = false
	const width = 1000
	const height = 500
	const image_array = ['/slide_images/1.jpg', '/slide_images/2.jpg', '/slide_images/3.jpeg', '/slide_images/4.jpg', '/slide_images/5.jpg', '/slide_images/6.jpeg', '/slide_images/7.jpeg', '/slide_images/8.jpg', '/slide_images/9.jpg', '/slide_images/10.jpg']
	const [curent,setCurent] = useState(0)
	const [imageShow, setImageShow] = useState([])
	const [direction,setDirection] = useEffect(false)
	const len = image_array.length

	useEffect(()=>{
		const start = curent - 2  < 0 ? len + (curent - 3) : curent - 2
		console.log( curent,len,start)
		setImageShow([...Array(5).keys()].map((i)=> {return( (i+start) % len )}))
		console.log(imageShow)

	},[curent])


	return(
		<>
			<div className="slider-container">

				<div style={direction? `animation:slide-${direction} 0.25s`:''} className="image-slider">

					{
						imageShow.map((item,index)=>{
							return(
								// style={direction? `animation:scale${index}-${direction}`:''}
								<img  key={image_array[item]} src={image_array[item]} alt={`${item}.img`} className={`slide-image ${index}`} />
							)
						})
					}
				</div>
				<div className="slide-buttons">
					<div className="slide-button" onClick={()=>{setCurent(curent - 1  < 0 ? len - 1 : curent - 1); setDirection('reverse') }}>{'<'}</div>
					<div className="slide-button" onClick={()=>{setCurent((curent+1) % len); setDirection(); setDirection('normal')}}>{'>'}</div>
				</div>

			</div>
		</>
	)

}
export default SliderImage