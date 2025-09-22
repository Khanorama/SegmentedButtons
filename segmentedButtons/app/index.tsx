import React, { useState } from 'react';
import { StyleSheet, View } from "react-native";
import { SegmentedButtons } from 'react-native-paper';

export default function App() {
  const [value, setValue] = useState('walk'); // Define state for value

  return (
    <View style={styles.container}>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: 'walk',
            label: 'Walking',
            icon: 'walk',
            style: {
              borderRadius: 0,
            },
          },
          {
            value: 'train',
            label: 'Transit',
            icon: 'train',
            style: {
              borderRadius: 0,
            },
          },
          {
            value: 'drive',
            label: 'Driving',
            icon: 'car',
            style: {
              borderRadius: 0,
            },
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', 
    margin: 20, 
  },
});
