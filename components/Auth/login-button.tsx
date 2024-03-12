"use client"
import router from "next/navigation";
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
    const onclick = () =>{
        // console.log("Login Button Clicked");
        router.push('/auth/login');
    }
    if(mode === "model"){
        return(
            <span>
                TODO: Implement Model
            </span>
        )
    }
   return (
     <span onClick={onclick} className="cursor-pointer">
        {children}
     </span>
   )
}