import * as React from "react";

import { ISvgProps } from "./index";

export const AreaSelection = ({ className, size }: ISvgProps) => (
	<svg
		width={size === "large" ? 30 * 1.5 : 30}
		height={size === "large" ? 38 * 1.5 : 38}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 120 140"
		className={className}
	>
		<rect x="57.461" y="96.891" width="6.501" height="6" />
		<rect x="70.463" y="96.891" width="6.5" height="6" />
		<rect x="31.459" y="70.387" width="6" height="6.5" />
		<rect x="31.459" y="57.385" width="6" height="6.501" />
		<rect x="70.463" y="31.383" width="6.501" height="6" />
		<rect x="57.462" y="31.383" width="6.5" height="6" />
		<rect x="96.967" y="57.386" width="6" height="6.5" />
		<rect x="96.967" y="70.387" width="6" height="6.501" />
		<path d="M45.457,26.385c0-1.657-1.343-3-3-3H26.461c-1.657,0-3,1.343-3,3v15.996c0,1.657,1.343,3,3,3h4.998v5.503h6v-5.503h4.998  c1.657,0,3-1.343,3-3v-4.998h5.504v-6h-5.504V26.385z M39.457,39.381h-9.996v-9.996h9.996V39.381z" />
		<path d="M88.969,42.381c0,1.657,1.343,3,3,3h4.998v5.504h6v-5.504h4.998c1.657,0,3-1.343,3-3V26.385c0-1.657-1.343-3-3-3H91.969  c-1.657,0-3,1.343-3,3v4.998h-5.504v6h5.504V42.381z M94.969,29.385h9.996v9.996h-9.996V29.385z" />
		<path d="M45.457,91.893c0-1.657-1.343-3-3-3h-4.998v-5.504h-6v5.504h-4.998c-1.657,0-3,1.343-3,3v15.996c0,1.657,1.343,3,3,3h15.996  c1.657,0,3-1.343,3-3v-4.998h5.503v-6h-5.503V91.893z M39.457,104.889h-9.996v-9.996h9.996V104.889z" />
		<path d="M119.093,92.483L79.541,70.218c-1.005-0.565-2.246-0.505-3.192,0.157c-0.945,0.662-1.428,1.808-1.239,2.946l7.395,44.783  c0.197,1.196,1.096,2.156,2.275,2.433c0.228,0.054,0.457,0.079,0.685,0.079c0.951,0,1.863-0.453,2.435-1.247l11.371-15.799  l19.191-5.592c1.159-0.338,2.003-1.337,2.142-2.537C120.74,94.241,120.145,93.076,119.093,92.483z M96.599,98.099  c-0.644,0.187-1.205,0.584-1.596,1.127l-7.757,10.776l-5.199-31.487l27.887,15.698L96.599,98.099z" />
	</svg>
);
