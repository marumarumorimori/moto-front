import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default async function Page() {
  return (
    <div className="bg-slate-500 min-h-dvh">
      <div></div>
    </div>
  );
}
