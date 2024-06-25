import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex justify-center p-6 space-x-4">
      <Button>Hello Prova</Button>
      <ModeToggle />
    </main>
  );
}
