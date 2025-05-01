function ColorSwatch({ colorsArray }) {
	console.log('colorsArray:', colorsArray);
	return (
		<div>
			<p>Color Swatch</p>
			<div className="swatch-container">
				{colorsArray.map((color, index) => (
					<div key={index} style={{ backgroundColor: color, flex: '1 0 0' }}></div>
				))}
			</div>
		</div>
	);
}

export default ColorSwatch;
