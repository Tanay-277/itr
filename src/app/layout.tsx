import { TooltipProvider } from "@/components/ui/tooltip";
import { geistSans } from "@/features/font";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "ITR FIle",
  description: "ITR FIle",

  keywords: [],
  authors: [{ name: "Jay Suthar" }],
  creator: "Jay Suthar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("min-h-[100dvh] bg-background font-sans antialiased", geistSans.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <Toaster />

            {children}
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
