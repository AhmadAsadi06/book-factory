import React from "react";

function PaymentMethod() {
  return (
    <div className="container mx-auto px-4 py-10 text-gray-800 dark:text-gray-200 font-iranyekan leading-loose">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-[#882E1B] dark:text-orange-400">
        شیوه پرداخت در بوک فکتوری
      </h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">💳 پرداخت آنلاین (درگاه بانکی)</h2>
        <p>
          تمامی پرداخت‌ها در فروشگاه ایران‌کتاب به‌صورت آنلاین و از طریق درگاه‌های پرداخت بانکی امن انجام می‌شود.
          شما می‌توانید با استفاده از کارت‌های عضو شتاب، مبلغ سفارش خود را پرداخت نمایید.
        </p>
        <p className="mt-2">
          پس از ثبت سفارش، به درگاه پرداخت منتقل خواهید شد. اطلاعات کارت شما رمزنگاری شده و به‌صورت امن از طریق بانک پردازش می‌شود.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🛡 امنیت پرداخت</h2>
        <p>
          فروشگاه ایران‌کتاب از پروتکل امن SSL برای محافظت از اطلاعات شما استفاده می‌کند. اطلاعات کارت بانکی شما نزد ما ذخیره نمی‌شود و فقط در اختیار درگاه بانکی قرار می‌گیرد.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">❓ سوالات متداول</h2>
        <ul className="list-disc pr-6 mt-2 space-y-2">
          <li>در صورت ناموفق بودن پرداخت، می‌توانید مجدداً از طریق پنل کاربری یا بخش پیگیری سفارش اقدام کنید.</li>
          <li>اگر مبلغ از حساب شما کسر شد اما سفارش ثبت نشد، وجه طی ۷۲ ساعت توسط بانک به حساب شما بازمی‌گردد.</li>
          <li>در صورت نیاز به راهنمایی با پشتیبانی تماس بگیرید: <strong>۰۲۱-۶۲۹۹۹۹۳۵</strong></li>
        </ul>
      </section>
    </div>
  );
}

export default PaymentMethod;
