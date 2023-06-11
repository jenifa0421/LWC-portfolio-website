import { LightningElement, wire,api } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';
import JeniPortfolio from '@salesforce/resourceUrl/JeniPortfolio';
import { getRecord,getFieldValue } from 'lightning/uiRecordApi';
import FULLNAME from '@salesforce/schema/Portfolio__c.Full_Name__c';
import DESIGNATION from '@salesforce/schema/Portfolio__c.Designation__c';
import COMPANY from '@salesforce/schema/Portfolio__c.Company__c';
import LOCATION from '@salesforce/schema/Portfolio__c.Company_Location__c';

export default class PortfolioBanner extends LightningElement {
    @api linkedInUrl//="https://www.linkedin.com/in/jenifa-pearlin-a739341aa";
    @api trailheadUrl//="https://www.trailhead.com";

    userPic=`${JeniPortfolio}/female-profile-icon-20.jpg`;
    linkedIn=`${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`;
    trailhead=`${PortfolioAssets}/PortfolioAssets/Social/trailhead1.svg`;
    //bgImage=`${JeniPortfolio}/pexels-hasan-albari-1229861.jpg`

    @api recordId//='a0M5j000005RpcmEAC';
    @wire(getRecord, { recordId: '$recordId', fields: [FULLNAME,DESIGNATION,COMPANY,LOCATION] })
    portfolioHandler
        //({data,error}){
        //if(data){
            //console.log(data);            
            //console.log('results',JSON.stringify(data));
        //}
        //if(error){
          //  console.log('error',error);
        //}
    
    get name(){
        return getFieldValue(this.portfolioHandler.data, FULLNAME);
    }
    get designation(){
        return getFieldValue(this.portfolioHandler.data, DESIGNATION);
    }
    get company(){
        return getFieldValue(this.portfolioHandler.data, COMPANY);
    }
    get location(){
        return getFieldValue(this.portfolioHandler.data, LOCATION);
    }
 }
    
