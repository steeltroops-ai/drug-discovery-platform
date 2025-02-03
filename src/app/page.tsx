import Index from "@/components/Dashboard";
import { Metadata } from "next";
import DefualtLayout from "@/components/Layouts/DefaultLayout";

export const metadat: Metadata = {  
  title: "Next.js E-commrce Dashbaord | TailAdmin - Next.js Dashbaord Template",
description: "This is Next.js Home for TailAdmin Dashbaord Template",
};

export default function Home() {
  return (
    <>
      <DefualtLayout>
        <Index />
      </DefualtLayout>
    </>
  );
}