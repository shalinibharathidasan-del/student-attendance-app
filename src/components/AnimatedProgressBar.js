import { useEffect, useRef } from 'react'
import { Animated, StyleSheet, Text, View } from 'react-native'

// Animated progress bar: width animates from its old value to the new percent
export default function AnimatedProgressBar({ percent, label, color = '#2563eb' }) {
  const progress = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(progress, {
      toValue: percent,
      duration: 800,
      useNativeDriver: false, // width can't use the native driver
    }).start()
  }, [percent, progress])

  const width = progress.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  })

  return (
    <View style={styles.wrapper}>
      <View style={styles.row}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.label}>{percent}%</Text>
      </View>
      <View style={styles.track}>
        <Animated.View style={[styles.fill, { width, backgroundColor: color }]} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: { marginVertical: 8 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 4 },
  label: { fontSize: 14, color: '#374151' },
  track: { height: 16, backgroundColor: '#e5e7eb', borderRadius: 8, overflow: 'hidden' },
  fill: { height: '100%', borderRadius: 8 },
})
