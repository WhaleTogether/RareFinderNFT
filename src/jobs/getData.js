import fetch from 'node-fetch';
import ethers from 'ethers';
import converter from 'hex2dec';
import _ from 'lodash';

export const getJsonOfABI = async (Identity) => {
	let abiToGrab = await fetch(
		`https://api.etherscan.io/api?module=contract&action=getabi&address=${Identity.contractAddress}&apikey=${Identity.etherscanKey}` // get etherscan link
	);
	abiToGrab = await abiToGrab.json();
	console.log('JSON grabbed');
	return await JSON.parse(abiToGrab.result);
};

// export getHighest

export const getTotalSupply = async (Identity) => {
	const contractOfNFT = new ethers.Contract(
		Identity.contractAddress,
		Identity.jsonOfABI,
		Identity.account
	);
	const totalSupply = await contractOfNFT.totalSupply();
	const totalSupplyNumber = converter.hexToDec(totalSupply._hex);
	console.log('totalSupplyNumber', totalSupplyNumber);
	return totalSupplyNumber;
};

// urls for it basically
export const getTokenURI = async (Identity) => {
	const contractOfNFT = new ethers.Contract(
		Identity.contractAddress,
		Identity.jsonOfABI,
		Identity.account
	);

	const tokenURI = await contractOfNFT.tokenURI('1');
	const tokenBaseURI = tokenURI.substr(0, tokenURI.lastIndexOf('/')) + '/';
	console.log('tokenBaseURI', tokenBaseURI);
	return tokenBaseURI;
};

// not used right now
export const getTokenByIndex = async (Identity) => {
	const contractOfNFT = new ethers.Contract(
		Identity.contractAddress,
		Identity.jsonOfABI,
		Identity.account
	);

	const tokenByIndexHex = await contractOfNFT.tokenByIndex('1');
	// const totalSupplyNumber = converter.hexToDec(totalSupply._hex);
	// hex issue?
	console.log('tokenByIndexHex', tokenByIndexHex);
	return await tokenByIndexHex;
};

export const getMetadata = async (Identity) => {
	const arr = [];
	for (let i = 0; i < Identity.totalSupply; i++) {
		arr.push(i);
	}

	const allMetadata = arr.map((i) =>
		fetch(`${Identity.tokenURI}${i + 1}`).then((x) => x.json())
	);

	// try catch for promises
	const validResults = await Promise.all(
		allMetadata.map((p) => p.catch((e) => console.log(e)))
	);
	//const validResults = results.filter((result) => !(result instanceof Error));
	const lengthOfFoundResults = validResults.length;
	return [validResults, lengthOfFoundResults];
};
