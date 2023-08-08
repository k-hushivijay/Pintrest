import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { HomePics, RelatedPic } from '../DATA/Data'

export default function Content(){
    const loc = useLocation()
    const[Data,setdata]=useState(loc.state)
    console.log(Data);
    const [product1, setProduct] = useState(HomePics);
    const[product2,setProduct2]= useState('');
    console.log(RelatedPic);
    useEffect(()=>{
        function show(){
            setProduct2(RelatedPic.filter(d=>d.pid==Data.id))

        }
        show()
    },[])
    
    
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

           <div className='C-2similar'>

                            {
                                product2 && product2.map(k=>(
                                        <div>
                                            <img src={k.image}/>
                                            
                                        </div>
                                ))
                            }
           </div>
           <div className='C-likethis'>

           </div>

           </div>
        </div>
        </>
    )
}