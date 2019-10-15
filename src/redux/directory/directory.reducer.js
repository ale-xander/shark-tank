const INITIAL_STATE = {
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
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;