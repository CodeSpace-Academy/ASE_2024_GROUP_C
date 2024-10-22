import { Link } from "lucide-react";


export default function Error() {

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
      <p className="mb-6 text-lg">An unexpected error occurred. Please try again later.</p>
      <Link
        className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
      >
        Return Home
      </Link>
    </div>
  );
}
