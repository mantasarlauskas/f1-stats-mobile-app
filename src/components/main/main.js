import React from 'react';
import { ScrollView } from 'react-native';
import Card from '../card';
import Images from '../../img/images';

const Main = ({ history: { push } }) => (
  <ScrollView>
    <Card path={Images.crowd} title={'Mėgstamiausi'} navigate={() => push('/favorites')} />
    <Card path={Images.teams} title={'Komandos'} navigate={() => push('/teams')} />
    <Card path={Images.vettel} title={'Lenktynininkai'} navigate={() => push('/drivers')} />
    <Card path={Images.finish} title={'Taškų įskaitos'} navigate={() => push('/standings')} />
    <Card path={Images.singapore} title={'Rezultatai'} navigate={() => push('/results')} />
    <Card path={Images.spa} title={'Tvarkaraštis'} navigate={() => push('/schedule')} />
  </ScrollView>
);

export default Main;
