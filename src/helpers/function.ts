// Formats a number as a percentage string.
// If the number is negative, it will prepend a negative sign
// For example, -5 will be formatted as "-%5"

export default function formatNegativeNumbers(number: number) {
        if (number < 0) {
            return `-%${Math.abs(number)}`;
        } else return `%${number}`
}
