const INITIAL_STATE = {
    sections: [
        {
            title: 'sticks',
            imageUrl: 'https://i.imgur.com/I8xvNjD.jpg',
            id: 1,
            linkUrl: 'shop/sticks'
        },
        {
            title: 'skates',
            imageUrl: 'https://i.imgur.com/y2GBLoE.jpg',
            id: 2,
            linkUrl: 'shop/skates'
        },
        {
            title: 'helmets',
            imageUrl: 'https://i.imgur.com/6SzZWXk.jpg',
            id: 3,
            linkUrl: 'shop/helmets'
        },
        {
            title: 'jerseys',
            imageUrl: 'https://i.imgur.com/bJPNmDv.jpg',
            size: 'large',
            id: 4,
            linkUrl: 'shop/jerseys'
        },
        {
            title: 'gloves',
            imageUrl: 'https://i.imgur.com/UP7oQnR.jpg',
            size: 'large',
            id: 5,
            linkUrl: 'shop/gloves'
        }
    ]  
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;