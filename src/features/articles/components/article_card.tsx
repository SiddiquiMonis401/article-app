import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Avatar,
  IconButton,
  CardMedia,
  Box,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

type Props = {
  title: string;
  author: string;
  date: string;
  content: string;
  imageUrl: string;
};

const ArticleCard = ({ title, author, date, content, imageUrl }: Props) => {
  return (
    <Card>
      <Box display="flex">
        <Box flex="1">
          <CardMedia
            component="img"
            alt="Article Image"
            height="140"
            image={imageUrl} // Pass the image URL as a prop
          />
        </Box>
        <Box flex="2">
          <CardHeader
            avatar={<Avatar aria-label="Author">{author.charAt(0)}</Avatar>}
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
  );
};

export default ArticleCard;
