import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            guessedNumber: ""
        }
    }

    setGuessedNumber(number){
        this.setState({
            guessedNumber: number
        })
    }

    render(){
        return (
            <div>
                <Header />
                <GuessSection feedback="Make your guess!" 
                    value={this.state.guessedNumber}
                    onChange={number => this.setGuessedNumber(number)}/>
                <GuessCount count={3} />
                <GuessList guesses={[10, 15, 25]} />
            </div>
        );     
    }
}

