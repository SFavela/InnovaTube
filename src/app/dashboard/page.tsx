"use client"


import "./dashboard.css"
import Dropdown from "@/components/dropdown"
import { useSession } from "next-auth/react"
import '@/app/globals.css'

function DashboardPage() {

  const { data: session, status } = useSession();

  console.log(session, status);

  return (
    <div>
      <Dropdown/>
    </div>
  )
}

export default DashboardPage