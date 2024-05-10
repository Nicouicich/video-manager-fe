import Link from "next/link";

export const MenuItem: React.FC<{
  href: string;
  children: React.ReactNode;
  onLogout?: () => void;
}> = ({ href, children, onLogout }) => {
  const handleClick = (e: React.MouseEvent) => {
    if (onLogout) {
      e.preventDefault();
      onLogout();
    }
  };

  return (
    <Link href={href} passHref>
      <div
        onClick={handleClick}
        className="block w-full text-left px-4 py-2 text-gray-800 bg-gray-200 hover:bg-blue-200 hover:text-white focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
      >
        {children}
      </div>
    </Link>
  );
};
