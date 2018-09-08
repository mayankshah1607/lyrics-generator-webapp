import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import Lyrics from './Lyrics';


class Home extends Component{
    constructor(){
        super();
        this.state = {
            showLyrics: false,
            lyrics: '' 
        }
    }

    onGenerate = () => {
        this.setState({showLyrics: true})
        fetch('http://localhost:8000/predict',{
            method: 'get',
            headers: {'Content-type':'application/json'},
        })
        .then(response => response.json())
        .then( data => {
            console.log(data.lyrics)
            this.setState({lyrics: data.lyrics})
        })
    }

    render(){
        return(
            <div>
                {
                    this.state.showLyrics ? 
                    <Lyrics text={this.state.lyrics}/>
                    :
                    <div className='dib mt6'>                    
                        <p className='fw6 f1'> Generate Song Lyrics with AI</p>
                        <Button basic color='black' size='massive' onClick={this.onGenerate}>
                            <strong>Generate!</strong>
                        </Button>
                    </div>

                }
            </div>

        );
    }
}

export default Home;


