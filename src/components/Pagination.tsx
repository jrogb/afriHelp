"use client"

import { ITEM_PER_PAGE } from "@/lib/settings";
import { useRouter } from "next/navigation";

const Pagination = ({page, count} : {page: number; count:number}) => {

  const router = useRouter()

  const hasPrev = ITEM_PER_PAGE * (page - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (page -1) + ITEM_PER_PAGE < count;

  const changePage = (newPage:number)=>{
    const params = new URLSearchParams(window.location.search)
    params.set("page", newPage.toString())
    router.push(`${window.location.pathname}?${params}`)
  }

  return (
    <div className='flex justify-between items-center mt-4 p-4'>
        <button disabled={!hasPrev} className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed" onClick={()=>{changePage(page-1)}}>Prev</button>
        <div className="flex flex-row gap-2 items-center text-sm">
          {Array.from({length:Math.ceil(count / ITEM_PER_PAGE)}, (_,index)=>{
            const pageIndex = index+1;
            return <button key={pageIndex} className={`px-2  rounded-sm text-gray-300 ${page === pageIndex ? "bg-afrigray" : ""}`} onClick={()=>{changePage(pageIndex)}}>{pageIndex}</button>
          })}
            
        </div>
        <button disabled={!hasNext}className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed" onClick={()=>{changePage(page+1)}}>Next</button>

    </div>
  )
}

export default Pagination