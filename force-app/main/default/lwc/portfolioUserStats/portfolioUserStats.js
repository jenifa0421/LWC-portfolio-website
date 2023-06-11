import { LightningElement ,api} from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';
export default class PortfolioUserStats extends LightningElement {

    trailheadRankImg=`${PortfolioAssets}/PortfolioAssets/Ranks/Ranger.png`;
    @api badges
    @api points
    @api trails
    renderedCallback(){
        if(this.rank)
        {
            let url='${PortfolioAssets}/PortfolioAssets/Ranks/Ranger.png';
            this.trailheadRankImg=url;
        }
    }
}