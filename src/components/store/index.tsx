import { legacy_createStore as createStore} from 'redux'


const INITIAL_STATE = {
    data: [
        {
            'title': 'Personagens',
            'url': '/main'
        },
        {
            'title': 'Filmes',
            'url': '/google'
        },
        {
            'title': "HQ's",
            'url': '/google'
        }
    ],
};


function navigationName(state = INITIAL_STATE, action: { type: any; title: any; url: any;}) {
    switch (action.type) {
        case 'ADD_NAME':
            return { ...state, data: [ ...state.data, action.title, action.url ] };
        default:
            return state;
    }
}

const store = createStore(navigationName);

export default store;