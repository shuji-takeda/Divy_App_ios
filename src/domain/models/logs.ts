import * as Log from './log';

export interface Model {
  [id: string]: Log.LogModel;
}

import {filter} from '@januswel/object-utilities';
import {assert} from '../../lib/assert';

export function factory(newValues?: Log.LogValues[]): Model {
  if (!newValues) {
    return {};
  }

  return newValues.reduce<Model>((result, newValue) => {
    const newLog = Log.factory(newValue);
    result[newLog.id] = newLog;
    return result;
  }, {});
}

export function add(logs: Model, newLog: Log.LogModel): Model {
  return {
    ...logs,
    [newLog.id]: newLog,
  };
}

export function remove(logs: Model, targetId: string): Model {
  return filter(logs, (id) => id !== targetId);
}

export function update(logs: Model, id: string, values: Log.LogValues): Model {
  assert(id in logs);

  return {
    ...logs,
    [id]: Log.change(logs[id], values),
  };
}

export function getNumof(logs: Model): number {
  return Object.keys(logs).length;
}

export function findByTitle(logs: Model, title: string): Log.LogModel[] {
  return Object.values(logs).filter((log) => log.title === title);
}
