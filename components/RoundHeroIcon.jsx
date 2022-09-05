import React from "react";

const RoundHeroIcon = ({ text1, text2 }) => {
	return (
		<div className='relative'>
			<div className='absolute w-22 h-22 md:w-30 md:h-30 rounded-full -inset-1 bg-transparent border-4 border-b-yellow-400 border-t-purple-500 border-l-yellow-400 border-r-yellow-500 animate-spin'></div>
			<div className='relative w-20 h-20 md:w-28 md:h-28 text-center flex flex-col justify-center text-white text-lg md:text-2xl p-4 font-semibold items-center rounded-full backdrop-blur bg-gradient-to-br from-white/30 to-transparent shadow-inner shadow-yellow-400 overflow-hidden'>
				<span>{text1}</span>
				<span>{text2}</span>
			</div>
		</div>
	);
};

export default RoundHeroIcon;
