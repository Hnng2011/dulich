import React, { HTMLProps, ReactNode } from 'react';
import { cn } from '@/lib/utils';  // Ensure this import path is correct and that cn correctly combines class names

interface GridProps extends HTMLProps<HTMLDivElement> {
  template: 'row' | 'col';
  count: number;
  gap?: number;
  children?: ReactNode;
  className?: string;
}

const Grid: React.FC<GridProps> = (props) => {
  const gridTemplateClass = `grid gap-${props.gap}`;

  const template = () => {
    switch (props.template) {
      case 'row':
        switch (props.count) {
          case 1:
            return "grid-rows-1"
          case 2:
            return "grid-rows-2"
          case 3:
            return "grid-rows-3"
          case 4:
            return "grid-rows-4"
          case 5:
            return "grid-rows-5"
          case 6:
            return "grid-rows-6"
        }

      case 'col':
        switch (props.count) {
          case 1:
            return "grid-cols-1"
          case 2:
            return "grid-cols-2"
          case 3:
            return "grid-cols-3"
          case 4:
            return "grid-cols-4"
          case 5:
            return "grid-cols-5"
          case 6:
            return "grid-cols-6"
        }
      default:
        return "grid-cols-2"
    }
  }

  const gridClassName = cn(gridTemplateClass, template(), props.className);

  return (
    <div {...props} className={gridClassName}>
      {props.children}
    </div>
  );
}

export default Grid;
