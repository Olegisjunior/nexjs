import { GoogleButton } from "@/components/GoogleButton";
import { SignInForm } from "@/components/SignInForm";

export default async function SignIn() {
  return (
    <div className="centring">
      <h1>SignIn</h1>
      <GoogleButton />
      <p>or</p>
      <SignInForm />
    </div>
  );
}
