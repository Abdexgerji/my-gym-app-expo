// import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Card from './components/Card';

export default function App() {
  const bodyParts = [
    { name: 'Chest', image: require('./assets/pictures/chest.jpg') },
    { name: 'Triceps', image: require('./assets/pictures/triceps.jpg') },
    { name: 'Biceps', image: require('./assets/pictures/biceps.jpg') },
    { name: 'Back', image: require('./assets/pictures/back.jpg') },
    { name: 'Leg', image: require('./assets/pictures/leg.jpg') },
    { name: 'Abs', image: require('./assets/pictures/abs.jpg') },
    { name: 'Shoulder', image: require('./assets/pictures/shoulder.jpg') },
  ];

  const x = './assets/pictures/chest.jpg';
  const y = bodyParts[0].image;
  console.log({ x });
  console.log({ b: bodyParts[0].image });
  console.log(x === y);
  return (
    <View style={styles.container}>
      <StatusBar />

      <Text style={styles.title}>My Gym app!</Text>
      <FlatList
        data={bodyParts}
        renderItem={({ item }) => <Card image={item.image} name={item.name} />}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ffeeaa',
    alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: StatusBar.currentHeight,
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  title: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
