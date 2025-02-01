"use client";
import { FC, memo } from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronUp, Fan, MoreHorizontal, Orbit, SquareLibrary, TextCursor, Trash, User2 } from "lucide-react"
import { Button } from "../ui/button"

interface Chat {
  id: string
  title: string
}

interface AppSidebarProps {
  variant: "sidebar" | "floating" | "inset"
  username?: string
  onNewChat?: () => void
  onSignOut?: () => void
  onRenameChat?: (chatId: string) => void
  onDeleteChat?: (chatId: string) => void
  chats?: Chat[]
  isLoading?: boolean
}

const chats: Chat[] = [
  { id: '1', title: 'Filing Status and Requirements' },
  { id: '2', title: 'Deductions and Credits' },
  { id: '3', title: 'Income Sources and Reporting' },
  { id: '4', title: 'Tax Payment and Refunds' },
  { id: '5', title: 'Audit and Compliance' },
]

export const AppSidebar: FC<AppSidebarProps> = memo(({
  variant,
  username = "User",
  onNewChat,
  onSignOut,
  onRenameChat,
  onDeleteChat,
  isLoading = false,
}) => {
  return (
    <Sidebar variant={variant}>
      <SidebarHeader className="text-2xl mb-2 justify-between flex flex-row max-sm:px-4">
        ITR
        <SidebarTrigger/>
      </SidebarHeader>
      <SidebarContent className='max-sm: px-2'>
        <Button
          size="lg"
          className="font-semibold rounded-full"
          onClick={onNewChat}
          disabled={isLoading}
          aria-label="Start new chat"
        >
          <Fan className="scale-110" /> New Chat
        </Button>
        <SidebarGroup>
          <span className="text-muted-foreground text-sm">Chats</span>
          <div className="chats my-2">
            {chats.map((chat) => (
              <SidebarMenuItem key={chat.id} className='cursor-pointer'>
                <SidebarMenuButton asChild>
                  <span>{chat.title.length > 20 ? `${chat.title.slice(0, 20)}...` : chat.title}</span>
                </SidebarMenuButton>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuAction>
                      <MoreHorizontal />
                    </SidebarMenuAction>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="right" align="start">
                    <DropdownMenuItem
                      className='gap-4'
                      onClick={() => onRenameChat?.(chat.id)}
                    >
                      <TextCursor />
                      <span>Rename</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      className='gap-4'
                      onClick={() => onDeleteChat?.(chat.id)}
                    >
                      <Trash className='text-red-500' />
                      <span>Delete Chat</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            ))}
          </div>
        </SidebarGroup>
        <SidebarGroup className='gap-2'>
          <span className="text-muted-foreground text-sm">More</span>
          <Button variant={"tertiary"} className='justify-start gap-2.5 rounded-full'><Orbit />Spaces</Button>
          <Button variant={"tertiary"} className='justify-start gap-2.5 rounded-full'><SquareLibrary />Library</Button>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> {username}
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <span>Account</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <span>Billing</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={onSignOut}>
                  <span>Sign out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
})

AppSidebar.displayName = 'AppSidebar'
