/// <reference types="react" />
import * as PropTypes from 'prop-types';
import * as React from 'react';
export interface FormikValues {
  [field: string]: any;
}
export declare type FormikErrors<Values> = { [field in keyof Values]: any };
export declare type FormikTouched<Values> = {
  [field in keyof Values]: boolean
};
export interface FormikState<Values> {
  values: Values;
  error?: any;
  errors: FormikErrors<Values>;
  touched: FormikTouched<Values>;
  isSubmitting: boolean;
  status?: any;
}
export interface FormikComputedProps<Values> {
  readonly dirty: boolean;
  readonly isValid: boolean;
  readonly initialValues: Values;
}
export interface FormikActions<Values> {
  setStatus: (status?: any) => void;
  setError: (e: any) => void;
  setErrors: (errors: FormikErrors<Values>) => void;
  setSubmitting: (isSubmitting: boolean) => void;
  setTouched: (touched: FormikTouched<Values>) => void;
  setValues: (values: Values) => void;
  setFieldValue: (field: keyof Values, value: any) => void;
  setFieldError: (field: keyof Values, message: string) => void;
  setFieldTouched: (field: keyof Values, isTouched?: boolean) => void;
  resetForm: (nextValues?: any) => void;
  submitForm: () => void;
}
export interface FormikHandlers {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleBlur: (e: any) => void;
  handleChangeValue: (name: string, value: any) => void;
  handleReset: () => void;
}
export interface FormikSharedConfig {
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
  isInitialValid?: boolean | ((props: object) => boolean | undefined);
  enableReinitialize?: boolean;
}
export interface FormikConfig<Values = object> extends FormikSharedConfig {
  initialValues: Values;
  onSubmit: (values: Values, formikActions: FormikActions<Values>) => void;
  component?: React.ComponentType<FormikProps<Values> | void>;
  render?: ((props: FormikProps<Values>) => React.ReactNode);
  validationSchema?: any | (() => any);
  validate?: ((
    values: Values
  ) => void | object | Promise<FormikErrors<Values>>);
  children?:
    | ((props: FormikProps<Values>) => React.ReactNode)
    | React.ReactNode;
}
export declare type FormikProps<Values> = FormikState<Values> &
  FormikActions<Values> &
  FormikHandlers &
  FormikComputedProps<Values>;
export declare class Formik<
  Props extends FormikConfig<Values> = FormikConfig<Values>,
  Values = object
> extends React.Component<Props, FormikState<any>> {
  static defaultProps: {
    validateOnChange: boolean;
    validateOnBlur: boolean;
    isInitialValid: boolean;
    enableReinitialize: boolean;
  };
  static propTypes: {
    validateOnChange: PropTypes.Requireable<any>;
    validateOnBlur: PropTypes.Requireable<any>;
    isInitialValid: PropTypes.Requireable<any>;
    initialValues: PropTypes.Requireable<any>;
    onSubmit: PropTypes.Validator<any>;
    validationSchema: PropTypes.Requireable<any>;
    validate: PropTypes.Requireable<any>;
    component: PropTypes.Requireable<any>;
    render: PropTypes.Requireable<any>;
    children: PropTypes.Requireable<any>;
    enableReinitialize: PropTypes.Requireable<any>;
  };
  static childContextTypes: {
    formik: PropTypes.Requireable<any>;
  };
  initialValues: Values;
  getChildContext(): {
    formik: {
      dirty: boolean;
      isValid: boolean;
      handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
      handleChange: (e: React.ChangeEvent<any>) => void;
      handleBlur: (e: any) => void;
      handleReset: () => void;
      setStatus: (status?: any) => void;
      setTouched: (touched: FormikTouched<Values>) => void;
      setErrors: (errors: FormikErrors<Values>) => void;
      setError: (error: any) => void;
      setValues: (values: FormikValues) => void;
      setFieldError: (field: keyof Values, message: string) => void;
      setFieldValue: (field: string, value: any) => void;
      setFieldTouched: (field: keyof Values, touched?: boolean) => void;
      setSubmitting: (isSubmitting: boolean) => void;
      resetForm: (nextValues?: Values | undefined) => void;
      submitForm: () => void;
      initialValues: Values;
      values: any;
      error?: any;
      errors: any;
      touched: any;
      isSubmitting: boolean;
      status?: any;
    };
  };
  constructor(props: Props);
  componentWillReceiveProps(nextProps: Props): void;
  componentWillMount(): void;
  setErrors: (errors: FormikErrors<Values>) => void;
  setTouched: (touched: FormikTouched<Values>) => void;
  setValues: (values: FormikValues) => void;
  setStatus: (status?: any) => void;
  setError: (error: any) => void;
  setSubmitting: (isSubmitting: boolean) => void;
  runValidationSchema: (
    values: FormikValues,
    onSuccess?: Function | undefined
  ) => void;
  runValidations: (values: FormikValues) => void;
  handleChange: (e: React.ChangeEvent<any>) => void;
  handleChangeValue: (field: string, value: any) => void;
  setFieldValue: (field: string, value: any) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  submitForm: () => void;
  executeSubmit: () => void;
  handleBlur: (e: any) => void;
  setFieldTouched: (field: keyof Values, touched?: boolean) => void;
  setFieldError: (field: keyof Values, message: string) => void;
  resetForm: (nextValues?: Values | undefined) => void;
  handleReset: () => void;
  render(): any;
}
export declare function yupToFormErrors<Values>(
  yupError: any
): FormikErrors<Values>;
export declare function validateYupSchema<T>(
  data: T,
  schema: any,
  context?: any
): Promise<void>;
export declare function touchAllFields<T>(fields: T): FormikTouched<T>;
export * from './Field';
export * from './Form';
export * from './withFormik';
