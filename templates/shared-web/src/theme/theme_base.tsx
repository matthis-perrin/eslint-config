import {deepMerge} from '@shared/lib/object_utils';
import {DeepPartial} from '@shared/lib/type_utils';

import {FrontendTheme} from '@shared-web/theme/theme_model';
import {background, borderColor, paddings} from '@shared-web/theme/theme_utils';

const buttonBase = {
  textColorLoading: 'transparent',
  textDecoration: undefined,
  ...borderColor(undefined),
  borderWidth: 0,
  loaderColor: '#ffffff',
  loaderOpacity: 1,
  loaderSize: 24,
  fontFamily: undefined,
  fontWeight: 500,
  lineHeight: 1.75,
  letterSpacing: undefined,
  textUnderlineOffset: 3,
} as const;

export const baseTheme: FrontendTheme = {
  main: {
    backgroundColor: '#f5f7fa',
    accentColor: '#3874ff',
    textColor: '#151823',
    accentTextColor: '#151823',
    fontFamily: 'sans-serif',
    fontSize: 16,
    lineHeight: 1.5,
  },
  button: {
    ...buttonBase,
    textColorActive: '#ffffff',
    textColorDisabled: '#ffffff',
    textColorHover: '#ffffff',
    textDecorationHover: undefined,
    backgroundActive: '#0049be',
    backgroundDisabled: '#85a8f8',
    backgroundHover: '#3874ff',
    backgroundLoading: '#85a8f8',
    focusBorderColor: '#ef8b59',
    focusBorderWidth: 2,
    focusTextDecoration: undefined,
    paddingTop: 8,
    paddingRight: 16,
    paddingBottom: 8,
    paddingLeft: 16,
    borderRadius: 6,
    fontSize: 15,
    enableSelect: false,
  },
  link: {
    ...buttonBase,
    textColorActive: '#0049be',
    textColorDisabled: '#0049be66',
    textColorLoading: '#0049be66',
    textColorHover: '#0049be',
    textDecorationHover: 'underline',
    ...background('transparent'),
    focusBorderColor: undefined,
    focusBorderWidth: undefined,
    focusTextDecoration: 'underline',
    ...paddings(0),
    borderRadius: undefined,
    fontSize: undefined,
    enableSelect: true,
  },
  checkbox: {
    labelPaddingTop: 8,
    labelPaddingRight: 8,
    labelPaddingBottom: 8,
    labelPaddingLeft: 8,
    labelBorderRadius: 6,
    labelHoverColor: '#00000011',
    size: undefined,
  },
  radio: {
    color: '#151823',
    radioColor: '#0049be',
    fontSize: 16,
    fontWeight: 500,
    labelPaddingTop: 8,
    labelPaddingRight: 8,
    labelPaddingBottom: 8,
    labelPaddingLeft: 8,
    labelBorderRadius: 6,
    labelHoverColor: '#00000011',
    size: undefined,
    titleMarginBottom: '0.4em',
    inputHeight: undefined,
  },
  input: {
    backgroundColor: '#ffffff',
    backgroundColorHover: undefined,
    backgroundColorFocus: undefined,
    backgroundColorDisabled: '#eeeeee',
    borderColor: '#dee0e3',
    textColor: '#141824',
    textColorDisabled: undefined,
    borderRadius: 6,
    fontSize: 12,
    paddingRight: 16,
    paddingLeft: 16,
    height: 32,
    hoverBorderColor: undefined,
    focusBorderColor: '#0049be',
    focusOutlineColor: '#3874ff3f',
    focusOutlineWidth: 4,
    focusTextColor: undefined,
    borderWidth: 1,
    focusBorderWidth: 1,
    fontFamily: undefined,
    fontWeight: undefined,
    titleMarginBottom: '0.4em',
  },
  textarea: {
    backgroundColor: '#ffffff',
    backgroundColorHover: undefined,
    backgroundColorFocus: undefined,
    backgroundColorDisabled: '#eeeeee',
    borderColor: '#dee0e3',
    textColor: '#141824',
    textColorDisabled: undefined,
    borderRadius: 6,
    fontSize: 12,
    paddingTop: 8,
    paddingRight: 16,
    paddingBottom: 8,
    paddingLeft: 16,
    hoverBorderColor: undefined,
    focusBorderColor: '#0049be',
    focusOutlineColor: '#3874ff3f',
    focusOutlineWidth: 4,
    focusTextColor: undefined,
    borderWidth: 1,
    focusBorderWidth: 1,
    fontFamily: undefined,
    fontWeight: undefined,
    titleMarginBottom: '0.4em',
  },
};

export function createTheme(overrides?: DeepPartial<FrontendTheme>): FrontendTheme {
  return deepMerge(baseTheme, overrides ?? {}) as FrontendTheme;
}
