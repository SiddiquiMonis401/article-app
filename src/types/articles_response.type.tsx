export type ArticleSource = {
    id: string;
    name: string;
}

export type Article = {
    source: ArticleSource;
    author: string,
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export type ArtcileAPIResponse = {
    status: string;
    totalResults: number;
    articles: Article[]
}