// es6 polyfill
import 'core-js/fn/array/find-index';

import Affix from '../src/components/affix';
import Alert from '../src/components/alert';
import BackTop from '../src/components/back-top';
import Badge from '../src/components/badge';
import Breadcrumb from '../src/components/breadcrumb';
import Button from '../src/components/button';
import Card from '../src/components/card';
import Carousel from '../src/components/carousel';
import Cascader from '../src/components/cascader';
import Checkbox from '../src/components/checkbox';
import Circle from '../src/components/circle';
import Collapse from '../src/components/collapse';
import DatePicker from '../src/components/date-picker';
import Dropdown from '../src/components/dropdown';
import Form from '../src/components/form';
import Icon from '../src/components/icon';
import Input from '../src/components/input';
import InputNumber from '../src/components/input-number';
import LoadingBar from '../src/components/loading-bar';
import Menu from '../src/components/menu';
import Message from '../src/components/message';
import Modal from '../src/components/modal';
import Notice from '../src/components/notice';
import Page from '../src/components/page';
import Poptip from '../src/components/poptip';
import Progress from '../src/components/progress';
import Radio from '../src/components/radio';
import Rate from '../src/components/rate';
import Slider from '../src/components/slider';
import Spin from '../src/components/spin';
import Steps from '../src/components/steps';
import Switch from '../src/components/switch';
import Table from '../src/components/table';
import Tabs from '../src/components/tabs';
import Tag from '../src/components/tag';
import Timeline from '../src/components/timeline';
import TimerBtn from '../src/components/timerBtn';
import TimePicker from '../src/components/time-picker';
import Tooltip from '../src/components/tooltip';
import Transfer from '../src/components/transfer';
import Tree from '../src/components/tree';
import Upload from '../src/components/upload';
import { Row, Col } from '../src/components/grid';
import { Select, Option, OptionGroup } from '../src/components/select';
import locale from '../src/locale';




import Header from './components/header';
import Footer from './components/footer';
// 引入组件！直接使用es6的语法


const iview = {
    Affix,
    Alert,
    BackTop,
    Badge,
    Breadcrumb,
    BreadcrumbItem: Breadcrumb.Item,
    iButton: Button,
    Button,
    ButtonGroup: Button.Group,
    Card,
    Carousel,
    CarouselItem: Carousel.Item,
    Cascader,
    Checkbox,
    CheckboxGroup: Checkbox.Group,
    iCircle: Circle,
    DatePicker,
    Dropdown,
    DropdownItem: Dropdown.Item,
    DropdownMenu: Dropdown.Menu,
    Form,
    iForm: Form,
    FormItem: Form.Item,
    Col,
    iCol: Col,
    Collapse,
    Icon,
    Input,
    iInput: Input,
    InputNumber,
    LoadingBar,
    Menu,
    iMenu: Menu,
    MenuGroup: Menu.Group,
    MenuItem: Menu.Item,
    Submenu: Menu.Sub,
    Message,
    Modal,
    Notice,
    Option: Option,
    iOption: Option,
    OptionGroup,
    Page,
    Panel: Collapse.Panel,
    Poptip,
    Progress,
    iProgress: Progress,
    Radio,
    RadioGroup: Radio.Group,
    Rate,
    Row,
    Select,
    iSelect: Select,
    Slider,
    Spin,
    Step: Steps.Step,
    Steps,
    // Switch,
    iSwitch: Switch,
    iTable: Table,
    Table,
    Tabs: Tabs,
    TabPane: Tabs.Pane,
    Tag,
    Timeline,
    TimelineItem: Timeline.Item,
    TimePicker,
    Tooltip,
    Transfer,
    Tree,
    Upload,
    Header,
    Footer,
    TimerBtn
};

const install = function (Vue, opts = {}) {
    locale.use(opts.locale);
    locale.i18n(opts.i18n);

    Object.keys(iview).forEach((key) => {
        Vue.component(key, iview[key]);
    });

    Vue.prototype.$Loading = LoadingBar;
    Vue.prototype.$Message = Message;
    Vue.prototype.$Modal = Modal;
    Vue.prototype.$Notice = Notice;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

module.exports = Object.assign(iview, {install});   // eslint-disable-line no-undef
