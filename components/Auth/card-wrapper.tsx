'use client'

import { 
    Card,
    CardContent,
    CardFooter,
    CardHeader
 } from "../ui/card";
import { Header } from "./header";
import { Social } from "./social";

interface CardWrapperPros {
    children: React.ReactNode,
    headerLabel: string;
    backButtonLabel: string;
    backButtonHref: string;
    showSocial?: boolean;
};

export const CardWrapper = ({
    children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial
}:CardWrapperPros) => {
   return (
      <Card className="w-[400px] show-md">
        <CardHeader>
            <Header label={headerLabel}/>
        </CardHeader>
        <CardContent>
        {children}
        </CardContent>

        {showSocial && (
            <CardFooter>
                <Social/>
            </CardFooter>
        )}

        <CardFooter>
             <BackButton 
             label={backButtonLabel}
             href={backButtonHref}
             
             />
        </CardFooter>
  
      </Card>
   );
};

    
