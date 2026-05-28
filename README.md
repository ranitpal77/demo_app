# demo_app 📱✨

A modern, high-performance mobile application built using **React Native**, **Expo (SDK 54)**, and **React Navigation**. This project is fully configured for cross-platform execution (Android, iOS, and Web) and integrated with **EAS (Expo Application Services) Build** for seamless cloud deployments.

---

## 🚀 Key Features

* **Multi-Tab Navigation:** Modular layout with smooth bottom tab switching between **Home**, **Chats**, **Profile**, and **Settings** powered by `@react-navigation/bottom-tabs`.
* **Universal Platform Support:** Designed to run flawlessly on iOS, Android, and the Web.
* **Ngrok Tunnel Support:** Preconfigured with `@expo/ngrok` so you can scan the QR code and test the app on physical devices, even if they aren't on the same local Wi-Fi.
* **EAS Build Integration:** Out-of-the-box configuration in `eas.json` for creating preview and production builds on the cloud.
* **Expo SDK 54 & React 19 Core:** Leverages the latest React Native core features for optimal rendering and performance.

---

## 🛠️ Getting Started

### 1. Prerequisites
Make sure you have Node.js and npm installed on your system.

### 2. Installation
Clone the repository and install the dependencies:
```bash
git clone https://github.com/ranitpal77/demo_app.git
cd demo_app
npm install
```

### 3. Running the App
Choose one of the following commands depending on your development environment:

* **Standard Development Server:**
  ```bash
  npm run start
  ```
* **Tunnel Mode (Highly Recommended for Mobile testing):**
  If your phone is on a different Wi-Fi network or cellular data, start Expo with a secure ngrok tunnel:
  ```bash
  npm run start:tunnel
  ```
* **Specific Platforms:**
  ```bash
  npm run android      # Run on Android Emulator / Device
  npm run ios          # Run on iOS Simulator (macOS only)
  npm run web          # Run in Web Browser
  ```

---

## 📦 Building and Deployment (EAS)

This project is configured with Expo Application Services (EAS). To run builds in the cloud:

### Build Android Preview APK
To generate a shareable preview APK for testing on Android devices, run:
```bash
npx eas build --profile preview --platform android
```

### Build for Production
To generate release-ready bundles for the App Store and Google Play Store:
```bash
npx eas build --platform all
```

---

## 📁 Project Structure

```text
├── .expo/                # Expo development cache
├── assets/               # App icons, splash screens, and static images
├── src/
│   ├── App.js            # App wrapper with NavigationContainer
│   ├── navigation/
│   │   └── StartNavigation.jsx   # Bottom Tab Navigator configuration
│   └── screens/
│       ├── Home.jsx      # Home Screen component
│       ├── Chats.jsx     # Chats Screen component
│       ├── Profile.jsx   # User Profile Screen component
│       └── Settings.jsx  # App Settings Screen component
├── app.json              # Global Expo configuration
├── eas.json              # EAS cloud build settings
├── metro.config.js       # Metro bundler customization
├── package.json          # Dependency and script management
└── README.md             # This document
```
