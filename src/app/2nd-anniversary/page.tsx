import Image from "next/image"
import { logoFont, rubik, vazirMatn } from "../utils/fonts"
import ImageGallery from "../components/2nd-anniversary/ImageGallery"
import Link from "next/link"
import AnniversaryForm from "../components/2nd-anniversary/AnniversaryForm"
import AnniversaryMemorial from "../components/2nd-anniversary/AnniversaryMemorial"
import { Suspense } from "react"
import AnniversaryMemorialSkeleton from "../components/2nd-anniversary/AnniversaryMemorialSkeleton"
import { getLists } from "../utils/actions/getLists"

const Page = async () => {
  const lists = await getLists()
  return (
    <div className={vazirMatn.className}>
      <div className="relative h-[400px] slider active">
        <Image
          unoptimized
          src="/images/NewVersion2.png"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 100vw, 100vw"
          alt=""
          className="object-cover brightness-50"
        />
      </div>
      <div className="px-6 xl:px-36 lg:px-16 gap-7 mt-10" dir="rtl">
        <h1 className="text-5xl max-lg:text-3xl font-black text-center text-[#00925daa]">
          ۲ سالگی نکست مووی؛ راهی طولانی برای یک پروژه قلبی
        </h1>
        <div className="flex max-lg:flex-col items-start justify-start gap-16 h-max mt-12">
          <p className="text-[#9CA4AB] w-full text-lg font-light">
            از وقتی فیلم دیدن رو شروع کردم همیشه این پروژه تو ذهنم بود که بتونم
            فیلم ها و سریال های مورد علاقمو تو یه جایی قرار بدم که در معرض دید
            همه باشه. اما اون زمان با تکنولوژی ها یا فریمورک هایی آشنا نبودم که
            بتونه ایده هام رو اونجوری که میخوام پیاده سازی کنه. همزمان با شروع
            فیلمباز شدنم در حال کسب تجربه درباره تکنولوژی و کامپیوتر بودم و
            اجرای این ایده هر روز برام ساده تر به نظر میرسید اما چند سال طول
            کشید تا این ایده از توی ذهن تبدیل به عمل بشه.
          </p>
          <div className="w-full h-full">
            <div className="relative aspect-video rounded-2xl border border-[#3b3b3b]">
              <Image
                src="/images/Iamlegend.jpg"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover rounded-2xl"
                alt=""
              />
            </div>
            <p className="text-sm text-center text-stone-600 mt-4">
              فیلم I AM Legend فیلمی که استارت فیلمباز شدن منو زد
            </p>
          </div>
        </div>
        <h3 className="text-4xl max-lg:text-2xl mt-12 font-medium">
          از پایتون تا ری اکت
        </h3>
        <p className="text-[#9CA4AB] mt-4 whitespace-break-spaces">
          بعد از پایان دوران مدرسه، قبل از ورود به دانشگاه خواستم پروژه ای رو
          اجرا بکنم که توانایی های من رو در دنیای کد نویسی نشون بده، اولین چیزی
          که به ذهنم رسید یک ربات تلگرامی بود که توی اون کاربر ها میتونستن فیلم
          های مورد علاقشون رو وارد کنن و خیلی فیچر های دیگه داشت. شروع کردم به
          گشتن منابع مختلف و دیدم پایتون بهترین زبان برای ساختن ربات تلگرامیه
          ولی بعد از مدتی از ساختن این ربات منصرف شدم چون هیچی از پایتون بلد
          نبودم. تصمیم گرفتم یک زبان رو برای یادگیری انتخاب کنم و اون php بود.
          php رو یاد گرفتم و حتی چند تا چیز تستی هم باهاش ساختم. تا اینکه وارد
          دانشگاه شدم و اونجا بود که یکی از دوستام بهم پیشنهاد داد که بیام سمت
          دنیای فرانت اند و منم پیشنهادشو قبول کردم. بعد از یادگیری اون چیزایی
          که نیاز داشتم. اینبار تصمیم گرفتم یک پروژه بزرگ بزنم و اینجا بود که
          Next Movie اومد توی ذهنم. بعد از دیدن چندین طرح با طرح SaintStorm
          استارت کار پروژه رو زدم.
        </p>
        <div className="">
          <div className="w-full aspect-video relative rounded-2xl border border-[#3b3b3b] mt-8">
            <Image
              src="/images/NextThumbnail.png"
              fill
              sizes="(max-width: 1024px) 100vw, 80vw"
              className="object-cover aspect-video rounded-2xl"
              alt=""
            />
          </div>
          <p className="text-sm text-center text-stone-600 mt-4 whitespace-pre-wrap">
            طرح SaintStorm ساخته Irvan Wibowo
            <br /> البته اضافه بکنم که یک سری از صفحات و کامپوننت هم طراحی خودم
            بود و در این طرح وجود خارجی نداشت
          </p>
          <h3 className="text-4xl max-lg:text-2xl mt-12 font-medium">
            Next Movie ماحصل نه ماه تجربه و تلاش
          </h3>
          <p className="text-[#9CA4AB] mt-4 whitespace-break-spaces">
            در ابتدای شروع پروژه Next Movie هنوز خیلی از مفاهیم ری اکت و نکست رو
            یاد نگرفته بودم و علاوه بر این مفاهیم، در ساختار پروژه از
            جاوااسکریپت به جای تایپ اسکریپت استفاده شده بود. کد بیس پروژه هم
            مشکلات کامپوننت بندی و ریفکتور زیادی داشت اما چیزی که باعث شد کیفیت
            این پروژه از زمان ابتدا تا انتها خیلی فرق بکنه، پروژه های همزمانی
            بود که در کنار این پروژه مشغول به ساختنشون بودم و وقتی کارم با اون
            پروژه ها تموم شد اومدم و همه وقتم رو گذاشتم روی Next Movie و کد بیسش
            رو از پایه و اساس تغییر دادم.
            <br />
            همه این مراحل از یادگیری مفاهیم پایه جاوا اسکریپت تا تکمیل Next
            movie حدود نه ماه طول کشید و در این نه ماه جمع تجربیات و کارهایی که
            کردم حاصلشون Next movie بود. در ادامه عکس هایی دیده نشده در طول ساخت
            این پروژه رو میارم که شاید براتون جالب باشه. (برای دیدن عکس ها روشون
            کلیک کنید)
          </p>
          <ImageGallery />
          <h3 className="text-4xl max-lg:text-2xl mt-12 font-medium">
            <span className={rubik.className}>Remember The Names ;</span> دوستان
            همراه در این پروژه
          </h3>
          <p className="text-[#9CA4AB] mt-4 whitespace-break-spaces">
            دوستان زیادی در طول پروژه من رو راهنمایی کردن و مستقیم یا غیر مستقیم
            بهم کمک رسوندن. بعد از پروژه هم دوستانی زحمت کشیدن و درباره پروژه
            بهم فیدبک دادن که نظراتشون قطعا در پروژه های بعدی موثر واقع شد. به
            همین دلیل تصمیم گرفتم اسمشون رو برای یادبود اینجا بنویسم تا کمکشون
            هیچوقت فراموش نشه
          </p>
          <div className="w-max h-max border rounded-2xl border-[#00925daa] shadow-[0_0_5px_#00925d,0_0_15px_#00925d,0_0_35px_#00925daa,0_0_70px_#00925d66] mt-8 px-24 py-6 max-lg:px-8 text-white mx-auto text-center space-y-4">
            <p className="font-black text-xl ">علی اکبر (اِبی)</p>
            <Link
              className="font-black text-xl block"
              href="https://github.com/M0BIN-V"
            >
              مبین (MOBIN.V)
            </Link>
            <p className="font-black text-xl">رضا (R9ZA)</p>
            <p className="font-black text-xl">علی طبا</p>
            <p className="font-black text-xl">احسان</p>
            <p className="font-black text-xl">پویان</p>
            <p className="font-black text-xl">امیر حسین</p>
            <Link
              className="font-black text-xl block"
              href="https://github.com/ariaper"
            >
              آریا (محمدرضا)
            </Link>
            <p className="font-black text-xl">ابوالفضل د (Harry Shooter)</p>
            <p className="font-black text-xl">ابوالفضل PFX</p>
          </div>
        </div>
      </div>
      <div
        className="px-6 xl:px-36 lg:px-16 gap-7 mt-10 bg-[#08080A] py-4"
        dir="rtl"
      >
        <h3 className="text-4xl mt-12 font-medium">یادبود شما در Next Movie</h3>
        <p className="text-[#9CA4AB] mt-4 whitespace-break-spaces">
          برای دومین سالگرد نکست مووی تصمیم گرفتم علاوه بر رفع باگ ها و بهبود UI
          امکان جدیدی رو به نکست مووی اضافه کنم. امکانی که قراربود تو ربات
          پایتون پروژه فیلم من باشه و اون هم پیشنهاد فیلم و سریال توسط شماست.
          <br />
          البته این امکان قراره به مدت محدودی تو این سایت قرار بگیره ولی به نظرم
          جالب بود که یک کاری کنم تا مخاطب هم تو ساخت این سایت دخیل باشه.
        </p>
        <AnniversaryForm />
        <h4 className="mt-12 text-2xl font-medium">
          افرادی که برای سایت یادبود ارسال کردند :
        </h4>
        {
          lists?.map((list,index) => <Suspense fallback={<AnniversaryMemorialSkeleton />} key={index}>
          <AnniversaryMemorial
            name={list.name}
            listNumber={list.listNumber}
            description={list.description}
          />
        </Suspense>)
        }
      </div>
      <div className="h-max flex flex-col items-center justify-center mt-12 gap-4 bg-[#00925d13] border border-[#3b3b3b] rounded-2xl p-6 w-max mx-auto mb-8">
        <div
          className={`flex mx-auto justify-center w-full text-6xl ${logoFont.className}`}
        >
          <p className="tracking-widest">NEXT</p>
          <p className="drop-shadow-2xl ml-1">MOVIE</p>
        </div>
        <div className="flex gap-8">
          <p className="text-center font-black text-4xl max-lg:text-2xl">۱۴۰۲-۱۴۰۵</p>
          <p className={`text-center font-medium text-4xl max-lg:text-2xl ${rubik.className}`}>
            2023-2026
          </p>
        </div>
      </div>
    </div>
  )
}
export default Page
