import React from "react";
import Home from "./home"
import Tasks from "./tasks";

export default function Homepage() {

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Home />
            <Tasks />
            <div class="bottomcontainer" style={{justifySelf:"flex-end",marginTop:"300px",backgroundColor:"grey",width:"100vw",textAlign:"center",padding:"1px"}}>

                <p class="copywrite">BETSOL copywrite © 2022 ® all rights reserved</p>

            </div>
        </div>
    )
}