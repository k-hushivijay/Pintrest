import { Routes, Route, useNavigate } from "react-router-dom";
import HomeScreen from "../Screen/HomeScreen";
import Content from "../Screen/Content";
export default function Router(){
    const nav = useNavigate()
    return(
        <>

        <div className="R-main">
            <div className="R-inner">
                <img className="Pint-Img" src={require('../Image/Logo/Pintrest Logo.png')}/>

            </div>
            <div className="R-Home" >
                <h1 onClick={()=>nav('/')}>Home</h1>
                <h1>Explore</h1>
                <select>Create</select>

            </div>
            <div className="R-Search">
                <input type="search" className="RR-Search" placeholder="Search"/>
            </div>
            <div className="R-Bell">
                <img src={require("../Image/Logo/Bell.png")} className="BELL"/>
                
                

            </div>
            <div className="R-message">
                <img src={require('../Image/Logo/Message.png')} className="MESSAGE"/>

            </div>
            

        </div>
        <Routes >
            <Route path="/" Component={HomeScreen}/>
            <Route path="/Content" Component={Content}/>
        </Routes>
        </>
       
    )
}