type Article = {
    id: string;
    name: string;
    shortDescription: string;
    description: string;
}

var news: Article[] = [
    {
        "id": "breakfast-with-santa-04-12-2022",
        "name": "Breakfast with Santa",
        "shortDescription": "We fundraised for Breakfast with Santa",
        "description": "We fundraised for Breakfast with Santa. Blah blah blah. Add details later"
    }
]

export default news;
export type { Article };