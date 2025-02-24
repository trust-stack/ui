import { capitalCase, sentenceCase } from 'change-case';
import { format } from 'date-fns';
import { SelectProps } from './Select';

export const dateToHumanReadable = (date: Date): string => {
    if (!date) return '';
    date = new Date(date);
    return format(date, 'dd MMM yyyy HH:mm');
};

export const dateToHumanReadableDay = (date: Date): string => {
    if (!date) return '';

    date = new Date(date);

    return format(date, 'dd MMM yyyy');
};

export const dateToHumanReadableTime = (date: Date): string => {
    if (!date) return '';

    date = new Date(date);

    return format(date, 'HH:mm');
};

export const dateToHumanReadableRange = (
    start: Date,
    end: Date,
    includeTime?: boolean
): string => {
    if (includeTime)
        return `${dateToHumanReadable(start)} - ${dateToHumanReadable(end)}`;
    return `${dateToHumanReadableDay(start)} - ${dateToHumanReadableDay(end)}`;
};

export const toCapitalCase = (str: string) => {
    return !str ? '' : capitalCase(str);
};

export const toSentenceCase = (str: string) => {
    return !str ? '' : sentenceCase(str);
};

export const sortSelectOptions = (options: SelectProps['options']) => {
    return options.sort((a, b) => {
        const labelA = a.label.toUpperCase();
        const labelB = b.label.toUpperCase();
        return labelA < labelB ? -1 : labelA > labelB ? 1 : 0;
    });
};

type RenderNameProps = {
    readonly firstName?: string;
    readonly middleName?: string;
    readonly lastName?: string;
};

export const renderName = ({
    firstName,
    middleName,
    lastName,
}: RenderNameProps): string => {
    if (!firstName && !middleName && !lastName) return '';
    let str = `${lastName}, ${firstName}`;
    if (middleName) str = `${str} ${middleName}`;
    return str;
};

export const locationToAddress = (location: {
    streetAddressOne: string;
    city: string;
    postalCode: string;
    stateOrRegion: string;
}) => {
    if (!location) return '';

    return `${location?.streetAddressOne}, ${
        location?.city
    }, ${location.city?.toUpperCase()}, ${location.stateOrRegion?.toUpperCase()}, ${
        location?.postalCode
    }`;
};

export const renderFileSize = (sizeInBytes: number) => {
    if (sizeInBytes < 0) {
        throw new Error('Size must be a non-negative integer.');
    }

    // Define the size units
    const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    // Handle zero bytes
    if (sizeInBytes === 0) {
        return '0 B';
    }

    let i = 0;
    let size = sizeInBytes;

    while (size >= 1024 && i < units.length - 1) {
        size /= 1024;
        i++;
    }

    // Format the size with two decimal places
    return `${size.toFixed(2)} ${units[i]}`;
};
