import Image from 'next/image'

const AddBanner = () => {
  return (
    <div className=' w-full bg-[#34A0E1] py-3  flex items-center justify-center flex-col gap-3 mb-10'>
      <p className='text-white font-semibold'>Featured in:</p>
      <Image src="/assets/khaleej.png" width={350} height={200} alt='newsAd' className=' md:w-[350px] lg:w-[450px]' />
    </div>
  )
}

export default AddBanner
