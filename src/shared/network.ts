import { Networking } from "@flamework/networking";

interface ClientToServerEvents {
	event(clicks: number): void;
}

interface ServerToClientEvents {}

interface ClientToServerFunctions {
	function(): number;
}

interface ServerToClientFunctions {}

export const GlobalEvents = Networking.createEvent<ClientToServerEvents, ServerToClientEvents>();
export const GlobalFunctions = Networking.createFunction<ClientToServerFunctions, ServerToClientFunctions>();
