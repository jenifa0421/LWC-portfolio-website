import { LightningElement,wire,api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import  TECHNICALSKILLS from '@salesforce/schema/Portfolio__c.Technical_Skills__c';
import  SOFTSKILLS from '@salesforce/schema/Portfolio__c.Soft_Skills__c';
import  TOOLS from '@salesforce/schema/Portfolio__c.Tools__c';


export default class PortfolioSkills extends LightningElement {
  @api recordId;
  technicalSkills=[];
  softSkills=[];
  tools=[];
  
  @wire(getRecord, { recordId: '$recordId' , fields: [TECHNICALSKILLS,SOFTSKILLS,TOOLS] })
  skills({data,error}){
    if(data){
        console.log(JSON.stringify(data));
        this.formatSkills(data);

    }
    if(error){
        console.log(errror);
    }
  }
  formatSkills(data) {
    const{Soft_Skills__c,Technical_Skills__c,Tools__c}=data.fields;
    this.technicalSkills=Technical_Skills__c?Technical_Skills__c.value.split(','):[];
    this.softSkills=Soft_Skills__c?Soft_Skills__c.value.split(','):[];
    this.tools=Tools__c?Tools__c.value.split(','):[];
    console.log('Tech',JSON.stringify(this.technicalSkills));

  }
  
}