import { Article } from "../../../types"
import ArticleCard from "./article_card"

type ArticleListProps = {
    articles: Article[],
}

export default function ArticlesList({articles}: ArticleListProps) {
    return <>{articles?.map((article) => <ArticleCard key={article.title} article={article}/>)}</>
}  