import { useLocation, useNavigate } from "react-router-dom";
import { HomePics } from "../DATA/Data";
import { useState } from "react";

export default function HomeScreen() {
  const nav = useNavigate();
  
  console.log(HomePics);
  const [product1, setProduct] = useState(HomePics); // Initialize with an empty array

  return (
    <>
      <div className="HS-Main">
        <div className="HS-Matter">
          {HomePics.map(k => ( // Check if product is an array before using map
            <div  onClick={() => nav("Content",{state:k})} >
              
              <img src={k.Image} className="HS-Img"/>
              <div className="image-prop">
                <button>
                  Save
                </button>

              </div>
            </div>
            
          ))}
          
        </div>
      </div>
    </>
  );
}
