import { ActionImpl } from 'kbar';
import { forwardRef } from 'react';
import clx from 'classnames';

import styles from './resultItem.styles.module.scss';

type ResultItemProps = {
  action: ActionImpl;
  isActive: boolean;
}

export const ResultItem = forwardRef(({ action, isActive: active }: ResultItemProps, ref) => {
  return (
    <div
      ref={ref as any}
      className={clx(styles.result_item, {
        'text-black dark:text-white bg-gray-300/25 dark:bg-white/10': active,
        'text-gray-500 bg-white/5': !active,
      })}
    >
      <div className={styles.result_item__action_container}>
        {action && action.icon}
        <div>
          <span>{action.name}</span>
        </div>
      </div>
      {action.shortcut?.length ? (
        <div aria-hidden className={styles.result_item__shortcut_container}>
          {action.shortcut.map(shortcut => (
            <kbd key={shortcut} className="dark:bg-white/10">
              {shortcut}
            </kbd>
          ))}
        </div>
      ) : null}
    </div>
  )
})

ResultItem.displayName = 'ResultItem';
