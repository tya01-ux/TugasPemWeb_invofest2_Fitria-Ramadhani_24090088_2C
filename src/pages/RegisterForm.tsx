import { useForm } from "react-hook-form";
import { InputText } from "../components/ui/InputText";
import { InputPassword } from "../components/ui/InputPassword";
import Button from "../components/ui/Button";
import { Link } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";


type FormData = {
    nama: string;
    email: string;
    password: string;
    passwordConfirm: string;
};

const schema = z.object({
    nama: z.string().min(1, "Nama harus diisi"),
    email: z.string().email({ message: "Email tidak valid" }),
    password: z.string().min(6, { message: "Password harus minimal 6 karakter" }),
    passwordConfirm: z.string().min(6, { message: "Konfirmasi Password harus minimal 6 karakter" }),
});

export default function RegisterForm() {
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
                label="Nama"
                nama="nama"
                error={errors.nama?.message}
                register={register}
                />

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

                <InputPassword
                label="Password Confirm"
                nama="passwordConfirm"
                error={errors.passwordConfirm?.message}
                register={register}
                />
            </div>

            <div>
                <Button label="Register" variant="primary"/>
            </div>

            <div>
                sudah punya akun? <Link to="/login" className="text-sm text-blue-500 hover:underline">Login disini</Link>
            </div>
    
        </form>
    </div>
}