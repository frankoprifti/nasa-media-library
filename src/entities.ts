interface ImageItem {
    href: string;
}

export interface Collection {
    version: string;
    href: string;
    items: ImageItem[];
    metadata?: []
}

interface Metadata {
    [key: string]: string | number | boolean | string[] | null | undefined;
    "AVAIL:Photographer": string;
    "AVAIL:Location": string;
    "AVAIL:Title": string;
    "AVAIL:Description": string;
    "AVAIL:Keywords": string[];
    "AVAIL:DateCreated": string
}

export interface ImageData {
    collection: Collection;
    metadata: Metadata;
}

export type NasaImageCollection = {
    metadata: Metadata;
    links: {
        href: string;
        rel: string;
        render: string;
    }[];
    href: string,
    data: {
        center: string;
        title: string;
        keywords: string[];
        nasa_id: string;
        date_created: string;
        media_type: string;
        description: string;
    }[];
};

