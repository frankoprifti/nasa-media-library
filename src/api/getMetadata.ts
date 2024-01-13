import axios from "axios";

export const getMetadata = async (asset_id: string) => {
    const response = await axios.get(`https://images-assets.nasa.gov/image/${asset_id}/metadata.json`);
    return response.data
}