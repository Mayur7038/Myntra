import "./Product.css";
import { women } from "../../Assets/Women/women.js";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const Product = () => {
  return (
    <div id="container">
      <div id="filters">
        <div id="colors">
          <div>
            <Checkbox
              {...label}
              sx={{
                color: pink[800],
                "&.Mui-checked": {
                  color: pink[600],
                },
              }}
            />
            Black
          </div>
          <div>
            <Checkbox
              {...label}
              sx={{
                color: pink[800],
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
                color: pink[800],
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
                color: pink[800],
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
                color: pink[800],
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
