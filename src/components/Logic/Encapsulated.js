import React from 'react';

import {returnOrEval as answer} from '../../../lib'
import If from './If';

export default function MapArray({ header, body, footer }) {
  const main = answer(body);
  const content = main ? [
    <If Condition={header} Then={header} />,
    ...main,
    <If Condition={footer} Then={footer} />
  ] : null;

  return <If Condition={content} Then={content} />
}