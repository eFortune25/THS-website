import Link from "next/link";
import { Mail } from "lucide-react";
import { Logo } from "./Logo";

const navigation = {
  main: [
    { name: "About Us", href: "/" },
    { name: "What We Do", href: "/what-we-do" },
    { name: "Past Projects", href: "/projects" },
  ],
  secondary: [
    { name: "Where We Work", href: "/where-we-work" },
    { name: "Our Experts", href: "/experts" },
    { name: "Work With Us", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Logo className="h-16 w-16" variant="light" />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              A U.S.-based public health and research consulting firm committed to solving complex public health challenges in complex environments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-200 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-200 mb-4">More</h4>
            <ul className="space-y-2">
              {navigation.secondary.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-teal-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <Mail className="h-4 w-4" />
              <a href="mailto:info@t-healthsolutions.com" className="text-sm hover:text-teal-400 transition-colors">
                info@t-healthsolutions.com
              </a>
            </div>
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Transatlantic Health Solutions, LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
