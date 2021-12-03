import firestore from '@react-native-firebase/firestore';

export const adduserDetails = (
  currentUserId,
  fullname,
  age,
  mobile,
  country,
  climate,
  unit,
  activetime,
) => {
  return firestore().collection('UserDetails').doc(currentUserId).set({
    fullname,
    age,
    mobile,
    country,
    climate,
    unit,
    activetime,
  });
};

export const getUserDetails = () => {
  return firestore().collection('UserDetails').get();
};
