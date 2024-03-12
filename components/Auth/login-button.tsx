"use client"

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
        console.log("Login Button Clicked");
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