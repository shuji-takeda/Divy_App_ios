import firestore from '../../lib/firebase/firestore';
import {Log, Logs} from '../models';

// Mock
const LOGS: Log.LogsValues[] = [
  {
    title: 'Dive1',
    diveNo: 1,
    date: '2021/03/21',
    location: 'Osaka',
    divePoint: 'Beach',
    entryTime: '09:00',
    exitTime: '10:00',
    diveTime: '60',
    writeUser: 'test',
    entryPressure: '200',
    exitPressure: '50',
    maxDepth: '30',
    averageDepth: '10',
    tags: [0, 2, 4, 5],
    imageListUrl: [
      'https://picsum.photos/700',
      'https://picsum.photos/700',
      'https://picsum.photos/700',
      'https://picsum.photos/700',
    ],
    detail: 'Hi \n Divy developer  thanks',
    coverImageUrl: 'https://picsum.photos/700',
    avatarImageUrl: 'https://picsum.photos/700',
    visibility: 20,
  },
  {
    title: 'Dive2',
    diveNo: 2,
    date: '2021/04/21',
    location: 'Osaka',
    divePoint: 'Dive2',
    entryTime: '09:00',
    exitTime: '10:00',
    diveTime: '60',
    writeUser: 'test',
    entryPressure: '200',
    exitPressure: '50',
    maxDepth: '30',
    averageDepth: '10',
    tags: [0, 2, 4, 5],
    imageListUrl: [
      'https://picsum.photos/700',
      'https://picsum.photos/700',
      'https://picsum.photos/700',
      'https://picsum.photos/700',
    ],
    detail: 'Hi \n Divy developer  thanks',
    coverImageUrl: 'https://picsum.photos/700',
    avatarImageUrl: 'https://picsum.photos/700',
    visibility: 20,
  },
  {
    title: 'Dive3',
    diveNo: 3,
    date: '2021/05/21',
    location: 'Osaka',
    divePoint: 'Dive3',
    entryTime: '09:00',
    exitTime: '10:00',
    diveTime: '60',
    writeUser: 'test',
    entryPressure: '200',
    exitPressure: '50',
    maxDepth: '30',
    averageDepth: '10',
    tags: [0, 2, 4, 5],
    imageListUrl: [
      'https://picsum.photos/700',
      'https://picsum.photos/700',
      'https://picsum.photos/700',
      'https://picsum.photos/700',
    ],
    detail: 'Hi \n Divy developer  thanks',
    coverImageUrl: 'https://picsum.photos/700',
    avatarImageUrl: 'https://picsum.photos/700',
    visibility: 20,
  },
];

export function getAll(userId: string) {
  return firestore(userId)
    .get()
    .then((querySnapshot) => {
      const logs = querySnapshot.docs.reduce((result: Logs.Model, doc) => {
        result[doc.id] = doc.data() as Log.LogModel;
        return result;
      }, {});
      return logs;
    });
}

export function add(userId: string, newLog: Log.LogModel) {
  firestore(userId)
    .doc(newLog.id)
    .set(newLog)
    .catch((e) => {
      throw e;
    });
}

export function remove(userId: string, id: string) {
  firestore(userId)
    .doc(id)
    .delete()
    .catch((e) => {
      throw e;
    });
}

export function change(userId: string, id: string, newValue: object) {
  firestore(userId)
    .doc(id)
    .update(newValue)
    .catch((e) => {
      throw e;
    });
}
