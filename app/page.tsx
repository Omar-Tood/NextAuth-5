import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { LoginButton } from "@/components/Auth/login-button";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-no-repeat bg-center bg-cover" style={{ backgroundImage: `url('https://images.pexels.com/photos/7599735/pexels-photo-7599735.jpeg?auto=compress&cs=tinysrgb&w=600')`,
    width:"100%",
    height:"100%"}}>
      
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-7xl font-semibold text-white drop-shadow-md",
            font.className
          )}
        >
          🔐 Auth
        </h1>
        <p className="text-white text-lg">A simple Authentication Service</p>
        <LoginButton>
        <Button variant="secondary" size="lg">
          Sing in
        </Button>
        </LoginButton>
      </div>

      
    </main>
  );
}


