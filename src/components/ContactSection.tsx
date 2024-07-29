"use client";

import Image from "next/image";
import emailjs from "emailjs-com";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className={`text-white font-[700] text-[15px] w-fit h-fit px-10 py-4 rounded-full bg-[#b21eb2] hover:bg-[#b21eb2d5] disabled:cursor-not-allowed disabled:bg-[#f09df066] disabled:hover:bg-[#f094f044] mt-5 flex items-center gap-3 mx-auto`}
    >
      {pending ? <Loader2 className="w-5 h-5 animate-spin" /> : "Submit"}
    </button>
  );
};

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleSubmit = async (formData: FormData) => {
    try {
      const fullName = formData.get("full_name") as string;
      const email = formData.get("email") as string;
      const message = formData.get("message") as string;

      const response = await emailjs.send(
        "my_portfolio",
        "template_w6ignqa",
        {
          full_name: fullName,
          email: email,
          message: message,
        },
        "Iv9e36fJsbt6K3REd"
      );

      if (response.status !== 200) {
        alert("A server error occurred! Please try again 😥");
      }

      alert("Form submitted successfully! 🎉");
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="h-screen flex flex-col gap-5 justify-center items-center relative pb-[20vh] pt-[20vh]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src="/assets/images/30.png"
        alt="1"
        width={600}
        height={500}
        className="absolute right-0 top-[100px] z-[0px] select-none"
        draggable="false"
      />
      <Image
        src="/assets/images/14.png"
        alt="1"
        width={100}
        height={100}
        className="absolute hidden lg:flex right-0 top-[400px] z-[0px] select-none"
        draggable="false"
      />
      <Image
        src="/assets/images/22.png"
        alt="emmanuel"
        width={600}
        height={600}
        className="w-[500px] absolute left-0 top-[550px] rounded-full z-10 select-none"
        draggable="false"
      />
      <Image
        src="/assets/images/21.png"
        alt="1"
        width={500}
        height={500}
        className="absolute w-[1000px] left-0 top-[-100px] z-[0px] select-none"
        draggable="false"
      />
      <Image
        src="/assets/images/20.png"
        alt="1"
        width={500}
        height={500}
        className="absolute w-[900px] left-0 top-0 z-[0px] select-none"
        draggable="false"
      />

      <motion.h1
        className="w-full text-[50px] lg:text-[200px] font-[800] text-white leading-[110px] z-20 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Contact me
      </motion.h1>

      <motion.form
        action={handleSubmit}
        className="w-[95%] mx-auto lg:w-[800px] z-10 rounded-xl p-5 lg:p-10 border-[0.5px] border-[#b21eb2d5] lg:mt-10 flex flex-col gap-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="flex flex-col gap-2">
          <label
            htmlFor="full_name"
            className="text-[20px] font-[800] text-white"
          >
            Full name
          </label>
          <input
            type="text"
            name="full_name"
            placeholder="Enter your full name ..."
            id="full_name"
            className="rounded-full py-4 px-5 bg-gradient-to-r from-purple-800 to-purple-900 font-[400] text-white text-[15px] border-none ring-0 outline-none placeholder:text-white"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-[20px] font-[800] text-white">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email ..."
            id="email"
            className="rounded-full py-4 px-5 bg-gradient-to-r from-purple-800 to-purple-900 font-[400] text-white text-[15px] border-none ring-0 outline-none placeholder:text-white"
            required
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-[20px] font-[800] text-white"
          >
            Message
          </label>
          <textarea
            placeholder="Enter your full message ..."
            id="message"
            name="message"
            className="rounded-xl py-4 px-5 h-[200px] bg-gradient-to-r from-purple-800 to-purple-900 font-[400] text-white text-[15px] border-none ring-0 outline-none placeholder:text-white"
            required
          />
        </div>

        <SubmitButton />
      </motion.form>
    </motion.section>
  );
};

export default ContactSection;
