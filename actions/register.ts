'use server'
import * as z from "zod";
import bcrypt from 'bcrypt'
import { db } from "@/lib/db";
import { RegisterScheme } from "@/schemas";
import { error } from "console";
export const register = async(values: z.infer<typeof RegisterScheme>)=>{
    // console.log(values)
    const validateFields = RegisterScheme.safeParse(values);
    if(!validateFields.success){
        return {error: "Invalid Fields"};
    };

    const {email, password, name} = validateFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const existingUSer = await db.user.findUnique({
        where:{
            email,
        }
    });

   if(existingUSer){
    return {error: "User already exists!"}
   }
   
   await db.user.create({
    data:{
        name,
        email,
        password: hashedPassword
    }
   });



  //TODO: Send verification token email

   
    return {success: "User Created!"}

};