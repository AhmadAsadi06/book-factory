import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';

export default function RegisterPage() {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleCaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const validateUsername = (name) => /^[a-zA-Z]{3,15}$/.test(name);
  const validatePersianEnglishName = (name) =>
    /^[\u0600-\u06FFa-zA-Z\s]{2,30}$/.test(name.trim());
  const validateMobile = (num) => /^\d{11}$/.test(num);
  const validateEmail = (mail) =>
    mail === '' || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
  const validatePassword = (pass) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(pass);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert("لطفاً کپچا را حل کنید.");
      return;
    }
    if (!validateUsername(username)) {
      alert('نام کاربری باید فقط شامل حروف انگلیسی و بین ۳ تا ۱۵ کاراکتر باشد.');
      return;
    }
    if (!validatePersianEnglishName(firstName)) {
      alert('نام باید بین ۲ تا ۳۰ کاراکتر باشد و فقط شامل حروف فارسی، انگلیسی و فاصله باشد.');
      return;
    }
    if (!validatePersianEnglishName(lastName)) {
      alert('نام خانوادگی باید بین ۲ تا ۳۰ کاراکتر باشد و فقط شامل حروف فارسی، انگلیسی و فاصله باشد.');
      return;
    }
    if (!validateMobile(mobile)) {
      alert('شماره موبایل باید دقیقا ۱۱ رقم عددی باشد.');
      return;
    }
    if (!validateEmail(email)) {
      alert('لطفاً یک ایمیل معتبر وارد کنید یا خالی بگذارید.');
      return;
    }
    if (!validatePassword(password)) {
      alert('رمز عبور باید حداقل ۸ کاراکتر باشد و شامل حداقل یک حرف بزرگ، یک حرف کوچک، یک عدد و یک کاراکتر ویژه باشد.');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/X/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          first_name: firstName,
          last_name: lastName,
          mobile: mobile,
          email: email,
          password: password,
          recaptcha_token: recaptchaToken,
        }),
      });

      const data = await response.json();

      console.log("پاسخ سرور:", data);

      if (response.ok) {
        alert("ثبت‌نام با موفقیت انجام شد.");
      } else {
        alert("خطا در اطلاعات ارسالی: " + JSON.stringify(data));
      }
    } catch (error) {
      console.error("خطا در ارسال درخواست:", error);
      alert("اتصال به سرور ممکن نیست.");
    }
  };

  return (
    <div className="bg-[#f9f2e8] dark:bg-gray-900 min-h-screen flex flex-col rtl font-sans transition-colors duration-300" dir="rtl">
      <div className="flex-grow overflow-y-auto flex items-center justify-center px-4 py-10 sm:px-8 md:px-16 lg:px-32 xl:px-64">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-[#e6cb81] dark:bg-[#3a2d18] shadow-md rounded-2xl p-6 sm:p-8 transition-colors duration-300"
        >
          <h2 className="text-center mb-5 text-lg sm:text-xl font-bold text-black dark:text-white">فرم ثبت‌نام</h2>

          <label className="block mt-2 mb-1 text-sm sm:text-base text-black dark:text-white">نام کاربری (برای ورود):</label>
          <input
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="نام کاربری"
            className="w-full p-3 border border-black dark:border-gray-500 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg mb-2"
          />

          <label className="block mt-2 mb-1 text-sm sm:text-base text-black dark:text-white">نام:</label>
          <input
            type="text"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="نام"
            className="w-full p-3 border border-black dark:border-gray-500 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg mb-2"
          />

          <label className="block mt-2 mb-1 text-sm sm:text-base text-black dark:text-white">نام خانوادگی:</label>
          <input
            type="text"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="نام خانوادگی"
            className="w-full p-3 border border-black dark:border-gray-500 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg mb-2"
          />

          <label className="block mt-2 mb-1 text-sm sm:text-base text-black dark:text-white">شماره موبایل:</label>
          <input
            type="text"
            required
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="شماره موبایل"
            className="w-full p-3 border border-black dark:border-gray-500 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg mb-2"
          />

          <label className="block mt-2 mb-1 text-sm sm:text-base text-black dark:text-white">ایمیل (اختیاری):</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ایمیل"
            className="w-full p-3 border border-black dark:border-gray-500 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg mb-2"
          />

          <label className="block mt-4 mb-1 text-sm sm:text-base text-black dark:text-white">رمز عبور:</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="رمز عبور"
              className="w-full p-3 pr-12 border border-black dark:border-gray-500 bg-white dark:bg-gray-800 text-black dark:text-white rounded-lg mb-2"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
              aria-label={showPassword ? "مخفی کردن رمز عبور" : "نمایش رمز عبور"}
              title={showPassword ? "مخفی کردن رمز عبور" : "نمایش رمز عبور"}
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-5 0-9-4-9-9a9.96 9.96 0 012.092-5.577m1.012 1.012A5.002 5.002 0 0012 13a4.978 4.978 0 002.616-.752M15 15l3 3m-3-3l-3-3" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              )}
            </button>
          </div>

          <div className="mt-4 flex justify-center">
            <ReCAPTCHA
              sitekey="6Lebi4ArAAAAAKK01bDoe3t_m92ybo_uqNP5NGWt"
              onChange={handleCaptchaChange}
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-[#84744f] dark:bg-[#a8994f] text-white py-3 rounded-lg font-semibold hover:bg-[#6b6337] dark:hover:bg-[#a8994f]/90 transition-colors duration-300"
          >
            ثبت‌نام
          </button>

          <p className="mt-4 text-center text-sm text-black dark:text-white">
            قبلاً ثبت‌نام کرده‌اید؟{' '}
            <Link
              to="/login"
              className="text-[#84744f] dark:text-[#a8994f] font-semibold hover:underline"
            >
              ورود
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
