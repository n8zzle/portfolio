import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
type Props = {};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:cickalenkowork@outlook.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}.${formData.message} (${formData.email})`;
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact Me
      </h3>

      <div className="mt-32 flex flex-col space-y-2 md:space-y-10">
        <h4 className="text-lg md:text-4xl font-semibold text-center">
          I have got just what you need{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Lets talk</span>
        </h4>

        <div className="space-y-2 md:space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-sm md:text-lg">017632704135</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-sm md:text-lg">Berlin, 13589 Elmweg</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-sm md:text-lg">cickalenkowork@outlook.com</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-screen md:w-fit mx-auto p-5 "
        >
          <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          ></textarea>
          <button className="bg-[#F7AB0A] py-3 px-5 md:py-5 md:px-10 rounded-sm text-black font-bold text-sm md:text-lg">
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default ContactMe;
