import { t } from "@rbxts/t";
import Lyra from "@rbxts/lyra";
import { OnStart, Service } from "@flamework/core";
import { Events, Functions } from "server/network";
import { Players } from "@rbxts/services";

// Template for new entries
const store = Lyra.createPlayerStore({
	name: "PlayerData",
	template: {
		clicks: 0,
	},
	schema: t.strictInterface({
		clicks: t.number,
	}),
});

/**
 * Handles server side data storage and responds
 * to client requests for data and updating client data
 */
@Service({})
export class data implements OnStart {
	onStart(): void {
		// Return the number of player clicks
		Functions.function.setCallback((player: Player) => {
			return store
				.load(player)
				.andThen(() => store.get(player))
				.andThen((data) => data.clicks);
		});

		// Update number of player clicks
		Events.event.connect((player: Player, clicks: number) => {
			store.load(player).andThen(() =>
				store.update(player, (data) => {
					data.clicks = clicks;
					return true;
				}),
			);
		});

		// Async unload player data if they are removed
		Players.PlayerRemoving.Connect((player: Player) => {
			store.unloadAsync(player);
		});

		// Async close store on game close
		game.BindToClose(() => {
			store.closeAsync();
		});
	}
}
