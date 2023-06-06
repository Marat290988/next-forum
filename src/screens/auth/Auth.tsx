"use client";

import { InputField } from "@/components/input-field/InputField";
import { MyButton } from "@/components/ui/MyButton/MyButton";
import { useMyCustomForm } from "@/hooks/useMyCustomForm";
import styles from "@/screens/auth/Auth.module.scss";
import React, { FC, useState, useEffect } from "react";

export const Auth: FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { makeTouch, formObj, setField, resetFormObj } = useMyCustomForm([
    {
      name: "name",
      type: "text",
      validations: [
        { type: "min", value: 6 },
        { type: "max", value: 20 },
        { type: "notOnlyNumber", value: "" },
      ],
    },
    {
      name: "email",
      type: "email",
      validations: [{ type: "isEmail", value: "" }],
    },
    {
      name: "password",
      type: "password",
      validations: [
        { type: "min", value: 6 },
        { type: "max", value: 20 },
        { type: "notOnlyNumber", value: "" },
      ],
    },
  ]);

  const setLogin = () => {
    setIsLogin(true); 
    resetFormObj();
  }

  const setRegister = () => {
    setIsLogin(false); 
    resetFormObj();
  }

  return (
    <main className="h-full flex justify-center items-center px-[10px]">
      <div className="max-w-[500px] w-full border-color-dark rounded-tl-lg rounded-tr-lg overflow-hidden">
        <div className={`flex ${styles["header-form"]}`}>
          <h3
            className={`title-font3 grow p-[8px] ${
              isLogin ? styles.active : ""
            } ${styles["auth-title"]}`}
            onClick={setLogin}
          >
            LOGIN
          </h3>
          <h3
            className={`title-font3 grow p-[8px] ${styles["auth-title"]} ${
              !isLogin ? styles.active : ""
            }`}
            onClick={setRegister}
          >
            REGISTER
          </h3>
        </div>

        {!isLogin && <form className="w-full p-[10px] flex flex-col items-center">
          <InputField
            title="Name"
            type="text"
            errorMessage={formObj["name"].errorMessage}
            name="name"
            onChangeHandler={setField}
            onBlurHandler={makeTouch}
          />
          <InputField
            title="Email"
            type="email"
            errorMessage={formObj["email"].errorMessage}
            name="email"
            onChangeHandler={setField}
            onBlurHandler={makeTouch}
          />
          <InputField
            title="Password"
            type="password"
            errorMessage={formObj["password"].errorMessage}
            name="password"
            onChangeHandler={setField}
            onBlurHandler={makeTouch}
          />
        </form>}
        {isLogin && <form className="w-full p-[10px] flex flex-col items-center">
          <InputField
            title="Email"
            type="email"
            errorMessage={formObj["email"].errorMessage}
            name="email"
            onChangeHandler={setField}
            onBlurHandler={makeTouch}
          />
          <InputField
            title="Password"
            type="password"
            errorMessage={formObj["password"].errorMessage}
            name="password"
            onChangeHandler={setField}
            onBlurHandler={makeTouch}
          />
          <MyButton
            buttonClick={(e) => {e.preventDefault(); setIsLoading(ld => !ld)}}
            type='submit'
            isLoading={isLoading}
          >
            LOGIN
          </MyButton>
        </form>}
      </div>
    </main>
  );
};
