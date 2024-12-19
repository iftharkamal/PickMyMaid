import HowItWorks from '@/components/HowItWorks'
import React from 'react'

const HowitWorks = () => {
  return (
    <div className='pt-20'>
      <div className='relative h-[350px] place-content-center justify-center grid gap-[1.5rem] bg-[url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABZcAAAGxAgMAAABjJGA3AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAMUExURf9XXv9mZv9VXUdwTErVNwcAAAAEdFJOUyYFIQC8nkFwAAAEKElEQVR42u3asU3oMBSG0TsMKGuhzIHkljADkteymANSOfppXv06uzrdV0ey7Htz6j5+nytJopbVrOfKfSS/iVpWP5WzjZ58t6hlNSqjny1561HrqnK/XsnzeUQtq4/yHTbUSznVG+qr3FEb6r28uDbULPPDhvqpliSjf7dTLatRPUnO9taHWld1JHmu5/O41bL6qCvJfdyv16OW1UudLRl99LOpZfVVoydnO9voalm9133kuZ4r96GW1b99sy+ytmY51RtqljtqQ83y4tpQs8wPG2qWaXhDzbLb2VCzbCo5DU5DcRqcBqehOA1OQ3EanAanoTgNTkNxGpwGp6E4DU5DcRqcBqehOA1Og9PgNDgNTkNxGpwGp6E4DU5DcRqcBqehOA1OQ3EanAanoTgNTkNxGpwGp6E4DU5DcRqcBqehOA1Og9Pwd5TT4DQUp8FpcBqK0+A0FKfBaXAaitPgNBSnwWlwGorT4DQUp8FpcBqK0+A0OA3/kzgNTkNxGpwGp6E4DU5DcRqcBqehOA1OQ3EanAanoTgNTkNxGpwGp6E4DU6D07CB5zQ4DcVpcBqchuI0OA3FaXAanIbiNDgNxWlwGpyG4jQ4DcVpcBqchuI0OA1Ow86S0+A0FKfBaXAaitPgNBSnwWlwGorT4DQUp8FpcBqK0+A0FKfBaXAaitPgNDgNWx5Og9NQnAanwWkoToPTUJwGp8FpKE6D01CcBqfBaShOg9NQnAanwWkoToPT4DRMw5wGp6E4DU6D01CcBqehOA1Og9NQnAanoTgNToPTUJwGp6E4DU6D01CcBqfBaZgfOA1OQ3EanAanoTgNTkNxGpwGp6E4DU5DcRqcBqehOA1OQ3EanAanoTgNToPT8OLiNDgNxWlwGpyG4jQ4DcVpcBqchuI0OA3FaXAanIbiNDgNxWlwGpyG4jQ4DU7DHcVpcBqK0+A0OA3FaXAaitPgNDgNxWlwGorT4DQ4DcVpcBqK0+A0OA3FaXAanIZTzWlwGorT4DQ4DcVpcBqK0+A0OA3FaXAaitPgNDgNxWlwGorT4DQ4DcVpcBqcBqfBaXAaitPgNDgNxWlwGorT4DQ4DcVpcBqK0+A0OA3FaXAaitPgNDgNxWlwGorT4DQ4DcVpcBqchkmC0+A0FKfBaXAaitPgNBSnwWlwGorT4DQUp8FpcBqK0+A0FKfBaXAaitPgNDgNby9Og9NQnAanwWkoToPTUJwGp8FpKE6D01CcBqfBaShOg9NQnAanwWkoToPT4DTcVpwGp6E4DU6D01CcBqehOA1Og9NQnAanoTgNToPTUJwGp6E4DU6D01CcBqfBaTjfnAanoTgNToPTUJwGp6E4DU6D01CcBqehOA1Og9NQnAanoTgNToPTUJwGp8Fp+CKcBqehOA1Og9NQnAanof7nNP4An7acRELjm5MAAAAASUVORK5CYII=)]'> 
        <h1 className='text-[1.8rem] lg:text-[2.25rem] text-[#ff7442] font-bold'>How it works</h1>
        <img src="/assets/howitworkspic.png" alt=""  className='hidden lg:block absolute w-[20vw] h-auto bottom-0 right-[15%]'/>
      </div>


      <div className='flex items-center justify-center mb-10'>

        <div className='max-w-[1000px] grid lg:flex gap-[1rem] mt-[-5rem] px-4 md:px-56 lg:px-0'>


      <div className='h-[24rem] lg:h-[25rem] relative bg-white px-5 border border-[#ff7442] rounded-tl-3xl rounded-br-3xl mb-3 lg:mb-0'>
            <div className="flex mb-3  items-center">
              <p className="text-[6rem] lg:text-[9rem] text-[#ff7442]">1</p>
              <div className="w-full h-auto ">
                <img src="/assets/searchimage.png" alt=""  className='w-[13rem] h-[12rem] md:w-[14rem] md:h-[13rem] object-contain lg:w-full lg:h-full' />
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

          <div className='h-[24rem] lg:h-[25rem] relative bg-white px-5 border border-[#ff7442] rounded-tl-3xl rounded-br-3xl'>
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

          <div className='h-[24rem] lg:h-[25rem] relative bg-white px-5 border border-[#ff7442] rounded-tl-3xl rounded-br-3xl'>
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

export default HowitWorks
