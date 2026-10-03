import '../global.css';
import { Stack } from 'expo-router';

export default function RootLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name='index' options={{ title: 'Inicio'}} />
            <Stack.Screen name='equipos' options={{ title: 'Equipos'}} />
            <Stack.Screen name='equipo/[id]' options={{ title: 'Detalle'}} />
            <Stack.Screen name='tareas' options={{ title: 'Tareas'}} />
            <Stack.Screen name='nuevaTarea' options={{ title: 'Nueva Tarea'}} />
        </Stack>
    );
}