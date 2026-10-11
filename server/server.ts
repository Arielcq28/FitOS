import app from "./src/app.ts";

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

function shutdown(signal: string): void {
  console.log(`\n${signal} received, shutting down...`);
  server.close(() => {
    console.log("Server closed.");
    process.exit(0);
  });

  // Don't hang forever if a connection refuses to close.
  setTimeout(() => {
    console.error("Forced shutdown after timeout.");
    process.exit(1);
  }, 10_000).unref();
}
