const SectionTitle = ({title, subTitle, decs}) => {
    return (
        <div className='text-center w-[720px] mx-auto my-12'>
            <h2 className='text-[#ff3811] text-xl font-bold'>{subTitle}</h2>
            <h2 className='text-[#151515] font-bold text-5xl py-5'>{title}</h2>
            <p className='capitalize text-[#737373] px-8'> {decs} </p>
        </div>
    );
};

export default SectionTitle;