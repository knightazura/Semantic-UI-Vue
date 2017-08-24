import { classes, getChildProps, getElementType } from 'src/lib';
import mixin from './mixin';

export default {
  name: 'SuiAccordionContent',
  ...mixin,
  render() {
    const ElementType = getElementType(this);
    return (
      <ElementType
        {...getChildProps(this)}
        class={classes('content', this.dataActive && 'active')}
      >
        {this.$slots.default}
      </ElementType>
    );
  },
};