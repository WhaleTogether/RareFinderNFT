export const scoreAllTraits = async (Identity) => {
	let keyValue = [];

	for (let j = 0; j < Identity.uniqueTraits.length; j++) {
		let traitRarity = Identity.allTraits.filter(
			(item) => item === Identity.uniqueTraits[j]
		).length;
		keyValue.push({ trait: Identity.uniqueTraits[j], score: traitRarity });
	}
	// console.log(keyValue);
	return await keyValue;
};

export const scoreAllNFTs = async (Identity) => {
	let finalScore = 0;
	let finalScoreOfNFTs = [];

	// attributes in general
	for (let k = 0; k < Identity.attributes.length; k++) {
		// scouts out traits per att
		for (let j = 0; j < Identity.uniqueTraits.length; j++) {
			if (
				JSON.stringify(Identity.attributes[k]).includes(
					Identity.scoreAllTraits[j].trait
				)
			) {
				finalScore = finalScore + Identity.scoreAllTraits[j].score;
			}
		}
		finalScoreOfNFTs.push({ itemNumber: k + 1, score: finalScore });
		finalScore = 0;
	}

	return finalScoreOfNFTs;
};
