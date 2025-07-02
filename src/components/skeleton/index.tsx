import { memo } from 'react';
import classNames from 'classnames';

const Skeleton = memo(({ className, ...props }: React.ComponentProps<'div'>) => {
  return (
    <div data-slot="skeleton" className={classNames('bg-gray-100 animate-pulse rounded-md', className)} {...props} />
  );
});

Skeleton.displayName = 'Skeleton';

export { Skeleton };
