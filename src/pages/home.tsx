import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function HomePage() {
  return (
    <div className="space-y-4 p-8 max-w-96">
      <div className="space-y-3 space-x-3">
        <Button>Hello world!</Button>
        <Button variant="destructive">Hello world!</Button>
        <Button variant="link">Hello world!</Button>
        <Button variant="secondary">Hello world!</Button>
        <Button variant="outline">Hello world!</Button>
        <Button loading loadingText="Loading...">
          Hello world!
        </Button>
      </div>
      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" placeholder="my-awesome-project" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" placeholder="my-secret-password" invalid />
      </div>
      <div className="flex space-x-2">
        <Checkbox />
        <Label htmlFor="password">Check me</Label>
      </div>

      <RadioGroup defaultValue="comfortable">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default" id="r1" />
          <Label htmlFor="r1">Default</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="r2" />
          <Label htmlFor="r2">Comfortable</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="compact" id="r3" />
          <Label htmlFor="r3">Compact</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
