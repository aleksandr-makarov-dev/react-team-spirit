import { Button } from "@/components/ui/button";

export function NotFoundPage() {
  return (
    <div>
      <h2>Not found</h2>
      <Button asChild>
        <a href="/">Home</a>
      </Button>
    </div>
  );
}
