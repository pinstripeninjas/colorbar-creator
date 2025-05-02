import { useState, useContext } from 'react';
import { FaRegCopy } from 'react-icons/fa';
import { AppContext } from '../context/AppContext';

function CodeBlock({ code = null, isColorsArray = false }) {
	const [isHovered, setIsHovered] = useState(false);
	const { appState } = useContext(AppContext);
	let finalCode = code;

	if (isColorsArray) {
		finalCode = JSON.stringify(appState.cssColorsArray, null);
	}

	const handleMouseEnter = () => {
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	const handleClick = () => {
		navigator.clipboard
			.writeText(finalCode)
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
				<code>{finalCode}</code>
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
