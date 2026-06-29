import LayoutWrapper from "@/components/shared/layout-wrapper";
import { LoginForm } from "./login-form";

export const metadata = {
  title: "Login | EarningsCall",
  description: "Sign in to your EarningsCall account to access earnings transcripts, audio, and the API.",
};

export default function LoginPage() {
  return (
    <LayoutWrapper>
      <section
        className="relative flex items-center justify-center"
        style={{
          paddingTop: "var(--navbar-height)",
          minHeight: "100vh",
          background: "linear-gradient(180deg, rgb(0,43,20) 0%, rgb(1,50,25) 60%, rgb(1,67,31) 100%)",
        }}
      >
        {/* Subtle glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 110%, rgba(78,255,145,0.18) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 w-full max-w-[440px] mx-auto px-4 py-16">
          <LoginForm />
        </div>
      </section>
    </LayoutWrapper>
  );
}
