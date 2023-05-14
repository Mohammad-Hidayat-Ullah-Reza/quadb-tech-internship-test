import React, { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";

function Modal({ state }) {
  const getFormValues = () => {
    const storedValues = localStorage.getItem("temporaryUserData");
    if (!storedValues)
      return {
        name: "",
        email: "",
      };
    return JSON.parse(storedValues);
  };

  const [values, setValues] = useState(getFormValues());
  const {
    id,
    image,
    rating,
    summary,
    runtime,
    name,
    genres,
    language,
    premiered,
  } = state;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const subscription = watch((data) =>
      localStorage.setItem("temporaryUserData", JSON.stringify(data))
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = (data) => {
    localStorage.setItem("userData", JSON.stringify(data));
    localStorage.removeItem("temporaryUserData");
    setValues({ name: "", email: "" });
    toast.success("Form Submitted Successfully");
  };

  return (
    <>
      <Toaster />
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-6"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-2xl">Movie: {name && name}</h3>
          <div className="flex items-center gap-1 text-yellow-400 text-xl font-semibold my-3">
            <StarIcon className="h-6 w-6" />
            {rating.average && rating.average}
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2"
          >
            <label className="mt-2">Name:</label>
            <input
              className="p-2 rounded-sm"
              type="text"
              placeholder="write your name"
              defaultValue={values.name}
              onChange={register}
              {...register("name", { required: true })}
            />
            {errors.name && <span>This field is required</span>}

            <label className="mt-2">Email:</label>
            <input
              className="p-2 rounded-sm"
              type="email"
              placeholder="write your email address"
              defaultValue={values.email}
              onChange={register}
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}

            <div className="modal-action">
              <button
                className="btn btn-primary hover:bg-transparent hover:text-white cursor-pointer"
                type="submit"
              >
                <label htmlFor="my-modal-6" className="cursor-pointer">
                  Pay
                </label>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Modal;
