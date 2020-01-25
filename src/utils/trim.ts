export function trim(str: string): string {
    if (typeof str.trim !== 'undefined') {
        return str.trim();
    }

    let startIndex,
        endIndex;

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            startIndex = i;
            break;
        }
    }

    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] !== ' ') {
            endIndex = i + 1;
            break;
        }
    }

    return str.substr(startIndex, endIndex - startIndex);
}
