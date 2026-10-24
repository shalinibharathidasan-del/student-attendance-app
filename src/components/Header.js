import { StyleSheet, Text, View } from 'react-native'

// Props: title, subtitle, badge (number shown in an absolutely positioned circle)
export default function Header({ title, subtitle, badge }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{badge}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1e3a8a',
    paddingHorizontal: 16,
    paddingTop: 48,
    paddingBottom: 16,
    position: 'relative',
  },
  title: { color: '#fff', fontSize: 22, fontWeight: 'bold' },
  subtitle: { color: '#c7d2fe', fontSize: 13, marginTop: 2 },
  // Positioning: badge pinned to the top-right corner of the header
  badge: {
    position: 'absolute',
    right: 16,
    top: 52,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f59e0b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
})
