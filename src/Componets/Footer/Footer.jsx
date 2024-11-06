
import "./Footer.css"
import insta from "../../assets/instagram.png"
import fac from "../../assets/facebook.png"
import pintrest from "../../assets/pinterest.png"
 import tiktok from "../../assets/tiktok.png"
export default function Footer() {
    return (
        <footer>
            <div className="cont">
                <div className="section">
                    <h2>We believe in making motherhood simpler</h2>
                    <div className="icon">
                        <img src={insta} alt="" />
                        <img src={fac} alt="" />
                        <img src={pintrest} alt="" />
                        <img src={tiktok} alt="" />
                    </div>

                </div>
                <div className="section">
                    <h3>Connect</h3>
                    <ul>
                        <li>Contact us</li>
                        <li>
                        Advertise with us
                        </li>
                        <li>Share your story</li>
                    </ul>
                </div>
                <div className="section">
                   <h3>About us </h3>
                    <ul>
                        <li>Our story</li>
                        <li>  CareNest Insights</li>
                    </ul>
                </div>

            </div>
       </footer>
    )
}