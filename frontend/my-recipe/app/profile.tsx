import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import '../global.css';
import Icon from 'react-native-vector-icons/Ionicons';

const Profile = () => {
  return (
    <View className='bg-slate-600 p-4'>
      <Text className='text-green-400 text-xl'>Profile</Text>
      <Text className='text-green-400 text-xl font-papyrus'>Profile</Text>
      <Icon name='logo-ionic' size={30} color='#cbe435' />
      <Text className='text-icons-orange font-lato'>Mmeso is the bomb!</Text>
    </View>
  );
};

export default Profile;
