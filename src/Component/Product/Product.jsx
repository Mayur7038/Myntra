import "./Product.css";
import { women } from "../../Assets/Women/women.js";
import { pink , blue } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const Product = () => {
  return (
    <div id="container">
      <div id="filters">

        <div id="price">

            <div></div>
            <div></div>
            <div></div>
            <div></div>

        </div>

        <div id="colors">
            <h3 id="colorTitle"> Color </h3>
          <div>
            <Checkbox
              {...label}
              sx={{
                
                "&.Mui-checked": {
                  color: pink,
                },
              }}
            />
            Black
          </div>
          <div>
            <Checkbox
              {...label}
              sx={{
                "&.Mui-checked": {
                  color: pink[600],
                },
              }}
            />
            White
          </div> <div>
            <Checkbox
              {...label}
              sx={{
                "&.Mui-checked": {
                  color: pink[600],
                },
              }}
            />
            Red
          </div>
           <div>
            <Checkbox
              {...label}
              sx={{
                "&.Mui-checked": {
                  color: pink[600],
                },
              }}
            />
            Pink
          </div>
          <div>
            <Checkbox
              {...label}
              sx={{
                "&.Mui-checked": {
                  color: pink[600],
                },
              }}
            />
            Red
          </div>
          
        </div>
      </div>

      <div className="products">
        {women.map((el, i) => {
          return (
            <div className="gridDiv" key={i}>
              <img className="images" src={el.image} alt={"image"}></img>
              <h4 className="title"> {el.title} </h4>
              <h4 className="price"> Rs. {el.price} </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};
