"use client";

import { useState } from "react";
export default function Home(){
    const[page, setPage] = useState("home");

    const students = [
        {id:101, name : "ramesh",course :"bca"},
        {id:102, name : "suresh",course :"Mca"},
        {id:103, name : "umesh",course :"bcom"}
    ];

    return(
        <div style={{padding:"30px"}}>
            <h1>Student management system</h1>

            <button onClick={()=>setPage("home")}>Home</button>{" "}
            <button onClick={()=>setPage("students")}>students</button>{" "}
            <button onClick={()=>setPage("about")}>About us
                
            </button>

            <hr/>

            {/*home page*/}
            {page === "students" && (
                <div> 
                    <h2>Welcome</h2>
                    <p>welcome to the student management system.</p>
                    </div>
            )}
            {/*student page*/}
            {page === "students" && (
                <div> 
                    <h2>Student records</h2>
                    <table border={1} cellPadding={10}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>course</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student)=>(
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.course}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
            )}

            {/*home page*/}
            {page === "about" && (
                <div> 
                    <h2>about us</h2>
                    <p>this is simple typescript routing application.</p>
                    </div>
            )}
        </div>
    )
}