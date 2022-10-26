import React from 'react'
import Homepage from '../pages/homepage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Lawpage from '../pages/lawpage';
import Favouritespage from '../pages/favouritespage';
import ProfilePage from '../pages/profile';
import Settingspage from '../pages/settingspage';

// const ScreenPage  = new Promise(function(res, rej){
//   if(res){

    function BottomTabs() {
      const Tab = createBottomTabNavigator();
      return (
        <Tab.Navigator>
           <Tab.Screen name="Home" component={Homepage} />
           <Tab.Screen name="Laws" component={Lawpage}/>
           <Tab.Screen name="Favourites" component={Favouritespage}/>
           <Tab.Screen name="Profile" component={ProfilePage}/>
           <Tab.Screen name="Settings" component={Settingspage}/>
        </Tab.Navigator>
    )
  };



export default BottomTabs