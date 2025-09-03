export const fromIsoDate = (isoDate) => {

// isoDate = '2023-11-01T07:22:00.358Z'

    const date = new Date(isoDate); 

    // date = Wed Nov 01 2023 09:22:00 GMT+0200 (Eastern European Standard Time)

    const formattedDate = date.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

    return formattedDate
}