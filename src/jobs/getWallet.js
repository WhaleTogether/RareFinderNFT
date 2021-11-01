import fetch from 'node-fetch';
import ethers from 'ethers';

// connects to wallet
export const connectToWallet = async (Identity) => {
	const provider = new ethers.providers.JsonRpcProvider(
		`https://empty-dry-field.quiknode.pro/${Identity.quickNode}/`
	);
	const wallet = new ethers.Wallet(Identity.walletKey); // get metamask private key
	const account = wallet.connect(provider);

	return account;
};
