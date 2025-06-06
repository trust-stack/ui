import * as yup from 'yup';
import { FormValidation, FormValidationField } from './generated';
export declare function isFormValidationField(value: FormValidation[string]): value is FormValidationField;
export declare const buildValidationSchema: (validation: FormValidation) => yup.ObjectSchema<Record<string, yup.AnySchema>>;
//# sourceMappingURL=build-validation.d.ts.map