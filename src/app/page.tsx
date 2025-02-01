"use client"
import { AppSidebar } from "@/components/blocks/AppBar";
import Header from "@/components/blocks/Header";
import { BlurFade } from "@/components/ui/blur";
import { Button } from "@/components/ui/button";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Textarea } from "@/components/ui/textarea";
import { inter } from "@/features/font";
import { cn } from "@/lib/utils";
import { ArrowRight, Paperclip, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/95">
      <SidebarProvider>
        <AppSidebar variant="inset" />
        <SidebarInset>
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center lg:px-8 relative">
            <Header className="fixed w-full top-0 left-0 px-8" />
            <div className="mx-8 mt-3 h-full w-full rounded-3xl">
              <main className="mx-auto h-full max-w-6xl px-4 pb-3 pt-16 md:py-16 flex flex-col justify-between">
                <div className="mb-16 w-full text-center">
                  <BlurFade delay={0.1} inView>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-foreground/10 mb-6">
                      <Sparkles className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium">AI-Powered ITR Assistant</span>
                    </div>
                    <h1 className="mb-6 text-5xl font-bold md:text-6xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                      ITR File
                    </h1>
                    <p
                      className={cn(
                        "mx-auto mb-8 max-w-lg text-lg font-normal text-muted-foreground/80 md:text-xl leading-relaxed",
                        inter.variable,
                      )}
                    >
                      A chatbot for ITR file
                    </p>
                  </BlurFade>
                </div>
              </main>
            </div>
            <div className="w-full max-w-3xl mx-auto max-sm:px-4">
              <div className="w-full bg-foreground/5 rounded-2xl p-4 border border-foreground/10 backdrop-blur-sm shadow-lg">
                <Textarea 
                  className="resize-none w-full outline-none border-none bg-transparent min-h-[100px] text-lg max-sm:text-base placeholder:text-muted-foreground/50" 
                  placeholder="How can I assist you with your ITR filing today?" 
                />
                <div className="bot w-full flex items-center justify-between mt-2 pt-2 border-t border-foreground/5">
                  <div className="left">
                    <Button variant={"tertiary"} size={"icon"} className="hover:bg-foreground/10 transition-colors">
                      <Paperclip className="w-5 h-5"/>
                    </Button>
                  </div>
                  <div className="right">
                    <Button variant={"secondary"} className="px-6 py-2 flex items-center gap-2 hover:gap-3 transition-all">
                      Send <ArrowRight className="w-4 h-4"/>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
