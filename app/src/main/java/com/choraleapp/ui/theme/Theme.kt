package com.choraleapp.ui.theme

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

private val LightColors = lightColorScheme(
    primary = Purple40,
    onPrimary = Color.White,
    primaryContainer = Color(0xFFD9E2FF),
    onPrimaryContainer = Color(0xFF0D1B34),
    secondary = Gold,
    onSecondary = Color.White,
    secondaryContainer = GoldContainerLight,
    onSecondaryContainer = Color(0xFF3D2E00),
    tertiary = Teal40,
    onTertiary = Color.White,
    background = Background,
    surface = Color.White,
    surfaceVariant = IvoryVariant,
    onSurface = Color(0xFF171717),
    onSurfaceVariant = Color(0xFF4D4639),
    error = Color(0xFFBA1A1A)
)

private val DarkColors = darkColorScheme(
    primary = Purple80,
    onPrimary = Color(0xFF0D1B34),
    primaryContainer = Color(0xFF2C3B63),
    onPrimaryContainer = Color(0xFFD9E2FF),
    secondary = GoldDark,
    onSecondary = Color(0xFF3D2E00),
    secondaryContainer = GoldContainerDark,
    onSecondaryContainer = GoldContainerLight,
    tertiary = Teal40,
    onTertiary = Color.White,
    background = Background,
    surface = Color.White,
    surfaceVariant = IvoryVariant,
    onSurface = Color(0xFF171717),
    onSurfaceVariant = Color(0xFF4D4639),
    error = Color(0xFFFFB4AB)
)

@Composable
fun ChoraleTheme(
    darkTheme: Boolean = false,
    content: @Composable () -> Unit
) {
    val colorScheme = if (darkTheme) DarkColors else LightColors

    MaterialTheme(
        colorScheme = colorScheme,
        typography = ChoraleTypography,
        shapes = ChoraleShapes,
        content = content
    )
}
