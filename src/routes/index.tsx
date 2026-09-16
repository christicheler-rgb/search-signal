import { createFileRoute } from "@tanstack/react-router";
import { SearchSignal } from "@/components/search-signal";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return <SearchSignal />;
}
