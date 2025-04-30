import { useState } from 'react';
import { FaRegCopy } from 'react-icons/fa';

function CodeBlock({ code, formatColorArray = false }) {
	const [isHovered, setIsHovered] = useState(false);

	if (formatColorArray) {
		code = JSON.stringify(code, null);
	}

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const handleClick = () => {
		navigator.clipboard
			.writeText(code)
			.then(() => {
				console.log('Code copied to clipboard');
			})
			.catch((err) => {
				console.error('Failed to copy code: ', err);
			});
	};

	return (
		<div>
			<p>Color Array</p>
			<pre
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				onClick={handleClick}>
				<code>{code}</code>
				{isHovered && (
					<div className="copy-icon">
						<FaRegCopy />
					</div>
				)}
			</pre>
		</div>
	);
}

export default CodeBlock;
