import React from "react";

function ShippingTerms() {
  return (
    <div className="container mx-auto px-4 py-10 text-gray-800 dark:text-gray-200 font-iranyekan">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-[#882E1B] dark:text-orange-400">شرایط ارسال سفارش</h1>


      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">⏱ زمان تحویل سفارش</h2>
        <p>
          تمام سفارش‌ها از <strong>استان قم</strong> ارسال می‌شوند و مدت‌زمان تحویل بسته به مقصد متفاوت است:
        </p>
        <ul className="list-disc pr-6 mt-2 space-y-1">
          <li><strong>درون استان قم:</strong> بین ۱ تا ۲ روز کاری</li>
          <li><strong>سایر استان‌ها:</strong> حداکثر تا ۵ روز کاری</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">📢 اطلاعیه در روزهای تعطیل</h2>
        <p>
            در ایام تعطیلات رسمی یا مناسبت‌های خاص، ممکن است ارسال سفارش‌ها با تأخیر یک روز کاری انجام شود. در این شرایط، اطلاع‌رسانی از طریق سایت و پیامک به مشتریان انجام می‌شود.
        </p>
      </section>


      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">🚚 روش ارسال</h2>
        <p>
          تمام مرسولات از انبار بوک فکتوری جمع‌آوری و از طریق <strong>پست جمهوری اسلامی ایران</strong> برای شما ارسال می‌شوند.
        </p>
        <p className="mt-2">
          در حال حاضر، ارسال فقط به شهرهای داخل ایران انجام می‌شود و ارسال بین‌المللی فعال نیست.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">💰 هزینه ارسال</h2>
        <p>
            هزینه انتقال بسته از انبار به اداره پست، مبلغ ثابت 
            <strong className="text-[#882E1B] dark:text-orange-400"> ۵۰٬۰۰۰ تومان</strong> است که هنگام پرداخت نهایی به مجموع مبلغ سفارش شما اضافه می‌شود.
        </p>

      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">📦 نحوه پیگیری سفارش</h2>
        <p>
          پس از تحویل مرسوله به اداره پست، کد رهگیری برای شما پیامک یا ایمیل می‌شود. با استفاده از این کد، می‌توانید وضعیت بسته را از طریق سایت شرکت پست پیگیری کنید.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">📞 پشتیبانی ارسال</h2>
        <p>
          در صورت بروز تأخیر یا نیاز به راهنمایی، با پشتیبانی ایران‌کتاب در تماس باشید:
        </p>
        <p className="mt-2 font-medium">
            ۰۲۱-۶۲۹۹۹۹۳۵ | <a href="/contact-us" className="text-[#882E1B] dark:text-orange-400 underline">تماس با ما</a>
        </p>

      </section>
    </div>
  );
}

export default ShippingTerms;
