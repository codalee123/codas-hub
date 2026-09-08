import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Container from "../components/Container";

function Contact() {
  return (
    <main className="bg-white">
      <section className="py-20 lg:py-28">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
            {/* Left Side */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-neutral-500 underline underline-offset-5">
                Contact us
              </p>

              <h1 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-black sm:text-6xl lg:text-7xl">
                Let’s build something meaningful.
              </h1>

              <p className="mt-8 max-w-lg text-base leading-7 text-neutral-600 sm:text-lg">
                Have a project, collaboration, or opportunity in mind? I’d
                love to hear about it. Send me a message and let’s start a
                conversation.
              </p>

              {/* Contact Details */}
              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <Mail
                    size={20}
                    strokeWidth={1.7}
                    className="mt-1 text-black"
                  />

                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-black">
                      Email
                    </p>

                    <a
                      href="mailto:your-email@example.com"
                      className="mt-1 block text-sm font-medium text-neutral-400 hover:underline"
                    >
                      olawunmibello1@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin
                    size={20}
                    strokeWidth={1.7}
                    className="mt-1 text-black"
                  />

                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-black">
                      Location
                    </p>

                    <p className="mt-1 text-sm font-medium text-neutral-400">
                      Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone
                    size={20}
                    strokeWidth={1.7}
                    className="mt-1 text-black"
                  />

                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest text-neutral-black">
                      Phone
                    </p>

                    <p className="mt-1 text-sm font-medium text-neutral-400">
                      +234 8130782284
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className=" p-6 sm:p-8 lg:p-10">
              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-black"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full border border-neutral-200 bg-white px-4 py-3.5 text-sm text-black outline-none transition placeholder:text-neutral-400 focus:border-[grey] rounded-2xl"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-black"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    className="w-full border border-neutral-200 bg-white px-4 py-3.5 text-sm text-black outline-none transition placeholder:text-neutral-400 focus:border-[grey] rounded-2xl"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-medium text-black"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="What is this about?"
                    className="w-full border border-neutral-200 bg-white px-4 py-3.5 text-sm text-black outline-none transition placeholder:text-neutral-400 focus:border-[grey] rounded-2xl"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-black"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Tell me about your project..."
                    className="w-full resize-none border border-neutral-200 bg-white px-4 py-3.5 text-sm text-black outline-none transition placeholder:text-neutral-400 focus:border-[grey] rounded-[10px]"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-3 bg-black px-6 py-4 rounded-[10px] text-sm font-medium text-white transition hover:bg-neutral-800"
                >
                  Send Message

                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default Contact;