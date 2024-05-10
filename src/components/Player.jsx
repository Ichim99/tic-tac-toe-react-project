import {useState} from 'react';


export default function Player({ initialName, symbol}) {
    const [ playerName, setPlayerName ] = useState(initialName);
    const [ isEditing, setIsEditing ] = useState(false);

    function handleEditClick() {
        setIsEditing((editing) => !editing);
    }

    function handleChange(event) {
        console.log(event);
        setPlayerName(event.target.value);
    }
    let editablePlayerName = <span className="player-name">{playerName}</span>;
    //let btnCaption = 'Edit';

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>;
        //btnCaption = 'Save';

    }

    return (
        <li>
        <span className="player">
        {editablePlayerName}
        <span clasName="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button> 
        </span>
        
        </li>
    );
}