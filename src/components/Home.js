import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import Lyrics from './Lyrics';


class Home extends Component{
    constructor(){
        super();
        this.state = {
            showLyrics: false,
            lyrics: '',
            endSong: false 
        }
    }

    onGenerate = () => {

        
        this.setState({showLyrics: true})
        fetch('https://dl-lyrics.herokuapp.com/predict',{
            method: 'get',
            headers: {'Content-type':'application/json'},
        })
        .then(response => response.json())
        .then( data => {
            console.log(data.lyrics)
            this.setState({lyrics: data.lyrics})

            fetch('https://dl-lyrics.herokuapp.com/predict',{
            method: 'get',
            headers: {'Content-type':'application/json'},
                })
                .then(response2 => response2.json())
                .then( data2 => {
                    console.log(data2.lyrics)
                    this.setState({lyrics: this.state.lyrics + data2.lyrics, endSong: true})
                    
                })
        })


    }

    render(){
        return(
            <div>
                {
                    this.state.showLyrics ? 
                    <Lyrics text={this.state.lyrics} endSong = {this.state.endSong}/>
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


