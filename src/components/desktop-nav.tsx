import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { serviceLinks, pageLinks } from "@/components/nav-links";
import { LinkItem } from "@/components/sheard";

export function DesktopNav() {
	return (
		<NavigationMenu className="hidden md:flex">
			<NavigationMenuList>
				<NavigationMenuItem className="bg-transparent">
					<NavigationMenuTrigger className="bg-transparent hover:!bg-surface-muted focus:!bg-surface-muted data-[state=open]:!bg-surface-muted data-[active]:!bg-surface-muted">
						Services
					</NavigationMenuTrigger>
					<NavigationMenuContent className="p-1 pr-1.5">
						<div className="rounded-lg grid w-lg grid-cols-2 gap-2 border border-border/50 bg-[var(--dropdown-inner)] p-2 shadow-md">
							{serviceLinks.map((item, i) => (
								<NavigationMenuLink asChild className="hover:!bg-surface-muted focus:!bg-surface-muted" key={`item-${item.label}-${i}`}>
									<LinkItem {...item} className="!flex-row !items-start !gap-3" />
								</NavigationMenuLink>
							))}
						</div>
						<div className="flex items-center justify-between p-2">
							<p className="text-muted-foreground text-sm">
								Not sure what you need?{" "}
								<a
									className="font-medium text-foreground hover:underline"
									href="/book"
								>
									Book a consultation
								</a>
							</p>
							<a
								className="rounded-md px-3 py-1.5 text-sm font-medium text-foreground hover:bg-surface-muted"
								href="/services"
							>
								All services
							</a>
						</div>
					</NavigationMenuContent>
				</NavigationMenuItem>
				{pageLinks.map((item) => (
					<NavigationMenuItem key={item.href}>
						<NavigationMenuLink asChild className="px-4">
							<a className="rounded-md p-2 hover:bg-surface-muted focus:bg-surface-muted" href={item.href}>
								{item.label}
							</a>
						</NavigationMenuLink>
					</NavigationMenuItem>
				))}
			</NavigationMenuList>
		</NavigationMenu>
	);
}

