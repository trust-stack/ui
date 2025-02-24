import { Alert, AlertProps } from './Alert';

export function NoResults({ ...props }: AlertProps): JSX.Element {
    return (
        <Alert icon={false} ta={'center'} {...props} severity="info">
            <Alert.Text w={'100%'} ta={'center'}>
                No results found
            </Alert.Text>
        </Alert>
    );
}
