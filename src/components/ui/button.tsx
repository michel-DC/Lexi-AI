import React from "react";

type ButtonProps = {
  href: string;
  className?: string;
  children: React.ReactNode;
};

const styles: React.CSSProperties = {
  gridColumnGap: ".625rem",
  gridRowGap: ".625rem",
  border: "1px solid #3337af",
  backgroundColor: "#333fea",
  fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
  color: "#fff",
  fontSize: "0.9375rem",
  borderRadius: "3.125rem",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem 1.5rem",
  fontWeight: 400,
  textDecoration: "none",
  transition:
    "border-color .5s cubic-bezier(.39, .575, .565, 1), color .5s cubic-bezier(.39, .575, .565, 1), background-color .5s cubic-bezier(.47, 0, .745, .715)",
  display: "flex",
  boxShadow: "inset 0 8px 28px #3337af55, inset 0 4px 8px #ffffff66",
};

export default function Button({ href, className, children }: ButtonProps) {
  return (
    <a href={href} className={className} style={styles}>
      {children}
    </a>
  );
}
