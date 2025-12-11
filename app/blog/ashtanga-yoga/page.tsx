import Image from "next/image"
import type { Metadata } from "next";
import ashtangaYoga from '@/public/BlogImages/ashtanga-yoga.webp'
import { Bs1CircleFill } from "react-icons/bs";
import { Bs2CircleFill } from "react-icons/bs";
import { Bs3CircleFill } from "react-icons/bs";
import { Bs4CircleFill } from "react-icons/bs";
import { Bs5CircleFill } from "react-icons/bs";
import { Bs6CircleFill } from "react-icons/bs";
import { Bs7CircleFill } from "react-icons/bs";
import { Bs8CircleFill } from "react-icons/bs";
import { AiOutlineCheck } from 'react-icons/ai'
import asana from '@/public/SVG/yoga-asana2.svg'
import meditation from "@/public/SVG/meditation.svg"
import { BsXLg } from "react-icons/bs";
import GoToTop from '@/components/GoToTop'

export const metadata: Metadata = {
  title: "Аштанга йога. Восьмеричный Путь йоги.",
  description: "Восьмеричный Путь йоги, описанный в йога сутрах Патанджали, включающий в себя: яма, нияма, асана, пратьяхара, дхарана, дхьяна, самадхи.",
};

const page = () => {
  return (
    <div id="ashtanga-yoga-top" className='main-container font-light'>
      <h1 className='main-title'>АШТАНГА ЙОГА или восьмеричный Путь риши Патанджали</h1>
      <p className='mt-10 textMP'>
        Согласно риши Патанджали, Йога есть &quot;<b>Читта Вритти Ниродха</b>&quot;, или прекращение образования мыслеформ на поверхности разума и сводится к следованию по восьмеричной лестнице:
      </p>
      <div className="flex flex-col items-center w-full textMP">
        <ul className="py-5">
          <li className="flex items-center gap-2">
            <Bs1CircleFill className="text-indigo-500 dark:text-emerald-400" />
            <a href="#yama">
              <b>Яма</b>
            </a>
            (самоограничения)
          </li>
          <li className="flex items-center gap-2">
            <Bs2CircleFill className="text-indigo-500 dark:text-emerald-400" />
            <a href="#niyama">
              <b>Нияма</b>
            </a>
            (предписания)
          </li>
          <li className="flex items-center gap-2">
            <Bs3CircleFill className="text-indigo-500 dark:text-emerald-400" />
            <a href="#asana">
              <b className="font-normal">Асана</b>
            </a>
            (позы йоги)
          </li>
          <li className="flex items-center gap-2">
            <Bs4CircleFill className="text-indigo-500 dark:text-emerald-400" />
            <a href="#pranayama">
              <b className="font-normal">Пранаяма</b>
            </a>
            (управление праной)
          </li>
          <li className="flex items-center gap-2">
            <Bs5CircleFill className="text-indigo-500 dark:text-emerald-400" />
            <a href="#pratiyahara">
              <b className="font-normal">Пратьяхара</b>
            </a>
            (отрешённость)
          </li>
          <li className="flex items-center gap-2">
            <Bs6CircleFill className="text-indigo-500 dark:text-emerald-400" />
            <a href="#dharana">
              <b className="font-normal">Дхарана</b>
            </a>
            (концентрация)
          </li>
          <li className="flex items-center gap-2">
            <Bs7CircleFill className="text-indigo-500 dark:text-emerald-400" />
            <a href="#dhiyana">
              <b className="font-normal">Дхьяна</b>
            </a>
            (медитация)
          </li>
          <li className="inline">
            <Bs8CircleFill className="text-indigo-500 dark:text-emerald-400 shrink-0 inline mr-2 mb-1" />
            <a href="#samadhi">
              <b className="font-normal inline mr-2">Самадхи</b>
            </a>
            (наивысшее состояние в медитации)
          </li>
        </ul>
      </div>

      <Image src={ashtangaYoga} alt="ashtanga yoga" width={300} height={200} className="my-5 lg:mx-20 w-full h-auto rounded-lg" />

      <p className='mt-5 w-full text-center textMP'>Далее, мы рассмотрим каждую ступень более подробно.</p>

      <div id="yama" className='mt-10 lg:mt-20 sub-title inline'>
        <Bs1CircleFill className="text-indigo-500 dark:text-emerald-400 inline mr-2 mb-1" />
        <span>
          Первая ступень: ЯМА
        </span>
      </div>
      <p className='mt-5 textMP'><b>Яма</b> ‒ принципы самоконтроля. Яма или Ямараджа в индийской мифологии является богом смерти и владыкой подземного мира. Отсюда следует, что грубое пренебрежение следующими принципами ни к чему хорошему не приведет.
      </p>
      <div className='mt-5 inline font-normal textMP'>
        <AiOutlineCheck className="size-5 dark:text-emerald-400 text-indigo-700 inline mr-1 mb-1" />
        <span>
          <b>Ахимса</b> ‒ непричинение вреда ни одному живому существу в мыслях, словах или поступках.
        </span>
      </div>
      <p className="mt-5 textMP">Ахимса это не просто какая-то линия поведения, это величайшая добродетель. Ахимса развивает силу души, силу воли, силу духа. Ахимса очищает анахата чакру и взращивает такие качества как безграничная любовь ко всему живому, всепрощение и бесстрашие. Это мощнейшее средство для достижения Божественности. Это Путь по которому идут все продвинутые души, святые и сиддхи.
      </p>
      <div className='mt-5 inline textMP'>
        <AiOutlineCheck className="size-5 dark:text-emerald-400 text-indigo-700 inline mr-1 mb-1" />
        <span>
          <b>Сатья</b> ‒  утверждение себя в истине, правдивости и честности.
        </span>
      </div>
      <p className="mt-5 textMP">Сатья это Истина. Бог (Брахман) это Истина. Придерживайтесь только Истины, даже в мелочах. Любой обман или искажение это уход от Истины. Запутаться в своей же паутине лжи и обмана очень легко. Поэтому нет ничего важнее Истины. Не обманывайте хотя бы самого себя. Держите данные вами обещания. Когда вы говорите правду, ваше сознание очищается и в нем зарождается Божественный Свет.
      </p>
      <div className='mt-5 inline textMP'>
        <AiOutlineCheck className="size-5 dark:text-emerald-400 text-indigo-700 inline mr-1 mb-1" />
        <span><b>Астея</b> ‒ не присваивать себе чужое. </span>
      </div>
      <p className="mt-5 textMP">
        Захваченность материальными желаниями - вот главная причина по которой одни люди обманывают других людей, присваивая чужое себе. По большому счету, они обманывают сами себя, сами того не понимая. Это ловушка материального мира в которую попадаются неопытные души.
      </p>
      <div className='mt-5 inline textMP'>
        <AiOutlineCheck className="size-5 dark:text-emerald-400 text-indigo-700 inline mr-1 mb-1" />
        <span><b>Брахмачарья</b> ‒ не растрачивание сил, времени и энергии понапрасну. Не растрачивайте свой сексуальный потенциал. </span>
      </div>
      <p className="mt-5 textMP">
        Теряя и бездумно растрачивая сексуальную энергию Вы автоматически блокируете возможность духовного прогресса. Сексуальная энергия есть ничто иное как проявление энергии Кундалини в области свадхистана чакры. Когда ваши энергетические каналы загрязнены, энергии просто некуда деться как течь по пути наименьшего сопротивления.
      </p>
      <div className='mt-5 inline textMP'>
        <AiOutlineCheck className="size-5 dark:text-emerald-400 text-indigo-700 inline mr-1 mb-1" />
        <span><b>Апариграха</b> ‒ есть непривязанность к материальным вещам этого мира.</span>
      </div>
      <p className="mt-5 textMP">
        Апариграха устраняет беспокойство за накопленное, страх утраты, горе от потерь, ненависть, гнев, лживость, воровство, привязанность, разочарование, беспокойство ума, неугомонность, заботы и волнения. Она дает покой, умиротворение и удовлетворенность.
      </p>

      <div id="niyama" className='mt-10 lg:mt-20 sub-title inline-flexflex items-center gap-2 justify-center'>
        <Bs2CircleFill className="text-indigo-500 dark:text-emerald-400 inline mr-2 mb-1" />
        Вторая ступень: НИЯМА
      </div>
      <p className="mt-5 textMP"><b>Нияма</b> представляет собой следование наставлениям Гуру.</p>
      <div className='mt-5 inline textMP'>
        <AiOutlineCheck className="size-5 dark:text-emerald-400 text-indigo-700 inline mr-1 mb-1" />
        <span><b>Шауча</b> - чистоплотность тела и ума.</span>
      </div>
      <p className="mt-5 textMP">
        Практикой ментальной чистоты достигается способность к жизнерадостности, однонаправленности, контролю над чувствами и видению самости.
      </p>
      <div className='mt-5 inline textMP'>
        <AiOutlineCheck className="size-5 dark:text-emerald-400 text-indigo-700 inline mr-1 mb-1" />
        <span><b>Сантоша</b> - удовлетворенность условиями жизни, жизнерадостность.</span>
      </div>
      <p className="mt-5 textMP">
        Сознание в медитации должно быть свободно от всех ментальных ошибок, завес и комплексов, поэтому необходимо практиковать сантошу (удовлетворенность). Счастье, которое приходит от этой практики, безмерно. Как результат этого — возможность более глубокого погружения в медитацию. При отсутствии удовлетворенности вступают в действие ментальные комплексы и такой человек не способен к медитации.
      </p>
      <div className='mt-5 inline textMP'>
        <AiOutlineCheck className="size-5 dark:text-emerald-400 text-indigo-700 inline mr-1 mb-1" />
        <span><b>Тапас</b> - следование дисциплине и аскетизму.</span>
      </div>
      <p className="mt-5 textMP">
        Практикой аскетизма разрушаются загрязнения и приходит совершенство тела и органов чувств. Для реализации высших разделов аштанга йоги необходимо здоровое тело и ясный ум. Все функции в теле, такие, как дыхание, циркуляция, секреция должны безупречно работать, а для этого необходимо практиковать тапас.
      </p>
      <div className='mt-5 inline textMP'>
        <AiOutlineCheck className="size-5 dark:text-emerald-400 text-indigo-700 inline mr-1 mb-1" />
        <span><b>Свадхьяя</b> - постоянное самообразование и изучение священных писаний.</span>
      </div>
      <p className="mt-5 textMP">
        Йога Васиштха, Трипура Рахасья, Вивека Чудамани, Атма Бодха, Авадхута Гита, Ишвара Гита, Аштавакра Гита - вот некоторые тексты, изучаемые в нашей традиции.
      </p>
      <div className='mt-5 inline textMP'>
        <AiOutlineCheck className="size-5 dark:text-emerald-400 text-indigo-700 inline mr-1 mb-1" />
        <span><b>Ишвара Пранидхана</b> - упование на Высшую силу, Вселенский разум или Абсолют.  </span>
      </div>
      <p className="mt-5 textMP">
        Бхагаван Даттатрейя является Ишта-деватой в традиции Адвайта Сиддхов.
      </p>


      <div id="asana" className='mt-10 lg:mt-20 sub-title inline-flexflex items-center gap-2 justify-center'>
        <Bs3CircleFill className="text-indigo-500 dark:text-emerald-400 inline mr-2 mb-1" />
        Третья ступень: АСАНА
      </div>

      <p className="mt-5 textMP"><b>Асана</b> есть удобная и устойчивая поза для медитации. Например, падмасана, сиддхасана или сукхасана. </p>

      <p className="mt-5 textMP">Основное предназначение асан, с точки зрения риши Патанджали, является подготовка тела и сознания к более тонким практикам, таким как пранаяма, концентрация и медитация, в которых практикующий может находиться достаточно долгое время. Именно поэтому, необходимо овладеть асаной в совершенстве, чтобы не было никаких проблем в длительном пребывании в медитативной позе. Этому также способствует расслабление и снятие мышечного напряжения. </p>

      <p className="mt-5 textMP">В настоящее время, под практикой асан понимается достаточно обширное многообразие различных положений тела с целью его общего укрепления и устранения болезненных симптомов.</p>

      <p className="mt-5 textMP">Выделяют следующие основные группы асан:</p>
      <ul className="inline textMP">
        <li>
          <Image src={asana} alt="asana" className="size-5 dark:invert inline mr-2 mb-1" />
          <b>Асаны стоя:</b> тадасана, уткатасана, триконасана.
        </li>
        <li>
          <Image src={asana} alt="asana" className="size-5 dark:invert inline mr-2 mb-1" />
          <b>Асаны на баланс:</b> врикшасана, натараджасана, гарудасана.</li>
        <li>
          <Image src={asana} alt="asana" className="size-5 dark:invert inline mr-2 mb-1" />
          <b>Асаны сидя:</b> ваджрасана, падмасана, сиддхасана.</li>
        <li>
          <Image src={asana} alt="asana" className="size-5 dark:invert inline mr-2 mb-1" />
          <b>Асаны лежа:</b> шавасана, супта вирасана, матьясана.</li>
        <li>
          <Image src={asana} alt="asana" className="size-5 dark:invert inline mr-2 mb-1" />
          <b>Скрутки:</b> ардха матсиендрасана, паривритта паршваконасана, супта матсиендрасана.</li>
        <li>
          <Image src={asana} alt="asana" className="size-5 dark:invert inline mr-2 mb-1" />
          <b>Перевернутые асаны:</b> ширшасана, сарвангасана, халасана, випарита карани мудра.</li>
        <li>
          <Image src={asana} alt="asana" className="size-5 dark:invert inline mr-2 mb-1" />
          <b>Асаны для медитации:</b> падмасана, сиддхасана, сукхасана.</li>
      </ul>


      <div id="pranayama" className='mt-10 lg:mt-20 sub-title inline-flexflex items-center gap-2 justify-center'>
        <Bs4CircleFill className="text-indigo-500 dark:text-emerald-400 inline mr-2 mb-1" />
        Четвертая ступень: ПРАНАЯМА
      </div>
      <p className="mt-5 textMP"><b>Пранаяма</b> есть процесс управления праной (жизненной силой), посредством дыхательных упражнений и задержек дыхания.</p>

      <div className="flex items-center gap-2 mt-5 textMP">
        <div className="shrink-0 h-20 w-1 lg:w-2 bg-indigo-600 dark:bg-emerald-400 rounded-md"></div>
        <div className="h-20 w-full flex flex-col justify-between">
          <i>
            &quot;Пранаяма есть прекращение движения вдыхаемого и выдыхаемого воздуха&quot;.
          </i>
          <p className="text-right w-full">
            <i>
              Йога сутра Патанджали (2-49)
            </i>
          </p>
        </div>
      </div>
      <p className="mt-5 textMP">Три типа дыхания:</p>
      <ul className="textMP">
        <li>
          <Image src={meditation} alt="meditation" className="size-5 dark:invert inline mr-2 mb-1" />
          <b>Пурака</b> - вдох
        </li>
        <li>
          <Image src={meditation} alt="meditation" className="size-5 dark:invert inline mr-2 mb-1" />
          <b>Речака</b> - выдох
        </li>
        <li>
          <Image src={meditation} alt="meditation" className="size-5 dark:invert inline mr-2 mb-1" />
          <b>Кумбхака</b> - задержка (внешняя и внутренняя)
        </li>
      </ul>
      <p className="textMP">Есть также четвертый тип дыхания, который находится за пределами внутреннего и внешнего дыхания.
      </p>

      <p className="mt-5 textMP">Основные пранаямы в нашей традиции:</p>
      <ul className="textMP">
        <li>‒ Пурна рупа пранаяма (полное йоговское дыхание)</li>
        <li>‒ Анулома-вилома пранаяма</li>
        <li>‒ Сахита кумбхака пранаяма (нади шодхана)</li>
        <li>‒ Сукх-пурвака пранаяма</li>
        <li>‒ Бхастрика пранаяма</li>
        <li>‒ Трайя-бандха пранаяма</li>
        <li>‒ Кувшинное дыхание</li>
      </ul>

      <p className="mt-5 textMP">Таким образом, пранаяма йога есть совокупность дыхательных техник и практик, направленных на очищение энергетических каналов, на накопление и введения Праны в центральный канал (Сушумна нади).</p>

      <p className="mt-5 textMP"><b>Прана в узком смысле</b> означает жизненную силу человека, т.е. это та сила, которая поддерживает жизнь и функционирование в физическом теле. <b>В широком смысле Прана</b> может проявляться как Энергия, так и Сознание. </p>

      <p className="mt-5 textMP">Если Праны много:</p>
      <ul>
        <li>‒ человек ощущает радость и счастье</li>
        <li>‒ физически здоров, крепок и вынослив</li>
        <li>‒ чувствует причастность к Высшему</li>
        <li>‒ быстрее проходит процесс внутренней реализации </li>
      </ul>

      <p className="mt-5 textMP textMP">Если Праны мало, человек склонен к болезням и депрессиям, т.е. испытывает проблемы на физическом и тонком уровнях.</p>


      <div id="pratiyahara" className='mt-10 lg:mt-20 sub-title inline-flexflex items-center gap-2 justify-center'>
        <Bs5CircleFill className="text-indigo-500 dark:text-emerald-400 inline mr-2 mb-1" />
        Пятая ступень: ПРАТЬЯХАРА
      </div>
      <p className="mt-5 textMP"><b>Пратьяхара</b> означает состояние отрешенности, при которой практикующий слушает, но не слышит, смотрит, но видит и т.д. В каком-то смысле, пратьяхара представляет собой обуздывание пяти базовых чувств таких, как зрение, слух, вкус, обоняние и осязание. Как черепаха втягивает в себя конечности, так и практикующий перенаправляет свое внимание от внешних объектов вовнутрь.</p>
      <p className="mt-5 textMP">Если ваши чувства не обузданы, в практике йоги невозможно добиться успеха. Возбужденные чувства даже мудрого человека, каким бы он ни был здравомыслящим, заглушают голос разума. Чувства ничего не могут сделать без поддержки сознания. Если вы можете отделить сознание от чувств, отключение чувств произойдет автоматически. Суть отключения чувств заключается в том, что они полностью поглощаются сознанием.
      </p>
      <p className="mt-5 textMP">Практикуйте отключение чувств постепенно, отстраняясь от одного чувства за другим. Начинайте с отключения самого бурного чувства. Плавно отделяйте чувства от объектов, которым они адресованы. Занимаясь этим слишком интенсивно, вы будете ощущать головную боль. Во время вашей практики чувства вновь и вновь будут стремиться к объектам, как разъяренные быки. Вновь и вновь отстраняйте их от объектов.
      </p>
      <p className="mt-5 textMP">Пратьяхара легко достигается после успешного овладения пранаямой. Вивека и вайрагья также способствуют обретению состояния отрешенности.
      </p>
      <p className="mt-5 textMP">Какие садханы способствуют пратьяхаре:</p>
      <ul className="textMP">
        <li>
          <AiOutlineCheck className="size-5 text-green-400 inline mr-2" />
          асаны
        </li>
        <li>
          <AiOutlineCheck className="size-5 text-green-400 inline mr-2" />
          пранаямы
        </li>
        <li>
          <AiOutlineCheck className="size-5 text-green-400 inline mr-2" />
          джапа
        </li>
        <li>
          <AiOutlineCheck className="size-5 text-green-400 inline mr-2" />
          аджапа джапа
        </li>
        <li>
          <AiOutlineCheck className="size-5 text-green-400 inline mr-2" />
          тратака
        </li>
        <li>
          <AiOutlineCheck className="size-5 text-green-400 inline mr-2" />
          нада йога
        </li>
        <li>
          <AiOutlineCheck className="size-5 text-green-400 inline mr-2" />
          хома, хаван, пуджа
        </li>
        <li>
          <AiOutlineCheck className="size-5 text-green-400 inline mr-2" />
          бхаджан мандала
        </li>
      </ul>
      <p className="mt-5 textMP">Что еще может быть помощником на пути к пратьяхаре:</p>
      <ul className="textMP">
        <li>
          <AiOutlineCheck className="size-5 text-green-400 inline mr-2" />
          умеренность в питании
        </li>
        <li>
          <AiOutlineCheck className="size-5 text-green-400 inline mr-2" />
          обет молчания
        </li>
        <li>
          <AiOutlineCheck className="size-5 text-green-400 inline mr-2" />
          устойчивость в асанах
        </li>
        <li>
          <AiOutlineCheck className="size-5 text-green-400 inline mr-2" />
          регулярная садхана
        </li>
        <li>
          <AiOutlineCheck className="size-5 text-green-400 inline mr-2" />
          брахмачарья
        </li>
        <li>
          <AiOutlineCheck className="size-5 text-green-400 inline mr-2" />
          терпение
        </li>
        <li>
          <AiOutlineCheck className="size-5 text-green-400 inline mr-2" />
          умиротворенность
        </li>
        <li>
          <AiOutlineCheck className="size-5 text-green-400 inline mr-2" />
          настойчивость
        </li>
        <li>
          <AiOutlineCheck className="size-5 text-green-400 inline mr-2" />
          уединение
        </li>
      </ul>
      <p className="mt-5 textMP">Препятствия в пратьяхаре:</p>
      <ul className="textMP">
        <li>
          <BsXLg className="size-5 text-red-400 inline mr-2" />
          многословие
        </li>
        <li>
          <BsXLg className="size-5 text-red-400 inline mr-2" />
          обильное питание
        </li>
        <li>
          <BsXLg className="size-5 text-red-400 inline mr-2" />
          излишнее общение с мирскими людьми
        </li>
        <li>
          <BsXLg className="size-5 text-red-400 inline mr-2" />
          переутомление
        </li>
        <li>
          <BsXLg className="size-5 text-red-400 inline mr-2" />
          избыточное любопытство
        </li>
        <li>
          <BsXLg className="size-5 text-red-400 inline mr-2" />
          нестабильность в асанах
        </li>
        <li>
          <BsXLg className="size-5 text-red-400 inline mr-2" />
          неспособность практиковать пранаяму
        </li>
        <li>
          <BsXLg className="size-5 text-red-400 inline mr-2" />
          угасание садханы
        </li>
      </ul>

      <div id="dharana" className='mt-10 lg:mt-20 sub-title inline-flexflex items-center gap-2 justify-center'>
        <Bs6CircleFill className="text-indigo-500 dark:text-emerald-400 inline mr-2 mb-1" />
        Шестая ступень: ДХАРАНА
      </div>
      <p className="mt-5 textMP"><b>Дхарана</b> - это концентрация сознания на выбранном объекте. Начальный и самый сложный этап медитации. Ум постоянно ускользает от объекта концентрации. Разум скачет от одной мысли к другой. Рой мыслей в голове.
      </p>
      <p className="mt-5 textMP">Концентрация - это сугубо ментальный процесс. Она требует самоуглубления сознания. Если вы концентрируете свое сознание на одной точке в течение двенадцати секунд, это дхарана. Двенадцать таких дхаран будут дхьяной (медитацией). Двенадцать таких дхъян будут самадхи (сверхсознанием). Концентрация - это фиксация сознания; медитация -это непрерывный поток одной мысли.
      </p>
      <p className="mt-5 textMP">Концентрация может быть внутренней или внешней, то есть на внешнем (точка, свеча, слог Ом, мурти) или внутреннем (точка, чакра, слог Ом, образ Ишта Дэваты) объекте.
      </p>
      <p className="mt-5 textMP">Во время концентрации думайте только о выбранном объекте и больше ни о чем. Все посторонние мысли должны быть отброшены. Постарайтесь не отвлекаться на внутреннюю болтовню. На время практики весь внешний мир как бы исчезает. В этом суть концентрации.
      </p>
      <p className="mt-5 textMP">Желательно практиковать концентрацию в одно и тоже время, в одном и том же месте. Практика должна быть регулярной, в идеале – ежедневной. </p>
      <p className="mt-5 textMP">Развивать концентрацию внимания полезно не только для практики йоги.
      </p>

      <div id="dhiyana" className='mt-10 lg:mt-20 sub-title inline-flexflex items-center gap-2 justify-center'>
        <Bs7CircleFill className="text-indigo-500 dark:text-emerald-400 inline mr-2 mb-1" />
        Седьмая ступень: ДХЬЯНА
      </div>
      <p className="mt-5 textMP"><b>Дхьяна</b> - непрерывное созерцание сознания на объекте медитации.</p>
      <p className="mt-5 textMP">На этой стадия ум более спокоен, не мечется от одной мысли к другой и сосредоточен только на одном объекте в течение длительного времени.</p>
      <p className="mt-5 textMP">Любая медитация должна иметь два свойства:</p>
      <ul className="textMP">
        <li><b>1. Пустотность ума,</b> то есть, состояние безмыслия.</li>
        <li><b>2. Ясность сознания,</b> как в бодрствовании.</li>
      </ul>
      <p className="mt-5 textMP">Это означает, что мы в медитации стараемся успокоить свой ум и войти в Пустоту, при этом сохранив ясность своего сознания. Потеря пустотности или ясности является отклонением, которого мы стараемся избегать в медитации.</p>
      <p className="mt-5 textMP">Цель любой медитации - состояние дхьяны, то есть предельного сосредоточения на объекте медитации. До этого это просто дхарана, то есть процесс сосредоточения. Он как правило сопровождается отвлечениями сознания. Когда дхьяна достигнута, следующая цель - самадхи. </p>
      <p className="mt-5 textMP">Медитации нашей традиции:</p>
      <ul className="textMP">
        <li>
          <Image src={meditation} alt="meditation" className="size-5 dark:invert inline mr-2 mb-1" />
          <b>Медитация 4БСБ</b> - медитация четырех бесконечных состоний Брахмы (любовь, сострадание, радость, равностность)
        </li>
        <li>
          <Image src={meditation} alt="meditation" className="size-5 dark:invert inline mr-2 mb-1" />
          <b>Медитация Махашанти</b> - медитация великого покоя
        </li>
        <li>
          <Image src={meditation} alt="meditation" className="size-5 dark:invert inline mr-2 mb-1" />
          <b>Медитация Чандали</b> - медитация замыкания внутренней энергии
        </li>
        <li>
          <Image src={meditation} alt="meditation" className="size-5 dark:invert inline mr-2 mb-1" />
          <b>Медитация Анапанасати</b> - медитация наблюдения за дыханием
        </li>
        <li>
          <Image src={meditation} alt="meditation" className="size-5 dark:invert inline mr-2 mb-1" />
          <b>Медитация Атмавичара</b> - медитация на Атман (Высшее Я)
        </li>
        <li>
          <Image src={meditation} alt="meditation" className="size-5 dark:invert inline mr-2 mb-1" />
          <b>Медитация Брахмавичара</b> - медитация на Брахман (Абсолют, Бог)
        </li>
      </ul>



      <div id="samadhi" className='mt-10 lg:mt-20 sub-title inline-flexflex items-center gap-2 justify-center'>
        <Bs8CircleFill className="text-indigo-500 dark:text-emerald-400 inline mr-2 mb-1" />
        Восьмая ступень: САМАДХИ
      </div>

      <div className="flex items-center mt-5 gap-2">
        <div className="shrink-0 h-60 md:h-40 lg:h-32 w-1 lg:w-2 bg-indigo-600 dark:bg-emerald-400 rounded-md"> </div>
        <div className="h-60 md:h-40 lg:h-32 flex flex-col justify-between textMP">
          <i>
            &quot;Гхеранда сказал: Самадхи – великая Йога и ею овладевают благодаря очень удачной судьбе. Она достигается с помощью доброты и милости Учителя и преданности ему.
            Кто верит в учение, в своего учителя и в собственное Я, чьё мышление пробуждается изо дня в день, тот йогин достигает прекрасного Самадхи.
            &quot;
          </i>
          <p className="text-right w-full textMP textMP">
            <i>
              Гхеранда Самхита (7.1-7.2)
            </i>
          </p>
        </div>
      </div>
      <p className="mt-5 textMP"><b>Самадхи</b> - это сверхсознательное состояние сознания, наивысшая сосредоточенность, растворение ума и эго. Как правило, самадхи сопровождается сверх экстатическим блаженством, называемым <b>Сат Чит Ананда</b> (бытие, сознание, блаженство).
      </p>
      <p className="mt-5 textMP">Именно, благодарю самадхи мы можем воспринимать Атман, как недвойственную реальность.</p>

      <p className="mt-5 textMP">Самадхи бывают двух видов:</p>
      <ul className="textMP">
        <li>
          ‒ <b>Савикальпа самадхи</b> - самадхи с обьектом, то есть, когда сохраняется тройственность: медитирующий, обьект и процесс медитации.
        </li>
        <li>
          ‒ <b>Нирвикальпа самадхи</b> - самадхи без обьекта, когда эго растворяется в обьекте медитации и нет разницы между медитирующим, обьектом медитации и процессом медитации.
        </li>
      </ul>

      <div className='mt-10 textMP'>
        Таков, восьмеричный путь йоги сознания, от норм поведения и морали до сверхэкстатических состояний.
      </div>

      <GoToTop url="#ashtanga-yoga-top" />
    </div>
  )
}

export default page