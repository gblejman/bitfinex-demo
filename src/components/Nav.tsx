import Image from 'next/image';
import { Status } from './Status';

export const Nav = () => {
  return (
    <nav className="flex justify-between bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 p-5">
      <Image src="/bitfinex-logo.svg" alt="Bitfinex Logo" width={180} height={37} priority />
      <Status />
    </nav>
  );
};
