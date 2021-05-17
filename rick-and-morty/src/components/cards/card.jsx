import { useState,useEffect } from 'react'
import './flipping-card.css'
import star from './star.png'

function CharCard({id,info}){
    const [firstSeen,setFisrstSeen] = useState('Uknown')
    useEffect(()=>{
        async function getFirstSeen(){
            const data = await window.fetch(info.episode[0],{ method : 'GET'}).then(r=>r.json())
            const name = data.name
            setFisrstSeen(name)
        }
        getFirstSeen()

    })
    return(
        <div id = {id} className="card">
            <div className="front">
                <img src={info.image} alt="char" className="char-img" />
                <img src={star} alt="star" className="star-icon" />
            </div>
            <div className="back">
                <img src={info.image} alt="char" className="char-img" />
                <h3>{info.name}</h3>
                <img src={star} alt="star" className="star-icon" />
                <div className="info">
                    <h4 className="status">
                        <span className={"status-icon " + info.status}></span>
                        <span className="status-info">{info.status + ' - ' + info.species }</span>
                    </h4>
                    <div className="section">
                        <p className="text-gray">Last known location:</p>
                        <p className="info-text">{info.location.name}</p>
                    </div>
                    <div className="section">
                        <p className="text-gray">First seen in:</p>
                        <p className="info-text">{firstSeen}</p>
                    </div>
                </div>
            </div>
        </div>
        )
}
export default CharCard