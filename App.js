/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  FlatList,
  Linking,
} from 'react-native';

import {Button, Card, Title, Appbar, Paragraph} from 'react-native-paper';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import courses from './src/data/courses.json';

const handelClick = link => {
  console;
  Linking.canOpenURL(link).then(supported => {
    // if (supported) {
    Linking.openURL(link);
    // } else {
    //   console.log('Do not open the link:' + link);
    // }
  });
};

function App() {
  return (
    <View>
      <Appbar>
        <Appbar.Content title="Course" />
      </Appbar>

      <FlatList
        data={courses}
        renderItem={({item}) => (
          <Card>
            <Card.Cover source={{uri: item.image}} />
            <Card.Content>
              <Title>{item.title}</Title>
              <Paragraph>{item.description}</Paragraph>
            </Card.Content>
            <Card.Actions>
              <Button onPress={() => handelClick(item.link)}>
                Press to reveal
              </Button>
            </Card.Actions>
          </Card>
        )}
      />
    </View>
  );
}

export default App;
