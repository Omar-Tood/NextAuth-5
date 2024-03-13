import * as z from  "zod"
import {useForm} from  'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CardWrapper } from "./card-wrapper"
import { LoginSchema } from "@/schemas";
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormMessage

} from "@/components/ui/form"

export const LoginForm = () =>{
     const  form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: ""
        }
     })

    return(
        <CardWrapper
        headerLabel="Welcome Back✋🏾"
        backButtonLabel= "Don`t have an account?" 
        backButtonHref = "/auth/register"
        showSocial
        
        >
             LoginForm
        </CardWrapper>
           
       
    )
}