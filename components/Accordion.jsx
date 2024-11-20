"use client";


import { useState } from "react"




const Accordion = ({question,answers}) => {
    const [accordionOpen, setAccordionOpen] = useState(false)
  return (
    <div className="py-4 border-b border-b-[#E2E8F0] hover:bg-[#FF6F510D] px-3 flex flex-col ">
    <button className="flex  items-center justify-between w-full gap-[6px] lg:gap-0 lg:py-1" onClick={() => setAccordionOpen(!accordionOpen)}>
      <h2 className="text-[0.9rem] md:text-[1rem] lg:text-[1.3rem] text-[#1a202c] text-left font-medium ">{question}</h2>
      <div>
      {accordionOpen ? <svg width="32" height="32" viewBox="0 0 24 24" focusable="false" className="text-[#ff7442]"><path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-5-9h10v2H7z"></path></svg> : <svg width="32" height="32" viewBox="0 0 24 24" focusable="false"  className="text-[#ff7442]"><path fill="currentColor" d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16"></path></svg> }
      </div>
    </button>

    <div className={`grid overflow-hidden transition-all duration-500 ease-in-out ${accordionOpen ? "grid-rows-[2fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] text-[#595959]">{answers}</div>
    </div>
    </div>
  )
}

export default Accordion
