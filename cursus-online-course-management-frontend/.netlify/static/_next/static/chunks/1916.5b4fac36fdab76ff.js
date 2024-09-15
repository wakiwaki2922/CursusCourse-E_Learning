"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1916],{31916:function(e,t,s){s.d(t,{jelly:function(){return a}});class i extends HTMLElement{_propsToUpgrade={};shadow;template;defaultProps;isAttached=!1;constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.template=document.createElement("template")}storePropsToUpgrade(e){e.forEach(e=>{this.hasOwnProperty(e)&&void 0!==this[e]&&(this._propsToUpgrade[e]=this[e],delete this[e])})}upgradeStoredProps(){Object.entries(this._propsToUpgrade).forEach(([e,t])=>{this.setAttribute(e,t)})}reflect(e){e.forEach(e=>{Object.defineProperty(this,e,{set(t){"string,number".includes(typeof t)?this.setAttribute(e,t.toString()):this.removeAttribute(e)},get(){return this.getAttribute(e)}})})}applyDefaultProps(e){this.defaultProps=e,Object.entries(e).forEach(([e,t])=>{this[e]=this[e]||t.toString()})}}var r=':host{align-items:center;display:inline-flex;flex-shrink:0;height:var(--uib-size);justify-content:center;width:var(--uib-size)}:host([hidden]){display:none}.container{animation:rotate calc(var(--uib-speed)*2) linear infinite;filter:url(#uib-jelly-ooze);height:calc(var(--uib-size)/2);position:relative;width:var(--uib-size);will-change:transform}.container:after,.container:before{background-color:var(--uib-color);border-radius:100%;content:"";height:100%;left:25%;position:absolute;top:0;transition:background-color .3s ease;width:50%;will-change:transform}.container:before{animation:shift-left var(--uib-speed) ease infinite}.container:after{animation:shift-right var(--uib-speed) ease infinite}.svg{height:0;position:absolute;width:0}@keyframes rotate{0%,49.999%,to{transform:none}50%,99.999%{transform:rotate(90deg)}}@keyframes shift-left{0%,to{transform:translateX(0)}50%{transform:scale(.65) translateX(-75%)}}@keyframes shift-right{0%,to{transform:translateX(0)}50%{transform:scale(.65) translateX(75%)}}';class o extends i{_attributes=["size","color","speed"];size;color;speed;static get observedAttributes(){return["size","color","speed"]}constructor(){super(),this.storePropsToUpgrade(this._attributes),this.reflect(this._attributes)}connectedCallback(){this.upgradeStoredProps(),this.applyDefaultProps({size:40,color:"black",speed:.9}),this.template.innerHTML=`
      <div
        class="container"
      ></div>
      <svg width="0" height="0" class="svg">
        <defs>
          <filter id="uib-jelly-ooze">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation=${parseInt(this.size)/8}
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="ooze"
            />
            <feBlend in="SourceGraphic" in2="ooze" />
          </filter>
        </defs>
      </svg>
      <style>
        :host{
          --uib-size: ${this.size}px;
          --uib-color: ${this.color};
          --uib-speed: ${this.speed}s;
        }
        ${r}
      </style>
    `,this.shadow.replaceChildren(this.template.content.cloneNode(!0))}attributeChangedCallback(){let e=this.shadow.querySelector("style");e&&(e.innerHTML=`
      :host{
        --uib-size: ${this.size}px;
        --uib-color: ${this.color};
        --uib-speed: ${this.speed}s;
      }
      ${r}
    `)}}var a={register:(e="l-jelly")=>{customElements.get(e)||customElements.define(e,class extends o{})},element:o}}}]);