import React from 'react'
import PageNumbring from './PageNumbring'
import './charachters.css'
import CharCard from '../cards/card.jsx'
import NavBar from '../navbar/Navbar'
function Charachters(){
    const [curent,setCurent] = React.useState(1)
    const [pages,setPages] = React.useState(0)
    const [inforamtions,setInformations] = React.useState([])
    React.useEffect(()=>{
        async function getPages(){
            const data = await window.fetch('https://rickandmortyapi.com/api/character',{ method : 'GET'}).then(r=>r.json())
            const num = data.info.pages
            setPages(num)
            setCurent(1)
        }
        getPages()
    },[])
    React.useEffect(()=>{
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