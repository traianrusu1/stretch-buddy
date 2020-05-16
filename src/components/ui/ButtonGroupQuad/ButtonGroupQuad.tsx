import React from 'react';
import styles from './ButtonGroupQuad.module.scss';

interface Props {
  myProp: string;
  children: React.ReactNode;
}

const ButtonGroupQuad: React.FC<Props> = ({ myProp, children }: Props) => {
  console.log(myProp);
  return <div className={styles.buttonGroupQuad}>{children}</div>;
};

export default ButtonGroupQuad;
