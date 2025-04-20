import {FieldValues} from "react-hook-form";
import {PagerFormProps} from "./PagerForm.types";
import {PagerForm as Web} from "./PagerForm.web";

export function PagerForm<TFieldValues extends FieldValues>({
  ...props
}: PagerFormProps<TFieldValues>): JSX.Element {
  return <Web<TFieldValues> {...props} />;
}
