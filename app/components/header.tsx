import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    // Header wrapper
    // - border-b gives a subtle separation from the page content
    <header className="border-b border-white/5">

      {/* 
        Nav background
        - Uses the app background color
        - aria-label is for accessibility (screen readers)
      */}
      <nav aria-label="Global" className="bg-[var(--background)]">

        {/* 
          Content container
          - max-w-6xl prevents content from stretching too wide
          - mx-auto centers it horizontally
          - px / py give breathing room on all screen sizes
          - flex layout aligns left + right sections
        */}
        <div className="mx-auto grid max-w-6xl grid-cols-3 items-center px-6 py-4 lg:px-8">


          {/* 
            LEFT SIDE: Logo + name
            - flex aligns image and text horizontally
            - gap creates space between them
          */}
        <div className="justify-self-start">
          <Link href="/" className="flex items-center gap-3">
            {/* 
              Logo image
              - small enough for a header
              - rounded-md softens sharp edges
              - priority ensures it loads immediately
            */}
            <Image
              src="/images/logo/hvidkatlogo.jpg"
              alt="logo"
              width={48}
              height={48}
              className="rounded-md"
              priority
            />

            {/* 
              Name text
              - text-sm keeps it subtle
              - font-medium gives enough weight without shouting
              - uses foreground color so it adapts to dark/light mode
            */}
            <span className="text-sm font-medium text-[var(--foreground)]">
              Andreas Runge
            </span>
          </Link>
        </div>
        <div className="justify-self-center">
          {/* Pokémon Route */}
            <Link href="/pokemon" className="font-medium">
                Pokémon
              </Link>
        </div>
          {/* 
            RIGHT SIDE: Social links
            - flex groups icons into one action area
            - gap controls spacing between icons
          */}
          <div className="flex gap-2 justify-self-end">

            {/* 
              Each social link
              - group allows child hover effects
              - p-2 increases clickable area (important for UX)
              - hover:bg adds subtle feedback
            */}

            {/* GitHub */}
            <Link
              href="https://www.github.com/Andreas528"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="group rounded-md p-2 hover:bg-white/5 transition-colors"
            >
              {/* 
                Social icon
                - opacity-70 keeps it calm by default
                - group-hover increases visibility on hover
              */}
              <Image
                src="/images/logo/icons8-github-64.png"
                alt=""
                width={48}
                height={48}
                className="opacity-70 transition group-hover:opacity-100"
              />
            </Link>

            {/* Instagram */}
            <Link
              href="https://www.instagram.com/andreasrunge_/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="group rounded-md p-2 hover:bg-white/5 transition-colors"
            >
              <Image
                src="/images/logo/icons8-instagram-50.png"
                alt=""
                width={48}
                height={48}
                className="opacity-70 transition group-hover:opacity-100"
              />
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://www.linkedin.com/in/andreas-runge-a43876339/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="group rounded-md p-2 hover:bg-white/5 transition-colors"
            >
              <Image
                src="/images/logo/linkedin-app-white-icon.png"
                alt=""
                width={48}
                height={48}
                className="opacity-70 transition group-hover:opacity-100"
              />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
