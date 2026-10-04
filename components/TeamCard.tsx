import { router } from "expo-router";
import { Pressable, Text, View } from 'react-native';
import { Team } from "types/team";

type Props = { team: Team };

export function TeamCard({ team }: Props) {
    return (
        <Pressable className="bg-neutral-700 border rounded-2xl p-4 border-neutral-500 drop-shadow-lg
                            active:bg-neutral-800 active:scale-95 transition-all duration-200 ease-out"
                            onPress={() => router.push(`/equipo/${team.id}`)}>
            <View className="flex flex-row justify-between">
                <Text className="text-sm text-shadow-lg/30 font-bold color-neutral-300 tracking-wider">ID: {team.id}</Text>
                <Text className="font-semibold text-shadow-lg/30 text-md color-neutral-300 tracking-wide">{team.currentState}</Text>
            </View>
            <Text className="font-semibold text-shadow-lg/30 text-xl mt-3 text-neutral-200 tracking-wider">{team.name}</Text>
            <Text className="font-light text-shadow-lg/30 text-lg color-neutral-400 tracking-wider">{team.area}</Text>
            <Text className="font-light text-neutral-400 text-shadow-lg/30 mt-2 tracking-wider">Integrantes: {team.teamCount}</Text>
        </Pressable>
    );
}