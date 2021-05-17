import { useState,useEffect } from 'react'
import './navbar.css'
import {NavLink, useLocation} from 'react-router-dom'
import logo_img from '../../images/logo.png'

function NavBar(){

    const [active,setActive] = useState( false)
    const {pathname} = useLocation()
    const [curent,setCurent] = useState(0)

    useEffect(()=>{
        switch (pathname){
                case '/':
                    setCurent(0)
                    break;
                case '/charachters':
                    setCurent(1)
                    break;
                case '/locations':
                    setCurent(2)
                    break;
                case '/episodes':
                    setCurent(3)
                    break;
                case '/favorit':
                    setCurent(4)
                    break;
                default:
                    setCurent(5)
            }
    
    },[])
    


    return(
        <nav className="navbar">
            <div onClick={()=>setCurent(0)} className="logo">
                <NavLink exact to='/'>
                    <img src={logo_img} alt="logo" />
                </NavLink>
            </div>
            <ul className={active ? "nav-links active" : "nav-links"}>
                <li className={curent === 0 ? "links active" : "links not-active"}><NavLink onClick={()=>setCurent(0)} className="links-text" exact to='/'><div>Home</div>  </NavLink></li>
                <li className={curent === 1 ? "links active" : "links not-active"}><NavLink onClick={()=>setCurent(1)} className="links-text" exact to='/charachters'><div>charachters</div>  </NavLink></li>
                <li className={curent === 2 ? "links active" : "links not-active"}><NavLink onClick={()=>setCurent(2)} className="links-text" exact to='/locations'><div>Locations </div> </NavLink></li>
                <li className={curent === 3 ? "links active" : "links not-active"}><NavLink onClick={()=>setCurent(3)} className="links-text" exact to='/episodes'><div>episodes</div>  </NavLink></li>
                <li className={curent === 4 ? "links active" : "links not-active"}><NavLink onClick={()=>setCurent(4)} className="links-text" exact to='/favorit'><div>favorit</div>  </NavLink></li>
            </ul>
            <div onClick={()=>setActive(!active)} className="burger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}
export default NavBar