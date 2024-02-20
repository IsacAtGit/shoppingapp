import { helper } from '@ember/component/helper';

export default helper(function currency(positional, named = {}) {
  const [numbers] = positional;
  const { sign = '$' } = named;
  const dollors = Math.floor(numbers);
  let cents = Math.floor((numbers * 100) % 100);
  if (cents.toString().length === 1) {
    cents = '0' + cents;
  }
  return `${sign}${dollors}.${cents}`;
});
