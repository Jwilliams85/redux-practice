import React, { useState } from 'react';
import {connect} from 'react-redux'
import {postPlayers} from '../actions/actions';

const PlayersForm = (props) => {
    const [player, setPlayer] = useState({
        name: "",
        age: "",
        height: ""
    })
    const inputHandler = e => { 
        setPlayer({...player, [e.target.name]: e.target.value})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
    }

    const submitHandler = e => {
        e.preventDefault();
        props.postPlayers(player)
    }
    return (
        <div>
       <form id="playerForm">
           <label htmlFor="name">Name</label>
           <input
                type="text"
                name="name"
                label="name"
                placeholder="Enter name"
                value = {props.name}
                onChange={inputHandler}
                clasName="input"/>

            <label htmlFor="name">Age</label>
           <input
                type="text"
                name="age"
                label="age"
                placeholder="Enter age"
                value = {props.age}
                onChange={inputHandler}
                clasName="input"/>

            <label htmlFor="name">Height</label>
           <input
                type="text"
                name="height"
                label="height"
                placeholder="Enter Height"
                value = {props.height}
                onChange={inputHandler}
                clasName="input"/>

           <button onClick = {submitHandler}>Submit your Player</button>    
       </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        players: state.players,
        isPosting: state.isPosting,
        error: state.error
    }
}

export default connect(mapStateToProps, {postPlayers})(PlayersForm)