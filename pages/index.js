import Link from 'next/link';
import indexStyles from '../styles/index.module.css';

export default function Home() {
  return (
    <div className={indexStyles.entirePage}>
      <div className={indexStyles.title}>(I_n_t_e_r_n_e_t_F_o_r_T_h_e_D_a_y)</div>
      <Link href="/standard-internet">
        <a className={`${indexStyles.card} mdc-card`}>
          <div className={`${indexStyles.card_media} ${indexStyles.standard_media} mdc-card__media`}></div>
          <div className={`${indexStyles.card_content} mdc-card__primary-action`}>
            <div className={indexStyles.card_title}>Standard Internet</div>
            <ul className={indexStyles.card_description}>
              <li>Your standard dose of internet</li>
              <li>20-25 videos</li>
              <li>About 10 minutes</li>
              <li>A perfect slice</li>
            </ul>
          </div>
        </a>
      </Link>
      <Link href="/extended-internet">
      <a className={`${indexStyles.card} mdc-card`}>
          <div className={`${indexStyles.card_media} ${indexStyles.extended_media} mdc-card__media`}></div>
          <div className={`${indexStyles.card_content} mdc-card__primary-action`}>
            <div className={indexStyles.card_title}>Extended Internet</div>
            <ul className={indexStyles.card_description}>
              <li>An extra helping of internet</li>
              <li>40-50 videos</li>
              <li>About 20 minutes</li>
              <li>You think you want it, but by the end you realize you didn't</li>
            </ul>
          </div>
        </a>
      </Link>
      <Link href="/best-of-the-month">
      <a className={`${indexStyles.card} mdc-card`}>
          <div className={`${indexStyles.card_media} ${indexStyles.top_media} mdc-card__media`}></div>
          <div className={`${indexStyles.card_content} mdc-card__primary-action`}>
            <div className={indexStyles.card_title}>Best Of The Month</div>
            <ul className={indexStyles.card_description}>
              <li>The best of the last month</li>
              <li>20-25 videos</li>
              <li>About 10 minutes</li>
              <li>Popularity according to Reddit, so it might not actually be that good</li>
            </ul>
          </div>
        </a>
      </Link>
    </div>
  );
}
