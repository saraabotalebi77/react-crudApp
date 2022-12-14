
import {object,string} from 'yup';
export const userSchema = object({
  firstName : string().required("وارد کردن نام الزامی است").min(3,"نام نمیتواند کمتر از ۳ کلمه باشد"),
  lastName : string().required("وارد کردن نام خانوادگی الزامی است").min(3,"نام خانوادگی نمیتواند کمتر از ۳ کلمه باشد"),
  email : string().required("وارد کردن ایمیل الزامی است").matches(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"فرمت ایمیل صحیح نیست"),
  phoneNumber : string().required("وارد کردن شماره موبایل الزامی است").required("وارد کردن شماره موبایل الزامی است").matches(/^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/,"فرمت شماره موبایل صحیح نیست"),
})