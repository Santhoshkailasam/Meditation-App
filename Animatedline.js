import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Animated } from "react-native";

const AudioWaveform = () => {
  const numberOfBars = 35; // Total number of bars
  const barWidth = 6; // Width of each bar
  const barSpacing = 4; // Spacing between bars
  const totalWidth = (barWidth + barSpacing) * numberOfBars; // Calculate total waveform width

  // Track animation for each bar
  const barAnimations = useRef(
    Array.from({ length: numberOfBars }).map(() => new Animated.Value(0))
  ).current;

  // Simulated audio duration (in seconds)
  const audioDuration = 10;

  // Generate random bar heights
  const barHeights = Array.from({ length: numberOfBars }).map(
    () => Math.random() * 50 + 10 // Random heights between 10 and 60
  );

  // Start the audio play animation
  useEffect(() => {
    // Animate each bar independently
    Animated.stagger(100, // Add delay between each bar
      barAnimations.map((animation, index) => {
        return Animated.timing(animation, {
          toValue: 1, // Each bar will become fully black
          duration: audioDuration * 1000, // Match audio duration
          useNativeDriver: false,
        });
      })
    ).start(() => {
      // Reset all animations back to initial state after finishing the animation
      barAnimations.forEach((animation) => animation.setValue(0));
    });
  }, []);

  return (
    <View style={styles.container}>
      {/* Waveform */}
      <View style={styles.waveform}>
        {barHeights.map((height, index) => {
          // Animate the color change from gray to black
          const barColor = barAnimations[index].interpolate({
            inputRange: [0, 1],
            outputRange: ["#ccc", "black"], // Change from gray to black
          });

          return (
            <Animated.View
              key={index}
              style={[
                styles.bar,
                {
                  height, // Random height for each bar
                  backgroundColor: barColor, // Dynamic color change
                },
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
  },
  waveform: {
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    flex: 1,
    marginHorizontal: 10,
    position: "relative",
  },
  bar: {
    width: 6,
    marginHorizontal:1,
    borderRadius: 2,
  },
});

export default AudioWaveform;
