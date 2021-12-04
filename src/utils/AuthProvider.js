import auth from '@react-native-firebase/auth';
import {ToastAndroid} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {Alert} from 'react-native';

export const signIn = (email, password) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      ToastAndroid.show('Logged in', ToastAndroid.SHORT);
    })
    .catch(e => {
      Alert.alert(e.message);
    });
};

export const signUp = async (email, password, fullname, age, climate) => {
  try {
    await auth().createUserWithEmailAndPassword(email, password);

    await firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .set({
        fullname,
        email,
        age,
        climate,
        unit: 'mL',
        waterGoal: 3000,
        waterDrank: 0,
        createdAt: firestore.Timestamp.fromDate(new Date()),
        userImg: '',
      });
    ToastAndroid.show('Logged in', ToastAndroid.SHORT);
  } catch (e) {
    Alert.alert(e.message);
  }
};

export const signOut = () => {
  auth()
    .signOut()
    .then(() => {
      ToastAndroid.show('Signed Out', ToastAndroid.SHORT);
    });
};
