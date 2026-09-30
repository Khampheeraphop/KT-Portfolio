import EmailOutlined from "@mui/icons-material/EmailOutlined";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import type { ContactLabel } from "@/constants/profile";

const icons = { Email: EmailOutlined, GitHub, LinkedIn };

export function ContactIcon({ channel }: { channel: ContactLabel }) {
  const Icon = icons[channel];
  return (
    <Icon
      aria-hidden="true"
      sx={{ fontSize: 26, color: "primary.main", flexShrink: 0 }}
    />
  );
}
