import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

const App = (): React.JSX.Element => {
  const [input, setInput] = React.useState('0');
  const [lastKey, setLastKey] = React.useState('');

  // Function to handle key presses (e.g., numbers, operators)
  const handleKeyPress = (event: any) => {
    const { key } = event.nativeEvent;
    setLastKey(key);
    if (key === 'Backspace') {
      setInput(prev => prev.slice(0, -1) || '0');
    } else if (/^[0-9+\-*/.]$/.test(key)) {
      setInput(prev => (prev === '0' ? key : prev + key));
    }
  };

  const handlePress = (value: string) => {
    setLastKey(value);
    setInput(prev => (prev === '0' ? value : prev + value));
  };

  const calculate = () => {
    try {
      setLastKey('=');
      setInput(eval(input).toString());
    } catch (error) {
      setInput('');
    }
  };

  const clear = () => {
    setLastKey('C');
    setInput('0');
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Display */}
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.display}>
          <TextInput
            style={styles.displayText}
            value={input}
            onChangeText={text => setInput(text)} // Update input when typing
            onKeyPress={handleKeyPress} // Handle keyboard inputs
            onSubmitEditing={calculate} // Handle "Enter" key
            keyboardType="numeric" // Allows all characters
            placeholder="0"
            maxLength={20} // Optional: Limit max input length
            blurOnSubmit={false} // Prevent keyboard from dismissing
          />
        </View>
      </TouchableWithoutFeedback>
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
        {/* Row 5 */}
        <View style={styles.row}>
          <Text style={{ color: '#999', fontSize: 12 }}>
            마지막으로 선택한 키: {lastKey}
          </Text>
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
    textAlign: 'right',
    width: '100%',
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
