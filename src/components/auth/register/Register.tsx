import { InputField } from "@/components/input-field/InputField";
import { MyButton } from "@/components/ui/MyButton/MyButton";
import { IForm } from "@/screens/auth/Auth";
import { AuthService } from "@/services/auth/auth.service";
import { FC, FormEvent } from "react";

export const Register: FC<IForm> = ({
  formObj, makeTouch, resetFormObj, setField, isValidForm
}) => {

  const register = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const registerData: {[key: string]: string | undefined} = {};
    Object.keys(formObj).forEach(key => {
      registerData[key] = formObj[key].value;
    });
    const response = await AuthService.register(JSON.stringify(registerData));
    console.log(response)
  }

  return (
    <form
      className="w-full p-[10px] flex flex-col items-center"
      onSubmit={register}
    >
      <InputField
        title="Name"
        type="text"
        errorMessage={formObj["name"].errorMessage}
        name="name"
        onChangeHandler={setField}
        onBlurHandler={makeTouch}
        isTouch={formObj["name"].isTouch}
      />
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
        REGISTER
      </MyButton>
    </form>
  );
}