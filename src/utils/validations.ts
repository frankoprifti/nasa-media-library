import moment from "moment"

export const validateSearch = (searchTerm: string, startYear: number | undefined, endYear: number | undefined) => {
    const currentYear = Number(moment().format('YYYY'))
    if (!searchTerm) {
        return "Please provide some search text"
    }
    else if (startYear || endYear) {
        if (startYear && endYear) {
            if (startYear > endYear) {
                return "Start year should be earlier than end year"
            }
            else if (startYear! > currentYear || endYear! > currentYear) {
                return `Start and end year can't be sooner than current year (${currentYear})`
            }
            else if (startYear?.toString().length! !== 4 || endYear?.toString().length! !== 4) {
                return 'Year should be on YYYY format'
            }
        }
        else if (startYear! > currentYear || endYear! > currentYear) {
            return `Start and end year can't be sooner than current year (${currentYear})`
        }
    }
}   