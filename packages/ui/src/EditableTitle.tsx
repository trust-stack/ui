import { Input, styled } from 'tamagui';

export const EditableTitle = styled(Input, {
    borderWidth: 0,
    backgroundColor: 'transparent',
    p: 0,
    col: '$onSurfaceVariant',
    fontFamily: '$heading',
    fontWeight: '400',
    fontSize: 28,
    lineHeight: 36,
    height: 'auto',
    multiline: true,
});
