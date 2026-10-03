import { Link, router } from 'expo-router';
import { Pressable, Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function IndexScreen() {
    return (
        <SafeAreaProvider className="flex-1 bg-zinc-400">
            <View className="flex-1 p-6 justify-center gap-5 bg-zinc-800">
                <View>
                    <Text className="text-white text-2xl font-bold pb-1 tracking-widest">Bienvenido</Text>
                    <Text className="text-white/50 text-sm tracking-widest">Esta app fue hecha por Benjamin Lopez</Text>
                </View>
                <Link href="/equipos" asChild>
                    <Pressable className='px-5 py-4 bg-neutral-400 rounded-2xl items-center shadow-lg
                                        active:bg-neutral-500 active:scale-95 
                                        transition-all duration-200 ease-out'>
                        <Text className='text-2xl color-white font-bold'>Equipos</Text>
                    </Pressable>
                </Link>
                <Link href="/equipos" asChild>
                    <Pressable className='px-5 py-4 bg-zinc-400 rounded-2xl items-center shadow-lg
                                        active:bg-zinc-500 active:scale-95 
                                        transition-all duration-200 ease-out'>
                        <Text className='text-2xl color-white font-bold'>Tareas</Text>
                    </Pressable>
                </Link>
                <Link href="/nuevaTarea" asChild>
                    <Pressable className='px-5 py-4 bg-stone-400 rounded-2xl items-center shadow-lg
                                        active:bg-stone-500 active:scale-95 
                                        transition-all duration-200 ease-out'>
                        <Text className='text-2xl color-white font-bold'>Nueva Tarea</Text>
                    </Pressable>
                </Link>
            </View>
        </SafeAreaProvider>
    );
}