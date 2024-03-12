'use client'

import { 
    Card,
    CardContent,
    CardFooter,
    CardHeader
 } from "../ui/card";

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
      {children}
      </Card>
   );
};

    
