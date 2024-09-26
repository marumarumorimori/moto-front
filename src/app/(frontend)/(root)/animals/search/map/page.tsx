import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default async function Page() {
  return (
    <div className="bg-red-300 min-h-dvh">
      <div>map</div>
    </div>
  );
}
