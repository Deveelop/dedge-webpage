const AccountItems = ({icon, name}) => {
    return (
        <div
            className="flex place-items-center p-3 hover:bg-[#f9f9f9] border-b-[1px] font-thin">
            <span className='text-gray-700'>{icon}</span>
            <p className=' cursor-pointer ml-3 '>{name} </p>
        </div>
    )
}

export default AccountItems