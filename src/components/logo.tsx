import type React from "react";

const LogoIcon = (props: React.ComponentProps<"svg">) => (
	<div
		className="h-7 w-7"
		style={{
			backgroundColor: "var(--paw-primary, #1B2A4E)",
			maskImage: "url(/tooth.png)",
			maskSize: "contain",
			maskPosition: "center",
			maskRepeat: "no-repeat",
			WebkitMaskImage: "url(/tooth.png)",
			WebkitMaskSize: "contain",
			WebkitMaskPosition: "center",
			WebkitMaskRepeat: "no-repeat",
		}}
	/>
);

export const Logo = (props: React.ComponentProps<"svg">) => (
	<LogoIcon {...(props as any)} />
);
