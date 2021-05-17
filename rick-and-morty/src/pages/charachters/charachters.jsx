import { useState,useEffect } from 'react'
import PageNumbring from '../../components/page_numbering/PageNumbring.jsx'
import './charachters.css'
import CharCard from '../../components/cards/card.jsx'
function Charachters(){
    const [curent,setCurent] = useState(1)
    const [pages,setPages] = useState(0)
    const [inforamtions,setInformations] = useState([])
    useEffect(()=>{
        async function getPages(){
            const data = await window.fetch('https://rickandmortyapi.com/api/character',{ method : 'GET'}).then(r=>r.json())
            const num = data.info.pages
            setPages(num)
            setCurent(1)
        }
        getPages()
    },[])
    useEffect(()=>{
        async function getPageInfo(){
            const data = await window.fetch('https://rickandmortyapi.com/api/character/?page='+curent,{ method : 'GET'}).then(r=>r.json())
            const info = await data.results
            setInformations(info)
            console.log(info)
        }
        getPageInfo()
    },[curent])
    return(
        <>
        <PageNumbring curent = {curent} setCurent = {setCurent} pages={pages}/>
        <div className='chars-root'>
            <div className="chars-container"> 
                {inforamtions.map(item => {
                    return(
                        <CharCard id={item.id} info={item}></CharCard>
                    )
                })}
            </div>
        </div>
        <PageNumbring curent = {curent} setCurent = {setCurent} pages={pages}/>
        </>
    )
    
}
export default Charachters