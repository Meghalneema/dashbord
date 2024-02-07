'use client'
import React, { useState } from 'react'
import { ChevronDown, ChevronRight, LayoutDashboard, MessagesSquare, PenBox, Search, Send, Settings, ShoppingCart, UserRound,} from "lucide-react"
import { Nav } from "@/components/ui/nav"
import { Button } from './ui/button'
import { useWindowWidth,} from '@react-hook/window-size'

type Props = {}

export default function SideNavbar({}: Props) {
  const [isCollapsed,setIsCollapsed]=useState(true);
  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  function toogleSideBar(){
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className="relative min-w-[80px] border-r px-3  pb-10 pt-24 ">
      {!mobileWidth &&
      <div className="absolute right-[-20px] top-7">
        <Button variant='secondary' className="rounded-full p-2" onClick={toogleSideBar}>
            <ChevronRight/>
        </Button>
      </div>
      }
        <Nav
            isCollapsed={mobileWidth? true: isCollapsed}
            links={[
              {
                title: "DashBoard",
                href:"/",
                icon: LayoutDashboard,
                variant: "default",
              },
              {
                title: "Users",
                href:"/users",
                icon: UserRound,
                variant: "ghost",
              },
              {
                title: "Orders",
                href:"/orders",
                icon: ShoppingCart,
                variant: "ghost",
              },
              {
                title: "Settings",
                href:"/settings",
                icon: Settings,
                variant: "ghost",
              },
            ]}
          />
          </div>
  )
}