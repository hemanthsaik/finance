import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
interface NavButtonProps {
  href: string;
  label: string;
  active?: boolean;
}

export const NavButton: React.FC<NavButtonProps> = ({
  href,
  label,
  active,
}) => {
  return (
    <Button asChild variant="outline" size="sm" className="w-full">
      <Link
        href={href}
        className={cn(
          "w-full lg:w-auto justify-between font-normal hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/20",
          active ? "bg-white/10 text-white" : "bg-transparent"
        )}
      >
        {label}
      </Link>
    </Button>
  );
};
