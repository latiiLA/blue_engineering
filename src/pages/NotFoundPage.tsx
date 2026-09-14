import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-[70vh] items-center bg-[#f3f1ec]">
      <Container className="py-24 text-center sm:py-32">
        <p className="font-display text-7xl font-extrabold tracking-tight text-[#1c9cf0] sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 font-display text-3xl font-extrabold text-[#071018] sm:text-4xl">
          Page not found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-[#071018]/65">
          The page you are looking for does not exist or may have been moved.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="rounded-full bg-[#071018] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1c9cf0]"
          >
            Back to home
          </Link>
          <Link
            to="/#contact"
            className="rounded-full border border-[#071018]/15 px-6 py-3 text-sm font-semibold text-[#071018] transition-colors hover:border-[#1c9cf0] hover:text-[#1c9cf0]"
          >
            Contact us
          </Link>
        </div>
      </Container>
    </main>
  );
}
