import { StyleSheet, Switch, Text, View } from 'react-native'

// One row in the attendance list. Props: student, onToggle
export default function StudentRow({ student, onToggle }) {
  return (
    <View style={styles.row}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{student.name.charAt(0)}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{student.name}</Text>
        <Text style={styles.usn}>{student.usn}</Text>
      </View>
      <Text style={[styles.status, { color: student.present ? '#16a34a' : '#dc2626' }]}>
        {student.present ? 'Present' : 'Absent'}
      </Text>
      <Switch
        value={student.present}
        onValueChange={() => onToggle(student.id)}
        trackColor={{ false: '#fca5a5', true: '#86efac' }}
        thumbColor={student.present ? '#16a34a' : '#dc2626'}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  // Flexbox: avatar | info (grows) | status | switch
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    marginBottom: 8,
    borderRadius: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#dbeafe',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: { fontWeight: 'bold', color: '#1e3a8a' },
  info: { flex: 1 },
  name: { fontSize: 15, fontWeight: '600' },
  usn: { fontSize: 12, color: '#6b7280' },
  status: { fontSize: 12, fontWeight: '600', marginRight: 8 },
})
