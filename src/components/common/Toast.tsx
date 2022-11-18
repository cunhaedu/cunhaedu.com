import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/outline';
import * as ToastPrimitive from '@radix-ui/react-toast';
import { ReactNode } from 'react';
import cx from 'classnames';

type ToastProps = {
  title: string;
  description: string;
  type: 'success' | 'error';
  showToast: boolean;
  setShowToast: (value: boolean) => void;
  children?: ReactNode;
}

export default function Toast({
  title,
  description,
  type,
  showToast,
  setShowToast,
  children
}: ToastProps) {
  return (
    <ToastPrimitive.Provider>
      {children}
      <ToastPrimitive.Root
        open={showToast}
        onOpenChange={setShowToast}
        className={cx(
          "bg-white dark:bg-gray-900 rounded border border-gray-500/50 dark:border-toast-dark text-gray-500 dark:shadow-toast-box",
          "text-sm overflow-hidden m-0 p-4 z-[2] flex",
          "data-[state=open]:animate-toast-open data-[state=closed]:animate-toast-close"
        )}
      >
         <div className='mt-4 mr-3'>
          {type === 'success'
            ? <CheckCircleIcon className='w-4 h-4 text-success' />
            : <XCircleIcon className='w-4 h-4 text-error' />
          }
        </div>
        <div>
          <ToastPrimitive.Title className='text-gray-800 dark:text-white leading-7'>
            {title}
          </ToastPrimitive.Title>
          <ToastPrimitive.Description className='-mt-[5px] leading-7'>
            {description}
          </ToastPrimitive.Description>
        </div>
        <ToastPrimitive.Close
          aria-label="Close"
          className='absolute right-0 top-0 w-8 h-8 bg-transparent text-lg transition-colors duration-[0.2s] ease-in-out hover:text-black hover:dark:text-white'
        >
          <XMarkIcon className='w-4 h-4 text-gray-500 hover:text-black hover:dark:text-white' stroke-width="2.5" />
        </ToastPrimitive.Close>
      </ToastPrimitive.Root>
      <ToastPrimitive.Viewport className='fixed bottom-5 right-5 z-[2]' />
    </ToastPrimitive.Provider>
  )
}
