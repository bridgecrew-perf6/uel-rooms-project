import { Injectable } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ErrorMessagesService {

  public readonly errorMessages = {
    required: () => 'This Field is Required',
    email: () => 'Please Enter Valid Email Id',
    minlength: params => 'The Min character length is ' + params.requiredLength,
    maxlength: params => 'The Max character length for this field is ' + params.requiredLength,
    nameValidator: params => params.message,
    emailValidator: params => params.message,
    passwordValidator: params => params.message,
    passwordMatch: params => params.message,
    itemShouldntMatch: params => params.message,
    numberValidator: params => params.message,
    mobileValidator: params => params.message,
    emppasswordVlidator: params => params.message,
    min: params => 'Please enter a value greater than or equal to ' + params.min,
    max: params => 'Please enter a value less than or equal to ' + params.max,
    whitespace: params => params.message,
    maxcheckvalue: params => params.message,
    onlynumber: params => params.message,
    onlyNumberValidator: params => params.message,
    decimalValidator: params => params.message,
    commonname: params => params.message,
    mincheckvalue: params => params.message,
    description: params => params.message,
    common: params => params.message,
    fortuneRank: params => params.message,
    domainTailExtensionValidation: params => params.message,
    MailSubUserResult: params => params.message,
    zopCodeErrorResult: params => params.message,
    countryRestrictionjobPost: params => params.message,
    empProfileZipError: params => params.message,
    MailEmpRegResult: params => params.message,
    empProfileCompValidation: params => params.message,
    matDatepickerParse: () => 'This Field is required',
    pkgOffer: () => 'Please enter a value between 0 and 99',
    matDatepickerMin: () => 'Please choose proper End date (It must be after start date)', 
    matDatepickerMax: () =>      'Please choose proper Start date (It must be before End date)'
  };
  constructor() { }

  public getMessage(type: string, params: any) {
    return this.errorMessages[type](params);
  }

  public listOfErrors(formname: FormGroup, control: any): String[] {
    return formname.get(control).errors !== null ? Object.keys(formname.get(control).errors).map(field => 
            this.getMessage(field, formname.get(control).errors[field])
            )
           : null;
  }
  public checktouchedvaliddirty(formname: FormGroup, control: any, childFormGroup?: any) {
    if (formname.get(control).invalid && formname.get(control).touched) {
      return formname.get(control).errors !== null
      ? this.listOfErrors(formname, control)[0]
      : null;  
    }  
   return null;
  }
  public checkarrayvalidation(formname: FormGroup, formarray, index, subcontrol: any) {
    let arraycontrol1: FormArray = (formname.get(formarray) as FormArray).value;
    let arraycontrol: FormGroup = arraycontrol1[index];
    if (arraycontrol.get(subcontrol).invalid && arraycontrol.get(subcontrol).touched) {
      return arraycontrol.get(subcontrol).errors !== null
      ? this.listOfErrors(arraycontrol, subcontrol)[0]
      : null;
    } else {
      return null;
    }
  }
}
