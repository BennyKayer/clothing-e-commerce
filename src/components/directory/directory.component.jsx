import React from 'react';
import './directory.styles.scss'

import MenuItem from '../menu-item/menu-item.component';
import DirectoryData from './directory.data.js';

class Directory extends React.Component {
    constructor(){
        super();
        this.state = {
            menuItems : DirectoryData
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.menuItems.map(({id, ...otherProps}) => (
                    <MenuItem key={id} {...otherProps}/>
                    ))};
            </div>
        );
    }
}

export default Directory;