export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6">
      <h1 className="text-xl font-semibold">
        Dashboard
      </h1>

      <div className="text-sm text-slate-500">
        Welcome back 👋
      </div>
    </header>
  );
}