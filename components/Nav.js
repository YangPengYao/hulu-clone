import { useRouter } from 'next/router';
import request from '../utils/requests';

const Nav = () => {
  const router = useRouter();

  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-auto scrollbar-hide">
        {Object.entries(request).map(([key, { title, url }]) => (
          <h2
            key={key}
            className="cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
            onClick={() => router.push(`/?genre=${key}`)}
          >
            {title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-6 w-1/12" />
    </nav>
  );
};

export default Nav;
