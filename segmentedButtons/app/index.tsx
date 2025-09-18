import React, { useState } from 'react';
import { SegmentedButtons } from 'react-native-paper';

export default function App() {
  const [value, setValue] = useState('walk'); // Define state for value

  return (
    <SegmentedButtons
      value={value}
      onValueChange={setValue}
      density="medium"
      theme={{ roundness: 0 }}
      buttons={[
        {
          value: "walk",
          label: "Walking",
          icon: 'walk',
          style: {
            borderRadius: 0,
          },
        },
        {
          value: "train",
          label: "Transit",
          icon: 'train',
          style: {
            borderRadius: 0,
          },
        },
        {
          value: "drive",
          label: "Driving",
          icon: 'car',
          style: {
            borderRadius: 0,
          },
        },
      ]}
    />
  );
}
