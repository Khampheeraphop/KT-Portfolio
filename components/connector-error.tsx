"use client";
import { Alert, Button, Stack, Typography } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import { connectorErrorRecovery } from "@/lib/connector-errors.mjs";

/** Render in the affected feature, leaving the rest of the Site usable. */
export function ConnectorError({
  error,
  connectorName,
  reconnectHref,
}: {
  error: { status: string; message: string };
  connectorName: string;
  reconnectHref: string;
}) {
  const recovery = connectorErrorRecovery(error, connectorName, reconnectHref);
  return (
    <Alert severity="error" variant="outlined">
      <Stack spacing={1.5} sx={{ alignItems: "start", minWidth: 0 }}>
        <Typography variant="body2" sx={{ overflowWrap: "anywhere" }}>
          {recovery.message}
        </Typography>
        {recovery.action && (
          <Button
            variant="outlined"
            href={recovery.action.href}
            target="_top"
            startIcon={<LinkIcon />}
            sx={{
              maxWidth: "100%",
              whiteSpace: "normal",
              textAlign: "left",
              overflowWrap: "anywhere",
            }}
          >
            {recovery.action.label}
          </Button>
        )}
      </Stack>
    </Alert>
  );
}
