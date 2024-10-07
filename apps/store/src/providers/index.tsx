import { TooltipProvider } from "@hipec/ui/components/tooltip";
import { Toaster } from "@hipec/ui/components/sonner";
import { useMediaQuery } from "usehooks-ts";

export default function Providers({ children }: Readonly<{ children: React.ReactNode }>) {
  const isDesktop = useMediaQuery("(min-width: 1024px)")
  return (
    <TooltipProvider>
      <Toaster richColors expand={isDesktop ? true : false} />
      {children}
    </TooltipProvider>
  )
}