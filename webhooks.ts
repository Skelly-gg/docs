export interface IDota2Webhook {
  mmr?: number;
  confidence?: number;
  gameMode?: string;
  lobbyType?: string;
  gameState?: string;
  players?: {
    steamId: string;
    accountId: string;
    name: string;
    hero: string;
    team: number;
    role: number;
    team_slot: number;
    player_index: number;
  }[];
}
