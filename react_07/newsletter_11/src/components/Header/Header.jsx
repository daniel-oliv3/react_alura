import { MoonIcon } from '@heroicons/react/24/solid';

const Header = () => {
  return (
    <div className="flex h-20 bg-gray-500 justify-between items-center p-5 sm:rounded-xl sm:m-5">
        <span className="text-gray-100">Olá, Usuário</span>
        <h1 className="text-gray-100 text-xl">Newsletter</h1>
        {/* <input  className="hidden sm:block" type="checkbox" /> */}
        <MoonIcon className="h-8 text-gray-100 hidden sm:block" />
    </div>
  )
}

export default Header;