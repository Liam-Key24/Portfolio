interface SocialLinkProps {
    href: string;
    text: string;
  }
  
  export default function SocialLink({ href, text }: SocialLinkProps) {
    return (
      <div className="inline-flex items-center h-auto hover:opacity-85">
        <span className="material-symbols-outlined text-xs">arrow_outward</span>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <p>{text}</p>
        </a>
      </div>
    )
  }
  