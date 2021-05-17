import React from 'react'
import PageNumbring from './../home/PageNumbring'

function Places(){
    const [curent,setCurent] = React.useState(1)
    const [pages,setPages] = React.useState(0)
    React.useEffect(()=>{
        async function getPages(){
            const data = await window.fetch('https://rickandmortyapi.com/api/location',{ method : 'GET'}).then(r=>r.json())
            const num = data.info.pages
            setPages(num)
        }

        getPages()
    },[])
    return(
        <>
        <h1>holla</h1>
        <PageNumbring curent = {curent} setCurent = {setCurent} pages={pages}/>
        </>
    )
    
}
export default Places