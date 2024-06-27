import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { auth, signOut } from "@/lib/auth";

export default async function Home() {
  const session = await auth();

  return (
    <main className="flex justify-center p-6 space-x-4">
      <Button>Hello Prova and World</Button>
      <ModeToggle />
      <p>Welcome {session?.user?.email}</p>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit">Sign Out</Button>
      </form>
    </main>
  );
}
