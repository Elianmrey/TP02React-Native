import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PersonalInfoScreen from './Components/PersonalInfoScreen';
import EducationScreen from './Components/EducationScreen';
import ExperienceScreen from './Components/ExperienceScreen';
import LanguageScreen from './Components/LanguageScreen';
import SoftSkillsScreen from './Components/SoftSkillsScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Informações Pessoais">
        <Drawer.Screen name="Informações Pessoais" component={PersonalInfoScreen} />
        <Drawer.Screen name="Formação Acadêmica" component={EducationScreen} />
        <Drawer.Screen name="Experiência Profissional" component={ExperienceScreen} />
        <Drawer.Screen name="Idiomas" component={LanguageScreen} />
        <Drawer.Screen name="Soft Skills" component={SoftSkillsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
