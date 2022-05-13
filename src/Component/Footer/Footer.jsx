import "./Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import original from "../../image/original.jpg"

export const Footer = ()=>{
    return <div id="footer">

        <div>
            <ul>
                <h5> ONLINE SHOPPING </h5>
                <li> Men </li>
                <li>Women</li>
                <li> Kids </li>
                <li> Home & Living</li>
                <li> Beatuty </li>
                <li> Gifts Cards </li>
                <li> Myntra Insider</li>
            </ul>
            

        </div>
        <div>
            <ul>
                <h5> USEFUL LINKS </h5>
                <li> Contact Us</li>
                <li>FAQ</li>
                <li>T&C </li>
                <li> Terms Of Use</li>
                <li> Shipping</li>
                <li> Cancellation</li>
                <li> Returns</li>
                <li> Whitehat</li>
                <li> Blog</li>
                <li> Carrers </li>
                <li> Site Map </li>
            </ul>
        </div>
        <div id="experinece">

           <h5> EXPERIENCE MYNTRA APP ON MOBILE </h5>

            <div id="download">

                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="" />
            </div>

           
           <h5> KEEP IN TOUCH </h5>
           <FacebookIcon/>
           <InstagramIcon/>
            <TwitterIcon/>
            <YouTubeIcon/>
        </div>
        <div id="last">
            <div>
                <img className="garen" src={original} alt="" />
                <div>

                    <h3> 100% ORIGINAL gurantee </h3>
                    <p> for all products at myntra </p>
                </div>

            </div>

            <div>

                <img className="garen" src="https://i0.wp.com/whtvny.com/wp-content/uploads/2020/06/returns.png?fit=300%2C243&ssl=1" alt="" />

                <div>

                    <h3> Return within 30days of  </h3>
                    <p> receving your order </p>
                </div>

            </div>
        </div>


    </div>
}