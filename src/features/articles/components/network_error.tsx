import { Box, Typography } from "@mui/material";

interface ErrorComponentProps {
  message: string;
}

const errorContainerStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "100%",
  minHeight: "100%", // Center vertically on the entire viewport height
};

const errorMessageStyles = {
  textAlign: "center",
  fontSize: "1.5rem",
  fontWeight: "bold",
  color: "red", // You can customize the error text color
};

export default function NetworkError({ message }: ErrorComponentProps) {
  return (
    <Box sx={errorContainerStyles}>
      <Typography sx={errorMessageStyles}>{message}</Typography>
    </Box>
  );
};


