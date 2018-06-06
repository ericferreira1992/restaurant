import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {
    static getErrorMsg(validatorName: string, validatorValue?: any) {
        let config = {
            'required': 'Precisa informar este campo.',
            'invalidEmailAddress': 'Email inválido.',
            'invalidPassword': 'Senha inválida',
            'minlength': `Tamanho mínimo de ${validatorValue.requiredLength}`,
            'maxlength': `Tamanho máximo de ${validatorValue.requiredLength}`
        };

        return config[validatorName];
    }

    static emailValidator(control) {
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { 'invalidEmailAddress': true };
        }
    }
}
