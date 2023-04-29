import React from 'react'
import Link from 'next/link'
import Image from "next/image";

interface AccountMenuProps {
	visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({
	visible
}) => {
	if (!visible) {
		return null;
	}

	return (
		<div className='bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex'>
				<div className='flex flex-col gap-3'>
					<div className='px-3 group/item flex flex-row gap-3 items-center w-full'>
						<Image src='/images/default-user.png' width={100} height={100} alt={"Default"} className='w-8 rounded-md'/>
						<p className='text-white text-sm group-hover/item:underline'>
							Johnny Sins
						</p>
					</div>
					<hr className='bg-gray-600 border-0 h-px my-4'/>
					<div className='px-3 text-center text-white text-sm hover:underline hover:text-secondary'>
						<Link href={"/Auth"}> Log-Out from Flixhive </Link>
					</div>
				</div>

		</div>
	)
}

export default AccountMenu