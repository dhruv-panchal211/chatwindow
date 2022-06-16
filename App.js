import React, { PureComponent } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Chats from './Screens/Chats';
import Agents from './Screens/Agents';
import Managers from './Screens/Managers';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Badge } from 'react-native-elements';

function IconWithBadge({name,count,color,size}) 
{
  return(
    <View>
      {badgeCount > 0 && (
        <View style= {{ 
          position: 'absolute',
          right: -6,
          top: -3,
          backgroundColor: 'red',
          borderRadius: 6,
          width: 12,
          height: 12,
          justifyContent: 'center',
          alignItems: 'center'
        }}
        >
        <Text style={{color: 'white', fontSize: 10, fontWeight: 'bold'}}>{badgeCount}</Text>

        </View>
      )}
    </View>
  );  
}

function WithBadge(props) {
  return <IconWithBadge {...props} badgeCount={3} />;
  
}


const Tab = createMaterialTopTabNavigator(
);



export default () => (
  
  <NavigationContainer>
  <View style={{backgroundColor: '#00BFFF', flexDirection: 'row',}}>
    <Text style={{color: 'white', fontSize: 26, marginLeft: 10, marginTop: 10, marginBottom: 10}}>Chat</Text>
      <Image source={require('./Image/search.png')} style={{height: 20, width: 20, marginTop: 20, marginLeft: 230}}></Image>      
      <Image source={require('./Image/dots.jpg')} style={{height: 40, width: 40, marginTop: 10, marginLeft: 10}}></Image>
      
  </View>
  
    <Tab.Navigator
    screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

            if (route.name === 'Chats') {
                return <WithBadge/>
            } 

          },
        }
        )}
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'gray',
          tabStyle:{backgroundColor: '#00BFFF'}
        }}>
      
      <Tab.Screen name="Chats" component= {Chats} />
      <Tab.Screen name="Agents" component= {Agents} />
      <Tab.Screen name="Managers" component= {Managers} />
    </Tab.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  
})