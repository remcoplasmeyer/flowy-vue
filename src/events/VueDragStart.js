import AbstractEvent from './AbstractEvent';

export default class VueDragStart extends AbstractEvent {
  static type = 'vue:drag:start';

  get sourceComponent() {
    return this.data.sourceComponent;
  }
}
