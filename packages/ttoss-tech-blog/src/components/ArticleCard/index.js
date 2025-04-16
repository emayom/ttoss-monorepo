/** @jsx h */
import { h } from 'vanilla-v-dom';
import classNames from 'classnames/bind';
import { formatDate } from '../../utils';
import * as styles from './articleCard.module.css';

const cx = classNames.bind(styles);

export default function ArticleCard({
  id,
  key,
  thumbnailConfig,
  title,
  subtitle,
  updatedTime,
}) {
  return (
    <li key={id}>
      <a
        class={cx('article-card')}
        href={`/article/${key}`}
        data-resource-path={`/article/${key}`}
      >
        <img
          class={cx('thumb-img')}
          srcset={thumbnailConfig.imageUrl}
          alt={thumbnailConfig.imageAlt}
        />
        <div>
          <h3
            class={cx('card-title', [
              'typography--h3',
              'typography--bold',
              'color--grey800',
            ])}
          >
            {title}
          </h3>
          <h7
            class={cx('subtitle', [
              'typography--h7',
              'typography--regular',
              'color--grey700',
            ])}
          >
            {subtitle}
          </h7>
          <time
            class={cx('update-time', [
              'typography--p',
              'typography--regular',
              'color--grey700',
            ])}
          >
            {formatDate(updatedTime)}
          </time>
        </div>
      </a>
    </li>
  );
}
