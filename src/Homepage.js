// needs to have nav, header, specials
// THIS UNDER NEEDS TO GO IN App
/*<Routes> 
<Route path="/" element={<HomePage />}></Route>
<Route path="/booking" element={<BookingPage />}></Route>
</Routes>*/

import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Homepage =()=>{
    return(
        <div>
        <Header />
        <Footer />
        </div>
    )
}

export default Homepage;