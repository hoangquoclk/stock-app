import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { createStore, compose } from 'redux';

const initialState = {
    company: null,
    companyName: null,
    cdkt: [],
    kqhdkd: [],
    lcttgt: [],
    chiSoDN_4M: [],
    diemDN_4M: [],
    tongDiem: null,
    canslim: [],
    tongDiemCanslim: null,
    loading: false,
    currentPage: '',
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'setCdkt':
            return {...state, cdkt: action.payload};
        case 'setKqhdkd':
            return {...state, kqhdkd: action.payload};
        case 'setLcttgt':
            return {...state, lcttgt: action.payload};
        case 'searchCompany':
            return {...state, company: action.payload};
        case 'setCompanyName':
            return {...state, companyName: action.payload};
        case 'resetState':
            return initialState;
        case 'setChiSoDN_4M':
            return {...state, chiSoDN_4M: action.payload};
        case 'setDiemDN_4M':
            return {...state, diemDN_4M: action.payload};
        case 'setTongDiem':
            return {...state, tongDiem: action.payload};
        case 'isLoading':
            return {...state, loading: true};
        case 'unLoading':
            return {...state, loading: false};
        case 'setCurrentPage':
            return {...state, currentPage: action.payload};
        case 'setChiSoCanslim': 
            return {...state, canslim: action.payload};
        default:
            return state;
    }
}

const persistConfig = {
    key: 'root',
    storage,
}

export const persist_Reducer = persistReducer(persistConfig, rootReducer);

export const store = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )(createStore)(persist_Reducer);

export const persistor = persistStore(store);

export default {rootReducer, persistor};
// export default rootReducer;