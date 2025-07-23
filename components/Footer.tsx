import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 bg-gray-900 text-white">
      <Card className="bg-gray-900 border-none shadow-none rounded-none">
        <CardContent className="max-w-7xl mx-auto px-6 py-16">
          {/* CTA Row */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-3 text-white">Let’s Work Together</h3>
            <p className="text-gray-400">
              Ready to buy or sell your dream home? Get in touch today.
            </p>
          </div>

          {/* Navigation + Social */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
            {/* Company Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="hover:text-white hover:cursor-pointer transition">About</li>
                <li className="hover:text-white hover:cursor-pointer transition">Services</li>
                <li className="hover:text-white hover:cursor-pointer transition">Contact</li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
              <div className="flex gap-6 text-gray-400">
                <a href="#" className="hover:text-white transition">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-white transition">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-white transition">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Gradient Separator */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent my-10"></div>

          {/* Footer bottom */}
          <p className="text-center text-sm text-gray-500">
            © 2025 Creative Approach. All rights reserved.
          </p>
        </CardContent>
      </Card>
    </footer>
  );
}
