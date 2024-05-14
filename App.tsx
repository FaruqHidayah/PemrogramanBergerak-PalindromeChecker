import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image } from 'react-native';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [isPalindrome, setIsPalindrome] = useState(null);

  const checkPalindrome = () => {
    const reversedText = inputText.split('').reverse().join('');
    setIsPalindrome(inputText === reversedText);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <Image source={{
        uri:'data:image/jpeg;base64,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'
      }}
      style={{width: 200, height:200}}
      />
      <TextInput
        style={{ width: '80%', height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 }}
        placeholder="Enter a string"
        onChangeText={setInputText}
        value={inputText}
      />
      <Button title="Check Palindrome" onPress={checkPalindrome} />
      {isPalindrome !== null && (
        <Text style={{ marginTop: 20, fontSize: 18 }}>
          {isPalindrome ? 'It is a Palindrome!' : 'It is not a Palindrome.'}
        </Text>
      )}
    </View>
  );
};

export default App;

