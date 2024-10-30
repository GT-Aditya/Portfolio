import { useState } from "react"
import { GiCheckMark } from "react-icons/gi";

const Email = ({handleBackdrop, setContactEmailShow})=>{

    const [emailSent, setEmailSent]=useState(false);

    const [isVisible, setIsVisible] = useState(false);

    const handleSendEmail = () => {
        setTimeout(() => {
        setIsVisible(true);
        setTimeout(() => setIsVisible(false), 3000);
        }, 1000);
        setContactEmailShow(false)
    };

    const onSubmit = async (event) =>{
        event.preventDefault()
        const formData = new FormData(event.target)
        formData.append("access_key", "7a14ce92-03ac-4e93-99a7-25e338ffc39d")
        formData.append("subject", `Message from ${formData.get("f-name")}`)
        formData.append("from_name","Aditya Sharma - @AS")
        //formData.append("redirect","")

        const object = Object.fromEntries(formData)
        const json = JSON.stringify(object)
        const res = await fetch("https://api.web3forms.com/submit",{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res)=>res.json())

        if(res.success){
            setEmailSent(true)
            handleSendEmail()
        }else{
            setEmailSent(false)
        }
      }

    return <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
    onClick={handleBackdrop}>
        {!emailSent ?
        <div className="bg-neutral-900 rounded-lg shadow-lg p-8 max-w-lg w-full">
        <h2 className="text-center text-4xl text-neutral-400 mb-6">Contact Me</h2>
        <form onSubmit={onSubmit}>
            <div className="mb-4">
                <label htmlFor="f-name" className="block text-neutral-400 mb-1">Full Name</label>
                <input
                    type="text"
                    name="f-name"
                    required
                    placeholder="Full Name"
                    className="w-full p-3 bg-neutral-950 border border-neutral-600 rounded-lg text-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-neutral-400 mb-1">Email</label>
                <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    className="w-full p-3 bg-neutral-950 border border-neutral-600 rounded-lg text-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
            </div>
            <div className="mb-6">
                <label htmlFor="email-content" className="block text-neutral-400 mb-1">Message</label>
                <textarea
                    name="email-content"
                    required
                    placeholder="Message"
                    className="w-full p-3 bg-neutral-950 border border-neutral-600 rounded-lg text-neutral-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="5"
                ></textarea>
            </div>
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                Send
            </button>
        </form>
        </div> :
        <div>
            {isVisible &&
            <div className="flex items-center gap-10">
                <GiCheckMark className="text-center text-8xl text-green-500" />
                <h2 className="text-center text-4xl text-neutral-300 mb-6 my-5">
                Email Sent!</h2>
            </div>
            }
        </div>
      }
  </div>
}

export default Email;