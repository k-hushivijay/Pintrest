import { BrowserRouter , Route ,  Routes } from "react-router-dom"
import '../src/View/Style/Style.css'
import Router from "./View/Router/Router"
export default function App(){
  return(
    <>
    <BrowserRouter>
   <Routes>
    <Route path="*" Component={Router}/>
   </Routes>
    </BrowserRouter>
    
    </>
  )
}