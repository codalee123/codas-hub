import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import Container from "../components/Container";

function NotFound() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-white">
      <Container className="flex min-h-[calc(100vh-5rem)] items-center justify-center py-20">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-400">
            404 Error
          </p>

          <h1 className="mt-5 text-6xl font-bold tracking-[-0.04em] text-black sm:text-8xl">
            Not Found
          </h1>

          <p className="mx-auto mt-6 max-w-md text-base leading-7 text-neutral-600">
            The page you’re looking for doesn’t exist or may have been moved.
          </p>

          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 bg-black px-6 py-3.5 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            <ArrowLeft size={17} />
            Back to Home
          </Link>
        </div>
      </Container>
    </main>
  );
}

export default NotFound;