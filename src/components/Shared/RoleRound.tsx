export default function RoleRound({ role }: { role: string }) {
  return (
    <div>
      <button className="px-5 py-1 rounded-3xl border border-primary text-primary text-sm font-semibold">
        {role}
      </button>
    </div>
  );
}
