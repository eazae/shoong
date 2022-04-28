import { textColorNames } from '@theme/Color/Color.props';
import React from 'react';
import { SizeType } from './Size';
import { WeightType } from './Weight';

export interface ITypography {
  children: React.ReactNode;
  size?: SizeType;
  weight?: WeightType;
  color?: textColorNames;
  variant?: 'strong' | 'normal';
}
