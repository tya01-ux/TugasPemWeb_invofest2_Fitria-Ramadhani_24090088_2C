import { useForm } from "react-hook-form";
import { InputText } from "../components/ui/InputText";
import { InputPassword } from "../components/ui/InputPassword";
import { Link } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../components/ui/Button";

const schema = z.object({
    email: z.string().email({ message: "Email tidak valid" }),
    password: z.string().min(6, { message: "Password harus minimal 6 karakter" }),
});

interface FormData {
    email: string;
    password: string;
}

export default function LoginForm() {
    const{register, handleSubmit, formState:{errors}} = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
    };


    return <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <InputText
                label="Email"
                nama="email"
                error={errors.email?.message}
                register={register}
                />

                <InputPassword
                label="Password"
                nama="password"
                error={errors.password?.message}
                register={register}
                />
            </div>

            <div>
                <Button label="Login" variant="primary"/>
            </div>

            <div>
                Belum Punya Akun? <Link to="/register" className="text-sm text-blue-500 hover:underline">Daftar disini</Link>
            </div>
        </form>
    </div>
}