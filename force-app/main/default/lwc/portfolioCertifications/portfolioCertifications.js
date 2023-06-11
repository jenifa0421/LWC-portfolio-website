import { getRecord } from 'lightning/uiRecordApi';
import { LightningElement ,api,wire} from 'lwc';
import SCERT from '@salesforce/schema/Portfolio__c.Salesforce_Certifications__c';
import OCERT from '@salesforce/schema/Portfolio__c.Other_Certifications__c';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';


export default class PortfolioCertifications extends LightningElement {
    @api recordId;
    sCert=[];
    oCert=[];
    logo=`${PortfolioAssets}/PortfolioAssets/cert_logo.png`;
    
    
    @wire(getRecord, { recordId: '$recordId', fields: [SCERT,OCERT ] } )
    certifications({error, data}) {
       if(data){
          //console.log('CERTIFICATIONS',JSON.stringify(data));
          this.formatData(data);
       }
       if(error){
          console.log(error);
       }
    }

    formatData(data){
        const{Other_Certifications__c,Salesforce_Certifications__c}=data.fields;
        this.sCert=Salesforce_Certifications__c?Salesforce_Certifications__c.value.split(";").map(item=>{
            return `Salesforce Certified ${item}`;
        }):[];
        this.oCert=Other_Certifications__c?Other_Certifications__c.value.split(","):[];
    }
}