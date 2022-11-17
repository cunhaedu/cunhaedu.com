import { ReactElement, cloneElement } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

type ActiveLinkProps = LinkProps & {
  children: ReactElement;
}

export function ActiveLink({ children, ...props }: ActiveLinkProps) {
  const { asPath } = useRouter();

  const isCurrentPath = props.href === '/'
    ? asPath === props.href
    : asPath.includes(String(props.href));

  return (
    <Link {...props} className="text-gray-500 hover:text-black hover:dark:text-white self-center transition-colors duration-500 ease-in-out">
      {cloneElement(children, {
        className: isCurrentPath ? 'text-black dark:text-white' : '',
      })}
    </Link>
  )
}
