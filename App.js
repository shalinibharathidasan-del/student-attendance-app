import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { initialStudents } from './src/data/students'
import Header from './src/components/Header'
import TabBar from './src/components/TabBar'
import AttendanceScreen from './src/screens/AttendanceScreen'
import AddStudentScreen from './src/screens/AddStudentScreen'
import ReportScreen from './src/screens/ReportScreen'
import AboutScreen from './src/screens/AboutScreen'

const SUBTITLES = {
  Attendance: "Mark today's attendance",
  Add: 'Add a new student',
  Report: 'Attendance summary',
  About: 'About the college',
}

export default function App() {
  // State lives here and is passed down to screens as props
  const [students, setStudents] = useState(initialStudents)
  const [tab, setTab] = useState('Attendance')

  const toggleStudent = (id) =>
    setStudents((prev) => prev.map((s) => (s.id === id ? { ...s, present: !s.present } : s)))

  const markAll = (className, present) =>
    setStudents((prev) => prev.map((s) => (s.className === className ? { ...s, present } : s)))

  const addStudent = (student) =>
    setStudents((prev) => [...prev, { ...student, id: Date.now().toString() }])

  const presentCount = students.filter((s) => s.present).length

  return (
    <View style={styles.app}>
      <StatusBar style="light" />
      <Header title="Student Attendance" subtitle={SUBTITLES[tab]} badge={presentCount} />

      <View style={styles.content}>
        {tab === 'Attendance' && (
          <AttendanceScreen students={students} onToggle={toggleStudent} onMarkAll={markAll} />
        )}
        {tab === 'Add' && <AddStudentScreen onAdd={addStudent} />}
        {tab === 'Report' && <ReportScreen students={students} />}
        {tab === 'About' && <AboutScreen />}
      </View>

      <TabBar active={tab} onChange={setTab} />
    </View>
  )
}

const styles = StyleSheet.create({
  app: { flex: 1, backgroundColor: '#f3f4f6' },
  content: { flex: 1 },
})
