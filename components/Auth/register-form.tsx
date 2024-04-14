"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardWrapper } from "./card-wrapper";
import { RegisterScheme } from "@/schemas";
import { Input } from "../ui/input";
import { useState, useTransition } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { FormError } from "../form-error";
import { FormSuccess } from "../form-success";
import { login } from "@/actions/login";


export const RegisterForm = () => {
  const [error, setError] = useState<string | undefined>()
  const [success, setSuccess] = useState<string | undefined>()     
  const [isPending, startTransition] = useTransition()
  const form = useForm<z.infer<typeof RegisterScheme>>({
    resolver: zodResolver(RegisterScheme),
    defaultValues: {
      email: "",
      password: "",
      name: ""
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterScheme>) => {
    setError("")
    setSuccess("")
     
    startTransition(()=>{
        login(values)
        .then((data)=>{
          setError(data.error);
          setSuccess(data.success);
        })
    });
    
  };

  return (
    <CardWrapper
      headerLabel="Create An Account✋🏾"
      backButtonLabel="Already have an account?"
      backButtonHref="/auth/login"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Omar-Tood"
                    
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Omar-Tood@example.com"
                     type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field}
                    disabled={isPending}
                    
                    placeholder="*****" type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        
          <FormError message={error} />
          <FormSuccess message={success} />

          <Button 
          disabled={isPending}
          type="submit" className="w-full"
          
          >
           
            Create credential
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
