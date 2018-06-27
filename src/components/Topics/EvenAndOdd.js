import React, { Component } from 'react';

class EvenAndodd extends Component{
    constructor(){
        super();
        this.state ={
        evenArray: [],
        oddArray: [],
        userInput: "",
        }
    }

    changeUserInput(user){
        this.setState({
            userInput: user,
        })
    }

    evenAndodd(){
        let evens = [];
        let odds = [];
        let array = this.state.userInput.split(",")

        for(let i =0; i < array.length; i++){
            if(array[i] % 2 === 0 ){
                evens.push(array[i])
            }
            else{
                odds.push(array[i])
            }
        }
        this.setState({
            evenArray: evens,
            oddArray: odds
        })
    }


    render(){
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4 >Even And Odds</h4>
                <input className="inputLine" onChange={(event) =>{this.changeUserInput(event.target.value)}}/>
                <button className="confirmationButton" onClick={() =>{this.evenAndodd()}}>split</button>
                <span className="resultsBox">Even {JSON.stringify (this.state.evenArray)}</span>
                <span className="resultsBox">Odd {JSON.stringify (this.state.oddArray)}</span>
            </div>
        )
    }
}


export default EvenAndodd;