export const buildUrl = ({ title, year, page }: any) => {
    return `${process.env.REACT_APP_BASE_URL}?s=${title}&y=${year}&page=${page}&apikey=${process.env.REACT_APP_API_KEY}`
}
