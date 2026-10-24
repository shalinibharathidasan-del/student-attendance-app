import { useState } from 'react'
import { ActivityIndicator, Button, FlatList, StyleSheet, Text, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { CLASSES } from '../data/students'
import StudentRow from '../components/StudentRow'
import ProgressBar from '../components/ProgressBar'

export default function AttendanceScreen({ students, onToggle, onMarkAll }) {
  const [selectedClass, setSelectedClass] = useState(CLASSES[1])
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  const list = students.filter((s) => s.className === selectedClass)
  const presentCount = list.filter((s) => s.present).length
  const percent = list.length ? Math.round((presentCount / list.length) * 100) : 0

  // Simulate saving to a server so the ActivityIndicator can be shown
  const handleSave = () => {
    setSaving(true)
    setMessage('')
    setTimeout(() => {
      setSaving(false)
      setMessage(`Attendance saved for ${selectedClass} (${presentCount}/${list.length} present)`)
    }, 1500)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select class</Text>
      <View style={styles.pickerBox}>
        <Picker selectedValue={selectedClass} onValueChange={setSelectedClass}>
          {CLASSES.map((c) => (
            <Picker.Item key={c} label={c} value={c} />
          ))}
        </Picker>
      </View>

      <ProgressBar percent={percent} label={`Present ${presentCount}/${list.length}`} />

      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <StudentRow student={item} onToggle={onToggle} />}
        ListEmptyComponent={<Text style={styles.empty}>No students in this class.</Text>}
        style={styles.list}
      />

      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="All Present" color="#16a34a" onPress={() => onMarkAll(selectedClass, true)} />
        </View>
        <View style={styles.button}>
          <Button title="All Absent" color="#dc2626" onPress={() => onMarkAll(selectedClass, false)} />
        </View>
      </View>

      {saving ? (
        <ActivityIndicator size="large" color="#1e3a8a" style={styles.loader} />
      ) : (
        <Button title="Save Attendance" onPress={handleSave} />
      )}
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  label: { fontSize: 13, color: '#374151', marginBottom: 4 },
  pickerBox: { backgroundColor: '#fff', borderRadius: 8, borderWidth: 1, borderColor: '#d1d5db' },
  list: { flex: 1, marginVertical: 8 },
  empty: { textAlign: 'center', color: '#6b7280', marginTop: 24 },
  buttons: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  button: { width: '48%' },
  loader: { height: 40 },
  message: { textAlign: 'center', color: '#16a34a', marginTop: 8 },
})
