import { useForm } from "react-hook-form";
import { useState } from "react";
import { Error, LoginForm, LoginFormBtn, LoginFormInput } from "./index.style";

const Auth = () => {
  const [value, setValue] = useState();
  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  }

  return (
    <LoginForm>
      <h2 className="login__form-title">Kirish</h2>
      <form action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
        <label className="login__form-lb" htmlFor="#">
          <LoginFormInput
            type="tel"
            country="Uz"
            onChange={setValue}
            value={value}
            {...register(`tel`, {
            required: "Iltimos maydonni to'ldiring!",
          })} />
        </label>
        <Error>
          {errors?.tel && <p>{errors?.tel?.message || "Error!"}</p>}
        </Error>
        <label className="login__form-lb" htmlFor="#">
          <LoginFormInput type="password" {...register(`password`, {
            required: "Iltimos maydonni to'ldiring!",
            maxLength: 6,
          })} />
        </label>
        <Error>
          {errors?.password && <p>{errors?.password?.message || "6ta sondan ko'p yozib bo'lmaydi!"}</p>}
        </Error>
        <LoginFormBtn>Tasdiqlash</LoginFormBtn>
      </form>
    </LoginForm>
  )
}

export default Auth;