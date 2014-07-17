import Ember from 'ember';

export default Ember.Mixin.create({
  resizing: false,

  onResizeStart: Ember.K,
  onResizeEnd: Ember.K,
  onResize: Ember.K,
});
