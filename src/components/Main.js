import React, { Component } from 'react';
import Home from './Home';
import Lyrics from './Lyrics';

class Main extends Component{
    constructor(){
        super();
        this.state = {
            showLyrics = false;
        }
    }

    render(){
        return(
            <div>
                {this.state.showLyrics ? <Lyrics/> : <Home/>}
            </div>
        );
    }
}