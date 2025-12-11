'use client'
import Image from "next/image";
import { TbWorldWww } from "react-icons/tb";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import rutube from '@/public/SVG/rutube__.svg'
import { FaOdnoklassnikiSquare } from "react-icons/fa";
import BottomImg from "@/components/BottomImg";

const page = () => {
  return (
    <div className='main-container textMP'>
      <h1 className="main-title">Полезные ссылки</h1>

      <div className="flex items-center">
        <TbWorldWww className='mr-2 shrink-0' color='orange' />
        <a href='https://www.advayta.org/' target='_blank' rel='noreferrer' className="subTitleMP" >advayta.org</a>
      </div>
      <p>
        Официальный сайт. Здесь более подробная информация о традиции, Гуру, мероприятиях, обучении,
        а также книги, лекции, статьи и многое другое.
      </p>

      <div className="flex items-center mt-4">
        <TbWorldWww className='mr-2 shrink-0' color='orange' />
        <a href='https://institute-vasishtha.com/' target='_blank' rel='noreferrer' className="subTitleMP">Интститут Риши Васиштхи </a>
      </div>
      <p>
        Этот портал для тех, кто хочет больше узнать о духовной культуре и философии Санатана Дхармы, для тех,
        кто хочет глубоко исследовать различные направления йоги, для тех, кто хочет открыть для себя богатое
        культурное и философское наследие индуизма. Пройдя последовательно 12 курсов, можно получить теоретические знания
        в области Санатана Дхармы, а также научиться применять их на практике.
      </p>

      <div className="flex items-center mt-4">
        <TbWorldWww className='mr-2 shrink-0' color='orange' />
        <a href='http://ramanatha.advayta.org/' target='_blank' rel='noreferrer' className="subTitleMP">Рупор Дхармы </a>
      </div>
      <p>
        Сайт монаха Раманатха Гири.
      </p>

      <div className="flex items-center mt-4">
        <TbWorldWww className='mr-2 shrink-0' color='orange' />
        <a href='http://shaktima.ru/' target='_blank' rel='noreferrer' className="subTitleMP">МДЦ ШактиМа </a>
      </div>
      <p>
        Сайт Московсокого Дхарма центра &quot;ШактиМа&quot;.
      </p>

      <div className="flex items-start mt-4">
        <TbWorldWww className='mr-2 shrink-0' color='orange' />
        <a href='https://sharanam.advayta.org/' target='_blank' rel='noreferrer' className="subTitleMP" >ПРИБЕЖИЩЕ</a>
      </div>
      <p >
        Прибежиже в линии передачи Свами Вишнудевананда Гири.
        Здесь вы найдете информацию о вступлении
        в традицию адвайта сиддхов, о предварительных практиках и предстоящих онлайн церемониях принятия Прибежища.
      </p>


      <div className="flex items-center mt-4">
        <TbWorldWww className='me-2 mb-1 shrink-0' color='orange' />
        <a href='https://vosdlife.org/' target='_blank' rel='noreferrer' className="subTitleMP" >Свет Дхармы </a>   <br />
      </div>
      <p>
        Сайт инструкторов ВОСД. Здесь Вы можете выбрать себе вводящего инструктора, который поможет Вам освоиться в традиции.
      </p>

      <div className="flex items-center mt-4">
        <TbWorldWww className='me-2 mb-1 shrink-0' color='orange' />
        <a href='https://www.siddhashop.com/' target='_blank' rel='noreferrer' className="subTitleMP">Сиддха шоп </a>   <br />
      </div>
      <p>
        Интернет магазин. Здесь Вы можете заказать книги, мурти и предметы Дхармы с доставкой.
      </p>

      <div className="flex items-center mt-4">
        <Image src={rutube} width={20} height={20} alt="rutube logo" className='mr-2 shrink-0' color='red' />
        <a href='https://rutube.ru/channel/35812675/' target='_blank' rel='noreferrer' className="subTitleMP">Канал Гуру в Rutube</a>   <br />
      </div>
      <p>
        Сатсанги и лекции Гуру по йоге и медитации.
      </p>


      <div className="flex items-center mt-4">
        <FaYoutube className='mr-2 shrink-0' color='red' />
        <a href='https://www.youtube.com/@vedicworld1' target='_blank' rel='noreferrer' className="subTitleMP">Vedic World  </a>   <br />
      </div>
      <p>
        Сатсанги и лекции Гуру по йоге и медитации.
      </p>

      <div className="flex items-center mt-4">
        <FaYoutube className='mr-2 shrink-0' color='red' />
        <a href='https://www.youtube.com/@DharmaLight' target='_blank' rel='noreferrer' className="subTitleMP">Свет Дхармы </a>   <br />
      </div>
      <p>
        Лекции и практики йоги от инструкторов ВОСД.
      </p>

      <div className="flex items-center mt-4">
        <FaYoutube className='mr-2 shrink-0' color='red' />
        <a href='https://www.youtube.com/@Ramanatha' target='_blank' rel='noreferrer' className="subTitleMP">Раманатха Гири  </a>   <br />
      </div>
      <p>
        Видео лекции монаха Раманатха Гири.
      </p>

      <div className="flex items-center mt-4">
        <FaTelegram className='mr-2 shrink-0' color="deepskyblue" />
        <a href='https://t.me/advayta_siddhov' target='_blank' rel='noreferrer' className="subTitleMP">Телеграм Адвайта сиддхов </a>   <br />
      </div>
      <p>
        Официальный телеграм Адвайта сиддхов.
      </p>

      <div className="flex items-center mt-4">
        <FaTelegram className='mr-2 shrink-0' color='deepskyblue' />
        <a href='https://t.me/mdc_ShaktiMa' target='_blank' rel='noreferrer' className="subTitleMP">МДЦ ШактиМА </a>   <br />
      </div>
      <p>
        Канал Московского Дхарма Центра &quot;ШактиМа&quot;. Мероприятия в г. Москва.
      </p>


      <div className="flex items-center mt-4">
        <FaInstagram className='mr-2 shrink-0' color='violet' />
        <a href='https://instagram.com/advayta.siddhov.official' target='_blank' rel='noreferrer' className="subTitleMP">Инстаграм Адвайта сиддхов  </a>   <br />
      </div>
      <p>
        Официальный инстаграм Адвайта сиддхов.
      </p>

      <div className="flex items-center mt-4">
        <SlSocialVkontakte className='mr-2 fill-blue-400 shrink-0' />
        <a href='https://vk.com/svami_visnudevananda_giri' target='_blank' rel='noreferrer' className="subTitleMP">
          Гуру в ВК </a>   <br />
      </div>
      <p>
        Официальная страница ВК Гуру Свами Вишнудевананда Гири.
      </p>

      <div className="flex items-center mt-4">
        <SlSocialVkontakte className='mr-2 fill-blue-400 shrink-0' />
        <a href='https://vk.com/advayta.siddhov' target='_blank' rel='noreferrer' className="subTitleMP">ВК Адвайта сиддхов </a>   <br />
      </div>
      <p>
        Официальная страница ВК Адвайта сиддхов.
      </p>

      <BottomImg />

    </div>
  )
}

export default page