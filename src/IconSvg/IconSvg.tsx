import cn from "classnames";
import * as React from "react";

import { icons, IconType } from "./icons";
import "./IconSvg.scss";

interface IProps {
	type: IconType;
	className?: string;
	size?: "default" | "large";
}

class IconSvg extends React.PureComponent<IProps> {
	public render() {
		const { type, className } = this.props;
		const Svg = icons[type];

		return <Svg className={cn("kit-icon-svg", className)} />;
	}
}

export { IconSvg, IconType as IconSvgTypes };
