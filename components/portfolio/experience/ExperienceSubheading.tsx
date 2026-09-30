import { Box, Typography } from "@mui/material";
export function ExperienceSubheading({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", md: "1fr 1.4fr" },
        gap: { xs: 1.75, md: "8%" },
        mb: 3.75,
      }}
    >
      <Typography
        component="h3"
        sx={{ fontSize: "1.5rem", fontWeight: 600, letterSpacing: "-.02em" }}
      >
        {title}
      </Typography>
      <Typography color="text.secondary">{description}</Typography>
    </Box>
  );
}
