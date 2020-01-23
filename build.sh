#!/bin/sh

JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home ionic cordova build --release android
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore creps.keystore platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk creps-app
zipalign -v 4 platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk CrepsApp.apk

