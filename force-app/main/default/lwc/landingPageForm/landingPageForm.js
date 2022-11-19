import { LightningElement, api } from 'lwc';
import CreateAd from '@salesforce/apex/leadUI.CreateAd';
import CreateLead from '@salesforce/apex/leadUI.CreateLead';
import {ShowToastEvent} from 'Lightning/platformShowToastEvent';
import LastName from '@salesforce/schema/Contact.LastName';

export default class LandingPageForm extends LightningElement {

    isRegistered = false;
    firstName;
    lastName;
    email;
    phone;
    street;
    city;
    state;
    zipCode;
    country;
    infoDate;
    course;

    leadRecord = {
        FirstName:'',
        LastName:'',
        Street:'',
        City:'',
        State:'',
        PostalCode:'',
        Country:'',
        Email:'',
        Phone:'',
    }
    
    AdRecord = {
        UTM_Campaign__c:'',
        UTM_Content__c:'',
        UTM_Medium__c:'',
        UTM_Referer__c:'',
        UTM_Source__c:'',
        UTM_Term__c:'',
        UTM_Id__c:'',
    }
}