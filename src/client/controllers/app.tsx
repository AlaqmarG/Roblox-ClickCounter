import React, { StrictMode, useState } from "@rbxts/react";
import { createPortal, createRoot } from "@rbxts/react-roblox";

import { Button } from "client/components/button";
import { Players } from "@rbxts/services";
import { Controller, OnStart } from "@flamework/core";
import { Events, Functions } from "client/network";

const playerGui = Players.LocalPlayer.WaitForChild("PlayerGui");
const root = createRoot(new Instance("Folder"));

@Controller({})
export class App implements OnStart {
	/**
	 * Renders the interface after quering the server
	 * for the number of clicks from the last session
	 */
	onStart(): void {
		Functions.function().then((numClicks) => {
			root.render(<StrictMode>{createPortal(<Main clicks={numClicks} />, playerGui)}</StrictMode>);
		});
	}
}

/**
 * Generates the game userinterface including the background
 * the click counter and the click and reset buttons
 */
function Main(props: { clicks: number }) {
	const [count, setCount] = useState(props.clicks);

	return (
		<screengui IgnoreGuiInset={true}>
			<frame Size={new UDim2(1, 0, 1, 0)} BackgroundColor3={Color3.fromRGB(50, 50, 50)}>
				<textlabel
					Position={new UDim2(0.5, 0, 0.45, 0)}
					TextScaled={true}
					Size={new UDim2(0.5, 0, 0.15, 0)}
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					TextColor3={new Color3(1, 1, 1)}
					Font={"SourceSansSemibold"}
					Text={tostring(count)}
				/>
				<Button
					text="Click"
					size={new UDim2(0.2, 0, 0.1, 0)}
					position={new UDim2(0.5, 0, 0.6, 0)}
					anchorPoint={new Vector2(0.5, 0)}
					color={new Color3(0.4, 0.7, 0.4)}
					event={() => {
						Events.event(count + 1);
						setCount(count + 1);
					}}
				></Button>
				<Button
					text="Reset"
					size={new UDim2(0.075, 0, 0.06, 0)}
					position={new UDim2(0.5, 0, 0.725, 0)}
					anchorPoint={new Vector2(0.5, 0)}
					color={new Color3(1, 0.4, 0.4)}
					event={() => {
						Events.event(0);
						setCount(0);
					}}
				/>
			</frame>
		</screengui>
	);
}
