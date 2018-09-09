import React, { Component } from 'react';
import { Button, Loader } from 'semantic-ui-react';

class Lyrics extends Component{

    isLoading = () => {
        if (this.props.text==='') {
            return true
        }
        else { return false}
    }


    render(){

        let newText = this.props.text.split('\n').map((item, i) => {
            return <p className='f4 fw4' key={i}>{item}</p>;
        });

        return(
            <div className='dib mt6'>                    
            {
                this.isLoading() ?
                <Loader size='large' active>Generating a song for you...<br/>
                <p className='f5 fw6'>This may take up to a minute</p>
                </Loader>
                :
                <div className='ma3'>
                    <p className='fw6 f2'>Here's a song I wrote for you..</p>
                    {newText}
                    <Button basic color='black' href='https://mayankshah1607.github.io/lyrics-generator-webapp/' size='medium' className='mb6'>
                        <strong>Generate another song!</strong>
                    </Button>
                </div>
            }
            </div>

        );
    }
}

export default Lyrics;