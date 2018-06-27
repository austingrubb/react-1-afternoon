import React, { Component } from 'react';

class FillterString extends Component{
    constructor(){
        super();
        this.state = {
            names: ['bob','bill','nob','lob','cob'],
            userInput: '',
            filteredNames:[],
        }
    }
    handleChange(value){
        this.setState({
            userInput: value
        });
    }
    filterNames(userInput){
        let names = this.state.names;
        let filteredNames = [];

        for(let i = 0;i <names.length;i++)
        if(names[i].includes(userInput)){
            filteredNames.push(names[i])
        }
        this.setState({filteredNames : filteredNames})
    }
    render(){
        return(
            <div className="puzzleBox filterStringPB">
              <h4> Filter String </h4>
              <span className="puzzleText">Names: {JSON.stringify(this.state.names,null,10)}</span>
              <input className="inputLine" onChange={(e) => this.handleChange(e.target.value)}></input>
              <button className="confirmationButton"onClick={ () => this.filterNames(this.state.userInput)}> Filter </button>
              <span className="resultsBox filterStringRB">filteredNames:{JSON.stringify(this.state.filteredNames,null,10)}</span>
            </div>
        )
    }
}


export default FillterString;
