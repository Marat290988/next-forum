import { InputField } from "@/components/input-field/InputField";
import { MyButton } from "@/components/ui/MyButton/MyButton";
import { IForm } from "@/screens/auth/Auth";
import { FC, FormEvent } from "react";

export const Login: FC<IForm> = ({
  formObj, makeTouch, resetFormObj, setField, isValidForm
}) => {

  const register = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formObj)
  }

  return (
    <form
      className="w-full p-[10px] flex flex-col items-center"
      onSubmit={register}
    >
      <InputField
        title="Email"
        type="email"
        errorMessage={formObj["email"].errorMessage}
        name="email"
        onChangeHandler={setField}
        onBlurHandler={makeTouch}
        isTouch={formObj["email"].isTouch}
      />
      <InputField
        title="Password"
        type="password"
        errorMessage={formObj["password"].errorMessage}
        name="password"
        onChangeHandler={setField}
        onBlurHandler={makeTouch}
        isTouch={formObj["password"].isTouch}
      />
      <MyButton
        type='submit'
        canClick={isValidForm}
      >
        LOGIN
      </MyButton>
    </form>
  );
}