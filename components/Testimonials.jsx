import Title from "./Title"



const Testimonials = () => {
  return (
    <div className="p-10">
        {/* trust and safety */}
        <div className='flex flex-col items-center justify-center gap-5  mb-16'>
     <Title name="Trust and Safety" description="How our HR team Verifying Maids and Nannies at Pickmymaid, Our dedicated team works behind the scenes every day, uploading only genuine applicants to ensure the highest standards of Trust and Safety"/>
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

        {/* 900+ profiles */}
        <div className="flex flex-col justify-center items-center mb-36 ">
            <Title name="find from" clName="900+ Profiles" description="We help you connect with families and domestic workers to find their needs." />
            <div className="flex gap-10 items-center justify-center flex-wrap">
            <div className="flex flex-col items-center justify-center">
                <img src="/assets/maids.png" alt="jobtag" className="mb-2" />
                <p>Maids</p>
                <p className="text-[#ff7442]">610 Profiles</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <img src="/assets/nanny.png" alt="jobtag" className="mb-2"/>
                <p>Nanny</p>
                <p className="text-[#ff7442]">280 Profiles</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <img src="/assets/caregiver.png" alt="jobtag" className="mb-2"/>
                <p>Caregiver</p>
                <p className="text-[#ff7442]">7 Profiles</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <img src="/assets/driver.png" alt="jobtag" className="mb-2"/>
                <p>Driver</p>
                <p className="text-[#ff7442]">5 Profiles</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <img src="/assets/privatetutor.png" alt="jobtag" className="mb-2" />
                <p>Private Tutor</p>
                <p className="text-[#ff7442]">1 Profiles</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <img src="/assets/privatenurse.png" alt="jobtag" className="mb-2"/>
                <p>Private Nurse</p>
                <p className="text-[#ff7442]">2 Profiles</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <img src="/assets/postpartumcare.png" alt="jobtag" className="mb-2"/>
                <p>Postpartum Care</p>
                <p className="text-[#ff7442]">0 Profiles</p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <img src="/assets/cook.png" alt="jobtag" className="mb-2"/>
                <p>Cook</p>
                <p className="text-[#ff7442]">4 Profiles</p>
            </div>
            </div>
        </div>


        {/* how it works */}
        <div>
            <Title name="how it works ?"/>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:p-28 lg:-mt-16">
                <div>
                <div className="flex mb-3  items-center">
                    <p className="text-[6rem] lg:text-[9rem] text-[#ff7442]">1</p>
                    <div className="w-full h-auto"><img src="/assets/searchimage.png" alt="" /></div>
                </div>
                <div className="flex flex-col">
                    <h5 className="text-lg lg:text-xl font-semibold mb-2">Search</h5>
                    <p className="text-black/70 text-sm lg:text-base ">Browse through 900+ profiles of nannies and maids in the UAE, complete with detailed information, right here.</p>
                </div>
                </div>


                <div>
                <div className="flex mb-3 items-center">
                    <p className="text-[6rem] lg:text-[9rem] text-[#ff7442]">2</p>
                    <div><img src="/assets/registerimage.png" alt="" /></div>
                </div>
                <div className="flex flex-col">
                    <h5 className="text-lg lg:text-xl font-semibold mb-2">Register to access details of available maids</h5>
                    <p className="text-black/70 text-sm lg:text-base ">Get started with the interview process by selecting a package that grants you access to detailed information about the available maids.

</p>
                </div>
                </div>


                <div>
                <div className="flex mb-3 items-center">
                    <p className="text-[6rem] lg:text-[9rem] text-[#ff7442]">3</p>
                    <div><img src="/assets/hireimage.png" alt="" /></div>
                </div>
                <div className="flex flex-col">
                    <h5 className="text-lg lg:text-xl font-semibold mb-2">Hire</h5>
                    <p className="text-black/70 text-sm lg:text-base ">Communicate your requirements directly with the maid or nanny, come to a mutual agreement, and proceed to hire her for the position.

</p>
                </div>
                </div>
            </div>


        </div>

    </div>
  )
}

export default Testimonials
