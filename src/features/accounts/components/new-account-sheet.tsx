import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";

export const NewAccountSheet = () => {
  return (
    <Sheet open>
      <SheetContent>
        <SheetTitle>New Account</SheetTitle>
        <SheetDescription>
          Create a new account to track your transactions.
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};
