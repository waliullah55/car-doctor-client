import Swal from "sweetalert2";
import CoverTitle from "../../Components/CoverTitle";
import { Helmet } from "react-helmet-async";


const AddService = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const fName = form.firstName.value;
        const lName = form.lastName.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const message = form.message.value;

        const order = {
            fName,
            lName,
            phone,
            email,
            message
        }
        console.log(order);
        fetch('http://localhost:5000/checkouts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Order Added Successfully....',
                    showConfirmButton: false,
                    timer: 1000
                  })
            }
        })
    }
    return (
        <div>
            <Helmet><title>Car | Add Service</title></Helmet>
            <CoverTitle page={'Service'} title={'Add New Service'}></CoverTitle>
            <div className="bg-[#F3F3F3] p-24 rounded-xl">
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <input type="text" className="py-4 px-6 rounded-xl w-full" placeholder="First name" name="firstName"/>
                        <input type="text" className="py-4 px-6 rounded-xl w-full" placeholder="Last name"  name="lastName" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <input type="number" className="py-4 px-6 rounded-xl w-full" placeholder="Phone Number" name="phone"/>
                        <input placeholder="Enter Email" className="py-4 px-6 rounded-xl w-full" type="email" name="email"/>
                    </div>
                    <textarea placeholder="Message Here" name="message" className="textarea  textarea-lg w-full h-4 mb-6" ></textarea>
                    <button className="w-full py-4 rounded-xl text-xl font-semibold text-white bg-[#ff3811] border-[#ff3811]">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddService;