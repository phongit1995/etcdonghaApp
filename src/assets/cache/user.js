import AsyncStorage  from '@react-native-community/async-storage';

export const saveUserLogin = async user => {
  await AsyncStorage.setItem('user', JSON.stringify(user));
  return;
};

export const getUserLogin = async () => {
  let str = await AsyncStorage.getItem('user');
  if (str == null || str == "") {
    return null;
  }
  return JSON.parse(str);
};


export const removeUserLogin = async () => {
  await AsyncStorage.removeItem('user');
};


export const updateLanguage = async (lang) => {
  let user = await AsyncStorage.getItem('user');
  if (user == null || user == "") {
    await AsyncStorage.setItem(`language`, lang);
    return null;
  }
  user = JSON.parse(user);
  user.language = lang;
  await AsyncStorage.setItem('user', JSON.stringify(user));
  return null;
};



export const getLanguage = async () => {
  let user = await getUserLogin();
  if (user == null) {
    let language = await AsyncStorage.getItem(`language`);
    if (language == null || language == "") {
      return "vi";
    } else {
      return language;
    }
  } else {
    return user.language;
  }
};
