import React from 'react';
import { ScrollView } from 'react-native';
import Card from '../card';
import Images from '../../img/images';
import Header from '../header';

export default ({ history: { push }}) => {
  return (
    <ScrollView>
      <Header navigate={push} />
      <Card path={Images.teams} title={'Komandos'} navigate={() => push('/teams')} />
      <Card path={Images.vettel} title={'Lenktynininkai'} navigate={() => push('/drivers')} />
      <Card path={Images.finish} title={'Taškų įskaitos'} navigate={() => push('/standings')} />
    </ScrollView>
  );
}
