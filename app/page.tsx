import React from 'react';
import PageTitle from "@/components/pageTitle";
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import Card, { CardContent, CardProps } from "@/components/Card";
import BarChart from "@/components/BarChart";
import SalesCard ,{SalesProps} from "@/components/SalesCard";
import { DatePickerWithRange } from '@/components/DateRangePicker';
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import DownloadPage from "@/components/DownloadPage"
import SearchBar from "@/components/SearchPage"
import NavBar from "@/components/NavBar"

const cardData: CardProps[] = [
  {
    label: "Total Revenue",
    amount: "$45,231.89",
    description: "+20.1% from last month",
    icon: DollarSign
  },
  {
    label: "Subscriptions",
    amount: "+2350",
    description: "+180.1% from last month",
    icon: Users
  },
  {
    label: "Sales",
    amount: "+12,234",
    description: "+19% from last month",
    icon: CreditCard
  },
  {
    label: "Active Now",
    amount: "+573",
    description: "+201 since last hour",
    icon: Activity
  }
];

const uesrSalesData: SalesProps[] = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    salesAmount: "+$1,999.00"
  },
  {
    name: "Jackson Lee",
    email: "isabella.nguyen@email.com",
    salesAmount: "+$1,999.00"
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.nguyen@email.com",
    salesAmount: "+$39.00"
  },
  {
    name: "William Kim",
    email: "will@email.com",
    salesAmount: "+$299.00"
  },
  {
    name: "Sofia Davis",
    email: "sofia.davis@email.com",
    salesAmount: "+$39.00"
  }
];

export default function Home() {
    return (
      <div className='flex flex-col gap-5 w-full'>
        <section className=" grid w-full grid-cols-1 gap-10 gap-x-29 transition-all sm:grid-cols-2 xl:grid-cols-2">
          <NavBar/>
          <SearchBar/>
        </section>
          {/* <section className="bg-white rounded-lg shadow px-4 py-6"> */}
          <section className="grid w-full grid-cols-2 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-3">
            <PageTitle title="Dashboard" />
            <DatePickerWithRange />
             <DownloadPage/>
          </section>
             <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
                {cardData.map((d, i) => (
                <Card
                    key={i}
                    amount={d.amount}
                    description={d.description}
                    icon={d.icon}
                    label={d.label}
                />
                ))}
            </section>

            <section className='grid grid-col-1 gap-4 transition-all lg:grid-cols-2'>
                <CardContent>
                    <p className='p-4 font-semibold'>OverView</p>
                    <BarChart></BarChart>
                </CardContent>

                <CardContent className='flex justify-between gap-4'>
                    <section>
                        <p className='p-4 font-semibold'>Recent Sales</p>
                        <p className="text-sm text-gray-400"> You made 265 sales this month. </p>
                    </section>

                    {uesrSalesData.map((d, i) => (
                        <SalesCard
                        key={i}
                        email={d.email}
                        name={d.name}
                        salesAmount={d.salesAmount}
                        />
                    ))}
                </CardContent>
            </section>
        </div>
    );
}