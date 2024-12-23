"use client"; 
import Link from 'next/link';
import {
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  Settings,
  ShoppingCart,
  Users2
} from 'lucide-react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip';
import { Analytics } from '@vercel/analytics/react';
import { User } from './user';
import { PokeballLogo } from '@/components/icons';
import Providers from './providers';
import NavItem  from './nav-item';
import { SearchInput } from './search';
import { SheetHeader, SheetTitle } from '@/components/ui/sheet'
import React from 'react';

export default function DashboardLayout({ children }) {
  return (
    <Providers>
      <main className="flex min-h-screen w-full flex-col bg-muted/40">
        <DesktopNav />
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <MobileNav />
            <DashboardBreadcrumb />
            <SearchInput />
            <User />
          </header>
          <main className="grid flex-1 items-start gap-2 p-4 sm:px-6 sm:py-0 md:gap-4 bg-muted/40">
            {children}
          </main>
        </div>
        <Analytics />
      </main>
    </Providers>
  );
}

function DesktopNav() {
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          href="./"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <PokeballLogo className="h-3 w-3 transition-all group-hover:scale-110" />
          <span className="sr-only">Acme Inc</span>
        </Link>

        <NavItem href="./" label="Dashboard">
          <Home className="h-5 w-5" />
        </NavItem>

        <NavItem href="/orders" label="Orders">
          <ShoppingCart className="h-5 w-5" />
        </NavItem>

        <NavItem href="/products" label="Products">
          <Package className="h-5 w-5" />
        </NavItem>

        <NavItem href="/customers" label="Customers">
          <Users2 className="h-5 w-5" />
        </NavItem>

        <NavItem href="/analytics" label="Analytics">
          <LineChart className="h-5 w-5" />
        </NavItem>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="#"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
            >
              <Settings className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">Settings</TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  );
}

function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false); // State to manage sidebar open/close

  const handleLinkClick = () => {
    setIsOpen(false); // Close sidebar when a link is clicked
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="block sm:hidden">
          <PanelLeft className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[90%] max-w-sm sm:max-w-xs z-50 overflow-y-auto"
      >
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="grid gap-6 text-lg font-medium">
          <Link href="/" className="flex items-center gap-4 px-4" onClick={handleLinkClick}>
            <Home className="h-5 w-5" />
            Dashboard
          </Link>
          <Link href="/orders" className="flex items-center gap-4 px-4" onClick={handleLinkClick}>
            <ShoppingCart className="h-5 w-5" />
            Orders
          </Link>
          <Link href="/products" className="flex items-center gap-4 px-4" onClick={handleLinkClick}>
            <Package className="h-5 w-5" />
            Products
          </Link>
          <Link href="/customers" className="flex items-center gap-4 px-4" onClick={handleLinkClick}>
            <Package2 className="h-5 w-5" />
            Customers
          </Link>
          <Link href="/analytics" className="flex items-center gap-4 px-4" onClick={handleLinkClick}>
            <LineChart className="h-5 w-5" />
            Analytics
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}


function DashboardBreadcrumb() {
  return (
    <Breadcrumb className="hidden md:flex">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="./">Dashboard</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/products">Products</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>All Products</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
