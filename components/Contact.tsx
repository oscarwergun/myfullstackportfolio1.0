import React from "react";
import { BiMailSend, BiPhoneCall } from "react-icons/bi";
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { useForm, SubmitHandler } from "react-hook-form";
import {pageInfo} from '../typings'
// define types for input variable
type Inputs = {
  name: string;
  surname: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {
  pageInfo: pageInfo,
  title:String
};

export default function Contact({pageInfo, title}: Props) {
  // useForm hook har 2 handler
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:oscar.w.ergun@gmail?subject=${data.subject}&body=Hi, This is ${data.name} ${data.surname} and I reach you because of ${data.subject} I want to talk about ${data.message} and my mail is ${data.email} `;
  };
  return (
    <div className='relative flex flex-col items-center h-screen px-10 mx-auto text-center md:flex-row md:text-left max-w-7xl justify-evenly snap-center'>
      <h2 className="pageTitle">{title}</h2>

      <div className="flex flex-col items-center justify-center mt-24 space-x-5">
        <h3 className="mb-6 text-2xl">I am ready for new challenge.</h3>
        <div className="flex items-center gap-1">
          <span className=" underline decoration-[#f09f3d] text-2xl">
            Let&apos;s have a chat{" "}
          </span>
          <BiMailSend color="orange" size="2em" />
        </div>
        <div className="flex flex-col items-center justify-center mt-6 space-y-8">
          <div className="flex items-center justify-center space-x-4 animate-pulse">
            <BiPhoneCall color="orange" size="2em" />
            <p className="text-xl">{pageInfo?.phoneNumber}</p>
          </div>
          <div className="flex items-center justify-center space-x-4 animate-pulse">
            <AiOutlineMail color="orange" size="2em" />
            <p className="text-xl">{pageInfo?.email}</p>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <AiOutlineHome color="orange" size="2em" />
            <p className="text-xl">{pageInfo?.address}</p>
          </div>
        </div>
        {/* react-form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col px-4 mx-auto my-4 space-y-5 w-fit"
        >
          <div className="flex items-center justify-center gap-3">
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Name"
              className="contactInputStyle"
            />
            <input
              {...register("surname", { required: true })}
              type="text"
              placeholder="Surname"
              className="contactInputStyle"
            />
          </div>
          <input
            {...register("email", { required: true })}
            type="email"
            placeholder="Email"
            className="contactInputStyle"
          />
          <input
            {...register("subject")}
            type="text"
            className="contactInputStyle"
            placeholder="Subject"
          />
          <textarea
            {...register("message")}
            name=""
            id=""
            placeholder="Message"
            className="contactInputStyle"
          />

          <input
            type="submit"
            className="bg-[#f09f3d] py-4 rounded-md text-2xl text-[#333] font-semibold relative border-none cursor-pointer  hover:text-[#fafafa]"
          />
        </form>
      </div>
    </div>
  );
}
