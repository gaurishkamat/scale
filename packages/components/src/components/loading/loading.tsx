import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'scale-loading',
  styleUrl: './loading.css',
  shadow: true,
})
export class Loading {
  @Prop() progressAmount: string = '0';
  @Prop() progressColor: string = '#2ecc71';

  render() {
    return (
      <div
        style={{
          width: `100%`,
          height: `100%`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          background: `conic-gradient(${this.progressColor} ${
            this.progressAmount
          }%, 0, #ecf0f1 ${(100 - parseInt(this.progressAmount)).toString()}%)`,
          borderRadius: `50%`,
        }}
      >
        <div>
          <span>{this.progressAmount}</span>
        </div>
      </div>
    );
  }
}
