import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class Navigation extends Component {
    constructor(){
        super();
        this.state = { activeItem: '' }

    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render(){
        return(
            <div className='pa2'>   
                <Menu secondary>
                    <Menu.Item name='Mayank Shah' 
                    active={this.state.activeItem === 'Mayank Shah'} 
                    href='https://github.com/mayankshah1607' 
                    onClick={this.handleItemClick} >
                        <strong>Mayank Shah</strong>
                    </Menu.Item>
                    
                    <Menu.Menu position='right'>
                    <Menu.Item name='View Repository' 
                    active={this.state.activeItem === 'View Repository'} 
                    onClick={this.handleItemClick} 
                    href='https://github.com/mayankshah1607/Deep-Learning-Lyrics-Generator.git'>
                        <strong>View Repository</strong>
                    </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        );
    }
} 
export default Navigation;