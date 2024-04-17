'use server'
import * as z from "zod";
import bcrypt from 'bcrypt'
import { RegisterScheme } from "@/schemas";
export const register = async(values: z.infer<typeof RegisterScheme>)=>{
    // console.log(values)
    const validateFields = RegisterScheme.safeParse(values);
    if(!validateFields.success){
        return {error: "Invalid Fields"};
    };

    const {email, password, name} = validateFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);
   
    return {success: "Email Sent!"}

};