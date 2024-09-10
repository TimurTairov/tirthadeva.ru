import Image from 'next/image'
import yoga1 from '@/public/yoga-1.png'
import yoga2 from '@/public/yogaclass2.jpg'
import yoga3 from '@/public/yogaclass3.jpg'

const page = () => {
  return (
    <div className='main-container font-light'>
      <h1 className="text-4xl font-semibold text-center w-full"> Хатха йога. Основные положения.</h1>

      <p className='mt-10'>
        Хатха йога это неотъемлемая часть Кундалини и Раджа йоги. Это фундамент и основа более утонченных практик. Многие сиддхи и риши практиковали этот вид йоги.
      </p>

      <p className='mt-4'>
        Хатха йога включает в себя:<br />
        - Шаткармы<br />
        - Виньясы<br />
        - Вьяямы<br />
        - Асаны<br />
        - Мудры и бандхи<br />
        - Крийи<br />
        - Пранаямы (начального уровня)<br />
      </p>

      <p className='mt-4'>
        Хатха йога в тантрическом стиле это:<br />
        - гармоничная практика асан методом Энергии (Шакти, материнской - мягкий метод) и методом Сознания (Шива, отцовский - аскетичный метод);<br />
        - исключение крайностей (ленности и сверхусилия);<br />
        - сосредоточенность не на форме, а на содержании практики;<br />
        - правило гармоничного нахождения в асанах (устал - отдохни, либо выполни облегченный вариант позы);<br />
        - получение удовольствия от практики: от выполнения асаны, от преодоления себя, от отдыха;<br />
        - методичное увеличение времени, проведенное в асане за один или несколько подходов;<br />
        - концентрация внимания на дыхании, ощущениях в теле, мантре или внешней точке;<br />
        - неподвижность, концентрация и расслабленность в позе;<br />
        - непривязанность к результатам;<br />
        - регулярность занятий.
      </p>

      <Image src={yoga1} width={600} height={500} alt='yoga' className='w-full h-auto mt-4' />

      <p className='mt-4'>
        Метод Энергии предполагает мягкость и расслабление в асанах.
        Точно также, как младенцу необходима ласка и забота матери, новоиспеченному йогину необходим метод Энергии.
        Он позволяет практикующему закрепиться в йоге и не сбиться с пути самопознания.
      </p>

      <p className='mt-4'>
        В этом методе важно довериться потоку Энергии, расслабиться физически и отпустить внутреннее напряжение.
        Неподвижность, концентрация внимания на ощущениях в теле и расслабление, вот три кита на которых держится этот метод.
        При этом внешне, асана может выглядеть не очень привлекательно.
        Не стоит из-за этого переживать. Не нужно оценивать ни себя, ни других.
        Мы ведь не знаем какие внутренние процессы в этот момент могут у них происходить.
      </p>

      <p className='mt-4'>
        Здесь наша задача максимально расслабиться, отпустить внутренний контроль и напряжение.
        Всё остальное за нас сделает пробудившееся Энергия. Мы только не должны ей мешать.
        Когда Энергия пробудилась, ее можно почувствовать физически в виде приятных покалываний, ощущения движения Энергии или тепла по телу.
        Возможны какие-то другие приятные ощущения. Пробудившееся Энергия сама трансформирует наше тело нужным образом легко, гармонично и естественно.
        Поэтому, это очень важный метод, который нельзя игнорировать в йоге.
      </p>

      <p className='mt-4'>
        В противовес методу Энергии, есть метод Сознания, в котором культивируется преодоление себя и аскетичное выполнение асан и упражнений йоги.
        Если в методе Энергии не важна отстройка и техника безопасности, так как асаны выполняются в расслаблении, то в методе Сознания это уже имеет принципиальное значение.
        Здесь мы сознательно добавляем усилия таким образом, чтобы наши усилия не переходили в насилие над собой.
        Метод Сознания позволяет сделать существенный прорыв в йоге, развивает силу воли и приближает йогина к достижению поставленных целей.
      </p>

      <p className='mt-4'>
        Насилие в йоге неэффективно. В том числе и над собой. Ахимса прежде всего. Мы исключаем все крайности в практике.
        С одной стороны, ленность, инертность и сонливость в асанах, с другой стороны - сверхусилие, чрезмерную нагрузку и крайне болезненные ощущения в теле.
        Практикуя методом Энергии, йогин фактически выполняет поклонение Богине МахаШакти, Богине Кундалини.
        Практикуя методом Сознания, йогин выполняет поклонение Шиве.<br />
      </p>
      <p className='mt-4'>
        Гармоничное выполнение асан означает правильное сочетание этих двух методов йоги, метода Энергии и метода Сознания.
        Причем, правильность пропорции этих двух методов йогин должен нащупать самостоятельно практическим путем на основании своей подготовки, физической формы и внутреннего состояния.
      </p>

      <p className='mt-4'>
        Гармония это основной метод в йоге, исключающий крайности и идущий серединным путем.
        Такой метод приводит к трем радостям в практике.
        Радость от выполнения позы, радость от преодоления себя, радость от отдыха.
      </p>

      <p className='mt-4'>
        Аутентичный подход в практике йоги предполагает длительное время нахождения в асанах.
        Начинающие практикуют по 1-3 минуты на асану, опытные йогины практикуют по 3-5 минут.
        Продвинутые йогины практикуют 5-15 минут.
        Более 15-20 минут практикуют мастера йоги.
      </p>

      <Image src={yoga2} width={600} height={500} alt='yoga' className='w-full h-auto mt-4' />

      <p className='mt-4'>
        Необходимо целенаправленно и постепенно увеличивать время нахождения в асанах.
        Лучше сделать меньше асан, но более качественно, чем сделать много асан, но даже не почувствовать эффект от них.
        Естественно, после каждой выполненной позы необходим небольшой отдых.
      </p>

      <p className='mt-4'>
        При этом, всегда необходимо помнить про гармонию в практике.
        Самостоятельно выходить из позы и отдыхать в любом удобном положении можно в любой момент времени без специальной на это команды со стороны инструктора йоги.
        Или можно выполнить облегченный вариант позы, при необходимости. Вообще, не стоит стесняться делать более простые вариации позы.
      </p>

      <p className='mt-4'>
        Работа с телом это прежде всего работа с Энергией, однако, работу с Сознанием не стоит игнорировать.
        Для этого мы непрерывно концентрируемся на ощущениях в теле, на дыхании, на внешней или внутренней точке, на мантре.
        Опытные йогины могут добавлять Атма Вичару или Чистое видение.
      </p>

      <p className='mt-4'>
        Концентрация должна идти фоном на протяжении всего занятия в каждой позе и в каждом упражнении.
        Назойливые мысли будут постоянно вас отвлекать. Ваша задача никак на них не реагировать.
        Не стоит с ними бороться. Это будет не равный бой. Лучшая стратегия - игнорирование мыслей.
        Пусть мысли, как облака на небе, проплывают где-то на заднем фоне.
        Мысли, они как снег или ветер, идут своим чередом, спонтанно приходят и спонтанно уходят.
        Вы же ими не затронуты. Никак не реагируйте на потоки мыслей, не взаимодействуйте с ними. Формируйте в себе позицию отрешенного, не затронутого зрителя.
      </p>

      <p className='mt-4'>
        В первую очередь, это необходимо для того, чтобы научиться чувствовать и ощущать границы возможностей своего тела, не допускать крайние болезненные ощущения. Также это способствует повышению уровня концентрации и подготавливает йогина к более тонким практикам, таким как медитация, визуализация, созерцание.
      </p>

      <p className='mt-4'>
        Не стоит ждать от практики быстрых результатов.
        При этом, лучше развивать привычку регулярно заниматься йогой.
        Со временем, растяжка и концентрация станут существенно лучше, уйдут многие болезни, иммунитет станет сильнее.
        С первыми результатами в йоге, ваша вера и уверенность сильно возрастут. Дальше будет легче.
      </p>

      <p className='mt-4'>
        Вывод: такой подход в йоге при внешней легкости, дает вполне ощутимые конкретные результаты, такие как:<br />
        - гибкость и тонус физического тела<br />
        - радость от выполнения йоги<br />
        - пробуждение внутренней Энергии<br />
        - чистоту каналов<br />
        - работу с энерго-центрами (чакрами)<br />
        - повышение концентрации внимания<br />
        - осознанность.<br />
      </p>

      <p className='mt-4'>© Тиртхадэва</p>

      <Image src={yoga3} width={600} height={500} alt='yoga' className='w-full h-auto mt-4' />
    </div>
  )
}

export default page