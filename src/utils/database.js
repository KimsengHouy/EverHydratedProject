import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export const updateDetails = options => {
  return firestore().collection('users').doc(auth().currentUser.uid).update({
    fullname: options.fullname,
    age: options.age,
    climate: options.climate,
    unit: options.unit,
    waterGoal: options.waterGoal,
    waterDrank: options.waterDrank,
  });
};

export const getUser = async () =>
  await firestore().collection('users').doc(auth().currentUser.uid).get();
