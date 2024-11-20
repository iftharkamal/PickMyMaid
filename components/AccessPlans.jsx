import Title from "./Title"


const AccessPlans = () => {
  return (
    <div className="bg-[#dfdddd75] py-10">
      <div className="flex flex-col items-center justify-center">
        <Title name="access plans"/>
        <p className="text-black/70 text-base lg:text-xl font-medium px-4 lg:-mt-5 mb-5 text-center">One time payment with No hidden charges - No automatic renewals.</p>
        <img src="/assets/paymentcard.png" alt="" className="w-[13rem] lg:w-[15rem]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-5 lg:p-10 lg:gap-10">

        <div className="text-left border border-[#855fff] rounded-3xl bg-white p-4">
          <p className="text-xl mb-5 text-[#595959] font-semibold">Basic Plan</p>
          <h5 className="text-[#354860] text-[2rem] md:text-[2.5rem] font-bold mb-5">AED 299<span className="text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] font-medium text-[#C0BFBF]">/1 Month</span></h5>
          <p className="text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] text-[#595959] mb-3">Receive 20+ new profiles every 24 hours, Verified by our HR team</p>
          <button className="bg-gradient-to-br from-[#45f298] via-[#c1fdc9] to-[#c1fdc9] w-full text-center text-[1rem] font-bold rounded-lg border border-[#855fff] py-3 px-2 mb-3">Get Started</button>
          <p className="font-bold text-base text-[#595959] mb-5">All the benefits:</p>
          <div className="flex items-center gap-2 mb-2">
            <svg width="32" height="32" viewBox="0 0 24 24" focusable="false" className="w-[1em] text-[#48BB78]"><path fill="currentColor" d="M16.972 6.251a1.999 1.999 0 0 0-2.72.777l-3.713 6.682l-2.125-2.125a2 2 0 1 0-2.828 2.828l4 4c.378.379.888.587 1.414.587l.277-.02a2 2 0 0 0 1.471-1.009l5-9a2 2 0 0 0-.776-2.72"></path></svg>
            <p className="text-[#292525] text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] ">Full access to all maids contact details, including phone numbers, Email and WhatsApp for one month</p>
            </div>
          <div className="flex items-center  gap-2">
            <svg width="32" height="32" viewBox="0 0 24 24" focusable="false" className="w-[1em] text-[#48BB78]"><path fill="currentColor" d="M16.972 6.251a1.999 1.999 0 0 0-2.72.777l-3.713 6.682l-2.125-2.125a2 2 0 1 0-2.828 2.828l4 4c.378.379.888.587 1.414.587l.277-.02a2 2 0 0 0 1.471-1.009l5-9a2 2 0 0 0-.776-2.72"></path></svg>
            <p  className="text-[#292525] text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] ">Personal space is provided to manage your shortlist effectively</p>
            </div>
          <div className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 24 24" focusable="false" className="text-[#E53E3E] w-[1em]"><path fill="currentColor" d="m12 10.587l4.95-4.95l1.414 1.414l-4.95 4.95l4.95 4.95l-1.415 1.414l-4.95-4.95l-4.949 4.95l-1.414-1.415l4.95-4.95l-4.95-4.95L7.05 5.638z"></path></svg>
            <p  className="text-[#292525] text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] line-through ">Dedicated support from a consultant</p>
            </div>
        </div>
        <div className="text-left border border-[#855fff] rounded-3xl bg-white p-4">
          <div className="flex items-center justify-between"><p className="text-xl mb-5 text-[#595959] font-semibold">Standard Plan</p><p className="text-sm uppercase bg-[#f9cd65] rounded-lg px-2 py-1">Best Choice</p></div>
          <h5 className="text-[#354860] text-[2rem] md:text-[2.5rem] font-bold mb-5">AED 495<span className="text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] font-medium text-[#C0BFBF]">/2 Months</span></h5>
          <p className="text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] text-[#595959] mb-3">Receive 20+ new profiles every 24 hours, Verified by our HR team</p>
          <button className="bg-gradient-to-br from-[#937ef3] via-[#eaccf8] to-[#eaccf8] w-full text-center text-[1rem] font-bold rounded-lg border border-[#855fff] py-3 px-2 mb-3">Get Started</button>
          <p className="font-bold text-base text-[#595959] mb-5">All the benefits:</p>
          <div className="flex items-center gap-2 mb-2">
            <svg width="32" height="32" viewBox="0 0 24 24" focusable="false" className="w-[1em] text-[#48BB78]"><path fill="currentColor" d="M16.972 6.251a1.999 1.999 0 0 0-2.72.777l-3.713 6.682l-2.125-2.125a2 2 0 1 0-2.828 2.828l4 4c.378.379.888.587 1.414.587l.277-.02a2 2 0 0 0 1.471-1.009l5-9a2 2 0 0 0-.776-2.72"></path></svg>
            <p className="text-[#292525] text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] ">Full access to all maids contact details, including phone numbers, Email and WhatsApp for 2 months</p>
            </div>
          <div className="flex items-center  gap-2">
            <svg width="32" height="32" viewBox="0 0 24 24" focusable="false" className="w-[1em] text-[#48BB78]"><path fill="currentColor" d="M16.972 6.251a1.999 1.999 0 0 0-2.72.777l-3.713 6.682l-2.125-2.125a2 2 0 1 0-2.828 2.828l4 4c.378.379.888.587 1.414.587l.277-.02a2 2 0 0 0 1.471-1.009l5-9a2 2 0 0 0-.776-2.72"></path></svg>
            <p  className="text-[#292525] text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] ">Personal space is provided to manage your shortlist effectively</p>
            </div>
          <div className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 24 24" focusable="false" className="text-[#E53E3E] w-[1em]"><path fill="currentColor" d="m12 10.587l4.95-4.95l1.414 1.414l-4.95 4.95l4.95 4.95l-1.415 1.414l-4.95-4.95l-4.949 4.95l-1.414-1.415l4.95-4.95l-4.95-4.95L7.05 5.638z"></path></svg>
            <p  className="text-[#292525] text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] line-through ">Dedicated support from a consultant</p>
            </div>
        </div>
        <div className="text-left border border-[#855fff] rounded-3xl bg-white p-4">
          <p className="text-xl mb-5 text-[#595959] font-semibold">Basic Plan</p>
          <h5 className="text-[#354860] text-[2rem] md:text-[2.5rem] font-bold mb-5">AED 299<span className="text-[0.9rem] md:text-[1rem] lg:text-[1.2rem] font-medium text-[#C0BFBF]">/1 Month</span></h5>
          <p className="text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] text-[#595959] mb-3">Receive 20+ new profiles every 24 hours, Verified by our HR team</p>
          <button className="bg-gradient-to-br from-[#4cc5f8] via-[#84f5de] to-[#84f5de] w-full text-center text-[1rem] font-bold rounded-lg border border-[#855fff] py-3 px-2 mb-3">Get Started</button>
          <p className="font-bold text-base text-[#595959] mb-5">All the benefits:</p>
          <div className="flex items-center gap-2 mb-2">
            <svg width="32" height="32" viewBox="0 0 24 24" focusable="false" className="w-[1em] text-[#48BB78]"><path fill="currentColor" d="M16.972 6.251a1.999 1.999 0 0 0-2.72.777l-3.713 6.682l-2.125-2.125a2 2 0 1 0-2.828 2.828l4 4c.378.379.888.587 1.414.587l.277-.02a2 2 0 0 0 1.471-1.009l5-9a2 2 0 0 0-.776-2.72"></path></svg>
            <p className="text-[#292525] text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] ">Dedicated support from a consultant</p>
            </div>
          <div className="flex items-center  gap-2">
            <svg width="32" height="32" viewBox="0 0 24 24" focusable="false" className="w-[1em] text-[#48BB78]"><path fill="currentColor" d="M16.972 6.251a1.999 1.999 0 0 0-2.72.777l-3.713 6.682l-2.125-2.125a2 2 0 1 0-2.828 2.828l4 4c.378.379.888.587 1.414.587l.277-.02a2 2 0 0 0 1.471-1.009l5-9a2 2 0 0 0-.776-2.72"></path></svg>
            <p  className="text-[#292525] text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] ">Full access to all maids contact details, including phone numbers, Email and WhatsApp for one month</p>
            </div>
          <div className="flex items-center gap-2">
          <svg width="32" height="32" viewBox="0 0 24 24" focusable="false" className="w-[1em] text-[#48BB78]"><path fill="currentColor" d="M16.972 6.251a1.999 1.999 0 0 0-2.72.777l-3.713 6.682l-2.125-2.125a2 2 0 1 0-2.828 2.828l4 4c.378.379.888.587 1.414.587l.277-.02a2 2 0 0 0 1.471-1.009l5-9a2 2 0 0 0-.776-2.72"></path></svg>
            <p  className="text-[#292525] text-[0.8rem] md:text-[0.9rem] lg:text-[1rem]">Personal space is provided to manage your shortlist effectively</p>
            </div>
        </div>

      

        

      </div>

    </div>
  )
}

export default AccessPlans
