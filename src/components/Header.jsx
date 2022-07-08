/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
const navigation = [
  { name: 'Sobre mí', href: '/perfil', current: true },
  { name: 'Cursos', href: '/cursos', current: false },
  { name: 'Proyectos', href: '/proyectos', current: false },
];

export default function Header() {
  return (
    <>
      <Disclosure as="nav" className="bg-zinc-900">
        {({ open }) => (
          <>
            <div className="max-w-100vw mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Link href="/">
                      <img className="h-14 w-14 hover:cursor-pointer" src="/icono.png" alt="Home" />
                    </Link>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <Link key={item.name} href={item.href}>
                          <p
                            className="text-white hover:bg-bg-green hover:text-white px-3 py-2 rounded-md text-2xl font-medium hover:cursor-pointer"
                            aria-current={item.current ? 'page' : undefined}
                            onFocus={() => (event.target.className = `bg-gray-900 text-white px-3 py-2 rounded-md text-2xl font-medium`)}
                          >
                            {item.name}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <p className="text-bg-green text-2xl ml-12">v.1.0</p>
                </div>

                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-bg-green inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? <XIcon className="block h-6 w-6" aria-hidden="true" /> : <MenuIcon className="block h-6 w-6" aria-hidden="true" />}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={'text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-xl font-medium'}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
