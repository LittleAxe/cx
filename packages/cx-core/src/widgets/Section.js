import {Widget, VDOM, getContent} from '../ui/Widget';
import {PureContainer} from '../ui/PureContainer';
import {Heading} from './Heading';

import {parseStyle} from '../util/parseStyle';

export class Section extends PureContainer {

   init() {
      if (typeof this.headerStyle == 'string')
         this.headerStyle = parseStyle(this.headerStyle);

      if (typeof this.footerStyle == 'string')
         this.footerStyle = parseStyle(this.footerStyle);

      if (typeof this.bodyStyle == 'string')
         this.bodyStyle = parseStyle(this.bodyStyle);

      super.init();
   }

   add(item) {
      if (item && item.putInto == 'header')
         this.header = {
            ...item,
            putInto: null
         };
      else if (item && item.putInto == 'footer')
         this.footer = {
            ...item,
            putInto: null
         };
      else
         super.add(...arguments);
   }

   declareData() {
      return super.declareData({
         id: undefined,
         headerStyle: {structured: true},
         headerClass: {structured: true},
         bodyStyle: {structured: true},
         bodyClass: {structured: true},
         footerStyle: {structured: true},
         footerClass: {structured: true}
      })
   }

   initComponents() {
      super.initComponents({
         header: this.getHeader(),
         footer: this.getFooter()
      });
   }

   getHeader() {
      if (this.title)
         return Widget.create(Heading, {
            text: this.title
         });

      if (this.header)
         return Widget.create(this.header);

      return null;
   }

   getFooter() {
      if (this.footer)
         return Widget.create(this.footer);

      return null;
   }

   prepareData(context, instance) {
      let {data} = instance;
      data.stateMods = {
         ...data.stateMods,
         pad: this.pad
      };
      super.prepareData(context, instance);
   }

   render(context, instance, key) {
      let {data, components} = instance;
      let header, footer;
      let {CSS, baseClass} = this;

      if (components.header) {
         header = (
            <header
               className={CSS.expand(CSS.element(baseClass, 'header'), data.headerClass)}
               style={data.headerStyle}
            >
               {getContent(components.header.render(context))}
            </header>
         );
      }

      if (components.footer) {
         footer = (
            <footer
               className={CSS.expand(CSS.element(baseClass, 'footer'), data.footerClass)}
               style={data.footerStyle}
            >
               {getContent(components.footer.render(context))}
            </footer>
         );
      }

      return (
         <section
            key={key}
            className={data.classNames}
            style={data.style}
            id={data.id}
         >
            { header }
            <div className={CSS.expand(CSS.element(this.baseClass, 'body'), data.bodyClass)} style={data.bodyStyle}>
               {this.renderChildren(context, instance)}
            </div>
            { footer }
         </section>
      )
   }
}


Section.prototype.styled = true;
Section.prototype.pad = true;
Section.prototype.baseClass = 'section';
