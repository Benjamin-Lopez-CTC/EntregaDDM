import '../global.css';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

export default function RootLayout() {
    return (
        <LinearGradient
            colors={['#27272a', '#09090b']} // Zinc-800 a Zinc-950
            style={{ flex: 1 }}
        >
            <SafeAreaProvider>
                <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen name='index' options={{ title: 'Inicio'}} />
                    <Stack.Screen name='equipos' options={{ title: 'Equipos'}} />
                    <Stack.Screen name='equipo/[id]' options={{ title: 'Detalle'}} />
                    <Stack.Screen name='tareas' options={{ title: 'Tareas'}} />
                    <Stack.Screen name='nuevaTarea' options={{ title: 'Nueva Tarea'}} />
                </Stack>
            </SafeAreaProvider>
        </LinearGradient>
    );
}