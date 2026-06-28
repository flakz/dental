import type React from "react";

export const LogoIcon = (props: React.ComponentProps<"svg">) => (
	<svg viewBox="0 0 24 24" fill="currentColor" {...props}>
		<circle cx="6" cy="9" r="2.2" />
		<circle cx="10" cy="5.5" r="2.2" />
		<circle cx="14" cy="5.5" r="2.2" />
		<circle cx="18" cy="9" r="2.2" />
		<path d="M12 10c-3.5 0-6 3-6 6 0 2 1.6 3.5 3.5 3.5 1 0 1.7-.4 2.5-.4s1.5.4 2.5.4C16.4 19.5 18 18 18 16c0-3-2.5-6-6-6z" />
	</svg>
);

export const Logo = (props: React.ComponentProps<"svg">) => (
	<LogoIcon {...props} />
);
