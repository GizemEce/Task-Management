
import { signInSchema } from '@/lib/schema';
import React from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"

type SigninFormData = z.infer<typeof signInSchema>

const SignIn = () => {
   useForm<SigninFormData>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    
    return (
        <div>SignIn</div>
    )
}

export default SignIn