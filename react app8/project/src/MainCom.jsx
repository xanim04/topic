import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

function MainCom() {
    return(
       <main>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contacts" element={<Contact />}/>
        </Routes>
       </main>
    )
}

export default MainCom