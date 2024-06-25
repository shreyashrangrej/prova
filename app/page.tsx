import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center p-6 space-x-4">
      <Button>Hello Prova</Button>
      <ModeToggle />
    </main>
  );
}
