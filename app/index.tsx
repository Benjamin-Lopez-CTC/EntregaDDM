import { Link, router } from 'expo-router';
import { Pressable, Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

export default function IndexScreen() {
    return (
        <LinearGradient
            colors={['#27272a', '#09090b']} // Zinc-800 a Zinc-950
            style={{ flex: 1 }}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <View className="p-6 mb-24 gap-5 flex-1 justify-center">
                    <View>
                        <Text className="text-white text-3xl font-bold text-shadow-lg/100 pb-1 tracking-widest">Bienvenido</Text>
                        <Text className="text-white/50 text-md text-shadow-lg/100 tracking-widest">Esta app fue hecha por Benjamin Lopez</Text>
                    </View>
                    <Link href="/equipos" asChild>
                        <Pressable className='px-5 py-4 bg-neutral-700 border border-neutral-500 rounded-2xl items-center shadow-lg
                                            active:bg-neutral-800 active:scale-95
                                            transition-all duration-200 ease-out'>
                            <Text className='text-2xl text-shadow-lg/30 color-white font-bold'>Equipos</Text>
                        </Pressable>
                    </Link>
                    <Link href="/tareas" asChild>
                        <Pressable className='px-5 py-4 bg-zinc-700 border border-zinc-500 rounded-2xl items-center shadow-lg
                                            active:bg-zinc-800 active:scale-95 
                                            transition-all duration-200 ease-out'>
                            <Text className='text-2xl text-shadow-lg/30 color-white font-bold'>Tareas</Text>
                        </Pressable>
                    </Link>
                    <Link href="/nuevaTarea" asChild>
                        <Pressable className='px-5 py-4 bg-stone-700 border border-stone-500 rounded-2xl items-center shadow-lg
                                            active:bg-stone-800 active:scale-95 
                                            transition-all duration-200 ease-out'>
                            <Text className='text-2xl text-shadow-lg/30 color-white font-bold'>Nueva Tarea</Text>
                        </Pressable>
                    </Link>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}