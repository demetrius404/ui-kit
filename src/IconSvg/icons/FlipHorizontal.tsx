import * as React from "react";

import { ISvgProps } from "./index";

export const FlipHorizontal = ({ className, size }: ISvgProps) => (
	<svg
		width={size === "large" ? 20 * 1.5 : 20}
		height={size === "large" ? 26 * 1.5 : 26}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 100 100"
		className={className}
	>
		<g>
			<path d="M7,9.29a3.9,3.9,0,0,0-7,2.43V88.28A3.91,3.91,0,0,0,2.62,92a3.8,3.8,0,0,0,1.29.22A3.9,3.9,0,0,0,7,90.71L37.43,52.43a3.91,3.91,0,0,0,0-4.86ZM7.81,77.1V22.9L29.38,50Z" />
			<path d="M97.38,8A3.89,3.89,0,0,0,93,9.29L62.57,47.57a3.91,3.91,0,0,0,0,4.86L93,90.71a3.9,3.9,0,0,0,3,1.48A3.84,3.84,0,0,0,97.38,92,3.91,3.91,0,0,0,100,88.28V11.72A3.91,3.91,0,0,0,97.38,8ZM92.19,77.1,70.62,50,92.19,22.9Z" />
			<path d="M50,0a3.91,3.91,0,0,0-3.91,3.91v7.81a3.91,3.91,0,0,0,7.82,0V3.91A3.91,3.91,0,0,0,50,0Z" />
			<path d="M50,21.09A3.91,3.91,0,0,0,46.09,25v7.81a3.91,3.91,0,0,0,7.82,0V25A3.91,3.91,0,0,0,50,21.09Z" />
			<path d="M50,42.19a3.91,3.91,0,0,0-3.91,3.9v7.82a3.91,3.91,0,0,0,7.82,0V46.09A3.91,3.91,0,0,0,50,42.19Z" />
			<path d="M50,63.28a3.91,3.91,0,0,0-3.91,3.91V75a3.91,3.91,0,0,0,7.82,0V67.19A3.91,3.91,0,0,0,50,63.28Z" />
			<path d="M50,84.38a3.9,3.9,0,0,0-3.91,3.9v7.81a3.91,3.91,0,0,0,7.82,0V88.28A3.9,3.9,0,0,0,50,84.38Z" />
		</g>
	</svg>
);
