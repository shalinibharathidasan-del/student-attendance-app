import { useState } from 'react'
import { Button, ScrollView, StyleSheet, Switch, Text, TextInput, View } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { CLASSES } from '../data/students'

export default function AddStudentScreen({ onAdd }) {
  const [name, setName] = useState('')
  const [usn, setUsn] = useState('')
  const [className, setClassName] = useState(CLASSES[0])
  const [present, setPresent] = useState(true)
  const [message, setMessage] = useState('')

  const handleAdd = () => {
    if (!name.trim() || !usn.trim()) {
      setMessage('Please enter name and USN')
      return
    }
    onAdd({ name: name.trim(), usn: usn.trim().toUpperCase(), className, present })
    setMessage(`${name} added to ${className}`)
    setName('')
    setUsn('')
  }

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.label}>Student name</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="e.g. Ravi Kumar" />

      <Text style={styles.label}>USN</Text>
      <TextInput
        style={styles.input}
        value={usn}
        onChangeText={setUsn}
        placeholder="e.g. 1DS25MC010"
        autoCapitalize="characters"
      />

      <Text style={styles.label}>Class</Text>
      <View style={styles.pickerBox}>
        <Picker selectedValue={className} onValueChange={setClassName}>
          {CLASSES.map((c) => (
            <Picker.Item key={c} label={c} value={c} />
          ))}
        </Picker>
      </View>

      <View style={styles.switchRow}>
        <Text style={styles.label}>Present today</Text>
        <Switch value={present} onValueChange={setPresent} />
      </View>

      <Button title="Add Student" onPress={handleAdd} />
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  label: { fontSize: 14, color: '#374151', marginBottom: 4 },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    padding: 10,
    marginBottom: 14,
    fontSize: 15,
  },
  pickerBox: { backgroundColor: '#fff', borderRadius: 8, borderWidth: 1, borderColor: '#d1d5db', marginBottom: 14 },
  switchRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 },
  message: { textAlign: 'center', marginTop: 12, color: '#1e3a8a' },
})
