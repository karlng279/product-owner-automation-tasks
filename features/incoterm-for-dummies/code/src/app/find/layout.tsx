import { WizardProvider } from "@/components/wizard";

export default function FindLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <WizardProvider>{children}</WizardProvider>;
}
