#!/bin/sh
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore creps.keystore platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk creps-app
/Users/sylvain/Library/Android/sdk/build-tools/28.0.3/zipalign -v 4 platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk CrepsApp.apk
