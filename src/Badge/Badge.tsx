import * as React from "react";
import { COLORS } from "../utils/constants";
import "./Badge.scss";

import cn from "classnames";

export const badgeModes = {
	danger: 'danger',
	disabled: 'disabled',
	ghost: 'ghost',
	success: 'success',
	warning: 'warning',
} as {
	danger: 'danger',
	disabled: 'disabled',
	ghost: 'ghost',
	success: 'success',
	warning: 'warning',
}

export type BadgeMode = typeof badgeModes[keyof typeof badgeModes]

const ModeColors = {
	danger: COLORS.Danger,
	disabled: COLORS.Disabled,
	ghost: "transparent",
	success: COLORS.Success,
	warning: COLORS.Warning
};

const ProgressColors = {
	warning: COLORS.WarningBackground
};

interface IProps {
	color?: COLORS | string;
	size?: string;
	mode?: BadgeMode;
	progress?: number;
	progressColor?: COLORS | string;
}


export const Badge: React.FC<IProps> = props => {
	const {
		color = COLORS.Green,
		size,
		mode,
		progress,
		progressColor,
		children
	} = props;
	let background;

	if (progress !== undefined && !isNaN(progress)) {
		const backgroundColor = mode ? ProgressColors[mode] : progressColor;
		const barColor = mode ? ModeColors[mode] : color;

		background = `linear-gradient(90deg, ${barColor} ${progress}%, ${backgroundColor} ${progress}%, ${backgroundColor} ${100 -
			progress}%)`;
	} else {
		background = mode ? ModeColors[mode] : color;
	}

	return (
		<div
			className={cn("kit-badge", {
				[`kit-badge_size_${size}`]: size,
				[`kit-badge_mode_${mode}`]: mode
			})}
			style={{ background }}
		>
			{children}
		</div>
	);
};
