import React from "react";

export default function Home(){
    
    return(
        <>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"60vw"}}>
                <h1 style={{color:"blue",marginBottom:"0px",fontSize:"60px"}}>Betsol To Do</h1>
                <p style={{marginTop:"0px"}}>Betsol To Do makes it easier for to plan your Work by using Online To Do List app</p>
                <a href="/newtask" style={{color:"blue",border:"1px solid blue",padding:"10px",marginLeft:"50vw",borderRadius:"10px",textDecoration:"none"}} >Add Task</a>
            </div>
        </>
    )
}