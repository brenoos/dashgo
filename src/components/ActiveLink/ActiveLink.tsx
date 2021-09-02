import { useRouter } from "next/dist/client/router";
import Link, { LinkProps } from "next/link";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactHref?: boolean;
}

export function ActiveLink({
  children,
  shouldMatchExactHref = false,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();

  const isActive = [
    shouldMatchExactHref && (asPath === rest.href || asPath === rest.as),
    !shouldMatchExactHref &&
      (asPath.startsWith(String(rest.href)) ||
        asPath.startsWith(String(rest.as))),
  ];

  const getIsActive = () => {
    return isActive.find(Boolean) || false;
  };

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: getIsActive() ? "pink.400" : "gray.50",
      })}
    </Link>
  );
}
