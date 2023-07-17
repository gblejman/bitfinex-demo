import Image from 'next/image';

const PLATFORM_STATUS = {
  undefined: 'unknown',
  0: 'operational',
  1: 'maintenance',
};

export const Nav = () => {
  return (
    <nav className="flex justify-between bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 p-5">
      <Image src="/bitfinex-logo.svg" alt="Bitfinex Logo" width={180} height={37} priority />
      <p className="text-sm">Status: {PLATFORM_STATUS.undefined}</p>
    </nav>
  );
};
