import { ActionImpl } from 'kbar';
import { forwardRef } from 'react';
import clx from 'classnames';

type ResultItemProps = {
  action: ActionImpl;
  isActive: boolean;
}

export const ResultItem = forwardRef(({ action, isActive: active }: ResultItemProps, ref) => {
  return (
    <div
      ref={ref as any}
      className={clx("py-3 px-4 flex items-center justify-between m-0 cursor-pointer", {
        'text-black dark:text-white bg-gray-300/25 dark:bg-white/10': active,
        'text-gray-500 bg-white/5': !active,
      })}
    >
      <div className='flex gap-2 items-center'>
        {action && action.icon}
        <div className='flex flex-col font-kbar'>
          <span>{action.name}</span>
        </div>
      </div>
      {action.shortcut?.length ? (
        <div aria-hidden className='grid grid-flow-col gap-1'>
          {action.shortcut.map(shortcut => (
            <kbd
              key={shortcut}
              className="uppercase py-1 px-2 text-gray-500 bg-gray-300/60 dark:bg-white/10"
            >
              {shortcut}
            </kbd>
          ))}
        </div>
      ) : null}
    </div>
  )
})

ResultItem.displayName = 'ResultItem';
