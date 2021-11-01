import dotenv from 'dotenv';
dotenv.config();

export const setIdentity = async () => {
	let Identity = {
		quickNode: process.env.QUICK_NODE,
		walletKey: process.env.WALLET, // empty test wallet
		account: null, // connectToWallet()
		contractAddress: '0x9a534628b4062e123ce7ee2222ec20b86e16ca8f', // mekaverse
		etherscanKey: process.env.ETHERSCAN,
		jsonOfABI: null, // getJsonOfABI()
		totalSupply: null, // getTotalSupply()
		tokenURI: null, // getTokenURI()
		tokenByIndex: null,
		metadata: null, // getMetadata()
		totalSupplyValid: null, //  // getMetadata()
		attributes: null, // sortAttributes()
		mostAttributesPerNFT: null, // MostAttributesPerNFT()
		allTraits: null, // parseAllTraits()
		uniqueTraits: null, // parseUniqueTraits()
		scoreAllTraits: null, // scoreAllTraits()
		scoreAllNFTs: null, // scoreAllNFTs()
	};

	return Identity;
};

// contractAddress: '0x8630cdeaa26d042f0f9242ca30229b425e7f243f', // claylings https
// contractAddress: '0x60E4d786628Fea6478F785A6d7e704777c86a7c6', // mutant ape https
