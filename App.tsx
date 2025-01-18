import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const App = (): React.JSX.Element => {
  const [input, setInput] = React.useState('0');

  const handlePress = (value: string) => {
    setInput(prev => (prev === '0' ? value : prev + value));
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('');
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
          {['7', '8', '9', '/'].map(item => (
            <TouchableOpacity
              key={item}
              style={styles.button}
              onPress={() => handlePress(item)}>
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* Row 2 */}
        <View style={styles.row}>
          {['4', '5', '6', '*'].map(item => (
            <TouchableOpacity
              key={item}
              style={styles.button}
              onPress={() => handlePress(item)}>
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* Row 3 */}
        <View style={styles.row}>
          {['1', '2', '3', '-'].map(item => (
            <TouchableOpacity
              key={item}
              style={styles.button}
              onPress={() => handlePress(item)}>
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {/* Row 4 */}
        <View style={styles.row}>
          {['0', 'C', '=', '+'].map(item => (
            <TouchableOpacity
              key={item}
              style={styles.button}
              onPress={
                item === 'C'
                  ? clear
                  : item === '='
                  ? calculate
                  : () => handlePress(item)
              }>
              <Text style={styles.buttonText}>{item}</Text>
            </TouchableOpacity>
          ))}
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
