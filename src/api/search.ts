import axios from "axios";
import { BASE_URL } from ".";

export const search = async (searchTerm: string, startDate?: Number, endDate?: Number) => {
    let url = `${BASE_URL}/search?q=${searchTerm}&media_type=image&page_size=12`;
    if (startDate) {
        url += `&year_start=${startDate}`
    }
    if (endDate) {
        url += `&year_end=${endDate}`
    }
    const response = await axios.get(url)
    if (response.data) {
        const data = response.data.collection?.items;
        const formatted: any[] = [];
        for (let i = 0; i < data.length; i++) {
            const item = data[i];
            const metadata = await getMetadata(item.data?.[0]?.nasa_id);
            formatted.push({ ...item, metadata })
        }
        return formatted;
    } else {
        throw new Error("No data found");
    };


}
const getMetadata = async (asset_id: string) => {
    const response = await axios.get(`http://images-assets.nasa.gov/image/${asset_id}/metadata.json`);
    return response.data
}