import { getRelatedListRecords } from 'lightning/uiRelatedListApi';
import { LightningElement ,wire, api} from 'lwc';

const COLUMNS=[
    {label: 'Education',fieldName:'title',
    class:{fieldName:'color'}},
    {label: 'Institution Name',fieldName:'institutionName',class:{fieldName:'color'}},
    {label: 'Passing Year',fieldName:'passsingYear',class:{fieldName:'color'}},
    {label: 'Percentage',fieldName:'percentage',class:{fieldName:'color'}}    
]
export default class PortfolioEducation extends LightningElement {
    
    @api recordId;
    tableData=[];
    columns=COLUMNS;

    @wire(getRelatedListRecords, {
        parentRecordId: '$recordId',
        relatedListId: 'Educations__r',
        fields: ['Education__c.Institution_Name__c','Education__c.Title__c',
        'Education__c.Passing_year__c',
        'Education__c.Percentage__c'
        ],
        
    })educationHandler({data,error}){
        if(data){
            console.log(JSON.stringify(data));
            this.formatData(data);
        }
        if(error){
            console.log(error);
        }
    }
    formatData(data){
        this.tableData=data.records.map(item=>{
            let Id=item.id
            const{Institution_Name__c,Passing_year__c,Title__c,Percentage__c}=item.fields;
            let institutionName=Institution_Name__c.value;
            let title=Title__c.value;
            let passsingYear=Passing_year__c.value;
            let percentage=Percentage__c.value;
            
            return {Id,color:"datatable-blue",institutionName,title,passsingYear,percentage};
        })
        
        console.log('TableData',JSON.stringify(this.tableData));
    }
   
   
}