import Contact from "./components/Contact";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Project from "./components/Project";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="h-4 w-full bg-primary absolute top-0" />
      <main className="flex flex-col min-h-screen w-full items-center justify-between px-[20%] pb-8 bg-white dark:bg-black sm:items-start">
        <Welcome>
          <p className='mb-4'>
            Greetings, I&apos;m Sergey Dushevski
          </p>
          <p className='mb-4'>
            I&apos;m a Full-Stack Developer
          </p>
          <p>
            I craft seamless web experiences with React, Node.js, and more.
          </p>
        </Welcome>
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left w-full">
          <About />
          <Project />
          <Contact />
        </div>
      </main >
    </div >
  );
}
