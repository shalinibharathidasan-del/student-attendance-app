# Student Attendance App (React Native)

MMCA314D – Web Development Using Full Stack Open — **Assignment 1, Question 2**

A simple React Native (Expo) app to mark and view student attendance.

## How to run

```bash
npm install
npx expo start
```

- **On your phone:** install **Expo Go** (Android / iOS) and scan the QR code shown in the terminal.
- **Android emulator:** press `a` in the terminal.
- **In a browser:** press `w` (WebView screen works only on phone/emulator).

## Screens

| Screen | What it does |
|---|---|
| Attendance | Pick a class, mark each student present/absent, mark all, save |
| Add | Add a new student to a class |
| Report | Present/absent totals, % per class, students grouped by class |
| About | College website inside the app |

## Project structure

```
student-attendance-app/
├── App.js                       Root: StatusBar, Header, tab switching, shared state
├── index.js                     Registers App with Expo
├── app.json                     Expo config (name, icons)
├── assets/                      App icons and splash images
└── src/
    ├── data/students.js         Class list and sample students
    ├── components/
    │   ├── Header.js            Title bar with absolutely positioned badge
    │   ├── TabBar.js            Bottom tabs (Pressable buttons)
    │   ├── StudentRow.js        One student with a Switch
    │   ├── ProgressBar.js       Plain progress bar
    │   └── AnimatedProgressBar.js  Progress bar using Animated API
    └── screens/
        ├── AttendanceScreen.js
        ├── AddStudentScreen.js
        ├── ReportScreen.js
        └── AboutScreen.js
```

## Where each concept is used

| Concept | Where |
|---|---|
| Native View | `View` / `Text` used in every component |
| State and Props | State in `App.js` (`students`, `tab`) passed as props to screens; `useState` in every screen |
| Styles | `StyleSheet.create` in every file |
| Height and Width | Fixed sizes (avatar 40×40, tab bar height 60) and % widths (buttons and cards `48%`, progress fill `${percent}%`) |
| Buttons | `Button` (Save, All Present, All Absent, Add Student), `Pressable` (tab bar) |
| Layout and Flexbox | `flexDirection: 'row'`, `flex: 1`, `justifyContent`, `alignItems` in `StudentRow`, `TabBar`, Report cards |
| Positioning | `position: 'absolute'` badge in `Header`, loading spinner over the WebView in `AboutScreen` |
| ScrollView | `AddStudentScreen` form |
| FlatList | Student list in `AttendanceScreen` |
| SectionList | Students grouped by class in `ReportScreen` |
| TextInput | Name and USN in `AddStudentScreen` |
| ActivityIndicator | While saving attendance; while WebView loads |
| Picker | Class selection (`@react-native-picker/picker`) on Attendance and Add screens |
| StatusBar | `expo-status-bar` in `App.js` |
| Switch | Present/absent toggle in `StudentRow`; "Present today" in Add screen |
| WebView | `react-native-webview` in `AboutScreen` |
| Progress Bar | `ProgressBar` on Attendance screen |
| Animated Progress Bar | `AnimatedProgressBar` (Animated.timing) on Report screen |

## Commit history

1. Initial commit (Expo blank template)
2. Add Picker, WebView and web support dependencies
3. Add reusable components: Header, TabBar, StudentRow, progress bars
4. Add Attendance screen with FlatList, Switch, Picker and ActivityIndicator
5. Add Add Student, Report and About screens
6. Wire up screens, shared state and StatusBar in App.js
7. Add README with project structure and concept mapping

## Tech used

React Native 0.88, Expo SDK 58
