import React from 'react';
import Product_data from "../Data/Product_data";

const MainContent = () => {
     

   

     const listitems = Product_data.map((item) =>
         <div className="card" key={item.id}>
             <div className="card_img">
                <img src = {item.thumb}/>
             </div>
             <div className="card_header">
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className="price">{item.price}<span>{item.currency}</span></p>
                <div className="btn" >Add to cart</div>
             </div>
         </div>
     
     );
     return(
         <div className="main_content">
            <h3> Smartphone </h3>
            {listitems}
         </div>
     )
}

export default MainContent;