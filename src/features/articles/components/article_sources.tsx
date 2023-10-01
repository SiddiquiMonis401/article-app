import { Box, Chip } from "@mui/material";
import { articleSources } from "../utils/scripts";

type ArticleSourceProps = {
    articleSource: string;
    onSelectArticleSource: (articleSource: string) => void; 
}

export default function ArticleSources({ articleSource: source, onSelectArticleSource } : ArticleSourceProps) {
  return (
    <div>
      {articleSources.map((articleSource) => (
        <Box key={articleSource} display="inline-block" p={1}>
          <Chip
          onClick={() => {
            onSelectArticleSource(articleSource)
          }}
            sx={{
              backgroundColor:  (theme) => source === articleSource ? theme.palette.mode === "dark" ? '#1976d2' : '#121212' : theme.palette.primary.main, // Background color based on theme
              color: (theme) => theme.palette.primary.contrastText, // Text color based on theme
              '&:hover': {
                backgroundColor: (theme) => source === articleSource ? theme.palette.mode === "dark" ? '#1976d2' : '#121212' : theme.palette.primary.main, // Change background color on hover
                color: 'white', // Change text color on hover
                // Add any other hover styles...
              },
            }}
            key={articleSource}
            label={articleSource}
          />
        </Box>
      ))}
    </div>
  );
}
