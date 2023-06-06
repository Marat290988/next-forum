import { isEmail, isNotOnlyNumber, maxLength, minLength } from "@/utils/validate-util";
import { useState } from "react";

interface ICustomFormItem {
  name: string,
  type: 'text' | 'email' | 'password'
  validations: {type: ValidationType, value: string | number}[],
  invalid?: boolean,
  errorMessage?: string,
  isTouch?: boolean,
  value?: string
}

const getFormItem = (item: ICustomFormItem): ICustomFormItem => {
  return {
    ...item,
    invalid: item.validations.length > 0 ? true : false,
    errorMessage: undefined,
    isTouch: false,
    value: ''
  };
}

const createFormObject = (formsItems: ICustomFormItem[]): {[key: string]: ICustomFormItem} => {
  const formObject: {[key: string]: ICustomFormItem} = {};
  formsItems.forEach(formItem => {
    formObject[formItem.name] = getFormItem(formItem);
  });
  return formObject;
}

type ValidationType = 'min' | 'max' | 'isEmail' | 'notOnlyNumber';

export const useMyCustomForm = (formsItems: ICustomFormItem[]) => {
  const [formObj, setFormObj] = useState(createFormObject(formsItems));

  const makeTouch = (key: string, value: string): void => {
    setFormObj(fObj => {
      fObj[key].isTouch = true;
      setField(key, value);
      return {...fObj};
    });
  };

  const setField = (key: string, value: string): void => {
    setFormObj(fObj => {
      fObj[key].value = value;
      return {...fObj};
    });
    const validateList: {type: ValidationType, value: string | number}[] = formObj[key].validations;
    let error = false;
    for (let i = 0; i < validateList.length; i++) {
      if (validateList[i].type === 'min') {
        error = minLength(+validateList[i].value, value);
        if (error && formObj[key].isTouch) {
          setFormObj(fObj => {
            fObj[key].invalid = true;
            fObj[key].errorMessage = 'Minimum length 6 characters';
            return {...fObj};
          });
          break;
        }
      }
      if (validateList[i].type === 'max') {
        error = maxLength(+validateList[i].value, value);
        if (error && formObj[key].isTouch) {
          setFormObj(fObj => {
            fObj[key].invalid = true;
            fObj[key].errorMessage = 'Max length 20 characters';
            return {...fObj};
          });
          break;
        }
      }
      if (validateList[i].type === 'isEmail') {
        error = isEmail(value);
        if (error && formObj[key].isTouch) {
          setFormObj(fObj => {
            fObj[key].invalid = true;
            fObj[key].errorMessage = 'Invalid email';
            return {...fObj};
          });
          break;
        }
      }
      if (validateList[i].type === 'notOnlyNumber') {
        error = isNotOnlyNumber(value);
        if (error && formObj[key].isTouch) {
          setFormObj(fObj => {
            fObj[key].invalid = true;
            fObj[key].errorMessage = 'The field cannot contain only numbers';
            return {...fObj};
          });
          break;
        }
      }
    }
    if (!error && formObj[key].isTouch) {
      setFormObj(fObj => {
        fObj[key].invalid = false;
        fObj[key].errorMessage = undefined;
        return {...fObj};
      });
    }
  }

  return {makeTouch, formObj, setField};
}