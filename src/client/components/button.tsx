import React = require("@rbxts/react");

interface buttonProps {
	text: string;
	size: UDim2;
	position: UDim2;
	anchorPoint: Vector2;
	color: Color3;
	event: () => void;
}

export function Button(props: buttonProps) {
	return (
		<textbutton
			Text={props.text}
			Size={props.size}
			Position={props.position}
			AnchorPoint={props.anchorPoint}
			BackgroundColor3={props.color}
			Font={"SourceSansSemibold"}
			TextScaled={true}
			Event={{ Activated: props.event }}
		>
			<uicorner CornerRadius={new UDim(0, 5)} />
			<uipadding PaddingTop={new UDim(0.2, 0)} PaddingBottom={new UDim(0.2, 0)} />
		</textbutton>
	);
}
