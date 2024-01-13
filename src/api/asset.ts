import axios from "axios";
import { getMetadata } from "./getMetadata";

export const asset = async (asset_id: string) => {
    try {
        const response = await axios.get(`https://images-api.nasa.gov/asset/${asset_id}`);
        const metadata = await getMetadata(asset_id);

        return { ...response.data, metadata }

    } catch (error) {
        return { error: "Error getting data" }
    }
}
