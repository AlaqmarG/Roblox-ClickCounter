import React from "@rbxts/react";
import ReactRoblox from "@rbxts/react-roblox";
import { InferProps } from "@rbxts/ui-labs";

const Controls = {
	Clicks: "0",
};

const story = {
	react: React,
	reactRoblox: ReactRoblox,
	controls: Controls,
	story: (props: InferProps<typeof Controls>) => {
		return (
			<frame Size={new UDim2(1, 0, 1, 0)} BackgroundColor3={Color3.fromRGB(50, 50, 50)}>
				<textlabel
					Position={new UDim2(0.5, 0, 0.4, 0)}
					TextScaled={true}
					Size={new UDim2(0.5, 0, 0.15, 0)}
					AnchorPoint={new Vector2(0.5, 0.5)}
					BackgroundTransparency={1}
					TextColor3={new Color3(1, 1, 1)}
					Font={"SourceSansSemibold"}
					Text={props.controls.Clicks}
				/>
				<textbutton
					Text={"Click"}
					Size={new UDim2(0.2, 0, 0.1, 0)}
					TextScaled={true}
					Font={"SourceSansSemibold"}
					BackgroundColor3={new Color3(0.4, 0.7, 0.4)}
					TextColor3={new Color3(0, 0, 0)}
					Position={new UDim2(0.5, 0, 0.6, 0)}
					AnchorPoint={new Vector2(0.5, 0)}
				>
					<uipadding PaddingTop={new UDim(0.2, 0)} PaddingBottom={new UDim(0.2, 0)} />
					<uicorner CornerRadius={new UDim(0, 5)} />
				</textbutton>
				<textbutton
					Text={"Reset"}
					Size={new UDim2(0.075, 0, 0.06, 0)}
					TextScaled={true}
					Font={"SourceSansSemibold"}
					BackgroundColor3={new Color3(1, 0.4, 0.4)}
					AnchorPoint={new Vector2(0.5, 0)}
					Position={new UDim2(0.5, 0, 0.725, 0)}
				>
					<uipadding PaddingTop={new UDim(0.2, 0)} PaddingBottom={new UDim(0.2, 0)} />
					<uicorner CornerRadius={new UDim(0, 5)} />
				</textbutton>
			</frame>
		);
	},
};

export = story;
