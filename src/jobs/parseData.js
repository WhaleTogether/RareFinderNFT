import fetch from 'node-fetch';

export const parseAttributes = async (Identity) => {
	const arr = [];
	for (let i = 0; i < Identity.totalSupply; i++) {
		arr.push(i);
	}
	const allAttributes = arr.map((i) => Identity.metadata[i].attributes);
	return await Promise.all(allAttributes);
};

export const findMaxAttributes = async (Identity) => {
	const mostAttributesList = Identity.attributes.map((x) => x.length);
	const maxAmountAttributes = Math.max.apply(Math, mostAttributesList);
	return maxAmountAttributes;
};

export const parseAllTraits = async (Identity) => {
	const arr = [];
	for (let i = 0; i < Identity.totalSupply; i++) {
		arr.push(i);
	}

	let allUniqueTraits = [];
	// grabs and finds all unique traits in 1 pool
	for (let j = 0; j < Identity.mostAttributesPerNFT; j++) {
		let traitsSet = Identity.attributes.map((x) => x[j].value);
		let traitSetSorted = await Promise.all(traitsSet);

		allUniqueTraits = allUniqueTraits.concat(traitSetSorted);
	}
	return allUniqueTraits;
};

export const parseUniqueTraits = async (Identity) => {
	const arr = [];
	for (let i = 1; i < Identity.totalSupply; i++) {
		arr.push(i);
	}

	console.log('->');

	let allUniqueTraits = [];
	// grabs and finds all unique traits in 1 pool
	for (let j = 0; j < Identity.mostAttributesPerNFT; j++) {
		// sorts all values into the items
		let traitsSet = Identity.attributes.map((x) => x[j].value);
		let traitSetSorted = await Promise.all(traitsSet);
		// unique items only
		let traitSetUnique = [...new Set(traitSetSorted)];
		// merge all arrays
		allUniqueTraits = allUniqueTraits.concat(traitSetUnique);
	}

	return allUniqueTraits;
};
