// Log
export interface LogModel {
  readonly id: string;
  readonly title: string;
  readonly diveNo: number;
  readonly date: string;
  readonly location: string;
  readonly divePoint: string;
  readonly entryTime: string;
  readonly exitTime: string;
  readonly diveTime: string;
  readonly writeUser: string;
  readonly entryPressure?: string;
  readonly exitPressure?: string;
  readonly maxDepth?: string;
  readonly averageDepth?: string;
  readonly tags?: Array<number>;
  readonly imageListUrl?: Array<string>;
  readonly detail?: string;
  readonly coverImageUrl?: string;
  readonly avatarImageUrl?: string;
  readonly visibility?: number;
  readonly createdAt: Date;
  readonly updateAt: Date;
}

import 'react-native-get-random-values';
import {v4 as generateUuid} from 'uuid';

import {assertIsDefined} from '../../lib/assert';
import {calcTimeString} from '../../lib/format-date';

// ユーザー入力値
export interface LogValues {
  readonly title: string;
  readonly diveNo: number;
  readonly date: string;
  readonly location: string;
  readonly divePoint: string;
  readonly entryTime: string;
  readonly exitTime: string;
  readonly diveTime?: string;
  readonly entryPressure?: string;
  readonly exitPressure?: string;
  readonly maxDepth?: string;
  readonly averageDepth?: string;
  readonly tags?: Array<number>;
  readonly imageListUrl?: Array<string>;
  readonly coverImageUrl?: string;
  readonly detail?: string;
  readonly visibility?: number;
}

export function factory(log: LogValues): LogModel {
  assertIsDefined(log.title);
  assertIsDefined(log.date);
  assertIsDefined(log.location);
  assertIsDefined(log.divePoint);
  assertIsDefined(log.entryTime);
  assertIsDefined(log.exitTime);

  const now = new Date();
  const diveTime = calcTimeString(log.exitTime, log.entryTime);

  return {
    id: generateUuid(),
    title: log.title,
    diveNo: log.diveNo,
    date: log.date,
    location: log.location,
    divePoint: log.divePoint,
    entryTime: log.entryTime,
    exitTime: log.exitTime,
    diveTime: diveTime,
    writeUser: 'writeUser',
    entryPressure: log.entryPressure,
    exitPressure: log.exitPressure,
    maxDepth: log.maxDepth,
    averageDepth: log.averageDepth,
    tags: log.tags,
    imageListUrl: log.imageListUrl,
    detail: log.detail,
    coverImageUrl: log.coverImageUrl,
    avatarImageUrl: 'https://picsum.photos/700',
    visibility: 20,
    createdAt: now,
    updateAt: now,
  };
}

export function change(log: LogModel, newValue: LogValues): LogModel {
  assertIsDefined(log.title);
  assertIsDefined(log.date);
  assertIsDefined(log.location);
  assertIsDefined(log.divePoint);

  const now = new Date();
  return {
    ...log,
    ...newValue,
    updateAt: now,
  };
}
