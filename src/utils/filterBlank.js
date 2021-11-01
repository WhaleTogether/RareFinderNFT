export const filterBlankForScore = async (Identity) => {
	let traitsWithoutBlanks = Identity.scoreAllTraits
		.filter((o) => o.value != 'replaceBlank')
		.filter((o) => o.value != 'bufferBlank')
		.concat(
			{ trait: 'replaceBlank', score: 0 },
			{ trait: 'bufferBlank', score: 0 }
		);
	return traitsWithoutBlanks;
};
