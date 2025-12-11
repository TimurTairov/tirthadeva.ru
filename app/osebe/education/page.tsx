'use client'
import Link from "next/link";
// import { FcApproval } from "react-icons/fc";
// import { FaUserGraduate } from "react-icons/fa";
import { FcGraduationCap } from "react-icons/fc";
import MyAccordion from "@/components/MyAccordion";

import { FcPicture } from "react-icons/fc";
import { FcDiploma1 } from "react-icons/fc";
import { FcVoicePresentation } from "react-icons/fc";
import { FcCalendar } from "react-icons/fc";

const page = () => {
  return (
    <div className='main-container font-light'>

      <h1 className="main-title">Образование</h1>

      <div className="flex flex-col gap-10">
        <div className="w-full bg-gray-50 dark:bg-slate-700 shadow-md p-2 rounded-md">
          <h5 className='mb-1 font-semibold text-lg md:text-2xl flex items-center gap-1'>
            <FcGraduationCap /> Образование в миру
          </h5>
          <p className="textMP">
            1. ВВИА им. проф. Н.Е.Жуковского, АСУ (2003-2008 гг).
          </p>
          <p className="textMP">
            2. МИРБИС, финансы и кредит (2008-2011 гг).
          </p>

        </div>

        <div className="bg-gray-50 dark:bg-slate-700 shadow-md p-2 rounded-md">
          <h5 className='mb-1 font-semibold text-lg md:text-2xl flex items-center gap-1'>
            <FcGraduationCap /> Образование в йоге
          </h5>
          <p className="textMP">
            1. 2013-2017 гг. - <a href='https://openyoga.ru/' target='_blank' rel="noreferrer">(МОЙУ)</a> Международный открытый йога университет. Обучение по направлениям - хатха йога, крийя, мантра, пранаяма, а также прохождение более 50 семинаров и ритритов, в том числе в Индии и Непале.
          </p>
          <p className="textMP">
            2. 2020 г. - <a href='https://yogatechnology.ru/' target='_blank' rel="noreferrer">Высшая школа йога технологий.</a> Обучающий курс Инструктор йоги в гамаках.
          </p>
          <p className="textMP">
            3. 2021 г. - по н.в. - <a href='https://ru.institute-vasishtha.com/' target='_blank' rel="noreferrer">Институт риши Васиштхи.</a> Всемирная община Санатана Дхармы (ВОСД). Обучение в традиции Адвайта сиддхов.
          </p>
          <p className="textMP">• Хатха и кундалини йога, медитация, созерцание</p>
          <p className="textMP">• Джняна и лайя йога</p>
          <p className="textMP">• Ритуальная практика (бхаджан мандала, сутра, хома, пуджа, абхишека)</p>
          <p className="textMP">• Философия Адвайта Веданты и йоги сиддхов</p>
          <p className="textMP">• Ритритная практика</p>
        </div>

        <div className="bg-gray-50 dark:bg-slate-700 shadow-md p-2 rounded-md">
          <h5 className='mb-1 font-semibold text-lg md:text-2xl flex items-center gap-1'>
            <FcGraduationCap />
            Неформальное обучение
          </h5>
          <p className="textMP">• 2015 г. - обучение йоги у <a href='http://yogagu.ru/' target='_blank' rel="noreferrer">Виктора Кожаринова </a> (ученик Сатьянанда Сарасвати, Бихарская школа йоги). Неформально в поездках по Индии и в Москве.
          </p>
          <p className="textMP">• 2018 г. - обучение крийя йоге в традициии йоги Рамайяхи. Ведущий  Святослав Дубянский.</p>
          <p className="textMP">• 2019 г. - обучение Кундалини йоге с Учителем из Варанаси (Индия) Satayanand Giri (Lali Baba).</p>

          <p className='mt-5 text-base'>
            <b>Ps:</b> в сентябре 2023 года получил дикшу и духовное имя - Тирхадева (посвящение) у своего коренного <Link href='/tradition/master'>Гуру</Link>.
            До этого носил имя Тимур Брахмачари, которое фигурирует на некоторых сертификатах и памятных листах.
          </p>
        </div>

        <div>
          <h5 id="qualification" className='font-semibold text-lg md:text-2xl flex items-center gap-1 bg-gray-50 dark:bg-slate-700 shadow-md p-2 rounded-md'>
            <FcGraduationCap />
            ПОВЫШЕНИЕ КВАЛИФИКАЦИИ
          </h5>
          <div className="flex flex-col gap-2 mt-2">
            <MyAccordion title="Самообразование" id="samoobrazovanie" className="bg-gray-50 dark:bg-slate-700 shadow-md p-2 rounded-md">
              <p className="textMP">• Самостоятельное изучение философии йоги по лекциям и семинарам Открытой Йоги примерно с 2008-2009 г.</p>
              <p className="textMP">• Регулярная личная практика йоги, начиная с 2010 года.</p>
              <p className="textMP">• Самостоятельно проведенные ритриты (для себя), начиная с 2011 года.</p>
              <p className="textMP">• Самостоятельное изучение разных видов йоги по интернет курсам (Открытой Йоги), начиная с 2011 года.</p>
              <p className="textMP">• Тренинг личностного роста. Базовый курс и программа лидерства «Прорыв». Казань 2012 год.</p>
              <p className="textMP">• Изучение философии Йоги и Адвайта Веданты по первоисточникам (Хатха йога Прадипика, Шива самхита, Гхеранда Самхита, Йога сутры Патанджали, Вивека Чудамани, Трипура Рахасья, Йога Васиштха, Атма Бодха), начиная с 2013-2014 г.</p>
              <p className="textMP">• Просмотры сатсангов Гуру Свами Вишнудевананда Гири, начиная с 2015 г.</p>
            </MyAccordion>

            <MyAccordion title="Список однодневных семинаров и ретритов Открытой Йоги" id="1dayOpenYoga" className="bg-gray-50 dark:bg-slate-700 shadow-md p-2 rounded-md">
              <p className="textMP">• №1 Ночной Крия йога ретрит 23.02.2013; </p>
              <p className="textMP">• №2 Ретрит «Тантра йога интенсив» 08.06.2013; </p>
              <p className="textMP">• №3 Семинар «Свадхистхана чакра» 21.07.2013; </p>
              <p className="textMP">• №4 Крийя йога ретрит 25.08.2013; </p>
              <p className="textMP">• №5 Манипура чакра 22.09.2013; </p>
              <p className="textMP">• №6 Ретрит «Крийя Рита йога» 29.12.2013; </p>
              <p className="textMP">• №7 Семинар «Сахасрара чакра 1 часть» 25.01.2014; </p>
              <p className="textMP">• №8 Ретрит по парной Крия йоге 09.02.2014; </p>
              <p className="textMP">• №9 Ретрит по йоге влюбленности 14.12.2014; </p>
              <p className="textMP">• №10 Семинар «Сахасрара чакра 2 часть» 22.03.2014; </p>
              <p className="textMP">• №11 Семинар по Карма йоге 19.04.2014; </p>
              <p className="textMP">• №12 Ночной Крия йога ретрит 26.04.2014; </p>
              <p className="textMP">• №13 Семинар «Кундалини йога» 21.06.2014; </p>
              <p className="textMP">• №14 Семинар «Медитация по Патанджали» 30.08.2014; </p>
              <p className="textMP">• №15 Семинар по Медитации 20.12.2014; </p>
              <p className="textMP">• №16 Ретрит по парной Крия йоге 21.12.2014; </p>
              <p className="textMP">• №17 Семинар «Йога преодоления смерти» 17.01.2015; </p>
              <p className="textMP">• №18 Семинар «Бхакти йога» 01.03.2015, </p>
              <p className="textMP">• №19 Семинар «Бхакти йога 2» 29.03.2015; </p>
              <p className="textMP">• №20 Ретрит по Медитации и Мантра йоге 12.04.2015; </p>
              <p className="textMP">• №21 Семинар «Бхакти йога 3» 24.05.2015; </p>
              <p className="textMP">• №22 Ретрит по Ньясе и парной йоге 31.05.2015; </p>
              <p className="textMP">• №23 Семинар «Бхакти йога 4» 21.06.2015; </p>
              <p className="textMP">• №24 Ретрит «12 видов йоги» 2 8.06.2015; </p>
              <p className="textMP">• №25 Ретрит по Мантра йоге 19.07.2015; </p>
              <p className="textMP">• №26 Ретрит по Хатха йоге 16.08.2015; </p>
              <p className="textMP">• №27 Семинар по Тантра йоге 12.2015; </p>
              <p className="textMP">• №28 Семинар по Артха йоге 09.04.2016; </p>
              <p className="textMP">• №29 Семинар по йоге Ахимсе 21.05.2016; </p>
              <p className="textMP">• №30 Семинар «Культ передачи знаний» 15.10.2016; </p>
              <p className="textMP">• №31 Ретрит по Хатха йоге 26.03.2017;</p>
              <p className="text-sm mt-3">Ps: практически все семинары и ритриты проводил Вадим Запорожцев, либо его старшие ученики.</p>
            </MyAccordion>

            <MyAccordion title="Список 3-х дневных выездных семинаров Открытой Йоги" id="3dayOpenAirYoga" className="bg-gray-50 dark:bg-slate-700 shadow-md p-2 rounded-md">
              <p className="textMP">• №1 Живые ритмы совершенства 09.05.2013. 3-х дневный семинар с Басимом Аль-Джавахири;</p>
              <p className="textMP">• №2 Хатха йога 01.11.2013. 3-х дневный семинар с Вадимом Запорожцевым;</p>
              <p className="textMP">• №3 Крия йога 21.02.2014. 3-х дневный семинар с Вадимом Запорожцевым;</p>
              <p className="textMP">• №4 Артха йога 23.05.2014; 3-х дневный семинар с Вадимом Запорожцевым;</p>
              <p className="textMP">• №5 Раджа йога 11.07.2014; 3-х дневный семинар с Вадимом Запорожцевым;</p>
              <p className="textMP">• №6 Кундалини йога 24.10.2014; 3-х дневный семинар с Вадимом Запорожцевым;</p>
              <p className="textMP">• №7 Парная йога 10.07.2015; 3-х дневный семинар с Вадимом Запорожцевым;</p>
              <p className="textMP">• №8 Натья йога 23.10.2015; 3-х дневный семинар с Вадимом Запорожцевым;</p>
              <p className="textMP">• №9 Стресс йога 03.02.2016; 3-х дневный семинар с Вадимом Запорожцевым;</p>
              <p className="textMP">• №10 Йога Визуализации 05.02.2016; 3-х дневный семинар с Вадимом Запорожцевым;</p>
              <p className="textMP">• №11 Йоги Триады 15.07.2016; 3-х дневный семинар с Вадимом Запорожцевым;</p>
              <p className="textMP">• №12 Хатха йога 18.11.2016; 3-х дневный семинар с Вадимом Запорожцевым;</p>
              <p className="textMP">• №13 Хатха йога 21.04.2017. 3-х дневный семинар с Вадимом Запорожцевым;</p>
            </MyAccordion>

            <MyAccordion title="Список 2-х недельных выездных семинаров Открытой Йоги" id="openIndia" className="bg-gray-50 dark:bg-slate-700 shadow-md p-2 rounded-md">
              <p className="textMP">• №1 Ятра Варанаси (Индия) январь 2015 c Виктором Кожариновым; </p>
              <p className="textMP">• №2 Ятра Катманду (Непал) апрель 2015 c Виктором Кожариновым; </p>
              <p className="textMP">• №3 Ятра Варанаси-Вриндаван-Агра (Индия) сентябрь 2015 c Виктором Кожариновым; </p>
              <p className="textMP">• №4 Черноморский кемпинг фестиваль Открытой Йоги (Абрау-Дюрсо) сентябрь 2016 с Вадимом Запорожцевым. </p>
            </MyAccordion>

            <MyAccordion title="Список семинаров с Учителями других традиций" id="otherTraditions" className="bg-gray-50 dark:bg-slate-700 shadow-md p-2 rounded-md">
              <p className="textMP">• №1 3-х дневный семинар по крия йоге со Святославом Дубянским. Традиция крия йоги Рамаяхи;</p>
              <p className="textMP">• №2 3-х дневный семинар по кундалини йоге с Учителем из Варанаси Лали Бабой (Satayanand Giri).</p>
            </MyAccordion>

            <MyAccordion title="Список ретритов и семинаров в традиции Пратьякша Адвайта сиддхов" id="advaytaSiddhov" className="bg-gray-50 dark:bg-slate-700 shadow-md p-2 rounded-md">
              <p className="textMP">• №1 Трехдневный инструкторский семинар ВОСД (август 2021);</p>
              <p className="textMP">• №2 Трехдневный ретрит «Четыре осознанности» (август 2021);</p>
              <p className="textMP">• №3 Трехдневный ретрит «Четыре Бесконечных Состояния Брахмы» (август 2021);</p>
              <p className="textMP">• №4 Однодневный ретрит выходного дня в Дхарма центре ШактиМа. 14.11.2021;</p>
              <p className="textMP">• №5 Однодневный ретрит выходного дня в Дхарма центре ШактиМа. 05.12.2021;</p>
              <p className="textMP">• №6 Трехдневный ретрит «Мантра йога» (февраль 2022);</p>
              <p className="textMP">• №7 Трехдневный инструкторский семинар ВОСД (август 2022);</p>
              <p className="textMP">• №8 Трехдневный ретрит по базовым практикам (август 2022);</p>
              <p className="textMP">• №9 Трехдневный ретрит «Грубая концентрация» (август 2022);</p>
              <p className="textMP">• №10 Трехдневный ретрит «Тонкая концентрация» (декабрь 2022);</p>
              <p className="textMP">• №11 Трехдневный инструкторский семинар ВОСД (август 2023);</p>
              <p className="textMP">• №12 Трехдневный ретрит «Анапанасати» (август 2023);</p>
              <p className="textMP">• №13 Трехдневный ретрит «Четыре осознанности» (август 2021);</p>
              <p className="textMP">• №14 Недельный семинар с Гуру в Казахстане (сентябрь 2023);</p>
              <p className="textMP">• №15 Двухнедельный практический ретрит по карма йоге в ДЛ (август 2024)</p>
              <p className="textMP">• №16 Трехдневный ретрит по кундалини йоге (январь 2025)</p>
              <p className="textMP">• №17 Трехдневный ретрит по тонкой концентрации (февраль 2025)</p>
              <p className="textMP">• №18 Семидневный ретрит по базовым практикам (май 2025)</p>
              <p className="textMP">• №19 Недельный семинар с Гуру в Казахстане (июль 2025);</p>
              <p className="textMP">• №20 Семидневный ретрит по изучению учения (ноябрь 2025)</p>
            </MyAccordion>

            <MyAccordion title="Список проведенных мероприятий" id="myEvents" className="bg-gray-50 dark:bg-slate-700 shadow-md p-2 rounded-md">
              <p className="textMP">• №1 Чтение лекций по разным темам йоги, начиная с 2015 года.</p>
              <p className="textMP">• №2 Курирование группы будущих преподавателей йоги (МОЙУ) с 2016 по 2018 гг.</p>
              <p className="textMP">• №3 Участие в качестве инструктора в ежегодных двухнедельных онлайн марафонах, начиная с 2021 года: В новый год с чистыми каналами, Тапас Шиве, марафон Наваратри.</p>
              <p className="textMP">• №4 Однодневный ретрит по хатха и кундалини йоге. ДЦ ШактиМа 08.01.2022. </p>
              <p className="textMP">• №5 Однодневный семинар по хатха йоге. ДЦ ШактиМа 08.01.2023. </p>
              <p className="textMP">• №6 Участие в качестве инструктора йоги и медитации на фестивале День Индии в Москве. (август 2024 и 2025).</p>
              <p className="textMP">• №7 Двухдневный ретрит - садху выходные под Алексадровом, Владимирская область, март 2025. </p>
              <p className="textMP">• №8 Тредневный практический семинар по хатха, кундалини и раджа йоге. Семей, Казахстан. Июнь-июль 2025. </p>
              <p className="textMP">• №9 Семидневный йога тур. Алтайский ашрам Садху Тапован (июль 2025).</p>
              <p className="textMP">• №10 Семидневный ретрит «4БСБ». Алтайский ашрам Садху Тапаван (июль-август 2025).</p>
              <p className="textMP">• №11 Однодневный практический семинар по хатха йоге. ДЦ ШактиМа 02.11.2025. </p>
            </MyAccordion>

          </div>
        </div>


        <div className="w-full bg-gray-50 dark:bg-slate-700 shadow-md p-2 rounded-md">
          <h5 className='w-full text-center mb-1 text-lg md:text-xl'>
            Возможно, Вас заинтересуют:
          </h5>
          <div className="w-full grid grid-cols-2 md:grid-cols-4 justify-between gap-1 lg:gap-5 ml-5">
            <Link href="/osebe/certificates" className="my-1 flex gap-1 items-center">
              <FcDiploma1 />
              <p className="textMP">Сертификаты</p>
            </Link>
            <Link href="/osebe/myphoto" className="my-1 flex gap-1 items-center">
              <FcPicture />
              <p className="textMP">Фотографии</p>
            </Link>
            <Link href="/yoga/schedule" className="my-1 flex gap-1 items-center">
              <FcCalendar />
              <p className="textMP">Расписание</p>
            </Link>
            <Link href="/yoga/feedbacks" className="my-1 flex gap-1 items-center">
              <FcVoicePresentation />
              <p className="textMP">Отзывы</p>
            </Link>
          </div>
        </div>

      </div>

    </div >
  )
}

export default page