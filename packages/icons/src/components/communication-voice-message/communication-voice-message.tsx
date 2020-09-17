import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'scale-icon-communication-voice-message',
})
export class CommunicationVoiceMessage {
  @Prop() size: number = 24;
  @Prop() color: string = 'currentColor';
  @Prop() selected: boolean = false;

  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={this.size}
        height={this.size}
        viewBox="0 0 24 24"
      >
        <g fill={this.color}>
          {this.selected ? (
            <g>
              <path
                fill-rule="evenodd"
                d="M1.5 3.5V16a3 3 0 003 3H6v2.275A1.75 1.75 0 009 22.5l3.5-3.5h7a3 3 0 003-3V3.5h-21zm7 8.75a.75.75 0 11-1.5 0v-2a.75.75 0 111.5 0v2zm3 2a.75.75 0 11-1.5 0v-6a.75.75 0 111.5 0v6zm3-1a.75.75 0 11-1.5 0v-4a.75.75 0 111.5 0v4zm3-1a.75.75 0 11-1.5 0v-2a.75.75 0 011.5 0v2z"
              ></path>
            </g>
          ) : (
            <g>
              <path
                d="M22.45 3v12.55c0 1.65-1.35 3-3 3h-7l-3.5 3.5c-.35.35-.75.5-1.2.5-.9 0-1.75-.7-1.75-1.75v-2.3H4.5c-1.65 0-3-1.35-3-3V3zM21 4.5H3v11c0 .85.65 1.5 1.5 1.5h3v3.8c0 .2.25.35.45.15L11.9 17h7.6c.85 0 1.5-.65 1.5-1.5zM10.75 7c.4 0 .75.35.75.75v6c0 .4-.35.75-.75.75s-.75-.35-.75-.75v-6c0-.4.35-.75.75-.75zm3 1c.4 0 .75.35.75.75v4c0 .4-.35.75-.75.75s-.75-.35-.75-.75v-4c0-.4.35-.75.75-.75zm-6 1c.4 0 .75.35.75.75v2c0 .4-.35.75-.75.75S7 12.15 7 11.75v-2c0-.4.35-.75.75-.75zm9 0c.4 0 .75.35.75.75v2c0 .4-.35.75-.75.75s-.75-.35-.75-.75v-2c0-.4.35-.75.75-.75z"
                fill-rule="evenodd"
              ></path>
            </g>
          )}
        </g>
      </svg>
    );
  }
}