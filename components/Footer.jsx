import Image from "next/image";
import React from "react";

const Footer = () => {
	return (
		<div className='flex flex-col-reverse md:flex-row md:justify-center'>
			<div className='p-4 grid grid-cols-2 text-white/80 bg-[#443617] md:w-2/3 h-auto md:h-[25rem]'>
				<div className='pt-2'>
					<h1 className='text-xl font-bold'>About</h1>
					<p className='text-sm'>Our Mission</p>
					<p className='text-sm'>Our Vision</p>
					<p className='text-sm'>Our Pastorate</p>
					<h1 className='text-xl font-bold py-2'>Blog</h1>
				</div>
				<div className='pt-2'>
					<h1 className='text-xl font-bold'>Sermons</h1>
					<p>Telegram</p>
					<p>Youtube</p>
				</div>
				<div className='pt-2'>
					<h1 className='text-xl font-bold'>Live</h1>
					<p>Mixlr</p>
					<p>Youtube</p>
					<p>Facebook</p>
				</div>
				<div className='pt-2'>
					<h1 className='text-xl font-bold'>Prayer</h1>
					<p>Prayer Request</p>
					<p>Salvation</p>
					<h1 className='text-xl font-bold py-2'>Give</h1>
				</div>
				<div className='col-span-2'>
					<h1 className='text-xl font-bold py-1'>Address</h1>
					<div className='flex'>
						<div className='px-1'>
							<h2 className='text-lg font-medium'>Ibadan:</h2>
							<p>
								Katem, Opposite Toyin Medical, Onigbale Junction, Mokola, Ibadan
							</p>
						</div>
						<div className='px-1'>
							<h2 className='text-lg font-medium'>Lagos:</h2>
							<p>Ogunlana drive, Surulere, Lagos</p>
						</div>
					</div>
				</div>
			</div>
			<div className='relative md:w-1/3 h-96 md:h-[25rem]'>
				<div className='absolute left-0 top-0 z-10 w-full h-full bg-[#f6af1d] opacity-90 bg-blend-overlay'></div>
				<div className='relative bg-hero w-full h-full flex items-center text-center justify-center'>
					<h1 className='text-white text-4xl font-bold z-20'>FELLOWSHIP</h1>
					{/* <span className=''>
						<Image
							src={"/img/facebook-fill.svg"}
							layout='fill'
							className='z-20 h-[12px] w-[12px]'
						/>
					</span> */}
					<span></span>
					<span></span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
