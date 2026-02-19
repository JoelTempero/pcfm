export default function KoruLogo({ className = 'w-[50px] h-[50px]' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="28" fill="#1a5c52" opacity="0.1"/>
      <path d="M30 8C18 8 10 18 10 28c0 8 4 14 10 18 0-16 4-26 10-26s10 10 10 26c6-4 10-10 10-18 0-10-8-20-20-20z" fill="#1a5c52"/>
      <path d="M25 50c0-12 2-18 5-18" stroke="#c4714c" strokeWidth="2" fill="none"/>
      <path d="M35 50c0-12-2-18-5-18" stroke="#c4714c" strokeWidth="2" fill="none"/>
      <circle cx="30" cy="18" r="3" fill="#c4714c"/>
    </svg>
  )
}
