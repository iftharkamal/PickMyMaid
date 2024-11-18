


const Testimonials = () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center gap-5 p-7'>
      <h3 className='text-[var(--headline-color)] text-3xl font-bold  lg:text-5xl'>Trust and Safety</h3>
      <p className='text-[17px]  text-black/70 max-w-[50rem] text-center mb-6'>How our HR team Verifying Maids and Nannies at Pickmymaid, Our dedicated team works behind the scenes every day, uploading only genuine applicants to ensure the highest standards of Trust and Safety</p>
      <div className="flex gap-10 flex-wrap items-center justify-center">
        <div className="flex flex-col items-center justify-center">
            <img src="assets/bc.png" className="w-[3rem] lg:w-[5rem] mb-2"/>
            <p className="text-[18px] font-medium text-black/70">Background Checks</p>
        </div>
        <div className="flex flex-col items-center justify-center">
            <img src="assets/dv.png" className="w-[3rem] lg:w-[5rem] mb-2"/>
            <p className="text-[18px] font-medium text-black/70">Document Verification</p>
        </div>
        <div className="flex flex-col items-center justify-center">
            <img src="assets/iv.png" className="w-[3rem] lg:w-[5rem] mb-2"/>
            <p className="text-[18px] font-medium text-black/70">Identity Verification</p>
        </div>
        <div className="flex flex-col items-center justify-center">
            <img src="assets/ti.png" className="w-[3rem] lg:w-[5rem] mb-2"/>
            <p className="text-[18px] font-medium text-black/70">Through interviews</p>
        </div>
        <div className="flex flex-col items-center justify-center">
            <img src="assets/hr.png" className="w-[3rem] lg:w-[5rem] mb-2"/>
            <p className="text-[18px] font-medium text-black/70">HR team upload sorted CV's</p>
        </div>
      </div>
        </div>

    </div>
  )
}

export default Testimonials
