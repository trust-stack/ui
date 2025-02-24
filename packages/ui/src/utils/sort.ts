const extractPrefixAndNumber = (str: string) => {
    const match = str.match(/(\D+)(\d+)/);
    return match
        ? { prefix: match[1], number: parseInt(match[2], 10) }
        : { prefix: str, number: 0 };
};

/**
 * Sort two items alpha numerically. As an example "Silo 7" would come before "Silo 62".
 */
export function sortAlphaNumeric(a: string, b: string): number {
    const aParts = extractPrefixAndNumber(a);
    const bParts = extractPrefixAndNumber(b);

    if (aParts.prefix === bParts.prefix) {
        return aParts.number - bParts.number;
    }
    return aParts.prefix.localeCompare(bParts.prefix);
}
