'use client'
import { feedbacks } from '@/helpers/foto'
import ImageGallery from "react-image-gallery"
import MyAccordion from '@/components/MyAccordion'
import SignUpForYogaOnline from '@/components/SignUpForYogaOnline'

const page = () => {
  const settings = {
    showBullets: false,
    showIndex: false,
    slideDuration: 1000,
    slideInterval: 3000,
    showFullscreenButton: true,
    showThumbnails: false,
    lazyLoad: true,
  }

  return (
    <div className='main-container'>
      <h1 className="main-title">Отзывы</h1>
      <MyAccordion title={'Отзыв Натальи'} id='01' >
        <div className='px-2 text-base'>
          <p>
            Как я пришла к йоге!
          </p>
          <p>
            Всем привет ! Меня зовут Наталья.Мне 41 год. Хожу на йогу уже 3 года. Впервые я услышала о йоге от своего врача. Именно это чудесная женщина увидев мое искривление позвоночника порекомендовала мне занятия йогой. Я покивала, сказала «- Да, да!! Я обязательно пойду!» И благополучно забыла об это разговоре на долгих 2 года. Потом, когда у меня начала жутко болеть спина, когда я стою, когда хожу, а также боль начала отдавать в правую ногу, я вспомнила об этом разговоре.Искала по принципу ближе к дому.Впервые, когда пришла на групповые занятия с Тимуром меня удивило, что женщины старше меня могли делать вещи, которые мне недоступны.Тимур на первом занятии все подробно объяснял, каждое упражнение, специально для меня, ведь я была новичок.Понравилась атмосфера на занятиях, все было спокойно и каждый делал в меру своих возможностей.Тимур не давил на нас, не требовал делать то, что тело не готово делать.В начале каждого занятия Тимур все подробно рассказывает какие асаны и для чего мы их делаем, всегда отвечает на интересующие нас вопросы.Каждое занятие мы работаем с дыхание.Это очень важно.Ведь именно в этот момент мы настраиваемся на практику.Тимур все упражнения делает с нами, так легче понять, как нужно их делать правильно, а также можно в процессе занятий узнать как усилить или ослабить позу.На каждом занятии Тимур дает какие - то новые упражнения.
          </p>

          <p className='mt-4'>
            Что нравится в йоге.
          </p>

          <p>
            Сейчас мне уже трудно представить свою жизнь без йоги.Тело просит само.Если пропускаю занятия, то тело начинает «костенеть», и опять начинаются боли в спине.Поэтому я стараюсь не пропускать.Нравится свое состоянии после занятий.Йога оставляет приятное послевкусие)).Выходишь из зала отдохнувшей! Тело приятно натружено, голова пустая, а ведь в современном мире это важно, иногда ни о чем не думать и дать мозгу отдохнуть))).Хорошая вещь - шавасана!.Занятия длятся час и именно в этот час, как говорит Тимур «Мы здесь и сейчас!» У нас очень разновозрастная группа, ну никакого соперничества нет.Каждый соперничает с самим с собой на коврике.Нравится атмосфера в группе, полумрак и спокойная музыка.Нравится Тимур, который до начала занятий рассказывает интересные истории про возможности тела, и о том как жить в гармонии с самим с собой и со своим телом.
          </p>

          <p className='mt-4'>
            Что достигнуто за 3 года.
          </p>
          <p>
            Физически я стала более выносливой.Тело стало более подтянуто.Стала гораздо реже болеть(хотя у меня маленький ребенок, который часто болеет зимой).Я лучше чувствую свое тело.Умею сама разгружать свой мозг.Когда приезжает в гости мой племянник(13 лет), и я ему в шутку говорю – «А так ты можешь ?» и показываю, что - то легкое – он говорит мне «Да это легко!» и повторяет и говорит, – «И чего ты туда ходишь ? Любой может это повторить»!Тогда я показываю ему позу, которую, только человек занимающийся сможет повторить.Мне приятно, что я могу делать вещи, которые раньше мне были недоступны.Хочу сказать большое спасибо Тимуру! Ведь именно он построил занятия таким образом – что хочется туда ходить и ходить и ходить!
          </p>
        </div>
      </MyAccordion>

      <MyAccordion title='Отзыв Ирины' id='02'>
        <p className='px-2 text-base'>
          Йога - удивительный вид физической активности, но и одновременно дает возможность духовного развития. Мне повезло найти своего тренера. Знакомство с Тимуром и йогой изменило мою жизнь. Я стала значительно себя лучше чувствовать, ушли некоторые проблемы со здоровьем, появляется утраченная с годами гибкость. На занятия хожу с удовольствием. Тимур на занятиях создает теплую и уютную атмосферу, находит индивидуальный подход к каждому участнику группы. Спасибо!
        </p>
      </MyAccordion>

      <MyAccordion title='Отзыв Натальи' id='03'>
        <p className='px-2 text-base'>
          Хочу сказать несколько слов о том, что значит для меня йога с Тимуром. Я пришла в спортивный клуб прежде всего чтобы решить проблемы со здоровьем. Пробовала и упражнения на тренажёрах, и другие занятия, но, остановилась на йоге. Я выбрала йогу именно благодаря Тимуру. У него гармоничные, разнообразные и интересные занятия. Очень вдумчивый и аккуратный подход для людей с разной физической подготовкой. Практики направлены для восстановления здоровья позвоночника и суставов, обретения правильной осанки и здоровья в целом. Кроме того, понятная подача информации, грамотность, интеллигентность. А его постоянные напоминания о том что не стоит гнаться за успехами и сроками, помогают мне оберегать себя от травм. Спасибо!
          С уважением, Наталья Фролова.
        </p>
      </MyAccordion>

      <MyAccordion title='Отзыв Елены' id='04'>
        <p className='px-2 text-base'>
          Более 5 лет занимаюсь практикой йоги с Тимуром. В йогу я пришла от отчаяния, постоянных болей в позвоночнике и нарушения подвижности конечностей. Надо сказать, что я человек далекий от спорта, физической культуры и никогда не верила в свои физические возможности. Первое время было немного трудно. Но когда я ощутила первый успех и сделала то, о чем даже представить не могла, моя жизнь изменилась. Это чувство, что невозможное тебе доступно и ты на многое способен. Сегодня мои возможности в йоге ещё более широкие: это заметная невооруженным взглядом гибкость, физическая стройность, духовное удовлетворение. Надеюсь буду и дальше продолжать практику с Тимуром.
          Елена, 49 лет.
        </p>
      </MyAccordion>

      <MyAccordion title='Отзыв Марии' id='05'>
        <p className='px-2 text-base'>
          Тимур, много лет уже с Вами занимаюсь и ваша манера преподавать йогу мне сразу понравилась и нравится до сих пор. Я практикую периодически йогу в других местах с разными преподавателями, но замечаю, что каждый раз ищу сходство с вашими занятиями, которые для меня наиболее комфортны и гармоничны🙏
        </p>
      </MyAccordion>

      <h5 className="mt-10 w-full text-center">Отзывы на йогу онлайн</h5>
      <ImageGallery items={feedbacks} {...settings} />

      <div className="mt-10 w-full text-center">
        <SignUpForYogaOnline />
      </div>
    </div>
  )
}

export default page