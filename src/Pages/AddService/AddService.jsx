import { useForm } from "react-hook-form";
import CoverTitle from "../../Components/CoverTitle";


const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data.firstName, data.lastName, data.phone, data.email, data.message);
    }
    return (
        <div>
            <CoverTitle page={'Service'}></CoverTitle>
            <div className="bg-[#F3F3F3] p-24 rounded-xl">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <input type="text" className="py-4 px-6 rounded-xl w-full" placeholder="First name" {...register("firstName", { required: true, maxLength: 20 })} />
                        <input type="text" className="py-4 px-6 rounded-xl w-full" placeholder="Last name" {...register("lastName")} />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <input type="number" className="py-4 px-6 rounded-xl w-full" placeholder="Phone Number" {...register("phone", { min: 18, max: 99 })} />
                        <input placeholder="Enter Email" className="py-4 px-6 rounded-xl w-full" type="email" {...register("email")} />
                    </div>
                    <textarea placeholder="Message Here" {...register("message")} className="textarea  textarea-lg w-full h-64 mb-6" ></textarea>
                    <button className="w-full py-4 rounded-xl text-xl font-semibold text-white bg-[#ff3811] border-[#ff3811]">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddService;