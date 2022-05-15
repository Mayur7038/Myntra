import tshirt from "../../Assets/t-shirt.webp"
import hells from "../../Assets/heels.webp"
import beauty from "../../Assets/beauty.webp"
import backpack from "../../Assets/backpacks.webp"
import trousers from "../../Assets/trousers.webp"
import kurta from "../../Assets/kurta.webp"
import trackpants from "../../Assets/trackpants.webp"
import home from "../../Assets/home-decor.webp"
import dresses from "../../Assets/dresses.webp"
import active from "../../Assets/activewear.jpg"





import "./Landing.css"

export const Landing =()=>{
    return <div id="landing">
        <div>
            <img id="banner" alt="banner" src="https://images.pexels.com/photos/7148397/pexels-photo-7148397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
        </div>
        <div id="minibanner">
            <h1 id="league"> Fashion League </h1>
            <img src="https://images.pexels.com/photos/1049317/pexels-photo-1049317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="banner" />
            <h2>Extra Item @ 49 & more extra deals</h2>
            <h4 id="midnight"> 7 pm MIDNIGHT </h4>
        </div>

        <div>
            <h1 id="walk"> Walk On Sunshine with these </h1>
            <h1> BUDGET BUYS </h1>
            <h1 id="viewAll"> +View All </h1>
        </div>
        <div className="gallery">
            <img src={tshirt} alt="" />
            <img src={hells} alt="" />
            <img src={beauty} alt="" />
            <img src={backpack } alt="" />
            <img src={trousers} alt="" />
            <img src={trackpants} alt="" />
            <img src={home} alt="" />
            <img src={dresses} alt="" />
            <img src={active} alt="" />
            <img src={kurta} alt="" />
        </div>
        
    </div>
}