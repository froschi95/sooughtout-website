import React from "react";
import { useState } from "react";

const Header = () => {
	const brandColorGreen = ["#144923"];
	const { state, setState } = useState();
	return (
		<div className='flex items-center justify-between bg-gradient-to-br from-white/25 to-transparent'>
			<h1 className='font-medium text-xl text-white'>
				SoughtOut<span className='text-yellow-500'>Church</span>
			</h1>
			<div className='DESKTOP px-2'>
				<ul className='flex justify-between text-white/80'>
					<li className='p-3 hover:bg-[#14492323] hover:text-yellow-500 rounded-lg'>
						<a>Home</a>
					</li>
					<li className='p-3 hover:bg-[#14492323] hover:text-yellow-500 rounded-lg'>
						<a>About</a>
					</li>
					<li className='p-3 hover:bg-[#14492323] hover:text-yellow-500 rounded-lg'>
						<a>Sermons</a>
					</li>
					<li className='p-3 hover:bg-[#14492323] hover:text-yellow-500 rounded-lg'>
						<a>Events</a>
					</li>
					<li className='p-3 hover:bg-[#14492323] hover:text-yellow-500 rounded-lg'>
						<a>Blog</a>
					</li>
					<li className='p-3 hover:bg-[#14492323] hover:text-yellow-500 rounded-lg'>
						<a>Contact</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
