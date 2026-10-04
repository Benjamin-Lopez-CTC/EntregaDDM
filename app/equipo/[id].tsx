import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { teams } from "data/teams";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

export default function DetalleEquipo() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const teamId = Number(id);
    const team = teams.find((t) => t.id === teamId);
    const estado = team.currentState === 'Activo' ? 'text-emerald-400' : 'text-rose-400'

    if (!team) {
        return (
            <LinearGradient
                colors={['#27272a', '#09090b']}
                style={{ flex: 1 }}
            >
                <SafeAreaView style={{ flex: 1, backgroundColor: '#27272a' }}>
                    <Text className="font-bold text-xl text-white text-shadow-lg/100 tracking-widest">Equipo no encontrado</Text>
                </SafeAreaView>
            </LinearGradient>
        );
    }

    return (
        <LinearGradient
            colors={['#27272a', '#09090b']} // Zinc-800 a Zinc-950
            style={{ flex: 1 }}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <View className="p-6 mt-12 pb-24 flex-1">
                    <Text className="color-neutral-400 font-semibold text-lg pb-2 tracking-wider">ID {team.id}</Text>
                    <View className="flex flex-row pb-3">
                        <Text className="color-neutral-400 font-semibold text-2xl tracking-widest">Estado: </Text>
                        <Text className={`font-extralight text-2xl ${estado} tracking-widest`}>{team.currentState}</Text>
                    </View>
                    <Text className="color-neutral-300 font-bold text-5xl pb-4 tracking-widest">{team.name}</Text>
                    <Text className="color-neutral-400 font-light text-3xl pb-2 tracking-widest">{team.area}</Text>
                    <Text className="color-neutral-500 font-light text-xl tracking-widest">Integrantes: {team.teamCount}</Text>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}