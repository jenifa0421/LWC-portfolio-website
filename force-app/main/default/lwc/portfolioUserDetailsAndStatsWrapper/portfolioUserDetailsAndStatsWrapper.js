import { LightningElement, api  } from 'lwc';

export default class PortfolioUserDetailsAndStatsWrapper extends LightningElement {
    @api recordId; //'a0M5j000005RpcmEAC';
    @api objectApiName;
    @api resumeUrl; //='Portfolio__c';
    @api badges;
    @api points;
    @api trails;
    @api rank;
}