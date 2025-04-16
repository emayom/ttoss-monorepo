/** @jsx h */
import { h } from 'vanilla-v-dom';
import classNames from 'classnames/bind';
import * as styles from './navbar.module.css';
import { LOGO_ARIA_LABEL, NAV_LIST } from '../constants';

const cx = classNames.bind(styles);

export default function Navbar() {
  return (
    <nav class={cx('navbar')}>
      <div class={cx('navbar-inner')}>
        <div class={cx('logo-container')} aria-label={LOGO_ARIA_LABEL}>
          <a href="/tech" data-resource-path="/tech">
            <object
              aria-label="toss-logo"
              type="image/svg+xml"
              data="/toss-logo.svg"
            />
          </a>
        </div>
        <div class={cx('navbar-content')}>
          <ul class={cx('navbar-menu')}>
            {NAV_LIST.map(({ title, href }) => (
              <li
                class={cx('navbar-item', ['typography--p', 'color--grey700'])}
                data-resource-path={href}
              >
                {title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
