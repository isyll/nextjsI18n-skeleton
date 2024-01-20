import NavItem from '@/types/navitem'
import Logo from '../logo/Logo'

function Header({ links }: { links: NavItem[] }) {
    return (
        <header className="w-full py-3 px-4 border-b border-b-slate-100 flex justify-between items-center">
            <div className="flex items-center h-full p-4">
                <Logo />
            </div>
            <div className="flex justify-end">
                <nav>
                    <ul className="list-none flex gap-10">
                        {links.map((item, index) => (
                            <li
                                className="cursor-pointer font-semibold text-lg"
                                key={index}
                            >
                                <a>{item.text}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
