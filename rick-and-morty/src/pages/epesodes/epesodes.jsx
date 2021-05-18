import { useState,useEffect } from 'react'
import PageNumbring from '../../components/page_numbering/PageNumbring.jsx'

function Epesodes(){
    const [curent,setCurent] = useState(1)
    const [pages,setPages] = useState(0)
    useEffect(()=>{
        async function getPages(){
            const data = await window.fetch('https://rickandmortyapi.com/api/episode',{ method : 'GET'}).then(r=>r.json())
            const num = data.info.pages
            setPages(num)
        }

        getPages()
    },[])
    return(
        <>
        <PageNumbring curent = {curent} setCurent = {setCurent} pages={pages}/>
        </>
    )
    
}
export default Epesodes