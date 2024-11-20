




const Title = ({name,description,clName}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 capitalize">
      <h3 className='text-[var(--headline-color)] text-2xl font-bold  lg:text-5xl'>{name} <span className="text-[#ff7442]">{clName}</span></h3>
      <p className='text-[17px]  text-black/70 max-w-[50rem] text-center mb-6'>{description}</p>
    </div>
  )
}

export default Title




