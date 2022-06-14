import { FC, ReactNode } from "react";
import classNames from "classnames";

interface TitleProps {
  children?: ReactNode;
  className?: string;
  variant?: Sizes;
}

type Sizes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export const Title: FC<TitleProps> = (({className, variant = "h1", children, ...props}) => {
  const Tag = `${variant}` as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={classNames('g-title', className)}
      {...props}
    >
      {children}
    </Tag>
  );
})