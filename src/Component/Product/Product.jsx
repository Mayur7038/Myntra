import "./Product.css"
import {women} from "../../Assets/Women/women.js"



export const Product = ()=>{


    return <div id="container">

       <div id="filters">
       
       </div>

        <div className="products">


            {
                women.map((el)=>{
                    
                  return  <div className="gridDiv">

                     <img className="images" src={el.image} alt={"image"} ></img>
                     <h4 className="title"> {el.title} </h4>
                     <h4 className="price" > Rs. {el.price} </h4>

                    </div>

                })
            }



        </div>


       

    </div>
}