import { Pressable, StyleSheet, Text, View } from 'react-native'

const TABS = ['Attendance', 'Add', 'Report', 'About']

// Bottom tab bar. Props: active, onChange
export default function TabBar({ active, onChange }) {
  return (
    <View style={styles.bar}>
      {TABS.map((tab) => (
        <Pressable key={tab} style={styles.tab} onPress={() => onChange(tab)}>
          <Text style={[styles.text, active === tab && styles.active]}>{tab}</Text>
        </Pressable>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  tab: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { color: '#6b7280', fontSize: 14 },
  active: { color: '#1e3a8a', fontWeight: 'bold' },
})
