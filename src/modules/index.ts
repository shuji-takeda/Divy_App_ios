import { Log , Logs } from '../domain/models';
import {combineReducers} from 'redux';

import * as logs from './logs';

export function createInitialState(){
    return {
        logs: logs.createInitialState(),
    }
}

export type AppState = Readonly<ReturnType<typeof createInitialState>>;

export default combineReducers<AppState>({
    logs: logs.default
})