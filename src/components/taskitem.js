import React from "react";
import { CiCircleRemove } from "react-icons/ci"
import { GrFormEdit } from "react-icons/gr"
export default function taskitem(){

    return(
        <div style={{display:"flex",flexDirection:"row",width:"50vw",padding:"10px",margin:"0px",padding:"2px",fontSize:"medium",margin:"10px"}}>
            <p className="item" style={{padding:'2px',fontSize:'medium',margin:'10px'}}>sl no</p>
            <p className="item" style={{padding:'2px',fontSize:'medium',margin:"10px 100px 10px 100px"}} >Task name</p>
            <button classname="item" style={{border:"1px solid blue",color:"blue",margin:"10px 40px 10px 55px",padding:"2px",justifyContent:"center",alignItems:"center"}}>TODO</button>
            <button className="item" style={{padding:'2px',fontSize:'medium',margin:'10px 10px 10px 20px'}} ><GrFormEdit/></button>
            <button className="item" style={{padding:'2px',fontSize:'medium',margin:'10px 10px 10px 20px'}} ><CiCircleRemove/></button>
        </div>
    )
}