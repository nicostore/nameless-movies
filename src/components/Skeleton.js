export default function Skeleton() {
  return (
    <>
      {[...Array(7)].map((_, i) => (
        <div key={i} className="w-full">
          <div className="aspect-[2/3] animate-pulse rounded-lg bg-zinc-900 shadow-inner"></div>
          <div className="mt-2 h-3 w-3/4 animate-pulse rounded bg-zinc-900"></div>
          <div className="mt-1 h-2 w-1/2 animate-pulse rounded bg-zinc-800"></div>
        </div>
      ))}
    </>
  );
}