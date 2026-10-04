import { Pressable, Button, StyleSheet, Text, View, FlatList } from 'react-native';
import { TeamCard } from '../components/TeamCard';
import { teams } from '../data/teams';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

export default function equipos() {
    return (
        <LinearGradient
            colors={['#27272a', '#09090b']} // Zinc-800 a Zinc-950
            style={{ flex: 1 }}
        >
            <SafeAreaView style={{ flex: 1 }} >
                <View className="flex-1 p-6">
                    <Text className="font-bold text-3xl text-white text-shadow-lg/100 tracking-widest">Equipos registrados</Text>
                    <Text className="mt-3 mb-9 text-md text-white/50 text-shadow-lg/100 tracking-widest">Selecciona un equipo para ver su detalle</Text>
                    <FlatList 
                        data={teams}
                        keyExtractor={(team) => team.id}
                        renderItem={({ item }) => <TeamCard team={item}/>}
                        contentContainerClassName="gap-5"
                    />
                </View>
            </SafeAreaView>
        </LinearGradient>
    )
}
