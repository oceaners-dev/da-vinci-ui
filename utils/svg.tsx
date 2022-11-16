import * as React from 'react'
import { SVGProps } from 'react'

export const DaVinciLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} viewBox="0 0 128 128" {...props}>
    <defs>
      <path
        id="a"
        d="M103.44 27.85c-2.15-5.08-6.79-11.67-11.58-14.6C80.72 6.4 66.56 5.08 53.93 7.5 34.09 11.3 15.5 24.13 6.19 42.21c-6.59 12.8-7.95 32.31.83 44.59 5.73 8.01 17.1 11.04 26.12 7.28 6.13-2.55 9.93-8.23 15.23-11.95 6.88-4.84 14.34-3.47 22.32-3.78 22.91-.87 41.64-29.39 32.75-50.5zM69.75 60.89c-1.82.7-4.21 1.11-6.17.82-1.98-.31-4.08-1.76-5.13-3.48-3.65-5.92 2.41-12.77 8.01-14.26 2.78-.74 6.86-.28 9.07 1.63 5.73 4.95-.52 13.25-5.78 15.29z"
      />
    </defs>
    <use fill="#f79329" href="#a" />
    <path
      fill="#ed6c30"
      d="M43.47 21.59c1.57-1.26 3.59-2.05 5.48-2.21 3.45-.3 5.89 2.77 5.75 6.17-.19 4.3-4.91 6.39-8.85 6.22-3.06-.13-5.58-2.89-5.07-5.87.31-1.74 1.33-3.2 2.69-4.31z"
    />
    <path
      fill="#bdcf46"
      d="M16.49 53.68c1.19-4.79 6.88-7.82 10.93-4.4 3.86 3.25 2.05 9.69-2.04 12.05-2.72 1.57-6.76.52-8.33-2.39-.87-1.61-1-3.5-.56-5.26z"
    />
    <path
      fill="#006ca2"
      d="M28.73 70.02c2.27 4.3.76 10.93-4.77 11.39-5.53.46-8.62-6.05-7.19-10.81 1.43-4.74 7.29-5.52 10.59-2.4.56.53 1.02 1.14 1.37 1.82z"
    />
    <path
      fill="#fcc21b"
      d="M38.28 39.46c-1.49 2.74-4.96 5.13-8.17 4.73-4.03-.5-5.61-5.3-3.86-8.73 2.4-4.7 9.92-6.58 12.44-.8.69 1.59.42 3.29-.41 4.8z"
    />
    <defs>
      <path
        id="b"
        d="M73.56 88.64c-5.05-.2-10.42 2.1-13.7 6.37-3.4 4.42-3.3 10.08-3.44 15.38-.08 2.88.4 6.9-1.69 9.24-.94 1.05-1.93 1.27-3.21 1.43-.5.06-2.94-.32-2.02 1.08 1.75 2.67 8.26 3.35 11.05 3.47 7.5.34 14.88-2.98 19.83-8.59.51-.59 1-1.2 1.46-1.83 3.69-5.08 5.85-12.28 3.48-18.33-2.14-5.45-6.8-8.03-11.76-8.22z"
      />
    </defs>
    <use fill="#fff" href="#b" />
    <clipPath id="c">
      <use href="#b" />
    </clipPath>
    <path
      fill="#ed6c30"
      d="M65.05 103.63c.11.24.21.55.26.94.31 2.38 2.13 2.9 4.29 2.9 2.19 0 4.92-.48 4.92 2.46-.01 1.26-.61 2.19.65 2.96 1.9 1.16 5.54.89 7.38-.32 1.14-.75 2.74-1.42 2.02.71-.42 1.23-1.24 2.36-1.84 3.52-.66 1.27-1.49 2.28-2.49 3.3-.73.75-1.23 1.65-2.07 2.29-2.15 1.63-4.95 2.14-7.46 2.96-3.36 1.1-6.57 3.06-10.17 2.05-3.81-1.07-7.96-.64-11.71-1.87-1.85-.61-3-1.73-2.72-3.72.25-1.71 1.42-2.35 2.98-2.69 1.76-.39 3.2-.86 4.01-2.62.7-1.49.22-3.66.12-5.24-.14-2.15-.38-4.42.17-6.53.46-1.74.97-3.48 1.73-5.12.35-.77.72-1.71 1.28-2.35.87-1 1.94-1.45 3.12-1.98.37.95-.42 2.46-.56 3.42-.23 1.65-.18 3.42 1.5 4.09 1.63.62 3.8-.82 4.59.84z"
      clipPath="url(#c)"
    />
    <path
      fill="#855c52"
      d="M91.93 60.63c5.67-6.52 9.85-14.31 14.96-21.29 3.14-4.28 6.03-8.8 8.95-13.21 1.85-2.79 4.51-7.68 8.43-7.61.68.01 1.3.3 1.85.69 1.21.86 1.2 2.93.8 4.21-1.59 5.15-4.57 10.08-7.07 14.84-.95 1.82-1.92 3.64-2.93 5.43-2.95 5.25-6.03 10.43-8.75 15.81-1.06 2.1-2.06 4.22-2.97 6.38-.57 1.34-1.45 2.48-1.8 3.88-.36 1.44-3.61-2.61-3.81-2.93-.74-1.23-1.42-1.88-2.74-2.32-.95-.31-6.04-1.04-5.63-2.66.11-.42.37-.83.71-1.22z"
    />
    <defs>
      <path
        id="d"
        d="M102.54 68.36c-.96-2.01-2.82-3.14-4.45-4.14-.42-.26-.84-.51-1.22-.77-2.58-1.77-4.79-2.2-6.57-1.35-2.67 1.28-4.56 4.66-6.09 7.38-.42.74-.8 1.42-1.15 1.98-2.87 4.47-5.64 7.9-10.54 11.2l-.42.27c-1.11.71-2.63 1.69-2.75 3.46-.05.75.16 1.88 1.47 2.99 1.43 1.21 3 1.95 4.52 2.66.54.25 1.09.51 1.62.79 1.75.92 3.34 2.13 5.03 3.42l1 .75c.26.19.52.45.8.7.78.73 1.75 1.65 3.01 2 .43.12.81.18 1.15.18 1.36 0 2.04-.84 2.41-1.29l.15-.18c1.46-1.71 2.18-4 2.81-6.02.3-.98.59-1.91.93-2.69.54-1.23 1.05-2.47 1.56-3.71 1.12-2.74 2.18-5.33 3.55-7.8.32-.59.79-1.2 1.29-1.84 1.47-1.94 3.5-4.6 1.89-7.99z"
      />
    </defs>
    <use fill="#78a3ad" href="#d" />
    <clipPath id="e">
      <use href="#d" />
    </clipPath>
    <path
      fill="#2f2f2f"
      d="M93.71 98.86c-.72 0-1.42-.35-1.87-.99-.53-.79-.85-1.57-1.14-2.26-.26-.63-.48-1.17-.81-1.6-3.07-3.96-6.79-6.7-12.85-9.47-1.81-.83-3.46-1.24-4.86-1.24-1.25 0-2.26-1.01-2.26-2.25s1.01-2.25 2.26-2.25c2.05 0 4.32.56 6.73 1.65 4.71 2.15 10.13 5.12 14.54 10.81.71.91 1.09 1.83 1.42 2.65.23.56.43 1.04.71 1.45.7 1.03.42 2.43-.6 3.12-.4.25-.84.38-1.27.38z"
      clipPath="url(#e)"
    />
  </svg>
)

