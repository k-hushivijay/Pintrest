import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { HomePics, RelatedPic } from '../DATA/Data'

export default function Content(){
    const loc = useLocation()
    const[Data,setdata]=useState(loc.state)
    console.log(Data);
    const [product1, setProduct] = useState(HomePics);
    
    
    return(
        <>
        <div className="C-main">
           <div className="C-matter">
            <div className="C-matter-internal">
              <img className='C-matter-i' src={Data.Image} />

            </div>
            <div className="C-matter-internal-half">
                <div className="C-half-matter">
                    <div className="C-half-img">
                        <img src={require('../Image/Logo/three-dots.png')}/>
                        <img src={require('../Image/Logo/Downloadable.png')}/>
                        <img src={require('../Image/Logo/Link.png')}/>
                       

                    </div>
                   <div className='C-half-img-btn'>
                   <button>
                            Save
                        </button>

                   </div>

                </div>
            </div>
            
           </div>

           <div className='C-2main'>
           <h1>
            More Like This
           </h1>
           <div className='C-likethis'>

           </div>

           </div>
        </div>
        </>
    )
}