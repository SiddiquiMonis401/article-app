import { Box, Pagination } from "@mui/material";

type ArticlePaginationProps = {
  currentPage: number;
  onChange:
    | ((event: React.ChangeEvent<unknown>, page: number) => void)
    | undefined;
  totalPages: number;
};

export default function ArticlePagination({
  currentPage,
  onChange,
  totalPages,
}: ArticlePaginationProps) {
  return (
    <Box
      sx={{
        paddingTop: 10,
        paddingBottom: 10,
        display: "flex",
        justifyContent: "center",
        maxWidth: "100vw",
      }}
    >
      <Pagination  page={currentPage} onChange={onChange} count={totalPages} />
    </Box>
  );
}
