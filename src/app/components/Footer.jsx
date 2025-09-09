"use client";

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer=()=> {
  return (
    <footer className="py-12 border-t-[0.3px] border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <div className="text-lg font-semibold text-foreground">Moin</div>
            <div className="text-sm text-muted-foreground">Full Stack Web Developer</div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/moinkhan1225"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </a>

            <a
              href="https://linkedin.com/in/moin-khan-19b53526b"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </a>

            <a
              href="https://twitter.com/khan__moin"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </a>
          </div>

          <div className="text-sm text-muted-foreground text-center md:text-right">
            © 2024 Moin. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;