import Image from 'next/image'
import Logo from "@/public/ksbl-logo.png"
import { Calendar, ClipboardList, FileText, BarChart, BookOpen, ScrollText, UserCheck, Library, DollarSign, Bell, Settings, BellDot, LogOut } from 'lucide-react'
import { Div } from '@/lib/motion'

interface NavItem {
    icon: React.ElementType
    label: string
    href: string
}

interface NavSection {
    title: string
    items: NavItem[]
}

const navSections: NavSection[] = [
    {
        title: "ACADEMIC",
        items: [
            { icon: Calendar, label: "Schedule", href: "#" },
            { icon: ClipboardList, label: "Exam Board", href: "#" },
            { icon: FileText, label: "Assignments", href: "#" },
            { icon: BarChart, label: "Grade Report", href: "#" },
            { icon: BookOpen, label: "Enrolled Courses", href: "#" },
            { icon: ScrollText, label: "Course Plan", href: "#" },
            { icon: UserCheck, label: "Attendance", href: "#" },
            { icon: Library, label: "Libraries", href: "#" },
        ],
    },
    {
        title: "ADMINISTRATIVE",
        items: [
            { icon: DollarSign, label: "Finance", href: "#" },
            { icon: Bell, label: "Announcements", href: "#" },
        ],
    },
    {
        title: "SETTINGS",
        items: [
            { icon: Settings, label: "Account Settings", href: "#" },
            { icon: BellDot, label: "Notification Preferences", href: "#" },
        ],
    },
]

export default function Navbar() {

    return (
        <div className="flex h-screen flex-col bg-[#05274F] text-white sticky top-0 left-0">
            {/* Logo Header */}
            <div className='h-[120px] pl-4 py-4 w-full flex select-none overflow-hidden'>
                <Image src={Logo} alt='logo' className='object-fill' />
                <ul className='text-white text-xs 2xl:text-sm  -ml-14 mt-[52px] 2xl:mt-12 w-96 '>
                    <li>Karachi School</li>
                    <li>of Business & Leadership</li>
                </ul>
            </div>

            {/* Dashboard Section */}
            <div className="h-24 border-y-[0.5px] border-gray-500 flex items-center justify-center w-full">
                <div className="bg-gradient-to-r from-white/10 to-white/0 overflow-hidden relative rounded-l-[6px] h-12 flex items-center gap-4 w-48">
                    <div className="bg-[#F9A633] absolute left-0 h-12 w-1" />
                    <Image
                        src="/navbar/dasboard_logo.png"
                        alt="dashboard logo"
                        width={24}
                        height={24}
                        className="ml-4"
                    />
                    <h2 className="text-sm text-[#F9A633]">Dashboard</h2>
                </div>
            </div>

            {/* Navigation Sections */}
            <nav className="flex-1 space-y-1">
                {navSections.map((section) => (
                    <div key={section.title} className="border-b border-gray-500/50 last:border-b-0">
                        <button
                            className="flex w-full items-center justify-between px-6 py-3 text-xs font-semibold hover:bg-white/5"
                        >
                            <span className="text-gray-400">{section.title}</span>
                        </button>
                        <Div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="overflow-hidden ml-5"
                        >
                            <Div
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -10, opacity: 0 }}
                                transition={{ duration: 0.2, delay: 0.1 }}
                                className='space-y-2'
                            >
                                {section.items.map((item) => {
                                    const Icon = item.icon
                                    return (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            className="flex items-center gap-3 px-6 py-2 text-sm text-white/90 transition-colors hover:bg-white/5 hover:text-white"
                                        >
                                            <Icon className="size-4" />
                                            {item.label}
                                        </a>
                                    )
                                })}
                            </Div>
                        </Div>
                    </div>
                ))}
            </nav>

            {/* Logout Button */}
            <div className="border-t border-gray-500/50 p-4">
                <button className="flex w-full items-center gap-3 px-2 py-2 text-sm text-white/90 transition-colors hover:bg-white/5 hover:text-white">
                    <LogOut className="size-4" />
                    Logout
                </button>
            </div>
        </div>
    )
}



