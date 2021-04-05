import {Log, Logs} from '../domain/models';

export function createInitialState(): Logs.Model {
  return Logs.factory();
}

export type State = ReturnType<typeof createInitialState>;

export const SET = 'divy/logs/set' as const;
export const ADD = 'divy/logs/add' as const;
export const UPDATE = 'divy/logs/update' as const;
export const REMOVE = 'divy/logs/remove' as const;

//ActionType Define
export function set(logs: Logs.Model) {
  return {
    type: SET,
    payload: {
      logs,
    },
  };
}

export function add(log: Log.LogModel) {
  return {
    type: ADD,
    payload: {
      log,
    },
  };
}

export function update(id: string, log: Log.LogValues) {
  return {
    type: UPDATE,
    payload: {
      id,
      log,
    },
  };
}

export function remove(id: string) {
  return {
    type: REMOVE,
    payload: {
      id,
    },
  };
}

// Reducer
export type Action =
  | Readonly<ReturnType<typeof set>>
  | Readonly<ReturnType<typeof add>>
  | Readonly<ReturnType<typeof update>>
  | Readonly<ReturnType<typeof remove>>;

export default function reducer(state = createInitialState(), action: Action) {
  switch (action.type) {
    case SET:
      return action.payload.logs;

    case ADD:
      return Logs.add(state, action.payload.log);

    case UPDATE: {
      const {payload} = action;
      return Logs.update(state, payload.id, payload.log);
    }

    case REMOVE:
      return Logs.remove(state, action.payload.id);

    default:
      return state;
  }
}
