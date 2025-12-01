export default function DarkBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black z-0" />

      <div className="absolute inset-0 z-[1] opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-white/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-white/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-white/10 rounded-full blur-[140px] -translate-x-1/2 -translate-y-1/2" />
      </div>
    </>
  );
}
