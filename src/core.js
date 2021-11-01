import { setIdentity } from './models/setIdentity.js';
import { filterBlankForScore } from './utils/filterBlank.js';
import { connectToWallet } from './jobs/getWallet.js';
import { cleanAttributes, addBufferBlanks } from './jobs/cleanData.js';
import {
	getJsonOfABI,
	getTotalSupply,
	getTokenURI,
	getTokenByIndex,
	getMetadata,
} from './jobs/getData.js';
import {
	parseAttributes,
	parseUniqueTraits,
	parseAllTraits,
	findMaxAttributes,
} from './jobs/parseData.js';
import { scoreAllTraits, scoreAllNFTs } from './jobs/scoreData.js';

export const mothership = async () => {
	try {
		// object for jobs
		let Identity = await setIdentity();
		// grabbing data
		Identity.account = await connectToWallet(Identity);
		Identity.jsonOfABI = await getJsonOfABI(Identity);
		Identity.totalSupply = await getTotalSupply(Identity);
		Identity.totalSupply = 5;
		Identity.tokenURI = await getTokenURI(Identity);
		// in case not 1,2,3 - tokenByIndex not used
		Identity.tokenByIndex = await getTokenByIndex(Identity);
		[Identity.metadata, Identity.totalSupplyValid] = await getMetadata(
			Identity
		);
		// parsing data
		Identity.attributes = await parseAttributes(Identity);
		// add to undefined
		Identity.attributes = await cleanAttributes(Identity);
		// find max atts
		Identity.mostAttributesPerNFT = await findMaxAttributes(Identity);
		Identity.attributes = await addBufferBlanks(Identity);
		// list all and unique traits
		Identity.allTraits = await parseAllTraits(Identity);
		Identity.uniqueTraits = await parseUniqueTraits(Identity);
		// score data
		Identity.scoreAllTraits = await scoreAllTraits(Identity);
		Identity.scoreAllTraits = await filterBlankForScore(Identity);
		Identity.scoreAllNFTs = await scoreAllNFTs(Identity);
		// rankAllNFTs(Identity)
		console.log(Identity, scoreAllNFTs);
	} catch (err) {
		console.log(err);
	}
};
