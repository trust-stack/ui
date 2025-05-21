import {View, XStack, YStack} from "tamagui";
import {Alert, AlertProps} from "./Alert";
import {Button} from "./Button";
import {Card, CardProps} from "./Card";
import {Checkbox, CheckboxLabel} from "./Checkbox";
import type {DialogProps} from "./Dialog";
import {Dialog} from "./Dialog";
import {Divider} from "./Divider";
import {Icon, IconProps} from "./Icon";
import {Input, InputProps} from "./Input";
import {ListItem} from "./List";
import {Popover} from "./Popover";
import {Progress} from "./Progress";
import {RadiantCircle} from "./RadiantCircle";
import type {RadioGroupProps, RadioProps} from "./Radio";
import {Radio, RadioGroup} from "./Radio";
import type {SelectProps} from "./Select";
import {Select} from "./Select";
import {Sheet, SheetContent} from "./Sheet";
import {Spinner} from "./Spinner";
import {Switch} from "./Switch";
import {DataTable} from "./Table";
import {TabItem, Tabs, TabsContent} from "./Tabs";
import {Tooltip} from "./Tooltip";
import {Body, Display, Headline, Hero, Label, Title} from "./typography";
import {useDebounce} from "./utils";

export * from "./Badge";
export * from "./BarcodeScanner";
export * from "./BottomAppBar";
export * from "./Chip";
export * from "./CompactScreen";
export * from "./DatePicker";
export * from "./DatePickerProvider";
export * from "./DateRangePicker";
export * from "./DateTimePicker";
export * from "./dimensions";
export * from "./EditableTitle";
export * from "./ExtendedFab";
export * from "./Fab";
export * from "./Grid";
export * from "./hooks";
export * from "./IconButton";
export * from "./List";
export * from "./ListFooter";
export * from "./Menu";
export * from "./Month";
export * from "./MonthPicker";
export * from "./NavRail";
export * from "./NoResults";
export * from "./NumericalInput";
export * from "./PlatformContext";
export * from "./QrCode";
export * from "./render";
export * from "./ScreenLayout";
export * from "./ScrollTo";
export * from "./Search";
export * from "./SearchList";
export * from "./SegmentButton";
export * from "./SideSheet";
export * from "./Table";
export * from "./TagChip";
export {config} from "./tamagui.config";
export * from "./TextField";
export * from "./TextInput";
export * from "./Tooltip";
export * from "./TopAppBar";
export * from "./utils/color";
export * from "./utils/image";

// Explicit tamagui overrides
export {
  Alert,
  Body,
  Button,
  Card,
  Checkbox,
  CheckboxLabel,
  DataTable,
  Dialog,
  Display,
  Divider,
  Headline,
  Hero,
  Icon,
  Input,
  Label,
  ListItem,
  Popover,
  Progress,
  RadiantCircle,
  Radio,
  RadioGroup,
  Select,
  Sheet,
  SheetContent,
  Spinner,
  Switch,
  TabItem,
  Tabs,
  TabsContent,
  Title,
  Tooltip,
  useDebounce,
  View,
  XStack,
  YStack,
};

// Explicity type overrides
export type {
  AlertProps,
  CardProps,
  DialogProps,
  IconProps,
  InputProps,
  RadioGroupProps,
  RadioProps,
  SelectProps,
};

export type {
  BodyProps,
  DisplayProps,
  HeadlineProps,
  HeroProps,
  LabelProps,
  TitleProps,
} from "./typography";

export * from "tamagui";
