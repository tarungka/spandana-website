import Image from "next/image";
import { Box, Typography, Container } from "@mui/material";

export default function Home() {
  // return (
  //   <Container maxWidth="lg" sx={{ textAlign: "center", padding: "6rem 0", position: "relative" }}>
  //     {/* Image with Overlay */}
  //     <Box sx={{ position: "relative", display: "inline-block" }}>
  //       <Box
  //         component="img"
  //         src="/logo-pink.png"
  //         alt="Logo"
  //         sx={{
  //           background: "transparent",
  //           width: { xs: 200, sm: 300, md: 500 },
  //           height: { xs: 100, sm: 150, md: 200 },
  //           marginRight: { xs: 0, sm: 2 }, // Adjust margin based on screen size
  //           marginLeft: { xs: 0, sm: "-10px" }, // Adjust margin based on screen size
  //         }}
  //       />
  //       <Box
  //         sx={{
  //           position: "absolute",
  //           top: 0,
  //           left: 0,
  //           width: "100%",
  //           height: "100%",
  //           backgroundColor: "rgba(255, 255, 255, 0.5)", // Light pink or white with 50% opacity
  //           zIndex: 1,
  //         }}
  //       />
  //     </Box>

  //     {/* Text Content */}
  //     <Typography variant="h2" component="h1" fontWeight="bold" sx={{ position: "relative", zIndex: 2 }}>
  //       Welcome to Rotract Spandana
  //     </Typography>
  //     <Typography variant="h4" component="p" fontWeight="bold" mt={2} sx={{ position: "relative", zIndex: 2 }}>
  //       Coming soon...
  //     </Typography>
  //   </Container>
  // );

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {/* Background Image */}
      <Box
        component="img"
        src="/background-image.jpg"
        alt="Background"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1, // Ensure the image is behind the overlay
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.15)", // Light pink or white with 50% opacity
          zIndex: 0, // Overlay sits above the image
        }}
      />

      {/* Content */}
      <Box sx={{ zIndex: 1 }}>
        <Box
          component="img"
          src="/logo-pink.png"
          alt="Logo"
          sx={{
            background: "transparent",
            width: { xs: 200, sm: 300, md: 500 },
            height: { xs: 100, sm: 150, md: 200 },
            marginRight: { xs: 0, sm: 2 }, // Adjust margin based on screen size
            marginLeft: { xs: 0, sm: "-10px" }, // Adjust margin based on screen size
          }}
        />
        <Typography variant="h3" component="h1" fontWeight="bold" color="primary.contrastText">
          Welcome to Rotract Spandana
        </Typography>
        <Typography variant="h4" component="p" fontWeight="bold" color="primary.contrastText" mt={2}>
          Coming soon...
        </Typography>
      </Box>
    </Box>
  );

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
