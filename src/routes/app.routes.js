import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Feather from 'react-native-vector-icons/Feather'

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Search from '../pages/Search';
import NewPost from '../pages/NewPost';
import PostsUser from '../pages/PostsUser'
import ChatRoom from '../pages/ChatRoom';
import Messages from '../pages/Messages';
import SearchGroup from '../pages/SearchGroup';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function StackRoutes(){
  return(
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name ="Home" 
        component={Home}
        options={{ headerShown: false}}
      />

      <Stack.Screen 
        name ="NewPost" 
        component={NewPost}
        options={{
          title: 'Novo Post',
          headerTintColor: '#fff',
          headerStyle:{
            backgroundColor: '#F7921C'
          }
        }}
      />

      <Stack.Screen 
        name ="PostsUser" 
        component={PostsUser}
        options={{
          title: 'Novo Post',
          headerTintColor: '#fff',
          headerStyle:{
            backgroundColor: '#F7921C'
          }
        }}
      />
    </Stack.Navigator>
  )
}

function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="ChatRoom"
        component={ChatRoom}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Messages"
        component={Messages}
        options={({ route }) => ({
          title: route.params?.thread?.name ?? 'Mensagens',
          headerTintColor: '#fff',
          headerShown: false
        })}
      />

      <Stack.Screen 
        name="SearchGroup"
        component={SearchGroup}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}


function AppRoutes(){
  return(
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFF',

        tabBarStyle:{
          backgroundColor: '#F7921C',
          borderTopWidth: 0
        }
      }}
    >
      <Tab.Screen 
      name="HomeTab" 
      component={StackRoutes} 
      options={{
        tabBarIcon: ({ color, size }) => {
          return <Feather name="home" color={color} size={size} />
        }
      }}
      />

      <Tab.Screen 
      name="Search"
      component={Search}
      options={{
        tabBarIcon: ({ color, size }) => {
          return <Feather name="search" color={color} size={size} />
        }
      }}
      />

      <Tab.Screen 
      name="Profile" 
      component={Profile}
      options={{
        tabBarIcon: ({ color, size }) => {
          return <Feather name="user" color={color} size={size} />
        }
      }}
      />

       <Tab.Screen 
        name="Chat" 
        component={ChatStack}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Feather name="message-circle" color={color} size={size} />
          }
        }}
      /> 
    </Tab.Navigator>
  )
}

export default AppRoutes;