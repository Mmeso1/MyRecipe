import { View, Text } from 'react-native';
import React from 'react';
import { Tabs, Redirect } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome6';
import '../../global.css';

interface TabIconProps {
  icon: string;
  color: string;
  focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({ icon, color, focused }) => {
  return (
    <View className='items-center justify-center'>
      <Icon name={icon} size={22} color={focused ? color : '#FECB87'} />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs screenOptions={{ tabBarShowLabel: false }}>
        <Tabs.Screen
          name='home'
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <TabIcon icon='house' color='#E77A37' focused={focused} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
