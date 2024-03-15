'use client'
import { Input } from "@/components/ui/input"
import { Box, SearchIcon } from "lucide-react"
import { pages } from "next/dist/build/templates/app-page"
import { ChangeEvent, useEffect, useState } from 'react';
import { Nav } from "@/components/ui/nav"
import { ChevronDown, ChevronRight, LayoutDashboard, MessagesSquare, PenBox, Search, Send, Settings, ShoppingCart, UserRound,} from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import Link from "next/link"

// import { useRouter } from 'next/router';

const data=["users", "orders", "settings",]
export default function SearchBar() {
    // const router = useRouter();
    const [SearchText,setSearchText]=useState("");
    // const [searchList,setSearchList]=useState([]);
    const [searchList, setSearchList] = useState<string[]>([]);

    useEffect(()=>{
        if (SearchText.length > 0) {
            const filteredData = data.filter(item =>
                item.toLowerCase().includes(SearchText.toLowerCase())
            );
            setSearchList(filteredData.slice(0,2)); // Limiting to top 2 search results
        } else {
            setSearchList([]);
        }
    },[SearchText])

    const handleItemClick = (item: string) => 
    {
        window.location.href = `/${item}`;
    };

  return (
    <div className="relative">
      <SearchIcon className="absolute h-5 w-5 text-gray-400 left-3 top-1/2 transform -translate-y-1/2"  />
      <Input type="text" placeholder="Search" className="pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400 w-40"  onChange={(e)=> setSearchText(e.target.value)} />
      
      {searchList.length > 0 && (
                <ul className="absolute z-10 mt-1 w-40 bg-white rounded-md shadow-lg border border-gray-200">
                    {searchList.map((item, index) => (
                        <li
                            key={index}
                            className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                            onClick={() => handleItemClick(item)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}

      {/* if search list is not empty then show the elements one below another and when clicked on any of the specific one the redirect it to a specific page */}
    </div>
  );
}


// //if search text is
// // orders then go to orders pages
// // users then go to users pages
// // settings then go to settings pages
// // else show no matches found


// <Nav isCollapsed={false}  links={[
//               {
//                 title: "DashBoard",
//                 href:"/",
//                 icon: LayoutDashboard,
//                 variant: "default",
//               },
//               {
//                 title: "Users",
//                 href:"/users",
//                 icon: UserRound,
//                 variant: "ghost",
//               },
//               {
//                 title: "Orders",
//                 href:"/orders",
//                 icon: ShoppingCart,
//                 variant: "ghost",
//               },
//               {
//                 title: "Settings",
//                 href:"/settings",
//                 icon: Settings,
//                 variant: "ghost",
//               },
//             ]}>
//         </Nav>      








// {/* <div className="relative w-80 ">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 left-3"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           strokeWidth={2}
//           d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//         />
//       </svg>
//       <Input type="text" placeholder="Search" className="pl-12 pr-4" /> */}