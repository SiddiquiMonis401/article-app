import { Box, Pagination } from "@mui/material";

type Props = {
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
}: Props) {
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
