'use server'
import * as z from "zod";
import { RegisterScheme } from "@/schemas";
export const register = async(values: z.infer<typeof RegisterScheme>)=>{
    // console.log(values)
    const validateFields = RegisterScheme.safeParse(values);
    if(!validateFields.success){
        return {error: "Invalid Fields"};
    };
   
    return {success: "Email Sent!"}

};