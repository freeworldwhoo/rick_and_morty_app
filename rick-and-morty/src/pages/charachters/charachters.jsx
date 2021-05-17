import { useState,useEffect } from 'react'
import PageNumbring from '../../components/page_numbering/PageNumbring.jsx'
import './charachters.css'
import CharCard from '../../components/cards/card.jsx'
import Loading from '../../components/loading/loading.jsx'
function Charachters(){
    const [curent,setCurent] = useState(1)
    const [pages,setPages] = useState(0)
    const [inforamtions,setInformations] = useState([])
    const [isLoading,setIsLoading] = useState([false])
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
            setIsLoading(true)
            const data = await window.fetch(`https://rickandmortyapi.com/api/character/?page=${curent}`,{ method : 'GET'}).then(r=>r.json())
            const info = await data.results
            setIsLoading(false)
            setInformations(info)
        }
        getPageInfo()
    },[curent])
    return(
        <>
        <PageNumbring curent = {curent} setCurent = {setCurent} pages={pages}/>
        { isLoading ? <Loading></Loading>:
        <div className='chars-root'>
            <div className="chars-container"> 
                {inforamtions.map(item => {
                    return(
                        <CharCard key={item.id} info={item}></CharCard>
                    )
                })}
            </div>
        </div>}
        <PageNumbring curent = {curent} setCurent = {setCurent} pages={pages}/>
        </>
    )
    
}
export default Charachters