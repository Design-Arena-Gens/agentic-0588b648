import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    title: "نتائج سريعة",
    description: "تجربة المستخدمين أثبتت فعالية المنتج من أول أسبوع بفضل تركيبته المبتكرة."
  },
  {
    title: "مكونات طبيعية 100%",
    description: "خالي من المواد الكيميائية الضارة، آمن للإستعمال اليومي ومناسب لكل الأعمار."
  },
  {
    title: "مصنوع للجزائر",
    description: "تم تطويره خصيصاً ليناسب السوق الجزائري بمتطلبات المناخ والعادات اليومية."
  }
];

const steps = [
  { title: "إختر الكمية", description: "حدّد عدد العلب التي تحتاجها وستستفيد من التوصيل المجاني." },
  { title: "أكد الطلب", description: "أرسل معلوماتك عبر الواتساب أو الهاتف وسنتواصل معك فوراً." },
  { title: "الدفع عند الإستلام", description: "ادفع بكل أمان عند استلامك للمنتج في أي ولاية جزائرية." }
];

const faqs = [
  {
    question: "هل التوصيل مجاني حقاً؟",
    answer: "نعم، نوفر خدمة التوصيل المجاني إلى جميع الولايات الجزائرية دون أي تكاليف إضافية."
  },
  {
    question: "كم يستغرق وصول الطلب؟",
    answer: "عادةً يصل الطلب خلال 24 إلى 72 ساعة حسب ولايتك، وسنوافيك برقم المتابعة."
  },
  {
    question: "هل يوجد ضمان للمنتج؟",
    answer: "نضمن لك الجودة الأصلية، وفي حال وجود أي مشكلة سنقوم بإستبدال المنتج فوراً."
  }
];

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid [background-size:32px_32px] opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80" />

      <section className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center px-6 pb-20 pt-32 text-center md:px-12">
        <span className="mb-4 inline-flex items-center rounded-full border border-primary/50 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
          عرض محدود في السوق الجزائري
        </span>
        <h1 className="mb-6 max-w-3xl font-heading text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          جرّب المنتج الأكثر طلباً الآن بسعر{" "}
          <span className="text-accent">3500 دينار جزائري</span> مع توصيل مجاني لكل الولايات
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-slate-200">
          قل وداعاً للمشاكل اليومية مع منتجنا الموثوق. جودة ممتازة، نتائج مضمونة، ودفع عند
          الإستلام بكل أمان.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="https://wa.me/213555555555"
            className="group inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-base font-semibold text-slate-950 transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            اطلب الآن عبر واتساب
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <a
            href="tel:+213555555555"
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3 text-base font-semibold text-white transition hover:border-white hover:bg-white/10"
          >
            تواصل عبر الهاتف
          </a>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-right backdrop-blur">
              <h3 className="mb-2 font-heading text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-slate-200">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="relative mt-16 w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-lg backdrop-blur">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/40 via-transparent to-accent/30 opacity-80" />
          <div className="grid items-center gap-8 p-8 md:grid-cols-2 md:p-12">
            <div className="text-right">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-accent">عرض حصري</p>
              <h2 className="mb-4 font-heading text-3xl font-bold text-white md:text-4xl">
                كل ما تحتاجه في منتج واحد
              </h2>
              <p className="mb-6 text-slate-200">
                تصميم عصري ومتين مع ضمان إستبدال مجاني. مناسب للإستعمال اليومي ويعطي إحساساً بالراحة طيلة اليوم.
              </p>
              <div className="flex flex-wrap items-center justify-end gap-4 text-right">
                <div className="rounded-2xl border border-accent/60 bg-accent/10 px-4 py-2">
                  <p className="text-xs text-accent/80">السعر الحالي</p>
                  <p className="font-heading text-2xl font-extrabold text-accent">3500 دج</p>
                </div>
                <div className="rounded-2xl border border-white/20 bg-white/10 px-4 py-2 text-left md:text-right">
                  <p className="text-xs text-slate-200/70">التوصيل</p>
                  <p className="font-semibold text-white">مجاني لكل الولايات</p>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="h-64 w-64 overflow-hidden rounded-full border border-white/20 bg-white/10 p-6 shadow-xl md:h-72 md:w-72">
                <Image
                  src="/product-hero.svg"
                  alt="صورة المنتج"
                  width={480}
                  height={480}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-slate-950/70 py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="mb-12 text-right">
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">كيف تطلب منتجك؟</h2>
            <p className="mt-3 text-slate-200">
              خطوات بسيطة لضمان وصول المنتج إليك بسرعة مع خدمة عملاء متاحة 7/7.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 text-right">
                <span className="absolute -top-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-xl font-bold text-slate-950 shadow-lg">
                  {index + 1}
                </span>
                <h3 className="mb-3 font-heading text-2xl font-semibold text-white">{step.title}</h3>
                <p className="text-sm text-slate-200">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-gradient-to-b from-slate-950 to-slate-900 py-20">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="mb-12 text-right">
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">آراء الزبائن</h2>
            <p className="mt-3 text-slate-200">ثقة أكثر من 5000 زبون في مختلف ولايات الوطن.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "سارة من الجزائر العاصمة",
                content: "وصلني المنتج في يومين فقط والتعامل كان محترف. الجودة ممتازة والسعر مناسب."
              },
              {
                name: "محمد من وهران",
                content: "أول مرة نجرب الطلب عبر الإنترنت وكان كل شيء واضح وسهل. سأطلب مرة أخرى."
              },
              {
                name: "ريم من قسنطينة",
                content: "أعجبني الأداء والتغليف الأنيق. شكراً على خدمة الزبائن والمتابعة."
              }
            ].map((testimonial) => (
              <div key={testimonial.name} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-right shadow-lg backdrop-blur">
                <p className="mb-4 text-sm text-slate-100">{testimonial.content}</p>
                <p className="font-heading text-sm font-semibold text-accent">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-slate-900/80 py-20">
        <div className="mx-auto max-w-4xl px-6 md:px-12">
          <div className="mb-12 text-right">
            <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">الأسئلة المتكررة</h2>
            <p className="mt-3 text-slate-200">لم تجد إجابتك؟ فقط راسلنا وسنجيب فوراً.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-right">
                <h3 className="font-heading text-xl font-semibold text-white">{faq.question}</h3>
                <p className="mt-2 text-sm text-slate-200">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-slate-950 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-tr from-primary/30 via-primary/10 to-accent/20 p-10 text-center shadow-2xl">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            لا تفوت الفرصة، العرض ساري لفترة محدودة!
          </h2>
          <p className="mt-4 text-slate-200">
            السعر الحالي 3500 دج فقط والتوصيل مجاني في كامل التراب الوطني. إحجز الآن وسنقوم بالتواصل معك لتأكيد
            كل التفاصيل.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="https://wa.me/213555555555"
              className="group inline-flex items-center justify-center rounded-full bg-accent px-8 py-3 text-base font-semibold text-slate-950 transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              أرسل معلوماتك الآن
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <span className="text-sm text-slate-200">
              أو اتصل مباشرة على <a href="tel:+213555555555" className="text-accent underline">+213 555 55 55 55</a>
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
