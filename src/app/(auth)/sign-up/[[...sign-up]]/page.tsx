import { SignUp, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";

export default function Page() {
  return <SignUp path="/sign-up" />;
}
