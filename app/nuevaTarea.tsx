import { Pressable, Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

export default function equipos() {
    return (
        <LinearGradient
            colors={['#27272a', '#09090b']} // Zinc-800 a Zinc-950
            style={{ flex: 1 }}
        >
            <SafeAreaProvider className="flex-1 bg-slate-100">
                <View className="flex-1 p-6 justify-center">
                    <Text className="text-white font-light text-xl text-center pb-4">Aqui estaría el formulario para crear tareas</Text>
                    <Text className="text-white font-extrabold text-6xl text-center pb-6">¯\_(ツ)_/¯</Text>
                    <Text className="text-white font-light text-xl text-center">pero no lo está</Text>
                </View>
            </SafeAreaProvider>
        </LinearGradient>
    )
}
