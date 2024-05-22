import { useState } from 'react';
import './Player.css'
function Player(props){
     let [isEditing,setIsEditing]=useState(false);
     let [playerName,setPlayerName]=useState(props.name);
     
     function handleChange(event){
        setPlayerName(event.target.value);
     }

     function handleClick(){
        if(isEditing==true){
            props.setPlayer(playerName);
            setIsEditing(false);
        }
        else{
            setIsEditing(true);
        }
     }
     function handlekey(event){
        if(event.key == "Enter"){
            props.setPlayer(playerName);
            setIsEditing(false);
        }
     }

     let editablePlayerName=<span className='player-name'>{playerName}</span>

     if(isEditing==true){
        editablePlayerName=<input type="text" required value={playerName} onChange={handleChange} onKeyDown={handlekey} />
     }
    // isEditing ek useState wala variable hai
    // initially isEditing = "false"
    // click karne par--> handleClick function call hoga --> false ka true kar dega
    //Agar isEditing true hai toh aap "Save" print karte hai aur isEditing "false" gai toh aap "Edit" print karte hai
    // Jaise hi useState wala koi bhi variable ki value change hoti hai toh component wapas render hota hai

    return(
        <div className="player-container">
            {editablePlayerName}
            <span className='symbol'> {props.symbol} </span>
            <button onClick={handleClick}>{isEditing?"Save":"Edit"}</button>

        </div>
    );

}
export default Player;