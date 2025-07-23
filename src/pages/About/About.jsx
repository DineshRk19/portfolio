import HeroImg from "@/assets/images/avatar2.jpg";

import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hi, I’m Dinesh RK — a full-stack JavaScript developer passionate
                about building modern web and mobile applications that perform
                seamlessly across platforms. I specialize in{" "}
                <span className="font-bold text-white">React</span> and{" "}
                <span className="font-bold text-white">React Native</span> for
                crafting intuitive user interfaces, and use{" "}
                <span className="font-bold text-white">PHP Laravel</span> on the
                backend to build secure, scalable APIs and services. From
                building responsive UIs to developing backend endpoints, I enjoy
                handling the full development cycle. I also perform manual
                testing to ensure stability, performance, and user satisfaction
                across every feature I build.{" "}
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I’m a lifelong learner who’s always exploring new tools,
                    frameworks, and best practices. My goal is to create
                    impactful digital solutions while continuously growing as a
                    developer and contributing to meaningful projects.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Dinesh RK, Software Engineer
                    </cite>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
