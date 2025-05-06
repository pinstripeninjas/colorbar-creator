import { MdOutlineCancel } from 'react-icons/md';

function ColorInput({ stop, updateColorStop, removeColorStop }) {
	return (
		<div className="flex-column gap-1">
			<div className="flex-row align-center gap-1">
				<p>{stop.name}</p>
				{stop.id !== 1 && stop.id !== 2 ? (
					<button
						onClick={() => removeColorStop(stop.id)}
						style={{
							padding: '0.25rem',
							fontSize: '1.2rem',
							color: 'var(--danger-color)',
							display: 'flex',
						}}>
						<MdOutlineCancel />
					</button>
				) : null}
			</div>
			<input
				type="color"
				value={stop.color}
				onInput={(e) => updateColorStop(stop.id, e.target.value)}
			/>
		</div>
	);
}

export default ColorInput;
