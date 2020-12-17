import { ValidatorFn, AbstractControl } from '@angular/forms';
import { Subscription } from 'rxjs';

export function matchOtherValidator(otherControlName: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        const otherControl: AbstractControl = control.root.get(otherControlName);
        if (otherControl) {
            const subscription: Subscription = otherControl.valueChanges.subscribe(() => {
                control.updateValueAndValidity();
                subscription.unsubscribe();
            });
        }
        const message = { passwordMatch: {
                message: 'New password and Confirm new password must be same'
                 }
        };
       return otherControl && control.value !== otherControl.value ? message : null;
    };
}