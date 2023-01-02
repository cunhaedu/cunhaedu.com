import { ReactElement, cloneElement } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import cls from 'classnames';

import styles from './styles.module.scss';

type ActiveLinkProps = LinkProps & {
  children: ReactElement;
}

export function ActiveLink({ children, ...props }: ActiveLinkProps) {
  const { asPath } = useRouter();

  const isCurrentPath = props.href === '/'
    ? asPath === props.href
    : asPath.includes(String(props.href));

  return (
    <Link {...props} className={cls(styles.active_link, "hover:dark:text-white")}>
      {cloneElement(children, {
        className: cls({'text-black dark:text-white': isCurrentPath}),
      })}
    </Link>
  )
}
