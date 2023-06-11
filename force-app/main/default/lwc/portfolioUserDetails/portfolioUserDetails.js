import { LightningElement, api } from 'lwc';

export default class PortfolioUserDetails extends LightningElement {
    @api recordId;
    @api objectApiName;
    @api resumeUrl;// ="https://drive.google.com/file/d/1LCIAiUBdglElIFlbtJFypu7FCUJGpFYA/view?usp=drive_link"
    handleOnClick(){
        
        window.open(this.resumeUrl,"_blank");
    }
}