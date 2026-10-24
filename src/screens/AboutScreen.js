import { useState } from 'react'
import { ActivityIndicator, Platform, StyleSheet, Text, View } from 'react-native'
import { WebView } from 'react-native-webview'

const URL = 'https://www.dsce.edu.in'

export default function AboutScreen() {
  const [loading, setLoading] = useState(true)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>College website shown inside the app using WebView:</Text>
      <View style={styles.webBox}>
        {Platform.OS === 'web' ? (
          <Text style={styles.note}>
            WebView runs on Android/iOS. Open the app in Expo Go to see {URL}
          </Text>
        ) : (
          <>
            <WebView source={{ uri: URL }} onLoadEnd={() => setLoading(false)} />
            {loading && <ActivityIndicator size="large" style={styles.loader} />}
          </>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  text: { fontSize: 14, color: '#374151', marginBottom: 8 },
  webBox: { flex: 1, borderRadius: 10, overflow: 'hidden', backgroundColor: '#fff' },
  note: { padding: 16, color: '#6b7280' },
  // Positioning: spinner centered over the WebView while it loads
  loader: { position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 },
})
