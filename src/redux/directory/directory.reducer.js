const INITIAL_STATE = {
    sections: [
        {
            title: 'sticks',
            imageUrl: 'https://res-console.cloudinary.com/ale-xander/thumbnails/transform/v1/image/upload/Y19zY2FsZSx3XzMwMA==/v1571610112/c2hhcmsgdGFuay8xOFdBUllGMThDVlJUUVIxMEhLU0FfZHYzemN1/template_primary?0.023395714974125514',
            id: 1,
            linkUrl: 'shop/sticks'
        },
        {
            title: 'skates',
            imageUrl: 'https://res.cloudinary.com/ale-xander/image/upload/c_scale,w_300/v1571610233/shark%20tank/118150_dd2vs0.jpg',
            id: 2,
            linkUrl: 'shop/skates'
        },
        {
            title: 'helmets',
            imageUrl: 'https://res.cloudinary.com/ale-xander/image/upload/c_scale,w_300/v1571610350/shark%20tank/18CCMSHTFL60SRHLMHKP_Navy_dzvovo.jpg',
            id: 3,
            linkUrl: 'shop/helmets'
        },
        {
            title: 'jerseys',
            imageUrl: 'https://res.cloudinary.com/ale-xander/image/upload/c_scale,w_400/v1571610401/shark%20tank/thumb.aspx_jmma7i.jpg',
            size: 'large',
            id: 4,
            linkUrl: 'shop/jerseys'
        },
        {
            title: 'gloves',
            imageUrl: 'https://res.cloudinary.com/ale-xander/image/upload/c_scale,w_300/v1571610465/shark%20tank/124942_cs42uo.jpg',
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