import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    const templateParams = {
      subject: data.subject,
      message: data.details,
      recipient_email: data.email,
      company_name: data.company,
    };

    emailjs
      .send(
        "service_dmdhx5l",
        "template_hwcnhzf",
        templateParams,
        "xnZxq3X39sDRKR9X0"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Email sent successfully!");
        reset();
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Failed to send email. Please try again.");
      });

    console.log(data);
  };

  return (
    <div
      id="contact"
      className="mt-[40vh] max-sm:mt-[60vh] flex flex-col justify-center items-center gap-10 max-sm:ml-20"
    >
      <div className="text-2xl flex flex-col justify-center items-center">
        <div>Let's Build Together</div>
        <div
          id="togather"
          className="my-2 w-[40vw] max-sm:w-[70vw] animated-border"
        />
      </div>

      <form
        onSubmit={handleSubmit(submit)}
        className="form flex flex-col justify-start items-start gap-6"
      >
        <div className="flex items-center gap-x-4 w-full max-sm:flex-col max-sm:-ml-[10vw]">
          <label className="text-white w-36" htmlFor="company">
            Company Name
          </label>
          <input
            id="company"
            className="input border-2 border-white max-md:w-[40vw] max-sm:w-80 px-4"
            {...register("company", {
              required: "Company Name Please",
            })}
          />
        </div>
        {errors.company && (
          <p className="text-red-500 text-sm -mt-5 self-center">
            {errors.company.message}
          </p>
        )}

        <div className="flex items-center gap-x-4 w-full max-sm:flex-col max-sm:-ml-[10vw]">
          <label className="text-white w-36" htmlFor="email">
            Company Email
          </label>
          <input
            id="email"
            className="input border-2 border-white max-md:w-[40vw] max-sm:w-80 px-4"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "a valid email please",
              },
            })}
          />
        </div>
        {errors.email && (
          <p className="text-red-500 text-sm -mt-5 self-center -ml-16">
            {errors.email.message}
          </p>
        )}

        <div className="flex items-center gap-x-4 w-full max-sm:flex-col max-sm:-ml-[10vw]">
          <label className="text-white w-36" htmlFor="subject">
            Subject
          </label>
          <input
            id="subject"
            className="input border-2 border-white max-md:w-[40vw] max-sm:w-80 px-4"
            {...register("subject", {
              required: "Subject is required",
            })}
          />
        </div>
        {errors.subject && (
          <p className="text-red-500 text-sm -mt-5 self-center -ml-16">
            {errors.subject.message}
          </p>
        )}

        <div className="flex items-center gap-x-4 w-full max-sm:flex-col max-sm:-ml-[10vw]">
          <label className="text-white w-36" htmlFor="details">
            Details
          </label>
          <textarea
            rows={4}
            cols={34}
            id="details"
            className="input border-2 border-white  px-5"
            {...register("details", {
              required: "Details will be appreciated",
              minLength: {
                value: 10,
                message: "Give me more info",
              },
            })}
          />
        </div>
        {errors.details && (
          <div className="-mt-5 self-center">
            <p className="text-red-500 text-sm mt-1 -ml-5">
              {errors.details.message}
            </p>
          </div>
        )}

        <div className="flex items-center self-center gap-x-4 w-full max-sm:flex-col">
          <input
            type="submit"
            value="Hire me"
            className="cursor-pointer border-2 rounded-xl text-sm p-1 max-sm:-ml-12"
          />
        </div>

        <div
          id="togather"
          className="my-2 w-[40vw] max-sm:w-[90vw] max-sm:-ml-14 animated-border"
        />
      </form>
    </div>
  );
};

export default Contact;
