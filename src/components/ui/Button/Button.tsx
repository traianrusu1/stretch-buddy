import React from 'react';
import styles from './Button.module.scss';

type Placement = 'tl' | 'tr' | 'br' | 'bl';

interface Props {
  children: React.ReactNode;
  placement: Placement;
  selected: boolean;
  onClick: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
}

const Button: React.FC<Props> = ({ children, placement, selected, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={[styles.button, styles[placement], selected ? styles.selected : ''].join(' ')}
    >
      {children}
    </button>
  );
};

export default Button;
