import React from "react";
import "../style.css"

export default function Add() {


    return (
        <div style={{ justifyContent: 'center', display: "flex", flexDirection: "column", alignItems: "center", border: "1px solid black", width: "30vw", height: "30vh" ,padding:"50px",marginTop:"25vh"}}>
            <a href="/" className="x">X</a>
            <div>
                <h2>New Task</h2>

            </div>
            <form action="/addtask" method="post" style={{width:"100%"}}>
                <div style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",alignContent:"center",width:"100%"}}>
                    <label>Task</label>
                    <input style={{ margin: "5px" }} type="text" placeholder="Description of Task" />
                </div>
                <div style={{ marginLeft: "18vw",marginTop:"30px"}}>
                    <a href="/" className="close">Close</a>
                    <button style={{border:"none"}} type="submit" className="save">Save</button>
                </div>
            </form>

        </div>
    )
}