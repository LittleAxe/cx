import {Layout} from './Layout';

export class FirstVisibleChildLayout extends Layout {

   checkVisible(instance) {
      if (!instance.visible)
         return false;

      if (instance.widget.layout && instance.widget.layout.useParentLayout)
         return Array.isArray(instance.children) && instance.children.some(c=>this.checkVisible(c));

      return true;
   }

   explore(context, instance, items) {
      instance.children = [];
      var identical = !instance.shouldUpdate && instance.cached.children != null;
      for (var i = 0; i < items.length; i++) {
         let x = instance.getChild(context, items[i]);
         x.explore(context);
         if (this.checkVisible(x)) {
            if (identical && instance.cached.children[instance.children.length] !== x)
               identical = false;
            instance.children.push(x);
            break;
         }
      }

      if (!identical || instance.children.length != instance.cached.children.length)
         instance.shouldUpdate = true;
   }
}

Layout.alias('firstvisiblechild', FirstVisibleChildLayout);