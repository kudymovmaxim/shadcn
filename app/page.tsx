import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from '@/components/ui/sidebar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { User2, ChevronUp} from 'lucide-react'

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Page() {
  return (
    // <Select>
    //   <SelectTrigger className="w-[180px]">
    //     <SelectValue placeholder="Select a fruit" />
    //   </SelectTrigger>
    //   <SelectContent>
    //     <SelectGroup>
    //       <SelectLabel>Fruits</SelectLabel>
    //       <SelectItem value="apple">Apple</SelectItem>
    //       <SelectItem value="banana">Banana</SelectItem>
    //       <SelectItem value="blueberry">Blueberry</SelectItem>
    //       <SelectItem value="grapes">Grapes</SelectItem>
    //       <SelectItem value="pineapple">Pineapple</SelectItem>
    //     </SelectGroup>
    //   </SelectContent>
    // </Select>

    <SidebarProvider>
      <Sidebar>
        <SidebarHeader />
        <SidebarContent />
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    <User2 /> Username
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
                  <DropdownMenuItem>
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>


    // <div className="min-h-screen flex items-center justify-center p-4">
    //   <Card className="w-full max-w-sm">
    //     <CardHeader>
    //       <CardTitle>Login to your account</CardTitle>
    //       <CardDescription>
    //         Enter your email below to login to your account
    //       </CardDescription>
    //       <CardAction>
    //         <Button variant="link">Sign Up</Button>
    //       </CardAction>
    //     </CardHeader>
    //     <CardContent>
    //       <form>
    //         <div className="flex flex-col gap-6">
    //           <div className="grid gap-2">
    //             <Label htmlFor="email">Email</Label>
    //             <Input
    //               id="email"
    //               type="email"
    //               placeholder="m@example.com"
    //               required
    //             />
    //           </div>
    //           <div className="grid gap-2">
    //             <div className="flex items-center">
    //               <Label htmlFor="password">Password</Label>
    //               <a
    //                 href="#"
    //                 className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
    //               >
    //                 Forgot your password?
    //               </a>
    //             </div>
    //             <Input id="password" type="password" required />
    //           </div>
    //         </div>
    //       </form>
    //     </CardContent>
    //     <CardFooter className="flex-col gap-2">
    //       <Button type="submit" className="w-full">
    //         Login
    //       </Button>
    //       <Button variant="outline" className="w-full">
    //         Login with Google
    //       </Button>
    //     </CardFooter>
    //   </Card>
    // </div>
  )
}
