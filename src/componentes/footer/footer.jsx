import './footer.css'
import '../../styles/global.css'
import {AiFillFacebook, AiOutlineYoutube, AiFillInstagram}  from 'react-icons/Ai'
import {BsTwitter} from 'react-icons/Bs'

export function Footer() {
    return(
 <>
<footer className='footer-initial'>
   
    <ul className='social-icon'> 

        <li> <a href='#'><BsTwitter /> </a></li>
        <li> <a href='#'><AiFillFacebook /> </a></li>
        <li> <a href='#'><AiOutlineYoutube /></a></li>
        <li> <a href='#'> <AiFillInstagram /></a></li>
    </ul>
    
    <ul className='menu'>
   <li><a href='#'>Home </a></li>
   <li><a href='#'>About </a></li>
   <li><a href='#'>Services </a></li>
   <li><a href='#'>Team  </a></li>
   <li><a href='#'>Contact  </a></li>
  </ul>
  <p> ©2022  Created by Manoela | All Rights Reserved  </p>
</footer>
 </> 
    )
}