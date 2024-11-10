import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PersonalInfoScreen from './Components/PersonalInfoScreen';
import EducationScreen from './Components/EducationScreen';
import ExperienceScreen from './Components/ExperienceScreen';
import LanguageScreen from './Components/LanguageScreen';
import SoftSkillsScreen from './Components/SoftSkillsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Informações Pessoais">
        <Tab.Screen name="Informações Pessoais" component={PersonalInfoScreen}  />
        <Tab.Screen name="Formação Acadêmica" component={EducationScreen} />
        <Tab.Screen name="Experiência Profissional" component={ExperienceScreen} />
        <Tab.Screen name="Idiomas" component={LanguageScreen} />
        <Tab.Screen name="Soft Skills" component={SoftSkillsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
