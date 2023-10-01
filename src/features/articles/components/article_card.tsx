import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Avatar,
  CardMedia,
  Box,
} from "@mui/material";
import { Article } from "../../../types";
import { fallbackURL } from "../utils/scripts";

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = ({
  article: {
    title,
    author,
    publishedAt: date,
    description,
    urlToImage: imageUrl,
    url,
  },
}: ArticleCardProps) => {
  const onArticleSelected = () => {
    const newTab = window.open(url, "_blank")!;
    newTab.focus();
  };

  return (
    <div style={{paddingTop: 40, paddingBottom: 40, minWidth: '100%', height: '15vh'}} onClick={onArticleSelected}>
      <Box sx={{ maxHeight: '90%', }}>
        <Card>
          <Box display="flex">
            <Box flex="1">
              <CardMedia
                component="img"
                alt="Article Image"
                height="140"
                image={imageUrl || fallbackURL} // Pass the image URL as a prop
              />
            </Box>
            <Box flex="2">
              <CardHeader
                avatar={
                  <Avatar aria-label="Author">{author?.charAt(0)}</Avatar>
                }
                title={title}
                subheader={`Published on ${date}`}
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary">
                  {description}
                </Typography>
              </CardContent>
            </Box>
          </Box>
        </Card>
      </Box>
    </div>
  );
};

export default ArticleCard;
