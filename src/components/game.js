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
            allGuesses: [],
            computerGuess: Math.floor(Math.random() * 100),
            feedback: "Make Your Guess!",
            isInfoHidden: true
        }
    }

    setGuessedNumber(number){
        number = parseInt(number);
        this.setState({
            guessedNumber: number
        })
        this.setAllGuesses(number);
        this.setFeedback(number);
    }

    setAllGuesses(number){
        this.setState({
            allGuesses: [...this.state.allGuesses, number]
        })
    }

    setFeedback(number){
        if((number > (this.state.computerGuess - 10) && number < (this.state.computerGuess + 10))){
            this.setState({
                feedback: "Hot!"
            })
        } else {
            this.setState({
                feedback:"Cold!"
            })
        }
    }

    toggleHidden(){ 
        this.setState({ 
            isHidden: !this.state.isHidden 
        }) 
    }

    render(){
        console.log(this.state.computerGuess)
        if(this.state.computerGuess === this.state.guessedNumber){
            return(
                <div>
                    <Header />
                    <h1>YOUR GUESS WAS CORRECT!</h1>
                </div>
            )
        }   

        return (
            <div>
                <Header />
                <GuessSection     
                    feedback={this.state.feedback}
                    getNumber={number => this.setGuessedNumber(number)}
                />
                <GuessCount count={this.state.allGuesses.length} />
                <GuessList guesses={this.state.allGuesses} />
            </div>
        );      
    }
}

