import { useState, type FormEvent } from "react";
import { site } from "@/data/site";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(`Inquiry from ${name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    form.reset();
  };

  return (
    <section id="contact" className="scroll-mt-24 bg-[#f3f1ec]">
      <div className="grid lg:grid-cols-2">
        <div className="relative overflow-hidden bg-[#0c2438] px-5 py-20 text-white sm:px-10 lg:px-14 lg:py-28">
          <div
            className="pointer-events-none absolute -right-16 bottom-0 size-72 rounded-full bg-[#1c9cf0]/15 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -left-10 top-10 size-56 rounded-full bg-[#ff7f27]/10 blur-3xl"
            aria-hidden
          />
          <div className="relative mx-auto max-w-lg lg:mx-0 lg:max-w-none">
            <p className="text-sm font-semibold tracking-[0.22em] text-[#1c9cf0] uppercase">
              Contact
            </p>
            <h2 className="mt-4 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
              Start your next project
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/65">
              Tell us about the line, system, or equipment you need. We respond
              from our Addis Ababa office.
            </p>

            <dl className="mt-12 space-y-8">
              <div>
                <dt className="text-xs font-semibold tracking-[0.2em] text-[#ff7f27] uppercase">
                  Office
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-white/80">
                  {site.contact.address}
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.2em] text-[#ff7f27] uppercase">
                  Email
                </dt>
                <dd className="mt-2 space-y-1 text-sm">
                  <a
                    href={`mailto:${site.contact.email}`}
                    className="block text-white/80 hover:text-white"
                  >
                    {site.contact.email}
                  </a>
                  <a
                    href={`mailto:${site.contact.emailAlt}`}
                    className="block text-white/80 hover:text-white"
                  >
                    {site.contact.emailAlt}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.2em] text-[#ff7f27] uppercase">
                  Phone
                </dt>
                <dd className="mt-2 space-y-1 text-sm">
                  <a
                    href={`tel:${site.contact.phone.replace(/\s|-/g, "")}`}
                    className="block font-display text-3xl font-bold text-white"
                  >
                    {site.contact.phone}
                  </a>
                  <a
                    href={`tel:${site.contact.phoneAlt.replace(/\s|-/g, "")}`}
                    className="block text-white/70 hover:text-white"
                  >
                    {site.contact.phoneAlt}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold tracking-[0.2em] text-[#ff7f27] uppercase">
                  Hours
                </dt>
                <dd className="mt-2 text-sm text-white/80">{site.contact.hours}</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="flex items-center px-5 py-20 sm:px-10 lg:px-14 lg:py-28">
          <form onSubmit={onSubmit} className="mx-auto w-full max-w-lg space-y-6">
            <div>
              <label
                htmlFor="name"
                className="text-xs font-semibold tracking-[0.18em] text-[#071018]/55 uppercase"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                autoComplete="name"
                className="mt-2 w-full rounded-xl border border-[#071018]/12 bg-white px-4 py-3.5 text-[#071018] outline-none ring-[#1c9cf0] transition focus:ring-2"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-xs font-semibold tracking-[0.18em] text-[#071018]/55 uppercase"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="mt-2 w-full rounded-xl border border-[#071018]/12 bg-white px-4 py-3.5 text-[#071018] outline-none ring-[#1c9cf0] transition focus:ring-2"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-xs font-semibold tracking-[0.18em] text-[#071018]/55 uppercase"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="mt-2 w-full resize-y rounded-xl border border-[#071018]/12 bg-white px-4 py-3.5 text-[#071018] outline-none ring-[#1c9cf0] transition focus:ring-2"
              />
            </div>
            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-[#071018] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#1c9cf0] sm:w-auto"
            >
              Send message
            </button>
            {submitted && (
              <p className="text-sm text-[#071018]/55">
                Your email client should open with the message drafted.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
