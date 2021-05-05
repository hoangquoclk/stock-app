const initialState = {
    cdkt: [],
    kqhdkd: [],
    lcttgd: [],
    chiSoDN: [],
    diemDN: [],
    status: true
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'setCdkt':
            return {...state, cdkt: action.payload};
        default:
            return state;
    }
}

export default rootReducer;