import React from "react";
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

type Props = {
  article: Article;
};

const ArticleCard = ({
  article: { title, author, publishedAt: date, content, urlToImage: imageUrl, url },
}: Props) => {

  const onArticleSelected = () => {
    const newTab = window.open(url, '_blank')!;
    newTab.focus();
  }

  return (
    <div onClick={onArticleSelected}>
    <Box sx={{padding: 4, maxHeight: 100, maxWidth: '100%'}} >
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
            avatar={<Avatar aria-label="Author">{author?.charAt(0)}</Avatar>}
            title={title}
            subheader={`Published on ${date}`}
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary">
              {content}
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
