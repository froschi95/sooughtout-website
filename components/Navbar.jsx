import Link from "next/link";
import React from "react";

const Navbar = () => {
	return (
		<nav className='z-50 sticky top-0 h-[4.5rem] bg-white/70 flex justify-between px-2 items-center mx-auto max-w-full'>
			{/* bg-gradient-to-b from-[#0f3d1cc7] to-purple-700/50 */}
			<Link href='/'>
				<div className='flex items-center'>
					<img className='h-16 w-16' src='/img/logo.png' alt='' />
					<h1 className='text-yellow-500 font-semibold text-sm cursor-pointer'>
						SOUGHT OUT CHURCH
					</h1>
				</div>
			</Link>
			<div className='hidden md:flex mx-auto text-[#0f3d1cc7] px-2'>
				<ul className='flex justify-between md:space-x-4'>
					<Link href='/'>
						<li className='cursor-pointer'>Home</li>
					</Link>
					<Link href='/about'>
						<li className='cursor-pointer'>Who we are</li>
					</Link>
					<Link href='/sermons'>
						<li className='cursor-pointer'>Sermons</li>
					</Link>
					<Link href='/blog'>
						<li className='cursor-pointer'>Blog</li>
					</Link>
					<Link href='/'>
						<li className='cursor-pointer'>Live</li>
					</Link>
					<Link href='/'>
						<li className='cursor-pointer'>Partner</li>
					</Link>
					<Link href='/events'>
						<li className='cursor-pointer'>Events</li>
					</Link>
				</ul>
			</div>
			<div className='connect flex flex-col items-center justify-center px-2 h-16 w-16 rounded-full shadow shadow-[#0f3d1cc7]'>
				<Link href='/'>
					<p className='p-2 text-[#0f3d1cc7] font-medium text-sm'>Connect</p>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
