import { Card } from "../../ui/dashboard/cards"
import RevenueChart from "../../ui/dashboard/revenue-chart"
import LatestInvoices from "../../ui/dashboard/latest-invoices"
import { lusitana  } from "../../ui/fonts"
import { fetchCardData } from "../../lib/data"
import { Suspense } from "react"
import { RevenueChartSkeleton,LatestInvoicesSkeleton, CardSkeleton } from "@/app/ui/skeletons"
import CardWrapper from '@/app/ui/dashboard/cards';
export default async function Page() {
 
  
  return (
    <main>
       <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        仪表板
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardSkeleton/>}>
            <CardWrapper/>
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
       <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart/>
       </Suspense>
       <Suspense fallback={<LatestInvoicesSkeleton />}>
        <LatestInvoices/>
       </Suspense>
         
      </div>
    </main>
  )
}