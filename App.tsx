/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = (): React.JSX.Element => {

  const [input, setInput] = React.useState('0');

  const handlePress = (value: string) => {
    setInput(prev => prev + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const clear = () => {
    setInput('');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Display */}
      <View style={styles.display}>
        <Text style={styles.displayText}>{input}</Text>
      </View>
      {/* Buttons */}
      <View style={styles.buttonsContainer}>
        {/* Row 1 */}
        <View style={styles.row}>
          <View style={styles.button}>
            <Text style={styles.buttonText} onPress={() => handlePress('7')}>7</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.buttonText} onPress={() => handlePress('8')}>8</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.buttonText} onPress={() => handlePress('9')}>9</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.buttonText} onPress={() => handlePress('/')}>/</Text>
          </View>
        </View>
        {/* Row 2 */}
        <View style={styles.row}>
          <View style={styles.button}>
            <Text style={styles.buttonText} onPress={() => handlePress('4')}>4</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.buttonText} onPress={() => handlePress('5')}>5</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.buttonText} onPress={() => handlePress('6')}>6</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.buttonText} onPress={() => handlePress('*')}>*</Text>
          </View>
        </View>
        {/* Row 3 */}
        <View style={styles.row}>
          <View style={styles.button}>
            <Text style={styles.buttonText} onPress={() => handlePress('1')}>1</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.buttonText} onPress={() => handlePress('2')}>2</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.buttonText} onPress={() => handlePress('3')}>3</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.buttonText} onPress={() => handlePress('-')}>-</Text>
          </View>
        </View>
        {/* Row 4 */}
        <View style={styles.row}>
          <View style={styles.button}>
            <Text style={styles.buttonText} onPress={() => handlePress('0')}>0</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.buttonText} onPress={clear} >C</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.buttonText} onPress={calculate}>=</Text>
          </View>
          <View style={styles.button}>
            <Text style={styles.buttonText} onPress={() => handlePress('+')}>+</Text>
          </View>
        </View>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  display: {
    backgroundColor: '#e6e6e6',
    width: '90%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  displayText: {
    fontSize: 36,
    color: '#333',
  },
  buttonsContainer: {
    width: '90%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#dcdcdc',
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default App;
