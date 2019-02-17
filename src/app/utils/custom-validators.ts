import { FormControl, FormGroup } from '@angular/forms';

export class CustomValidator {
  static isValidEmailFormat(control: FormControl) {
    const EMAIL_REGEXP = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (control.value !== '' && (control.value && control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
      return { 'incorrectMailFormat': true };
    }
    return null;
  }
}
