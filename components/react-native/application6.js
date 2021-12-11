import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';

const DATA = [
  {
    name: 'First Item 1',
    price: 16000,
    like: 4
  },
  {
    name: 'First Item 2',
    price: 15000,
    like: 5
  },
  {
    name: 'First Item 3',
    price: 17000,
    like: 7
  },
];

const Item = ({ name, price, like }) => (
  <View style={styles.item}>
      <View style={{
      borderColor: 'red',
      borderWidth: 1,
      justifyContent: 'center'
      }}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>
      
      <View style={{
      borderColor: 'red',
      borderWidth: 1
      }}>
        <View style={{
        borderColor: 'blue',
        borderWidth: 1
      }}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
        
        <View style={{
        borderColor: 'yellow',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'end'
        }}>
          <Text style={styles.like}>{like}</Text>
        </View>
      </View>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item  name={item.name} price={item.price} like={item.like} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 2
  },
  name: {
    fontSize: 20,
    color:'black'
  },
  price: {
    fontSize: 15,
    color:'grey'
  },
  like: {
    fontSize: 10,
    color:'red'
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default App;