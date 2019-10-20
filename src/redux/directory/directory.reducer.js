const INITIAL_STATE = {
    sections: [
        {
            title: 'sticks',
            imageUrl: 'https://dks.scene7.com/is/image/GolfGalaxy/18WARYF18CVRTQR10HKSA?wid=1400&fmt=jpg',
            id: 1,
            linkUrl: 'shop/sticks'
        },
        {
            title: 'skates',
            imageUrl: 'https://media.purehockey.com/q_auto,f_auto,fl_lossy,c_lpad,b_auto,w_400,h_400/products/34027/41/118150',
            id: 2,
            linkUrl: 'shop/skates'
        },
        {
            title: 'helmets',
            imageUrl: 'https://dks.scene7.com/is/image/dkscdn/18CCMSHTFL60SRHLMHKP_Navy?wid=425',
            id: 3,
            linkUrl: 'shop/helmets'
        },
        {
            title: 'jerseys',
            imageUrl: 'https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_2724000/altimages/ff_2724762alt1_full.jpg&w=900',
            size: 'large',
            id: 4,
            linkUrl: 'shop/jerseys'
        },
        {
            title: 'gloves',
            imageUrl: 'https://media.purehockey.com/q_auto,f_auto,fl_lossy,c_lpad,b_auto,w_400,h_400/products/37068/41/124942',
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