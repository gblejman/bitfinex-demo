import Image from 'next/image';
import Link from 'next/link';
import { Status } from './Status';

export const Nav = () => {
  return (
    <nav className="flex  bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 p-5">
      <Link href="/">
        <Image src="/bitfinex-logo.svg" alt="Bitfinex Logo" width={180} height={37} priority />
      </Link>
      <div className="flex flex-1 pl-5">
        <Link href="/ws-messages">Websocket Msgs</Link>
      </div>
      <Status />
    </nav>
  );
};
