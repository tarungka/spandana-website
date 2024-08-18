import Image from "next/image";
import { Box, Typography, Container } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center", padding: "6rem 0" }}>
      {/* Header with Logo and Title */}
      <Box
        component="img"
        src="/logo-pink.png"
        alt="Logo"
        sx={{
          background: "transparent",
          width: { xs: 200, sm: 300, md: 500 },
          height: { xs: 100, sm: 150, md: 200 },
          // mb: 4,
          mr: 10,
          marginLeft: "-10px",
        }}
      />
      {/* <Box display="flex" alignItems="center" justifyContent="center" mb={4}> */}
      <Typography variant="h2" component="h1" fontWeight="bold">
        Welcome to Rotract Spandana
      </Typography>
      {/* </Box> */}

      {/* Coming Soon Text */}
      <Typography variant="h4" component="p" fontWeight="bold" mt={2}>
        Coming soon...
      </Typography>
    </Container>
  );
}
