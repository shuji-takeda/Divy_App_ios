import { AppState} from '../modules';
import {createSelector} from 'reselect';

import * as Domain from '../domain/models';

function selectLogs(state: AppState){
    return state.logs;
}

export const getArray = createSelector([selectLogs], logs =>
    Object.values(logs).map(log => ({
        id: log.id,
        title:log.title,
        detail:log.detail,
        createdAt: new Date(log.createdAt).getTime(),
        updateAt: new Date(log.updateAt).getTime()
    })),
    )

export const getLogs = createSelector([getArray], logs => logs.sort((a,b)=>
    b.createdAt - a.createdAt
));