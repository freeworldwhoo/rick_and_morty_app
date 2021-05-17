import './page_numbering.css'

function PageNumbring({curent,setCurent,pages}){
    const start = curent - 2 > 0 ? curent - 2 : 1
    const end = curent + 2 <= pages ? curent + 2 : pages

    const pages_table = [...Array(end - start +1).keys()].map((i)=> {return(i+start)})
    return(
        <div className='pajing'>
            {curent !== 1 ? <h2 className='number not-active' onClick ={()=>setCurent(curent - 1)}>{'<<'}</h2> : '' }
            {pages_table.map( item =>{
                return(
                <h2 className={item === curent ? 'number active' : 'number not-active'} id = {item} onClick={()=>setCurent(item)}>{item}</h2>)
            }
            )}
             { curent !== pages ? <h2 className='number not-active' onClick={()=>setCurent(curent + 1)} >{'>>'}</h2> : '' } 
        </div>
    )
}
export default PageNumbring