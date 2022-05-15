import { Route , Routes } from "react-router-dom";
import { Landing } from "./Landing/Landing";
import { Product } from "./Product/Product";



export const Router = ()=>{
    return <>

        <Routes>
            <Route path="/" element={<Landing/>} > </Route>
            <Route path="/product" element={<Product/> }></Route>
        </Routes>
    </>
}