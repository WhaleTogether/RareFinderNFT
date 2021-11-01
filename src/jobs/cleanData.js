const replaceWithThis = [
	{ trait_type: 'replaceBlank', value: 'replaceBlank' },
	{ trait_type: 'replaceBlank', value: 'replaceBlank' },
	{ trait_type: 'replaceBlank', value: 'replaceBlank' },
	{ trait_type: 'replaceBlank', value: 'replaceBlank' },
	{ trait_type: 'replaceBlank', value: 'replaceBlank' },
	{ trait_type: 'replaceBlank', value: 'replaceBlank' },
	{ trait_type: 'replaceBlank', value: 'replaceBlank' },
	{ trait_type: 'replaceBlank', value: 'replaceBlank' },
	{ trait_type: 'replaceBlank', value: 'replaceBlank' },
	{ trait_type: 'replaceBlank', value: 'replaceBlank' },
	{ trait_type: 'replaceBlank', value: 'replaceBlank' },
	{ trait_type: 'replaceBlank', value: 'replaceBlank' },
];

const bufferBlanks = [
	{ trait_type: 'bufferBlank', value: 'bufferBlank' },
	{ trait_type: 'bufferBlank', value: 'bufferBlank' },
	{ trait_type: 'bufferBlank', value: 'bufferBlank' },
	{ trait_type: 'bufferBlank', value: 'bufferBlank' },
	{ trait_type: 'bufferBlank', value: 'bufferBlank' },
	{ trait_type: 'bufferBlank', value: 'bufferBlank' },
	{ trait_type: 'bufferBlank', value: 'bufferBlank' },
	{ trait_type: 'bufferBlank', value: 'bufferBlank' },
	{ trait_type: 'bufferBlank', value: 'bufferBlank' },
	{ trait_type: 'bufferBlank', value: 'bufferBlank' },
	{ trait_type: 'bufferBlank', value: 'bufferBlank' },
	{ trait_type: 'bufferBlank', value: 'bufferBlank' },
	{ trait_type: 'bufferBlank', value: 'bufferBlank' },
];
export const cleanAttributes = async (Identity) => {
	const cleanedAttributes = Identity.attributes.map((x) =>
		x !== undefined ? x : replaceWithThis
	);

	console.log('cleanAttributes', 'attributes cleaned');

	return cleanedAttributes;
};

// adds in case some nfts are below mx atts on one
export const addBufferBlanks = async (Identity) => {
	let blankPush;
	for (let i = 0; i < Identity.totalSupply; i++) {
		blankPush = Identity.attributes.map((x) => x.concat(bufferBlanks));
	}
	return blankPush;
};
