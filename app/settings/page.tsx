"use client";
import Image from "next/image";
import { DataTable } from "@/components/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import React from "react";
import PageTitle from "@/components/pageTitle";
import { cn } from "@/lib/utils";

export default function SettingPage() {
  return (
     <div className="flex flex-col gap-5  w-full">
      <PageTitle title="SettingPage" />
      <DataTable columns={columns} data={data} />
    </div>
  );
}

type Props = {};

interface Setting {
  category: string;
  value: string | number | boolean;
}

const columns: ColumnDef<Setting>[] = [
  {
    accessorKey: "category",
    header: "Category"
  },
  {
    accessorKey: "value",
    header: "Value"
  }
];

const data: Setting[] = [
  {
    category: "Account",
    value: true
  },
  {
    category: "Notifications",
    value: false
  },
  {
    category: "Language",
    value: "English"
  },
  {
    category: "Theme",
    value: "Dark"
  }
];