export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-6 md:px-6">
        <div className="flex flex-col items-center gap-2 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Incoterm for Dummies</p>
          <p className="max-w-2xl">
            Educational purposes only - not legal advice. This content is for
            learning. Consult trade professionals for actual transactions.
          </p>
        </div>
      </div>
    </footer>
  );
}
