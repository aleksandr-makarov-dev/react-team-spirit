import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function HomePage() {
  return (
    <div className="p-8 space-y-3">
      <div className="flex gap-2">
        <Input placeholder="Search..." invalid />
        <Button onClick={() => console.log("clicked")}>Search</Button>
      </div>
      <div className="flex gap-2">
        <Input placeholder="Search..." />
        <Button onClick={() => console.log("clicked")}>Search</Button>
      </div>
      <div className="flex flex-col space-y-3">
        <Button variant="default">Button</Button>
        <Button variant="secondary">Button</Button>
        <Button variant="outline">Button</Button>
        <Button variant="soft">Button</Button>
        <Button loading>Button</Button>
      </div>
    </div>
  );
}