export const SvgClear = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
    />
  </svg>
)

export const SvgEyeOff = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} viewBox="0 0 512 512" {...props}>
    <path
      fill="currentColor"
      d="m63.998 86.005 21.998-21.998L447.999 426.01l-21.998 21.998zM259.34 192.09l60.57 60.57a64.07 64.07 0 0 0-60.57-60.57Zm-6.68 127.82-60.57-60.57a64.07 64.07 0 0 0 60.57 60.57Z"
    />
    <path
      fill="currentColor"
      d="M256 352a96 96 0 0 1-92.6-121.34l-69.07-69.08C66.12 187.42 39.24 221.14 16 256c26.42 44 62.56 89.24 100.2 115.18C159.38 400.92 206.33 416 255.76 416A233.47 233.47 0 0 0 335 402.2l-53.61-53.6A95.84 95.84 0 0 1 256 352Zm0-192a96 96 0 0 1 92.6 121.34L419.26 352c29.15-26.25 56.07-61.56 76.74-96-26.38-43.43-62.9-88.56-101.18-114.82C351.1 111.2 304.31 96 255.76 96a222.92 222.92 0 0 0-78.21 14.29l53.11 53.11A95.84 95.84 0 0 1 256 160Z"
    />
  </svg>
)

export const SvgEyeOn = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} viewBox="0 0 512 512" {...props}>
    <circle cx={256} cy={256} r={64} fill="currentColor" />
    <path
      fill="currentColor"
      d="M394.82 141.18C351.1 111.2 304.31 96 255.76 96c-43.69 0-86.28 13-126.59 38.48C88.52 160.23 48.67 207 16 256c26.42 44 62.56 89.24 100.2 115.18C159.38 400.92 206.33 416 255.76 416c49 0 95.85-15.07 139.3-44.79C433.31 345 469.71 299.82 496 256c-26.38-43.43-62.9-88.56-101.18-114.82ZM256 352a96 96 0 1 1 96-96 96.11 96.11 0 0 1-96 96Z"
    />
  </svg>
)

export function SvgX(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
      ></path>
    </svg>
  )
}

export function SvgLeftArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M13.5 8.5a.5.5 0 0 0 0-1H3.803l4.031-3.628a.5.5 0 1 0-.668-.744l-5 4.5a.5.5 0 0 0 0 .744l5 4.5a.5.5 0 1 0 .668-.744L3.803 8.5H13.5Z"
      ></path>
    </svg>
  )
}

export function SvgRightArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M2.5 7.5a.5.5 0 1 0 0 1h9.697l-4.031 3.628a.5.5 0 1 0 .668.744l5-4.5a.5.5 0 0 0 0-.744l-5-4.5a.5.5 0 0 0-.668.744L12.197 7.5H2.5Z"
      ></path>
    </svg>
  )
}
