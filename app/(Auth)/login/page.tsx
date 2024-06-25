import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { signIn } from "@/lib/auth";

export default async function LoginPage() {
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button type="submit">Signin with Google</button>
      </form>
      <form
        action={async (formData) => {
          "use server";
          await signIn("resend", formData);
        }}
      >
        <Input type="text" name="email" placeholder="Email" />
        <Button type="submit">Signin with Resend</Button>
      </form>
    </>
  );
}
