import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  cloneElement,
  isValidElement,
  ReactElement,
  ReactNode
} from "react";

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  asChild?: boolean;
};

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

export function Button({
  children,
  className = "",
  variant = "primary",
  asChild,
  href,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-bold transition duration-200 focus:outline-none focus:ring-2 focus:ring-electric focus:ring-offset-2 focus:ring-offset-obsidian";
  const variants = {
    primary:
      "bg-gradient-to-r from-violet to-electric text-white shadow-purple hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(163,94,212,0.58)]",
    secondary:
      "border border-electric/45 bg-transparent text-silver hover:-translate-y-0.5 hover:border-electric hover:bg-electric/10 hover:shadow-purple",
    ghost: "text-muted hover:bg-electric/10 hover:text-silver"
  };
  const classes = `${base} ${variants[variant]} ${className}`;

  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<{ className?: string }>;

    return cloneElement(child, {
      className: `${classes} ${child.props.className ?? ""}`
    });
  }

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
