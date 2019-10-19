import React from 'react';
import './directory.styles.scss'

import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
    constructor(){
        super();
        this.state = {
            menuItems : [
                {
                    title : 'hats',
                    imageUrl : 'https://images.unsplash.com/photo-1492467008961-6e33db522c9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
                    id : 1
                },
                {
                    title : 'jackets',
                    imageUrl : 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                    id : 2
                },
                {
                    title : 'sneakers',
                    imageUrl : 'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
                    id : 3
                },
                {
                    title : "women",
                    imageUrl : "https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                    id : 4,
                    size : "big"
                },
                {
                    title : "men",
                    imageUrl : "https://images.unsplash.com/photo-1541418950054-c12804e149d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                    id : 5,
                    size : "big"
                }
            ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.menuItems.map(({title, imageUrl, id, size}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                    ))};
            </div>
        );
    }
}

export default Directory;