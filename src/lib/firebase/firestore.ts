import firestore from '@react-native-firebase/firestore';

export default function getFirestore(uid: string){
    return firestore()
    .collection('user')
    .doc(uid)
    .collection('log');
}