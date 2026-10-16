// GEÇİCİ metin tabanlı logo. Marka kullanım kuralları teyit edilene kadar resmi AWS logosu kullanılmıyor.
// Gerçek logo gelince yalnızca bu bileşeni değiştirin (ör. <img src="/logo.svg" alt="..." />).
export function Logo() {
  return (
    <span className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className="grid size-9 place-items-center rounded-md bg-accent text-sm font-extrabold text-navy"
      >
        SBG
      </span>
      <span className="flex flex-col leading-tight">
        <span className="text-sm font-bold text-white">AWS Student Builder Group</span>
        <span className="text-xs text-white/75">Antalya Belek Üniversitesi</span>
      </span>
    </span>
  );
}
