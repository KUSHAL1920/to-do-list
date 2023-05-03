import React from "react";
import "../style.css"
import Taskitem from "./taskitem";

export default function Tasks(){


    return(
        <>
            <label style={{alignSelf:"flex-start",marginLeft:"23vw"}}>Task Details</label>
            <div style={{backgroundColor:"#FFFBF5",display:"flex",flexDirection:"row",width:"50vw",margin:"0px"}}>
                <h5 >Sl No</h5>
                <h5 style={{margin:"10px 100px 10px 100px"}}>Task Name</h5>
                <h5 style={{margin:"10px 40px 10px 40px"}}>Status</h5>
                <h5>Edit</h5>
                <h5>Remove</h5>
            </div>
            <div>
                <Taskitem/>
            </div>
        </>
    )
}