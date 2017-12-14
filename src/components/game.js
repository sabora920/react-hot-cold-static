import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            guessedNumber: "",
            allGuesses: [12, 45]
        }
    }

    setGuessedNumber(number){
        number = parseInt(number);
        this.setState({
            guessedNumber: number
        })
        this.setAllGuesses(number);
    }

    setAllGuesses(number){
        this.setState({
            allGuesses: [...this.state.allGuesses, number]
        })
    }

    render(){
        return (
            <div>
                <Header />
                <GuessSection feedback="Make your guess!" 
                    getNumber={number => this.setGuessedNumber(number)}
                />
                <GuessCount count={this.state.allGuesses.length} />
                <GuessList guesses={this.state.allGuesses} />
            </div>
        );     
    }
}

