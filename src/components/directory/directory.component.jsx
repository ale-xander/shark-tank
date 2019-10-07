import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor () {
    super()
    this.state = {
        sections: [
        {
            title: 'sticks',
            imageUrl: 'https://i.imgur.com/I8xvNjD.jpg',
            id: 1,
            linkUrl: 'shop/sticks'
        },
        {
            title: 'pucks',
            imageUrl: 'https://i.imgur.com/y2GBLoE.jpg',
            id: 2,
            linkUrl: 'shop/pucks'
        },
        {
            title: 'skates',
            imageUrl: 'https://i.imgur.com/6SzZWXk.jpg',
            id: 3,
            linkUrl: 'shop/skates'
        },
        {
            title: 'helmets',
            imageUrl: 'https://i.imgur.com/bJPNmDv.jpg',
            size: 'large',
            id: 4,
            linkUrl: 'shop/helmets'
        },
        {
            title: 'jerseys',
            imageUrl: 'https://i.imgur.com/UP7oQnR.jpg',
            size: 'large',
            id: 5,
            linkUrl: 'shop/jerseys'
        }
        ]   
    }
    };
    render(){
        return(
            <div className='directory-menu'>
            {
                this.state.sections.map(({title, imageUrl, id, size}) =>(
                    <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
                ))
            }
            </div>
        )
    }
}
export default Directory;