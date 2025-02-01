import { SidebarTrigger } from "@/components/ui/sidebar";

import { cn } from "@/lib/utils";
import { DateTime } from "./DateTime";
import { ThemeTrigger } from "./ThemeTrigger";
import { Separator } from "../ui/separator";

const Header = ({
    className,
}: {
    className?: string;
}) => {

    return (
        <header
            className={cn(
                "flex h-16 items-center w-full max-sm:h-12 max-sm:border-b",
                className
            )}
        ><SidebarTrigger className="-ml-1" />
            <div className="ml-auto flex items-center gap-4">
                <ThemeTrigger/>
                <DateTime variant="time" className="hidden md:block" />
                <h2 className="block md:hidden">ITR</h2>
            </div>
        </header>
    );
};

export default Header;