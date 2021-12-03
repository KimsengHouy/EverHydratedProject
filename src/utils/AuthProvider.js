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

export const signUp = (email, password, fullname, age) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      firestore()
        .collection('users')
        .doc(auth().currentUser.uid)
        .set({
          fullname,
          email,
          age,
          unit: 'mL',
          createdAt: firestore.Timestamp.fromDate(new Date()),
          userImg: '',
        });
      ToastAndroid.show('Logged in', ToastAndroid.SHORT);
    })
    .catch(e => {
      Alert.alert(e.message);
    });
};

export const signOut = () => {
  auth()
    .signOut()
    .then(() => {
      ToastAndroid.show('Signed Out', ToastAndroid.SHORT);
    });
};
