'use client'

import { Card } from "../ui/card";

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
      <Card></Card>
   )
}

    
