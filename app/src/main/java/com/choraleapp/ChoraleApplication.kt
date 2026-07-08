package com.choraleapp

import android.app.Application
import com.google.firebase.FirebaseApp

class ChoraleApplication : Application() {
    companion object {
        @Volatile
        var isInForeground: Boolean = false
    }

    override fun onCreate() {
        super.onCreate()
        FirebaseApp.initializeApp(this)
    }
}
