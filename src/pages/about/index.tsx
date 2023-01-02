import Image from 'next/image';
import { ReactElement } from 'react';
import cls from 'classnames';

import BaseLayout from '../../components/Layouts/BaseLayout';
import ProfileImg from '../../../public/assets/profile.png';

import styles from './styles.module.scss';

function About() {
  return (
    <div className={styles.about}>
      <div>
        <section className={styles.about__main_section}>
          <p>Hello, my name is</p>

          <h1>Eduardo Assunção</h1>

          <p>
            I&apos;m a fullstack developer that work professionally with backend
            but use the free time creating jamstack applications, focusing on
            building the best experiences on the web.
          </p>
        </section>

        <section className={cls(styles.about__image_section, 'group')}>
          <div className='group-hover:rotate-0' />
          <Image
            src={ProfileImg}
            alt="Foto de perfil Eduardo"
            width={336}
            height={400}
            placeholder='blur'
          />
        </section>
      </div>
    </div>
  )
}

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  )
}

export default About;
