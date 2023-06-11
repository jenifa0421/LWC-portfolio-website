import { LightningElement ,wire,api} from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';

export default class PortfolioWorkExperience extends LightningElement {
    workExperienceList=[];
    @api recordId;
    
    @wire(getRelatedListRecords, {
        parentRecordId: '$recordId',
        relatedListId: 'Work_Experience__r',
        fields: ['Work_Experience__c.Company_Name__c',
        'Work_Experience__c.Description__c',
        'Work_Experience__c.Is_Current__c',
        'Work_Experience__c.Job_End_Date__c',
        'Work_Experience__c.Job_Start_Date__c',
        'Work_Experience__c.Role__c',
        'Work_Experience__c.Work_Location__c'],
         
    })
    workExperienceHandler({data,error}){
        if(data){
            
            console.log(JSON.stringify(data));
            this.formatExperience(data);
        }
        if(error)
        {
            console.log(error);
        }
    }
    formatExperience(data){
        this.workExperienceList=[...data.records].reverse().map(item=>{
            let id=item.id;
            const{Company_Name__c,Description__c,
                Job_End_Date__c,Is_Current__c,
                Job_Start_Date__c,Role__c,
                Work_Location__c}=item.fields;
            let companyName=this.getValue(Company_Name__c);
            let description=this.getValue(Description__c);
            let startDate=this.getValue(Job_Start_Date__c);
            let endDate=this.getValue(Job_End_Date__c);
            let role=this.getValue(Role__c);
            let location=this.getValue(Work_Location__c);
            let isCurrent=this.getValue(Is_Current__c);

         return {id,companyName,description,startDate,endDate,role,location,isCurrent};
            
        })
        console.log('workexperience',JSON.stringify(this.workExperienceList));
       
    }
    getValue(data){
        return data && (data.displayValue || data.value);
    }


}