export default function Stats({ items }) {
	const packedItems = items.filter(item => item.packed);
	const percentPacked = Math.round((packedItems.length / items.length) * 100);

	if (!items.length)
		return (
			<p className="stats">
				<em>Start adding some items to your packing list 🚀</em>
			</p>
		);

	return (
		<footer className="stats">
			<em>
				{percentPacked === 100
					? "You got everything! Ready to go ✈️"
					: `👜 You have ${
							items.length
					  } items on your list, and you already packed${" "}
				${packedItems.length} (${items.length > 0 ? percentPacked : 0}%)`}
			</em>
		</footer>
	);
}
