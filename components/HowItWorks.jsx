
import Title from "./Title";


const HowItWorks = () => {
  return (
    <div>
      <div>
        <Title name="how it works ?" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:p-28 lg:-mt-16">
          <div>
            <div className="flex mb-3  items-center">
              <p className="text-[6rem] lg:text-[9rem] text-[#ff7442]">1</p>
              <div className="w-full h-auto">
                <img src="/assets/searchimage.png" alt="" />
              </div>
            </div>
            <div className="flex flex-col">
              <h5 className="text-lg lg:text-xl font-semibold mb-2">Search</h5>
              <p className="text-black/70 text-sm lg:text-base ">
                Browse through 900+ profiles of nannies and maids in the UAE,
                complete with detailed information, right here.
              </p>
            </div>
          </div>

          <div>
            <div className="flex mb-3 items-center">
              <p className="text-[6rem] lg:text-[9rem] text-[#ff7442]">2</p>
              <div>
                <img src="/assets/registerimage.png" alt="" />
              </div>
            </div>
            <div className="flex flex-col">
              <h5 className="text-lg lg:text-xl font-semibold mb-2">
                Register to access details of available maids
              </h5>
              <p className="text-black/70 text-sm lg:text-base ">
                Get started with the interview process by selecting a package
                that grants you access to detailed information about the
                available maids.
              </p>
            </div>
          </div>

          <div>
            <div className="flex mb-3 items-center">
              <p className="text-[6rem] lg:text-[9rem] text-[#ff7442]">3</p>
              <div>
                <img src="/assets/hireimage.png" alt="" />
              </div>
            </div>
            <div className="flex flex-col">
              <h5 className="text-lg lg:text-xl font-semibold mb-2">Hire</h5>
              <p className="text-black/70 text-sm lg:text-base ">
                Communicate your requirements directly with the maid or nanny,
                come to a mutual agreement, and proceed to hire her for the
                position.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
