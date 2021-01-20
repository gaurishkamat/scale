import { Component, h, Prop, Host } from '@stencil/core';
import classNames from 'classnames';
import { CssClassMap } from '../../utils/utils';
import { renderIcon } from '../../utils/render-icon';

const readData = data => {
  let parsedData;
  try {
    parsedData = JSON.parse(data);
  } catch (error) {
    parsedData = data;
  }
  return parsedData;
};

@Component({
  tag: 'scale-app-footer',
  styleUrl: 'app-footer.css',
  shadow: true,
})
export class AppFooter {
  @Prop() customClass?: string = '';
  @Prop() claimLang: string;
  @Prop() footerNavigation?: any = [];
  @Prop() variant?: string = 'standard';

  footerMenu() {
    return (
      <ul>
        {readData(this.footerNavigation).map(item => (
          <li class="footer-navigation__item">
            <a
              class="footer-navigation__item-link"
              href={item.href || 'javascript:void(0);'}
              onClick={event => {
                if (typeof item.onClick === 'function') {
                  item.onClick(event);
                }
              }}
            >
              {item.icon &&
                renderIcon(item.icon, 'footer-navigation__item-link')}
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    );
  }

  iconDefs() {
    return (
      <template>
        <svg>
          <defs>
            <g id="icon-alert-imprint-dataprivacy">
              <path
                d="M12 1l9.5 2.15v8c0 2.85-.95 5.55-2.6 7.75-2.6 3.4-5.85 4.35-6.9 4.65-4.2-1.2-6.25-3.8-6.7-4.4-1.75-2.25-2.8-5.05-2.8-8v-8zm0 1.5L4 4.35v6.8c0 4.95 3.3 9.35 8 10.8 4.7-1.45 8-5.85 8-10.8v-6.8zM10.6 13l1.4 1.4 1.4-1.4h1c.95 0 1.75.7 1.95 1.65l.15.85h-9l.15-.85C7.8 13.7 8.65 13 9.6 13zM12 6.5c1.4 0 2.5 1 2.5 2.5 0 1.55-1.05 3-2.5 3s-2.5-1.5-2.5-3 1.1-2.5 2.5-2.5z"
                fill-rule="evenodd"
              ></path>
            </g>
          </defs>
        </svg>
      </template>
    );
  }

  render() {
    return (
      <Host>
        <div class={this.getCssClassMap()}>
          <div class="footer-mask"></div>
          <footer class="footer">
            {this.iconDefs()}
            <div class="footer-content">
              <div class="footer-branding">
                <app-logo claim claimLang={this.claimLang}></app-logo>
              </div>
              <div class="footer-copyright">© Deutsche Telekom GmbH</div>
              <nav aria-label="bottom" class="footer-navigation">
                {this.footerMenu()}
              </nav>
            </div>
          </footer>
        </div>
      </Host>
    );
  }

  getCssClassMap(): CssClassMap {
    return classNames(
      'footer-container',
      this.customClass && this.customClass,
      this.variant && `footer--variant-${this.variant}`
    );
  }
}