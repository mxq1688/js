import React, {Component} from 'react';
import {Text, View} from 'react-native';

// 方式一：
const MyComponent = () => (
  <View>
    <Text>MyComponent</Text>
  </View>
);

// 方式二：
class MyClass extends Component {
  render() {
    return (
      <View>
        <Text>MyClass</Text>
      </View>
    );
  }
}

export {MyClass};

export default MyComponent;
