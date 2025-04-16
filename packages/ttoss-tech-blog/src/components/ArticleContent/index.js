/** @jsx h */
import { h } from 'vanilla-v-dom';
import { fakerKO as faker } from '@faker-js/faker';
import classNames from 'classnames/bind';
import * as styles from './articleContent.module.css';
import { EMOJI_PROFILE } from '../constants';
import { formatDate } from '../../utils';

const cx = classNames.bind(styles);

export default function ArticleContent({
  thumbnailConfig,
  editor,
  updatedTime,
  title,
  shortDescription,
}) {
  const desc = editor.shortDescription ? `ㆍ${editor.shortDescription}` : '';

  return (
    <article class={cx('p-container')}>
      <header>
        <img
          class={cx('thumb-img')}
          srcset={thumbnailConfig.imageUrl}
          alt={thumbnailConfig.imageAlt}
        />
        <h1 class={cx('p-title')}>{title}</h1>
        <section class={cx('author-container')}>
          <img srcset={EMOJI_PROFILE} alt="profile-img" />
          <div>
            <span class={cx('author')}>
              {`${faker.person.lastName()}${faker.person.firstName()}`}
              {desc}
            </span>
            <time class={cx('update-time')}>{formatDate(updatedTime)}</time>
          </div>
        </section>
      </header>
      <section>{shortDescription}</section>
    </article>
  );
}
