import { combineReducers } from 'redux';

const ruleList = (state = [], action) => {
    switch(action.type) {
        case 'RULE_LIST':
            return action.res;
            break;
        default:
            return state;
    }
};

export default combineReducers({
    ruleList,
});