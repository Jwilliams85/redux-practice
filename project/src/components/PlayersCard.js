import React from 'react';

const PlayersCard = (props) => {
    return (
        <div>
            <h2>Name:{props.player.name}</h2>
            <h3>Age:{props.player.age}</h3>
            <h3>Height:{props.player.height}</h3>
            <button>Update</button>
            <button>Delete</button>
        </div>
    )
    
}

export default PlayersCard;