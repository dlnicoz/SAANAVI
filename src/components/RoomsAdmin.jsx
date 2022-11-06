import React from 'react';
import { useState } from 'react';


function RoomsAdmin() {
    const [room1state , setState1] = useState("")
    function change1() {
        setState1 = "hi how are you";
    }
    return(
        <>
        <button onClick={change1}></button>
        </>
    )
}
export default RoomsAdmin;