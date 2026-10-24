import { SectionList, StyleSheet, Text, View } from 'react-native'
import { CLASSES } from '../data/students'
import AnimatedProgressBar from '../components/AnimatedProgressBar'

const percentOf = (list) =>
  list.length ? Math.round((list.filter((s) => s.present).length / list.length) * 100) : 0

export default function ReportScreen({ students }) {
  // SectionList needs data grouped as [{ title, data: [...] }]
  const sections = CLASSES.map((c) => ({
    title: c,
    data: students.filter((s) => s.className === c),
  }))
  const present = students.filter((s) => s.present).length

  const summary = (
    <View>
      <View style={styles.cards}>
        <View style={[styles.card, { backgroundColor: '#dcfce7' }]}>
          <Text style={styles.cardNumber}>{present}</Text>
          <Text>Present</Text>
        </View>
        <View style={[styles.card, { backgroundColor: '#fee2e2' }]}>
          <Text style={styles.cardNumber}>{students.length - present}</Text>
          <Text>Absent</Text>
        </View>
      </View>

      <AnimatedProgressBar label="Overall" percent={percentOf(students)} color="#1e3a8a" />
      {sections.map((s) => (
        <AnimatedProgressBar key={s.title} label={s.title} percent={percentOf(s.data)} />
      ))}
    </View>
  )

  return (
    <SectionList
      sections={sections}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      ListHeaderComponent={summary}
      renderSectionHeader={({ section }) => (
        <Text style={styles.sectionHeader}>{section.title}</Text>
      )}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={{ color: item.present ? '#16a34a' : '#dc2626', fontWeight: 'bold' }}>
            {item.present ? 'P' : 'A'}
          </Text>
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  cards: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  card: { width: '48%', height: 90, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  cardNumber: { fontSize: 28, fontWeight: 'bold' },
  sectionHeader: {
    marginTop: 16,
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#1e3a8a',
    color: '#fff',
    fontWeight: 'bold',
    borderRadius: 6,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    backgroundColor: '#fff',
  },
  name: { fontSize: 15 },
})
