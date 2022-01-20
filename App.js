import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import uuid from 'react-uuid';


export default function App() {

  const NBR_OF_DIces = 2; 
  const [diceImages, setDiceImages] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [status, setStatus] = useStatus("");
  const [nbrOfWrongHits, setNbrOfWrongHits] = useState(0);

  useEffect(() => {
    initialize();
  }, []);

  function initialize() {
    let imgs =[];
    for (let i = 0; i < NBR_OF_Dices; i++ ){
      imgs[i] = require("./assets/dice-images/smiley.png");


    }
    setDiceImages(imgs);
  }

  // throw two dices and change state variables according those 
  function throwDices() {


  }
  // compare dices and calculate reaction time
  function checkDices() {
    
  }
  // this one is called from throw dices and throws is passed as argument
  //throws is an arrays of random number of dices 
  function setImages(throws) {
    

  }


  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
