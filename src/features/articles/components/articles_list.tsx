import { Article } from "../../../types"
import ArticleCard from "./article_card"

type Props = {
    articles: Article[],
}

export default function ArticlesList({articles}: Props) {
    return <>{articles?.map((article) => <ArticleCard key={article.title} article={article}/>)}</>
}  