import { useForm } from "react-hook-form";
import { InputText } from "../components/ui/InputText";
import { InputPassword } from "../components/ui/InputPassword";
import Button from "../components/ui/Button";
import { Select } from "../components/ui/Select";
import { TextArea } from "../components/ui/TextArea";



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
                
                 <TextArea 
                label="Bio" 
                name="bio" 
                register={register} 
                 /> 
        
                <Select 
                label="Event" 
                name="event" 
                register={register} 
                options={[ 
                { label: "Invofest", value: "invofest" }, 
                { label: "Workshop AI", value: "ai" } 
                ]} 
                />
                
            </div>

            <div>
                <Button label="Daftar" variant="primary"/>
            </div>
        </form>
    </div>
}