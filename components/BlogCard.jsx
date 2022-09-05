import React from "react";

const BlogCard = ({ post }) => {
	return (
		<div className='rounded-2xl self-center h-[30rem] w-96 drop-shadow-lg shadow-lg shadow-yellow-500/50 m-2'>
			<img
				src='/img/particle8.gif'
				className='rounded-t-2xl w-full h-[40%]'
				alt=''
			/>
			<div className='w-full h-[48%] p-4'>
				<h1 className='text-3xl font-bold'>{post.title}</h1>
				<p className='pt-6 pb-4 text-base'>{post.description}</p>
			</div>
			<div className='mx-auto text-lg text-yellow-500 items-center w-1/2 text-center p-[0.3em] border-2 border-yellow-500 rounded-2xl shadow-sm shadow-yellow-500'>
				Read More <span className='text-2xl pl-2'>&gt;&gt;</span>
			</div>
		</div>
	);
};

export default BlogCard;
