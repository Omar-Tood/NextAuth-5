'use server'
import * as z from "zod";
import bcrypt from 'bcrypt'
import { db } from "@/lib/db";
import { RegisterScheme } from "@/schemas";
import { error } from "console";
import { getUnpackedSettings } from "http2";
import { getUserByEmail } from "@/data/user";
export const register = async(values: z.infer<typeof RegisterScheme>)=>{

    // console.log(values)
    const validateFields = RegisterScheme.safeParse(values);
    if(!validateFields.success){
        return {error: "Invalid Fields"};
    };

    const {email, password, name} = validateFields.data;


    const hashedPassword = await bcrypt.hash(password, 10);
    
    const existingUser = await getUserByEmail(email);

   if(existingUser){
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