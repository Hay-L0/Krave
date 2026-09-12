import Image from "next/image";
import scribbleBack from "../../public/FXHqo.jpg";
import stove from "../../public/Stoveimg.svg";
import bike from "../../public/bike.svg";
import box from "../../public/box.svg";
import map from "../../public/map1.svg";
import { Card } from "@/components/ui/card";

export default function Features() {
  return (
    <section
      id="vendors"
      className="relative w-full flex flex-col items-center justify-center"
    >
      <Image
        src={scribbleBack}
        alt="Feature Image"
        className="w-screen h-487 object-cover absolute top-70 left-0 -z-10"
      />

      <Card
        className="relative scale-95 mt-32 flex flex-col items-center gap-3 z-10 rounded-[30px] bg-[#DE7329] border-5 border-[#1A3C6E] w-full max-w-245 mx-4 h-auto min-h-120 py-10 px-4 sm:px-6">
        <Image
          src={stove}
          alt="Stoves"
          className="absolute right-0 bottom-0 scale-y-80 scale-x-101 -z-1 opacity-70 hidden md:block"
        />
        <section className="relative z-10 flex flex-col items-center gap-8 sm:gap-10 w-full">
          <h1 className="text-3xl mt-10 sm:text-4xl md:text-5xl leading-tight text-center font-bold text-black">
            Join Our
            <br />
            Network
          </h1>

          <section className="flex flex-col md:flex-row items-center justify-center gap-5 sm:gap-6 md:gap-8 w-full">
            <Card
              className="bg-[#1A3C6E] text-white opacity-95 w-full max-w-95 h-auto min-h-65 rounded-4xl p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold leading-tight mb-3">
                  Earn More
                  <br />
                  Classes
                </h3>
                <p className="text-20 leading-relaxed">
                  Deliver on foot or bike around campus on
                  <br />
                  your own schedule. Get paid weekly,
                  <br />
                  straight to your account.
                </p>
              </div>
              <Image
                src={bike}
                alt="bike"
                className="relative left-27 scale-82 self-end mt-4"
              />
            </Card>

            <Card
              className="bg-[#01264D] text-white opacity-95 w-full max-w-95 h-auto min-h-65 rounded-4xl p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold leading-tight mb-3">
                  Behind the
                  <br />
                  scenes
                </h3>
                <p className="text-20 leading-relaxed">
                  If you are passionate about helping us
                  <br />
                  achieve our goal to deliver meals
                  <br />
                  seamlessly, come join the team.
                </p>
              </div>
              <Image
                src={box}
                alt="box"
                className="relative left-27 scale-82 self-end mt-4"
              />
            </Card>
          </section>
        </section>
      </Card>

      <Card
        id="about"
        className="relative z-20 scale-95 mt-24 w-full max-w-5xl mx-4 bg-[#01264D] rounded-[30px] p-8 md:p-12 border-0">
        <h2 className="text-center leading-15.5 text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-10 md:mb-14">
          You Krave It.
          <br />
          We Got It.
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden">
            <Card className="w-full aspect-4/3 bg-[#1A3C6E] rounded-2xl flex items-center justify-center">
              <Image
                src={map}
                alt="Campus Map"
                width={600}
                height={450}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </Card>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col gap-3">
            {[
              "African Kitchen",
              "Chef Kingsley",
              "THE BESTMAN",
              "Exceeding Grace",
              "Ekorupa-Sons Enterprise",
              "Rukamat",
            ].map((name) => (
              <div
                key={name}
                className="flex items-center justify-between bg-[#1A3C6E] text-white rounded-xl px-5 py-3.5"
              >
                <span className="font-medium text-sm sm:text-base">{name}</span>
                <svg
                  className="w-5 h-5 text-[#E8792F]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 4h-2l-1 2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2h-12.01c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1h-14zm0 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </section>
  );
}