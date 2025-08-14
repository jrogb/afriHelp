"use client"
import { Form } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../InputField";
import { IoCloudUploadOutline } from "react-icons/io5";




const schema = z.object({
    username: z
        .string()
        .min(3, { message: "Username must be at least 3 characters" })
        .max(30, { message: "Username must be at most 30 characters" })
        .regex(/^[a-zA-Z0-9_]+$/, { message: "Username can only contain letters, numbers, and underscores" }),

    email: z
        .string()
        .min(5, { message: "Email is too short" })
        .max(100, { message: "Email is too long" })
        .email({ message: "Invalid email format" }),

    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters" })
        .max(20, { message: "Password cannot be longer than 20 characters" })
        .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
        .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
        .regex(/[0-9]/, { message: "Password must contain at least one number" })
        .regex(/[^A-Za-z0-9]/, { message: "Password must contain at least one special character" }),

    firstName: z
        .string()
        .min(1, { message: "First name is required" })
        .max(50, { message: "First name must be at most 50 characters" })
        .regex(/^[a-zA-Z]+$/, { message: "First name can only contain letters" }),

    lastName: z
        .string()
        .min(1, { message: "Last name is required" })
        .max(50, { message: "Last name must be at most 50 characters" })
        .regex(/^[a-zA-Z]+$/, { message: "Last name can only contain letters" }),

    phone: z
        .string()
        .min(10, { message: "Phone number must be at least 10 digits" })
        .max(15, { message: "Phone number must be at most 15 digits" })
        .regex(/^\d+$/, { message: "Phone number can only contain digits" }),

    birthday: z
        .string()
        .refine((date) => {
            const parsedDate = new Date(date);
            return !isNaN(parsedDate.getTime()) && parsedDate <= new Date();
        }, { message: "Invalid date or date is in the future" }),

    img: z
        .instanceof(File, { message: "Image is required" }),

    sex: z
        .enum(["male", "female"], { message: "Gender is required" }),

});

type Inputs = z.infer<typeof schema>;

const MessageForm = ({
    type,
    data,
}: {
    type: "create" | "update";
    data?: any
}) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(schema),
    });

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });

    return (
        <form className="flex flex-col gap-8" onSubmit={onSubmit}>
            <h1 className="text-bold">Send a Message</h1>
            <span className="text-xs text-gray-400 text-light">Account Information</span>
            <div className="flex justify-between gap-4 flex-wrap">
                <InputField label="Username" name="username" defaultValue={data?.username} register={register} error={errors?.username} />
                <InputField label="Email" name="email" type="email" defaultValue={data?.email} register={register} error={errors?.email} />
                <InputField label="Password" name="password" type="password" defaultValue={data?.password} register={register} error={errors?.password} />
            </div>
            <span className="text-xs text-gray-400 text-light">Personal Information</span>
            <div className="flex justify-between gap-4 flex-wrap">
                <InputField label="First Name" name="firstName" defaultValue={data?.firstName} register={register} error={errors?.firstName} />
                <InputField label="Last Name" name="lastName" defaultValue={data?.lastName} register={register} error={errors?.lastName} />
                <InputField label="Phone" name="phone" defaultValue={data?.phone} register={register} error={errors?.phone} />
                <InputField label="Birthday" name="birthday" type="date" defaultValue={data?.birthday} register={register} error={errors?.birthday} />

                <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
                    <label className="text-sm font-semibold text-gray-500 flex items-center gap-2 cursor-pointer" htmlFor="img">Gender</label>
                    <select className="ring-[1.5px] ring-gray-300 rounded-md p-2 text-sm w-full" {...register("sex")} defaultValue={data?.sex}>
                        <option value="male">Male</option>
                        <option value="male">Female</option>
                    </select>
                    {errors?.sex && <p className="text-afrired text-xs">{errors?.sex?.toString()}</p>}
                </div>

                <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
                    <label className="text-sm font-semibold text-gray-500 flex items-center gap-2 cursor-pointer" htmlFor="img">
                        <IoCloudUploadOutline width={28} height={28} />
                        <span>Upload a Photo</span>
                    </label>
                    <input type="file" id="img" {...register("img")} className="hidden" />
                    {errors?.img && <p className="text-afrired text-xs">{errors?.img?.toString()}</p>}
                </div>
            </div>

            <button className="bg-afrired text-white p-2 rounded-md">{type === "create" ? "Create" : "Update"}</button>
        </form>
    );
};

export default MessageForm;