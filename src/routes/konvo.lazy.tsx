import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/konvo")({
  component: Konvo,
});

function Konvo() {
  return <div className="p-2">Hello from Konvo</div>;
}
