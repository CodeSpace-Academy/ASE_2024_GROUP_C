
import RecipeGrid from "./components/RecipeGrid";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center sm:items-start mt-20">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Welcome to RecipeApp</h1>
        <section className="w-full">
          <RecipeGrid />
        </section>
      </main>
    </div>
  );
}