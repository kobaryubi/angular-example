import express from "express";

export function app(): express.Express {
  const server = express();

  return server;
}

function run(): void {
  const port = process.env["PORT"] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  })
}

run();
