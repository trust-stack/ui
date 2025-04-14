import { FieldValues } from 'react-hook-form';
import { PagerForm as Web } from './PagerForm.web';
import { PagerFormProps } from './types';

export function PagerForm<TFieldValues extends FieldValues>({
    ...props
}: PagerFormProps<TFieldValues>): JSX.Element {
    return <Web<TFieldValues> {...props} />;
}
