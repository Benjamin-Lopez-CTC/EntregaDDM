import { Team } from '../data/team';

export const teams: Team[] = [
    { id: 1, name: 'Equipo Alfa', area: 'Aministración', teamCount: 24, currentState: 'Activo' },
    { id: 2, name: 'Equipo Beta', area: 'Financiación', teamCount: 18, currentState: 'Inactivo' },
    { id: 3, name: 'Equipo Gamma', area: 'Limpieza', teamCount: 6, currentState: 'Activo' },
    { id: 4, name: 'Equipo Omega', area: 'Ingeniería', teamCount: 40, currentState: 'Activo' }
]

export function getTeamById(id?: number) {
    return teams.find((e) => e.id === id);
}