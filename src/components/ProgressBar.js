import { StyleSheet, Text, View } from 'react-native'

// Simple progress bar: inner bar width is a percentage of the outer bar
export default function ProgressBar({ percent, label }) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}: {percent}%</Text>
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${percent}%` }]} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: { marginVertical: 8 },
  label: { fontSize: 13, color: '#374151', marginBottom: 4 },
  track: { height: 12, width: '100%', backgroundColor: '#e5e7eb', borderRadius: 6, overflow: 'hidden' },
  fill: { height: '100%', backgroundColor: '#16a34a' },
})
