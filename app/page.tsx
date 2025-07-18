import { Button } from "@/components/ui/button"
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from '@/components/ui/sidebar'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

import { Separator } from "@/components/ui/separator"


import { LoginForm } from "@/components/login-form"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { AppSidebar } from "@/components/app-sidebar"
import { SelectDemo } from "@/components/select-demo"
import { NavActions } from "@/components/nav-actions"


export default function Page() {
  return (
    <div className="flex h-screen">

      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
              <div className="bg-muted/50 aspect-video rounded-xl" >
                <LoginForm />
              </div>
              <div className="bg-muted/50 aspect-video rounded-xl flex items-center justify-center" >
                 <SelectDemo />
               </div>
              <div className="bg-muted/50 aspect-video rounded-xl" >
                <header className="flex h-14 shrink-0 items-center gap-2">
                  <div className="ml-auto px-3">
                    <NavActions />
                  </div>
                </header>
              </div>
            </div>
            <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
          </div>
        </SidebarInset>
      </SidebarProvider>

    </div>
  )
}
