

const About = () => {
  return (
    <div>
          <article className="max-w-2xl px-6 py-24 mx-auto space-y-16 dark:bg-gray-100 dark:text-gray-900">
	<div className="w-full mx-auto space-y-4">
		<h1 className="text-5xl font-bold leading-none">We make a good collection of books which we give to the readers thereby contributing to nation building. We make the country a tasteful reader.</h1>
		<div className="flex flex-wrap space-x-2 text-sm dark:text-gray-600">
			<a rel="noopener noreferrer" href="#" className="p-1 hover:underline">#contributing</a>
			<a rel="noopener noreferrer" href="#" className="p-1 hover:underline">#collection</a>
			<a rel="noopener noreferrer" href="#" className="p-1 hover:underline">#tasteful reader</a>
		</div>
		<p className="text-sm dark:text-gray-600">by
			<a href="#" target="_blank" rel="noopener noreferrer" className="hover:underline dark:text-violet-600">
				<span>BD BOOK</span>
			</a>  on
			<time datetime="2021-02-12 15:34:18-0200">March 28th 2024</time>
		</p>
	</div>
	<div className="dark:text-gray-800">
		<p>Insert the actual text content here...</p>
	</div>
</article>
    </div>
  );
};

export default About;