import { Pressable, Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function equipos() {
    return (
        <SafeAreaProvider className="flex-1 bg-slate-100">
            <View className="flex-1 p-6 justify-center">
                <Text>Equipos</Text>
            </View>
        </SafeAreaProvider>
    )
}
