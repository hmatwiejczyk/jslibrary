import { Tooltip } from './ui/tooltip';
import { Dropdown } from './ui/dropdown';
import { Tabs } from './ui/tabs';
import { Toast } from './ui/toast';

const tooltip = new Tooltip(document.querySelector('.tooltip'));

tooltip.init();

const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
});

const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

const toast = new Toast();
toast.init();

const toastTrigger = document.querySelector('.toast-trigger');
toastTrigger.addEventListener('click', () => {
  toast.show('hej');
})