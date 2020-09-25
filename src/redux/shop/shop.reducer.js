import { SHOP_DATA } from '../../data/data';

const INITAIL_STATE = {
    collections : SHOP_DATA
};

const reducer = (state=INITAIL_STATE, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default reducer;