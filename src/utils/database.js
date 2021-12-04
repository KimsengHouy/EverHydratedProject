import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import _ from 'lodash';

export const updateUser = options => {
  let data = {
    fullname: options.fullname,
    age: options.age,
    climate: options.climate,
    unit: options.unit,
    waterGoal: options.waterGoal,
    waterDrank: options.waterDrank,
  };

  data = _.omitBy(data, _.isNil);

  return firestore()
    .collection('users')
    .doc(auth().currentUser.uid)
    .update(data);
};

export const getUser = async () =>
  await firestore().collection('users').doc(auth().currentUser.uid).get();
