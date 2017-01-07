import Component from 'can-component';
import DefineMap from 'can-define/map/';
import './comp-header.less';
import view from './comp-header.stache';

export const ViewModel = DefineMap.extend({
  message: {
    value: 'This is the comp-header component'
  }
});

export default Component.extend({
  tag: 'comp-header',
  viewModel: ViewModel,
  view: view,
	events: {
    init: function () {
        console.log("test");
		}
	}
});
