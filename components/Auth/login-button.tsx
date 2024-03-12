"use client"
import { useRouter } from "next/navigation";
interface LoginButtonProps{
    children: React.ReactNode;
    mode?: "model" | "redirect",
    asChild?: boolean;
}

export const LoginButton =({
    children,
    mode = 'redirect',
    asChild
}: LoginButtonProps) => {
    const router = useRouter()
    const onclick = () =>{
        // console.log("Login Button Clicked");
        router.push('/Auth/login');
    }
    if(mode === "model"){
        return(
            <span>
                TODO: Still We are implementing
            </span>
        )
    }
   return (
     <span onClick={onclick} className="cursor-pointer">
        {children}
     </span>
   )
}