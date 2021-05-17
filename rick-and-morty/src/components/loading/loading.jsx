import loadingImage from '../../images/loading1.png'
import './loading.css'

function Loading(){

	return(
		<div className="loading">
			<img src={loadingImage} alt="loading" className="loading-image" />
		</div>
	)
}

export default Loading