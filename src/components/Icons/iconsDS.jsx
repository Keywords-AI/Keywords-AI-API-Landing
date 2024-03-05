import React from "react";
import cn from "src/utilities/ClassMerge";

export const Right = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
  size = "xs",
}) => {
  switch (size) {
    case "xs":
      return (
        <svg
          width="4"
          height="8"
          viewBox="0 0 4 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"flex-shrink-0"}
        >
          <path
            d="M0 6.66628L2.47233 4.19394L0 1.71621L0.761134 0.955078L4 4.19394L0.761134 7.43281L0 6.66628Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
    case "sm":
      return (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.29492 10.58L6.87492 6L2.29492 1.41L3.70492 0L9.70492 6L3.70492 12L2.29492 10.58Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
  }
};

export const Up = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
  size = "xs",
}) => {
  switch (size) {
    case "xxs":
      return (
        <svg
          width="8"
          height="4"
          viewBox="0 0 7 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"flex-shrink-0"}
        >
          <path
            d="M5.7112 4L3.23887 1.52767L0.761134 4L0 3.23887L3.23887 0L6.47773 3.23887L5.7112 4Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
    case "xs":
      return (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"flex-shrink-0"}
        >
          <path
            d="M10.58 9.70508L6 5.12508L1.41 9.70508L0 8.29508L6 2.29508L12 8.29508L10.58 9.70508Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
    case "sm":
      return (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"flex-shrink-0"}
        >
          <path
            d="M10.58 9.70496L6 5.12496L1.41 9.70496L0 8.29496L6 2.29496L12 8.29496L10.58 9.70496Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
  }
};
export const Left = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
  size = "xs",
}) => {
  switch (size) {
    case "xs":
      return (
        <svg
          aria-label="Left"
          xmlns="http://www.w3.org/2000/svg"
          width="4"
          height="8"
          viewBox="0 0 4 8"
          fill="none"
          className={"flex-shrink-0"}
        >
          <path
            d="M4 1.52757L1.52767 3.9999L4 6.47764L3.23887 7.23877L0 3.9999L3.23887 0.761037L4 1.52757Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
    case "sm":
      return (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"flex-shrink-0"}
        >
          <path
            d="M9.70508 1.42L5.12508 6L9.70508 10.59L8.29508 12L2.29508 6L8.29508 0L9.70508 1.42Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
  }
};

export const Select = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-4",
  active = false,
  size = "xs",
}) => {
  switch (size) {
    case "xs":
      return (
        <svg
          width="8"
          height="5"
          viewBox="0 0 8 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"flex-shrink-0"}
        >
          <path
            d="M0 0.955078L4 4.95508L8 0.955078H0Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
  }
};

export const Delete = ({
  fill = "fill-gray-4 hover:fill-error",
  activeFill = "fill-error",
  active = false,
  size = "sm",
}) => {
  switch (size) {
    case "sm":
      return (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"flex-shrink-0"}
        >
          <path
            d="M4.03125 0V0.666667H0.75V2H1.40625V10.6667C1.40625 11.0203 1.54453 11.3594 1.79067 11.6095C2.03681 11.8595 2.37065 12 2.71875 12H9.28125C9.62935 12 9.96319 11.8595 10.2093 11.6095C10.4555 11.3594 10.5938 11.0203 10.5938 10.6667V2H11.25V0.666667H7.96875V0H4.03125ZM4.03125 3.33333H5.34375V9.33333H4.03125V3.33333ZM6.65625 3.33333H7.96875V9.33333H6.65625V3.33333Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
  }
};
export const Check = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
  size = "sm",
}) => {
  switch (size) {
    case "sm":
      return (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"flex-shrink-0"}
        >
          <path
            d="M12 2.3692L3.77143 10.5978L0 6.82634L0.966857 5.85949L3.77143 8.6572L11.0331 1.40234L12 2.3692Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
    case "xl":
      return (
        <svg
          width="48"
          height="49"
          viewBox="0 0 48 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"flex-shrink-0"}
        >
          <path
            d="M48 10.3874L15.0857 43.3017L0 28.216L3.86743 24.3486L15.0857 35.5394L44.1326 6.52002L48 10.3874Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
  }
};
export const Cross = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
  size = "sm",
}) => {
  switch (size) {
    case "sm":
      return (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"flex-shrink-0"}
        >
          <path
            d="M10.6004 3.23712L9.67382 2.31055L6.00039 5.98397L2.32696 2.31055L1.40039 3.23712L5.07382 6.91055L1.40039 10.584L2.32696 11.5105L6.00039 7.83712L9.67382 11.5105L10.6004 10.584L6.92696 6.91055L10.6004 3.23712Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
  }
};
export const Rocket = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
  size = "sm",
}) => {
  switch (size) {
    case "sm":
      return (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"flex-shrink-0"}
        >
          <path
            d="M6.72836 12L5.75952 9.72353C6.69269 9.37879 7.56643 8.91518 8.37478 8.3743L6.72836 12ZM2.27647 6.24048L0 5.27164L3.6257 3.62522C3.08482 4.43357 2.62121 5.30731 2.27647 6.24048ZM11.7687 0.231319C11.7687 0.231319 8.82651 -1.02936 5.46233 2.33542C4.16065 3.6371 3.38201 5.06955 2.87679 6.32369C2.71036 6.76947 2.82329 7.25686 3.1502 7.58972L4.41623 8.8498C4.74313 9.18265 5.23052 9.28964 5.67631 9.12321C6.94828 8.63582 8.3629 7.83935 9.66458 6.53767C13.0288 3.17349 11.7687 0.231319 11.7687 0.231319ZM7.56643 4.43357C7.10281 3.96996 7.10281 3.2151 7.56643 2.75148C8.03004 2.28787 8.7849 2.28787 9.24852 2.75148C9.70619 3.2151 9.71213 3.96996 9.24852 4.43357C8.7849 4.89718 8.03004 4.89718 7.56643 4.43357ZM2.63309 11.8871L4.79663 9.72353C4.59454 9.67004 4.3984 9.58088 4.22008 9.45606L1.79502 11.8871H2.63309ZM0.112932 11.8871H0.951005L3.78619 9.05783L2.94217 8.21976L0.112932 11.049V11.8871ZM0.112932 10.205L2.54394 7.77992C2.41912 7.6016 2.32996 7.4114 2.27647 7.20337L0.112932 9.36691V10.205Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
  }
};
export const Careers = ({
  fill = "fill-primary",
  activeFill = "fill-gray-5",
  active = false,
  size = "sm",
}) => {
  switch (size) {
    case "sm":
      return (
        <svg
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"flex-shrink-0"}
        >
          <path
            d="M0 6.15307V7.66822H9.09091L4.92424 11.8349L6 12.9106L12 6.91064L6 0.910645L4.92424 1.9864L9.09091 6.15307H0Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
  }
};
export const Pencil = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
  size = "sm",
}) => {
  switch (size) {
    case "sm":
      return (
        <svg
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"flex-shrink-0"}
        >
          <path
            d="M11.805 3.60527C12.065 3.34531 12.065 2.91203 11.805 2.6654L10.2452 1.10562C9.99861 0.845654 9.56534 0.845654 9.30537 1.10562L8.07888 2.32545L10.5785 4.8251M0 10.411V12.9106H2.49965L9.87196 5.53167L7.37231 3.03202L0 10.411Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
  }
};
// className={active ? activeFill : fill} />
export const Quality = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
  size = "md",
}) => {
  switch (size) {
    case "md":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"flex-shrink-0"}
        >
          <path
            d="M0.799805 16.9106V5.71064H3.9998V16.9106H0.799805ZM6.3998 16.9106V0.910645H9.5998V16.9106H6.3998ZM11.9998 16.9106V10.5106H15.1998V16.9106H11.9998Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
    case "lg":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"flex-shrink-0"}
        >
          <path
            d="M0.799805 16.9106V5.71064H3.9998V16.9106H0.799805ZM6.3998 16.9106V0.910645H9.5998V16.9106H6.3998ZM11.9998 16.9106V10.5106H15.1998V16.9106H11.9998Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
  }
};
// className={active ? activeFill : fill} />
export const EnterKey = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
  size = "md",
}) => {
  switch (size) {
    case "md":
      return (
        <div
          className={cn(
            "flex-col w-[16px] h-[16px] justify-center items-center rounded-sm bg-gray-2",
            !active ? "shadow-key-default" : "shadow-key-active"
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
          >
            <path
              d="M7.65706 0V2.97143C7.65706 4.61257 6.32677 5.94286 4.68563 5.94286H2.09363L3.5062 7.35543L2.85706 8L0.342773 5.48571L2.85706 2.97143L3.50163 3.616L2.09363 5.02857H4.68563C5.82849 5.02857 6.74277 4.11429 6.74277 2.97143V0H7.65706Z"
              className={active ? activeFill : fill}
            />
          </svg>
        </div>
      );
  }
};

// className={active ? activeFill : fill} />
export const Userpg = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
  size = "md",
}) => {
  switch (size) {
    case "md":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M8 13.76C6 13.76 4.232 12.736 3.2 11.2C3.224 9.6 6.4 8.72 8 8.72C9.6 8.72 12.776 9.6 12.8 11.2C11.768 12.736 10 13.76 8 13.76ZM8 2.4C8.63652 2.4 9.24697 2.65286 9.69706 3.10294C10.1471 3.55303 10.4 4.16348 10.4 4.8C10.4 5.43652 10.1471 6.04697 9.69706 6.49706C9.24697 6.94714 8.63652 7.2 8 7.2C7.36348 7.2 6.75303 6.94714 6.30294 6.49706C5.85286 6.04697 5.6 5.43652 5.6 4.8C5.6 4.16348 5.85286 3.55303 6.30294 3.10294C6.75303 2.65286 7.36348 2.4 8 2.4ZM8 0C6.94943 0 5.90914 0.206926 4.93853 0.608964C3.96793 1.011 3.08601 1.60028 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.08601 14.3997 3.96793 14.989 4.93853 15.391C5.90914 15.7931 6.94943 16 8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 3.576 12.4 0 8 0Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
  }
};
// className={active ? activeFill : fill} />
export const Search = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
  size = "md",
}) => {
  switch (size) {
    case "sm":
      return (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"flex-shrink-0"}
        >
          <path
            d="M4.45714 0C5.63925 0 6.77294 0.46959 7.60882 1.30547C8.4447 2.14134 8.91429 3.27504 8.91429 4.45714C8.91429 5.56114 8.50971 6.576 7.84457 7.35771L8.02971 7.54286H8.57143L12 10.9714L10.9714 12L7.54286 8.57143V8.02971L7.35771 7.84457C6.576 8.50971 5.56114 8.91429 4.45714 8.91429C3.27504 8.91429 2.14134 8.4447 1.30547 7.60882C0.46959 6.77294 0 5.63925 0 4.45714C0 3.27504 0.46959 2.14134 1.30547 1.30547C2.14134 0.46959 3.27504 0 4.45714 0ZM4.45714 1.37143C2.74286 1.37143 1.37143 2.74286 1.37143 4.45714C1.37143 6.17143 2.74286 7.54286 4.45714 7.54286C6.17143 7.54286 7.54286 6.17143 7.54286 4.45714C7.54286 2.74286 6.17143 1.37143 4.45714 1.37143Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
    case "md":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"flex-shrink-0"}
        >
          <path
            d="M5.94286 0.910645C7.519 0.910645 9.03059 1.53676 10.1451 2.65127C11.2596 3.76577 11.8857 5.27736 11.8857 6.8535C11.8857 8.3255 11.3463 9.67864 10.4594 10.7209L10.7063 10.9678H11.4286L16 15.5392L14.6286 16.9106L10.0571 12.3392V11.6169L9.81029 11.3701C8.768 12.2569 7.41486 12.7964 5.94286 12.7964C4.36671 12.7964 2.85512 12.1702 1.74062 11.0557C0.62612 9.94123 0 8.42965 0 6.8535C0 5.27736 0.62612 3.76577 1.74062 2.65127C2.85512 1.53676 4.36671 0.910645 5.94286 0.910645ZM5.94286 2.73922C3.65714 2.73922 1.82857 4.56779 1.82857 6.8535C1.82857 9.13922 3.65714 10.9678 5.94286 10.9678C8.22857 10.9678 10.0571 9.13922 10.0571 6.8535C10.0571 4.56779 8.22857 2.73922 5.94286 2.73922Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
  }
};
// className={active ? activeFill : fill} />
export const Send = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
  size = "md",
}) => {
  switch (size) {
    case "md":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"flex-shrink-0"}
        >
          <path
            d="M0.848189 6.95556C0.327871 7.17396 0.00491217 7.56275 3.21904e-05 8.11315C-0.0033278 8.49795 0.25635 9.01476 0.776668 9.22596C0.990988 9.31316 4.00018 9.71795 4.00018 9.71795C4.00018 9.71795 4.79666 12.2355 5.08369 13.1203C5.16681 13.3763 5.21418 13.5019 5.39657 13.6691C5.70601 13.9523 6.22913 13.8636 6.45537 13.6364C7.05393 13.0364 8.00001 12.1107 8.00001 12.1107L8.39816 12.4347C8.39816 12.4347 10.1662 13.8451 11.1327 14.5091C11.7018 14.9003 12.0967 15.3083 12.7372 15.3107C13.0634 15.3123 13.5867 15.1499 13.9326 14.7539C14.1612 14.4923 14.3078 14.0739 14.3645 13.6987C14.4935 12.8467 16.0064 3.63397 16 3.31157C15.9897 2.79717 15.557 2.50757 15.1973 2.51077C14.9714 2.51317 14.7853 2.57878 14.371 2.70518C11.1667 3.68357 1.06043 6.86676 0.848189 6.95556ZM12.8 4.91076C12.8 4.91076 8.5776 8.58596 6.89033 10.2772C6.34977 10.8188 6.31161 11.7483 6.31161 11.7483L5.43946 8.95794L12.8 4.91076Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
  }
};
// className={active ? activeFill : fill} />
export const Attachment = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
  size = "md",
}) => {
  switch (size) {
    case "md":
      return (
        <svg
          width="15"
          height="16"
          viewBox="0 0 15 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"flex-shrink-0"}
        >
          <path
            d="M13.5549 7.51535L7.92939 13.1409C6.39823 14.6721 4.10189 14.8529 2.54077 13.2917C1.00961 11.7606 1.20861 9.54237 2.76973 7.98125L9.09345 1.65753C10.0613 0.689696 11.6194 0.689696 12.5872 1.65753C13.5551 2.62537 13.5551 4.18349 12.5872 5.15133L6.15249 11.5861C5.6701 12.0685 4.88798 12.0685 4.40559 11.5861C3.9232 11.1037 3.9232 10.3216 4.40559 9.83918L10.1422 4.10259"
            stroke="#B1B3BC"
            stroke-width="1.5"
            stroke-linecap="square"
            className={active ? activeFill : fill}
          />
        </svg>
      );
  }
};
// className={active ? activeFill : fill} />
export const Copy = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
  size = "md",
}) => {
  switch (size) {
    case "sm":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M10.0911 10.9091H4.09109V3.27273H10.0911M10.0911 2.18182H4.09109C3.80176 2.18182 3.52428 2.29675 3.3197 2.50134C3.11511 2.70592 3.00018 2.9834 3.00018 3.27273V10.9091C3.00018 11.1984 3.11511 11.4759 3.3197 11.6805C3.52428 11.8851 3.80176 12 4.09109 12H10.0911C10.3804 12 10.6579 11.8851 10.8625 11.6805C11.0671 11.4759 11.182 11.1984 11.182 10.9091V3.27273C11.182 2.9834 11.0671 2.70592 10.8625 2.50134C10.6579 2.29675 10.3804 2.18182 10.0911 2.18182ZM8.45472 0H1.90927C1.61994 0 1.34246 0.114935 1.13788 0.31952C0.933294 0.524105 0.818359 0.801582 0.818359 1.09091V8.72727H1.90927V1.09091H8.45472V0Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
    case "md":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"flex-shrink-0"}
        >
          <path
            d="M13.4545 15.4561H5.45446V5.27428H13.4545M13.4545 3.81974H5.45446C5.06869 3.81974 4.69872 3.97298 4.42594 4.24576C4.15316 4.51854 3.99991 4.88851 3.99991 5.27428V15.4561C3.99991 15.8419 4.15316 16.2118 4.42594 16.4846C4.69872 16.7574 5.06869 16.9106 5.45446 16.9106H13.4545C13.8402 16.9106 14.2102 16.7574 14.483 16.4846C14.7558 16.2118 14.909 15.8419 14.909 15.4561V5.27428C14.909 4.88851 14.7558 4.51854 14.483 4.24576C14.2102 3.97298 13.8402 3.81974 13.4545 3.81974ZM11.2726 0.910645H2.54537C2.1596 0.910645 1.78963 1.06389 1.51685 1.33667C1.24407 1.60945 1.09082 1.97942 1.09082 2.36519V12.547H2.54537V2.36519H11.2726V0.910645Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
  }
};
// className={active ? activeFill : fill} />
export const Hamburger = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
  size = "md",
}) => {
  switch (size) {
    case "md":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"flex-shrink-0"}
        >
          <path
            d="M0 2.91064H16V4.91064H0V2.91064ZM0 7.91064H16V9.91064H0V7.91064ZM0 12.9106H16V14.9106H0V12.9106Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
  }
};
// className={active ? activeFill : fill} />
export const Terminate = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
  size = "md",
}) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={"flex-shrink-0"}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM6 5C5.73478 5 5.48043 5.10536 5.29289 5.29289C5.10536 5.48043 5 5.73478 5 6V10C5 10.2652 5.10536 10.5196 5.29289 10.7071C5.48043 10.8946 5.73478 11 6 11H10C10.2652 11 10.5196 10.8946 10.7071 10.7071C10.8946 10.5196 11 10.2652 11 10V6C11 5.73478 10.8946 5.48043 10.7071 5.29289C10.5196 5.10536 10.2652 5 10 5H6Z"
        className={active ? activeFill : fill}
      />
    </svg>
  );
};
export const Logo = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
  size = "md",
}) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.2601 0.949189C7.37331 0.861921 7.51315 0.808218 7.65299 0.808218C7.86609 0.808218 8.06586 0.902198 8.19239 1.07002L12.0081 5.99727V9.93101L13.1468 11.0722C13.4065 11.334 13.4065 11.7636 13.1468 12.0254C12.8871 12.2872 12.4609 12.2872 12.2012 12.0254L10.6763 10.4815V6.46046L7.14024 1.8957V1.88899C6.91382 1.60034 6.9671 1.17743 7.2601 0.949189ZM15.1807 11.5307C15.0675 11.5024 14.9602 11.4435 14.8715 11.3541L13.5331 10.0049C13.3799 9.85046 13.3133 9.64236 13.3399 9.44768V5.50723H13.32L9.48427 0.553129C9.38251 0.423401 9.33725 0.266555 9.34425 0.112451C8.9072 0.0385037 8.4581 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C11.1509 16 13.8764 14.1783 15.1807 11.5307Z"
        fill="#F9FAFD"
      />
    </svg>
  );
};
export const LogoSubtract = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
  size = "md",
}) => {
  return (
    <svg
      width="334"
      height="203"
      viewBox="0 0 334 203"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={"flex-shrink-0"}
    >
      <mask
        id="path-1-inside-1_5607_10334"
        fill="white"
        className={"flex-shrink-0"}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M191.575 20.2001C188.079 20.2001 184.583 21.5427 181.753 23.7244C174.427 29.4303 173.096 40.0031 178.756 47.2194V47.3872L267.157 161.506V203H0.272043C0.257365 202.002 0.25 201.002 0.25 200C0.25 89.5431 89.793 0 200.25 0C211.702 0 222.93 0.962567 233.856 2.81121C233.682 6.66212 234.814 10.5812 237.357 13.8229L333.249 137.675H333.748V203H300.452V149.926L205.06 26.7452C201.897 22.5496 196.902 20.2001 191.575 20.2001Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M191.575 20.2001C188.079 20.2001 184.583 21.5427 181.753 23.7244C174.427 29.4303 173.096 40.0031 178.756 47.2194V47.3872L267.157 161.506V203H0.272043C0.257365 202.002 0.25 201.002 0.25 200C0.25 89.5431 89.793 0 200.25 0C211.702 0 222.93 0.962567 233.856 2.81121C233.682 6.66212 234.814 10.5812 237.357 13.8229L333.249 137.675H333.748V203H300.452V149.926L205.06 26.7452C201.897 22.5496 196.902 20.2001 191.575 20.2001Z"
        fill="black"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M191.575 20.2001C188.079 20.2001 184.583 21.5427 181.753 23.7244C174.427 29.4303 173.096 40.0031 178.756 47.2194V47.3872L267.157 161.506V203H0.272043C0.257365 202.002 0.25 201.002 0.25 200C0.25 89.5431 89.793 0 200.25 0C211.702 0 222.93 0.962567 233.856 2.81121C233.682 6.66212 234.814 10.5812 237.357 13.8229L333.249 137.675H333.748V203H300.452V149.926L205.06 26.7452C201.897 22.5496 196.902 20.2001 191.575 20.2001Z"
        fill="url(#paint0_linear_5607_10334)"
      />
      <path
        d="M181.753 23.7244L181.142 22.9324L181.138 22.9355L181.753 23.7244ZM178.756 47.2194H179.756V46.874L179.543 46.6022L178.756 47.2194ZM178.756 47.3872H177.756V47.7293L177.965 47.9996L178.756 47.3872ZM267.157 161.506H268.157V161.164L267.947 160.894L267.157 161.506ZM267.157 203V204H268.157V203H267.157ZM0.272043 203L-0.727849 203.015L-0.713361 204H0.272043V203ZM233.856 2.81121L234.855 2.85626L234.895 1.97276L234.023 1.82522L233.856 2.81121ZM237.357 13.8229L238.147 13.2107L238.144 13.2057L237.357 13.8229ZM333.249 137.675L332.458 138.288L332.759 138.675H333.249V137.675ZM333.748 137.675H334.748V136.675H333.748V137.675ZM333.748 203V204H334.748V203H333.748ZM300.452 203H299.452V204H300.452V203ZM300.452 149.926H301.452V149.584L301.243 149.314L300.452 149.926ZM205.06 26.7452L204.261 27.3472L204.269 27.3574L205.06 26.7452ZM182.363 24.5164C185.044 22.45 188.33 21.2001 191.575 21.2001V19.2001C187.828 19.2001 184.122 20.6353 181.142 22.9324L182.363 24.5164ZM179.543 46.6022C174.229 39.8281 175.472 29.8842 182.367 24.5133L181.138 22.9355C173.383 28.9764 171.962 40.1781 177.969 47.8366L179.543 46.6022ZM179.756 47.3872V47.2194H177.756V47.3872H179.756ZM267.947 160.894L179.546 46.7748L177.965 47.9996L266.366 162.118L267.947 160.894ZM268.157 203V161.506H266.157V203H268.157ZM0.272043 204H267.157V202H0.272043V204ZM-0.75 200C-0.75 201.007 -0.742599 202.012 -0.727849 203.015L1.27193 202.985C1.25733 201.992 1.25 200.997 1.25 200H-0.75ZM200.25 -1C89.2408 -1 -0.75 88.9908 -0.75 200H1.25C1.25 90.0953 90.3453 1 200.25 1V-1ZM234.023 1.82522C223.042 -0.0327073 211.758 -1 200.25 -1V1C211.646 1 222.818 1.95784 233.689 3.7972L234.023 1.82522ZM238.144 13.2057C235.756 10.1624 234.691 6.48137 234.855 2.85626L232.857 2.76616C232.673 6.84287 233.872 10.9999 236.57 14.44L238.144 13.2057ZM334.04 137.063L238.147 13.2107L236.566 14.4351L332.458 138.288L334.04 137.063ZM333.748 136.675H333.249V138.675H333.748V136.675ZM334.748 203V137.675H332.748V203H334.748ZM300.452 204H333.748V202H300.452V204ZM299.452 149.926V203H301.452V149.926H299.452ZM204.269 27.3574L299.662 150.539L301.243 149.314L205.85 26.1329L204.269 27.3574ZM191.575 21.2001C196.609 21.2001 201.299 23.4184 204.261 27.3472L205.858 26.1432C202.494 21.6808 197.195 19.2001 191.575 19.2001V21.2001Z"
        fill="url(#paint1_linear_5607_10334)"
        mask="url(#path-1-inside-1_5607_10334)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5607_10334"
          x1="166.999"
          y1="0"
          x2="166.999"
          y2="203"
          gradientUnits="userSpaceOnUse"
          className={"flex-shrink-0"}
        >
          <stop stopColor="#C0C5E4" stopOpacity="0.157" />
          <stop offset="0.5" stopColor="#BDC8FF" stopOpacity="0.09" />
          <stop offset="1" stopColor="#36313C" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_5607_10334"
          x1="0.25"
          y1="101.5"
          x2="333.748"
          y2="101.5"
          gradientUnits="userSpaceOnUse"
          className={"flex-shrink-0"}
        >
          <stop stopColor="white" stopOpacity="0" />
          <stop stopOpacity="0.2" />
          <stop offset="0.5" stopColor="#8F8F8F" stopOpacity="0.67" />
          <stop offset="1" stopOpacity="0.04" />
        </linearGradient>
      </defs>
    </svg>
  );
};
// className={active ? activeFill : fill} />
export const File = ({
  fill = "fill-primary",
  activeFill = "fill-primary",
  active = false,
  size = "lg",
}) => {
  switch (size) {
    case "lg":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"flex-shrink-0"}
        >
          <path
            d="M13.2004 8.4V1.8L19.8004 8.4M4.80039 0C3.46839 0 2.40039 1.068 2.40039 2.4V21.6C2.40039 22.2365 2.65325 22.847 3.10333 23.2971C3.55342 23.7471 4.16387 24 4.80039 24H19.2004C19.8369 24 20.4474 23.7471 20.8974 23.2971C21.3475 22.847 21.6004 22.2365 21.6004 21.6V7.2L14.4004 0H4.80039Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
  }
};
// className={"flex-shrink-0"}>
// className={active ? activeFill : fill} />
export const Link = ({
  fill = "fill-primary",
  activeFill = "fill-primary",
  active = false,
  size = "lg",
}) => {
  switch (size) {
    case "lg":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"flex-shrink-0"}
        >
          <path
            d="M13.5549 7.6047L7.92939 13.2303C6.39823 14.7614 4.10189 14.9422 2.54077 13.3811C1.00961 11.8499 1.20861 9.63172 2.76973 8.0706L9.09345 1.74689C10.0613 0.779052 11.6194 0.779051 12.5872 1.74689C13.5551 2.71472 13.5551 4.27285 12.5872 5.24068L6.15249 11.6754C5.6701 12.1578 4.88798 12.1578 4.40559 11.6754C3.9232 11.193 3.9232 10.4109 4.40559 9.92854L10.1422 4.19194"
            stroke="#B1B3BC"
            strokeWidth="1.5"
            strokeLinecap="square"
          />
        </svg>
      );
  }
};
// className={"flex-shrink-0"}>
// className={active ? activeFill : fill} />
export const Down = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
  size = "xxs",
}) => {
  switch (size) {
    case "xxs":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="7"
          height="4"
          viewBox="0 0 7 4"
          fill="none"
          className={"flex-shrink-0"}
        >
          <path
            d="M0.766338 0L3.23867 2.47233L5.71641 0L6.47754 0.761134L3.23867 4L-0.000193596 0.761134L0.766338 0Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
    case "sm":
      return (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"flex-shrink-0"}
        >
          <path
            d="M1.42 2.29504L6 6.87504L10.59 2.29504L12 3.70504L6 9.70504L0 3.70504L1.42 2.29504Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
  }
};
// className={"flex-shrink-0"}>
// className={active ? activeFill : fill} />
export const Success = ({
  fill = "fill-success",
  activeFill = "fill-primary",
  active = false,
  size = "md",
}) => {
  switch (size) {
    case "md":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"flex-shrink-0"}
        >
          <path
            d="M8 0C3.584 0 0 3.584 0 8C0 12.416 3.584 16 8 16C12.416 16 16 12.416 16 8C16 3.584 12.416 0 8 0ZM6.4 12L2.4 8L3.528 6.872L6.4 9.736L12.472 3.664L13.6 4.8L6.4 12Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
  }
};

export const Warning = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
  size = "xxs",
}) => {
  switch (size) {
    case "xxs":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 0C3.584 0 0 3.584 0 8C0 12.416 3.584 16 8 16C12.416 16 16 12.416 16 8C16 3.584 12.416 0 8 0ZM8.8 12H7.2V7.2H8.8V12ZM8.8 5.6H7.2V4H8.8V5.6Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
  }
};

export const Building = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
  size = "md",
}) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={"flex-shrink-0"}
    >
      <path
        d="M2.77734 0C2.22506 0 1.77734 0.447715 1.77734 1V15C1.77734 15.5523 2.22506 16 2.77734 16H6.11068C6.66296 16 7.11068 15.5523 7.11068 15V13.7778C7.11068 13.2869 7.50865 12.8889 7.99957 12.8889C8.49049 12.8889 8.88845 13.2869 8.88845 13.7778V15C8.88845 15.5523 9.33617 16 9.88846 16H13.2218C13.7741 16 14.2218 15.5523 14.2218 15V1C14.2218 0.447715 13.7741 0 13.2218 0H2.77734ZM3.55512 2.66667C3.55512 2.17575 3.95309 1.77778 4.44401 1.77778C4.93493 1.77778 5.3329 2.17575 5.3329 2.66667C5.3329 3.15759 4.93493 3.55556 4.44401 3.55556C3.95309 3.55556 3.55512 3.15759 3.55512 2.66667ZM7.11068 2.66667C7.11068 2.17575 7.50865 1.77778 7.99957 1.77778C8.49049 1.77778 8.88845 2.17575 8.88845 2.66667C8.88845 3.15759 8.49049 3.55556 7.99957 3.55556C7.50865 3.55556 7.11068 3.15759 7.11068 2.66667ZM10.6662 2.66667C10.6662 2.17575 11.0642 1.77778 11.5551 1.77778C12.046 1.77778 12.444 2.17575 12.444 2.66667C12.444 3.15759 12.046 3.55556 11.5551 3.55556C11.0642 3.55556 10.6662 3.15759 10.6662 2.66667ZM3.55512 6.22222C3.55512 5.7313 3.95309 5.33333 4.44401 5.33333C4.93493 5.33333 5.3329 5.7313 5.3329 6.22222C5.3329 6.71314 4.93493 7.11111 4.44401 7.11111C3.95309 7.11111 3.55512 6.71314 3.55512 6.22222ZM7.11068 6.22222C7.11068 5.7313 7.50865 5.33333 7.99957 5.33333C8.49049 5.33333 8.88845 5.7313 8.88845 6.22222C8.88845 6.71314 8.49049 7.11111 7.99957 7.11111C7.50865 7.11111 7.11068 6.71314 7.11068 6.22222ZM10.6662 6.22222C10.6662 5.7313 11.0642 5.33333 11.5551 5.33333C12.046 5.33333 12.444 5.7313 12.444 6.22222C12.444 6.71314 12.046 7.11111 11.5551 7.11111C11.0642 7.11111 10.6662 6.71314 10.6662 6.22222ZM3.55512 9.77778C3.55512 9.28686 3.95309 8.88889 4.44401 8.88889C4.93493 8.88889 5.3329 9.28686 5.3329 9.77778C5.3329 10.2687 4.93493 10.6667 4.44401 10.6667C3.95309 10.6667 3.55512 10.2687 3.55512 9.77778ZM7.11068 9.77778C7.11068 9.28686 7.50865 8.88889 7.99957 8.88889C8.49049 8.88889 8.88845 9.28686 8.88845 9.77778C8.88845 10.2687 8.49049 10.6667 7.99957 10.6667C7.50865 10.6667 7.11068 10.2687 7.11068 9.77778ZM10.6662 9.77778C10.6662 9.28686 11.0642 8.88889 11.5551 8.88889C12.046 8.88889 12.444 9.28686 12.444 9.77778C12.444 10.2687 12.046 10.6667 11.5551 10.6667C11.0642 10.6667 10.6662 10.2687 10.6662 9.77778ZM3.55512 13.3333C3.55512 12.8424 3.95309 12.4444 4.44401 12.4444C4.93493 12.4444 5.3329 12.8424 5.3329 13.3333C5.3329 13.8243 4.93493 14.2222 4.44401 14.2222C3.95309 14.2222 3.55512 13.8243 3.55512 13.3333ZM10.6662 13.3333C10.6662 12.8424 11.0642 12.4444 11.5551 12.4444C12.046 12.4444 12.444 12.8424 12.444 13.3333C12.444 13.8243 12.046 14.2222 11.5551 14.2222C11.0642 14.2222 10.6662 13.8243 10.6662 13.3333Z"
        className={active ? activeFill : fill}
      />
    </svg>
  );
};

export const Regenerate = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
  size = "sm",
}) => {
  switch (size) {
    case "sm":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M10.2375 1.7625C9.15 0.675 7.6575 0 6 0C4.4087 0 2.88258 0.632141 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.88258 11.3679 4.4087 12 6 12C8.7975 12 11.13 10.0875 11.7975 7.5H10.2375C9.6225 9.2475 7.9575 10.5 6 10.5C4.80653 10.5 3.66193 10.0259 2.81802 9.18198C1.97411 8.33807 1.5 7.19347 1.5 6C1.5 4.80653 1.97411 3.66193 2.81802 2.81802C3.66193 1.97411 4.80653 1.5 6 1.5C7.245 1.5 8.355 2.0175 9.165 2.835L6.75 5.25H12V0L10.2375 1.7625Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
  }
};

export const Stop = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
  size = "sm",
}) => {
  switch (size) {
    case "sm":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 12C9.31373 12 12 9.31373 12 6C12 2.68629 9.31373 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31373 2.68629 12 6 12ZM8.25 3.75H3.75V8.25H8.25V3.75Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
  }
};

// className={"flex-shrink-0"}>
// className={active ? activeFill : fill} />
export const Dots = ({
  fill = "fill-success",
  activeFill = "fill-success",
  active = false,
  size = "sm",
}) => {
  switch (size) {
    case "sm":
      return (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"flex-shrink-0"}
        >
          <path
            d="M9 6C9 5.60218 9.15804 5.22064 9.43934 4.93934C9.72064 4.65804 10.1022 4.5 10.5 4.5C10.8978 4.5 11.2794 4.65804 11.5607 4.93934C11.842 5.22064 12 5.60218 12 6C12 6.39782 11.842 6.77936 11.5607 7.06066C11.2794 7.34196 10.8978 7.5 10.5 7.5C10.1022 7.5 9.72064 7.34196 9.43934 7.06066C9.15804 6.77936 9 6.39782 9 6ZM4.5 6C4.5 5.60218 4.65804 5.22064 4.93934 4.93934C5.22064 4.65804 5.60218 4.5 6 4.5C6.39782 4.5 6.77936 4.65804 7.06066 4.93934C7.34196 5.22064 7.5 5.60218 7.5 6C7.5 6.39782 7.34196 6.77936 7.06066 7.06066C6.77936 7.34196 6.39782 7.5 6 7.5C5.60218 7.5 5.22064 7.34196 4.93934 7.06066C4.65804 6.77936 4.5 6.39782 4.5 6ZM0 6C0 5.60218 0.158035 5.22064 0.43934 4.93934C0.720644 4.65804 1.10218 4.5 1.5 4.5C1.89782 4.5 2.27936 4.65804 2.56066 4.93934C2.84196 5.22064 3 5.60218 3 6C3 6.39782 2.84196 6.77936 2.56066 7.06066C2.27936 7.34196 1.89782 7.5 1.5 7.5C1.10218 7.5 0.720644 7.34196 0.43934 7.06066C0.158035 6.77936 0 6.39782 0 6Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
  }
};
export const OpenAI = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
  size = "lg",
}) => {
  switch (size) {
    case "lg":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.2819 9.82105C22.5502 9.01293 22.643 8.15684 22.5541 7.30999C22.4652 6.46314 22.1965 5.64501 21.7662 4.91026C21.1281 3.79969 20.1539 2.92042 18.984 2.39923C17.814 1.87803 16.5088 1.74183 15.2564 2.01027C14.5449 1.21883 13.6377 0.628545 12.6259 0.298687C11.614 -0.0311716 10.5332 -0.0889847 9.492 0.131054C8.45076 0.351092 7.48575 0.841235 6.69389 1.55225C5.90203 2.26327 5.31119 3.17014 4.98073 4.18176C4.1464 4.35285 3.35819 4.70005 2.66879 5.20015C1.97939 5.70026 1.40467 6.34175 0.983041 7.08176C0.338078 8.19048 0.0624247 9.47558 0.195934 10.7513C0.329444 12.027 0.865197 13.2272 1.72574 14.1783C1.4564 14.9861 1.36266 15.842 1.45079 16.6889C1.53891 17.5358 1.80687 18.354 2.23674 19.089C2.87558 20.2 3.85065 21.0795 5.02144 21.6007C6.19223 22.1219 7.49826 22.2579 8.75132 21.9891C9.31658 22.6257 10.0111 23.1343 10.7886 23.481C11.5661 23.8278 12.4086 24.0047 13.2599 23.9999C14.5435 24.0011 15.7943 23.5943 16.8318 22.8384C17.8692 22.0824 18.6396 21.0164 19.0317 19.7941C19.8659 19.6227 20.654 19.2754 21.3434 18.7753C22.0327 18.2752 22.6075 17.6339 23.0294 16.894C23.6667 15.7869 23.9376 14.5067 23.8034 13.2363C23.6691 11.9659 23.1366 10.7705 22.2819 9.82105ZM13.2599 22.4291C12.2086 22.4308 11.1903 22.0623 10.3835 21.3883L10.5254 21.3079L15.3037 18.5497C15.4226 18.48 15.5214 18.3805 15.5902 18.261C15.6591 18.1416 15.6957 18.0063 15.6964 17.8684V11.1315L17.7164 12.3001C17.7264 12.3052 17.735 12.3125 17.7416 12.3216C17.7482 12.3306 17.7526 12.3411 17.7544 12.3521V17.9347C17.7519 19.1259 17.2775 20.2677 16.4352 21.11C15.5928 21.9523 14.4511 22.4266 13.2599 22.4291ZM3.59923 18.3037C3.07201 17.3933 2.88271 16.3262 3.06463 15.29L3.20663 15.3752L7.98962 18.1334C8.10797 18.2029 8.2427 18.2395 8.37992 18.2395C8.51714 18.2395 8.65187 18.2029 8.77022 18.1334L14.613 14.7649V17.0973C14.6125 17.1094 14.6092 17.1212 14.6034 17.1319C14.5977 17.1425 14.5896 17.1517 14.5798 17.1588L9.74002 19.9501C8.70715 20.5451 7.48037 20.7059 6.32903 20.3973C5.1777 20.0886 4.19591 19.3356 3.59923 18.3037ZM2.34084 7.89555C2.87172 6.97932 3.70967 6.28049 4.70633 5.92276V11.5999C4.70453 11.7371 4.73958 11.8722 4.80781 11.9912C4.87604 12.1102 4.97495 12.2087 5.09423 12.2764L10.9086 15.6307L8.88852 16.7992C8.87759 16.805 8.8654 16.8081 8.85302 16.8081C8.84064 16.8081 8.82845 16.805 8.81752 16.7992L3.98723 14.0127C2.9563 13.4152 2.20419 12.4334 1.8956 11.2824C1.58702 10.1315 1.74712 8.90512 2.34084 7.87195V7.89555ZM18.9371 11.7513L13.1038 8.36395L15.1192 7.19995C15.1301 7.19415 15.1423 7.19111 15.1547 7.19111C15.1671 7.19111 15.1793 7.19415 15.1902 7.19995L20.0205 9.99125C20.759 10.4174 21.3611 11.0449 21.7564 11.8003C22.1518 12.5558 22.324 13.4082 22.2531 14.2579C22.1822 15.1077 21.871 15.9197 21.3559 16.5992C20.8407 17.2787 20.143 17.7976 19.344 18.0954V12.4182C19.3398 12.2813 19.3001 12.1478 19.2287 12.0309C19.1574 11.914 19.0569 11.8177 18.9371 11.7513ZM20.9478 8.72825L20.8058 8.64305L16.0323 5.86126C15.9132 5.79138 15.7777 5.75454 15.6396 5.75454C15.5015 5.75454 15.366 5.79138 15.2469 5.86126L9.40902 9.22965V6.89736C9.40777 6.8855 9.40976 6.87352 9.41475 6.8627C9.41975 6.85187 9.42758 6.8426 9.43742 6.83586L14.2677 4.04926C15.008 3.62278 15.8545 3.4159 16.708 3.45282C17.5616 3.48974 18.387 3.76893 19.0877 4.25775C19.7884 4.74656 20.3355 5.42478 20.6649 6.21309C20.9943 7.0014 21.0925 7.86721 20.9479 8.70925L20.9478 8.72825ZM8.30652 12.8629L6.28653 11.6991C6.27642 11.6931 6.26778 11.6848 6.26121 11.675C6.25464 11.6652 6.25031 11.6541 6.24853 11.6424V6.07416C6.24964 5.21993 6.49391 4.38368 6.95278 3.66316C7.41164 2.94265 8.06615 2.36766 8.83976 2.00541C9.61337 1.64316 10.4741 1.50863 11.3214 1.61755C12.1686 1.72647 12.9674 2.07433 13.6242 2.62047L13.4822 2.70097L8.70402 5.45896C8.58509 5.52871 8.48636 5.62819 8.41751 5.74764C8.34866 5.86709 8.31206 6.00239 8.31132 6.14026L8.30652 12.8629ZM9.40412 10.4975L12.0061 8.99775L14.613 10.4975V13.4969L12.0156 14.9966L9.40892 13.4969L9.40412 10.4975Z"
            fill="#05050A"
          />
        </svg>
      );
    case "md":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.8543 6.54738C15.0332 6.00863 15.0951 5.43791 15.0358 4.87334C14.9765 4.30877 14.7974 3.76335 14.5105 3.27352C14.0851 2.53313 13.4357 1.94695 12.6557 1.59949C11.8757 1.25202 11.0055 1.16122 10.1706 1.34018C9.69631 0.812559 9.09149 0.419031 8.41694 0.199125C7.74239 -0.0207811 7.02185 -0.0593233 6.32769 0.0873693C5.63353 0.234062 4.99019 0.560825 4.46228 1.03484C3.93437 1.50885 3.54048 2.11343 3.32017 2.78785C2.76395 2.90191 2.23848 3.13337 1.77887 3.46678C1.31927 3.80018 0.936123 4.22784 0.655037 4.72118C0.22506 5.46033 0.0412907 6.31707 0.130297 7.16754C0.219304 8.01801 0.576474 8.81814 1.15017 9.45225C0.970613 9.99074 0.908119 10.5614 0.96687 11.1259C1.02562 11.6905 1.20426 12.2361 1.49084 12.726C1.91673 13.4667 2.56678 14.053 3.34731 14.4005C4.12784 14.7479 4.99853 14.8386 5.8339 14.6594C6.21074 15.0838 6.67379 15.4229 7.19211 15.6541C7.71043 15.8852 8.27211 16.0032 8.83964 16C9.69539 16.0008 10.5293 15.7296 11.2209 15.2256C11.9125 14.7217 12.4261 14.011 12.6875 13.1961C13.2437 13.0819 13.7691 12.8503 14.2286 12.5169C14.6882 12.1835 15.0714 11.7559 15.3526 11.2627C15.7775 10.5247 15.9581 9.67113 15.8686 8.82422C15.7791 7.97731 15.4241 7.18032 14.8543 6.54738ZM8.83964 14.9528C8.13878 14.9539 7.4599 14.7082 6.92204 14.2589L7.01664 14.2053L10.2022 12.3665C10.2815 12.32 10.3473 12.2537 10.3932 12.1741C10.4391 12.0944 10.4635 12.0042 10.464 11.9123V7.42105L11.8106 8.20012C11.8173 8.20349 11.8231 8.20839 11.8275 8.21441C11.8319 8.22044 11.8348 8.22742 11.836 8.23478V11.9565C11.8343 12.7507 11.5181 13.5118 10.9565 14.0734C10.3949 14.6349 9.63379 14.9511 8.83964 14.9528ZM2.39917 12.2025C2.04769 11.5956 1.92148 10.8842 2.04277 10.1934L2.13744 10.2502L5.3261 12.089C5.405 12.1353 5.49482 12.1597 5.5863 12.1597C5.67778 12.1597 5.76761 12.1353 5.8465 12.089L9.7417 9.84332V11.3982C9.74134 11.4063 9.73916 11.4142 9.73532 11.4213C9.73149 11.4284 9.72611 11.4345 9.71957 11.4392L6.49304 13.3001C5.80446 13.6968 4.9866 13.804 4.21904 13.5982C3.45148 13.3924 2.79696 12.8905 2.39917 12.2025ZM1.56024 5.26372C1.91416 4.6529 2.47279 4.187 3.13724 3.94852V7.73332C3.13604 7.82475 3.1594 7.91484 3.20489 7.99417C3.25037 8.07349 3.31632 8.13916 3.39584 8.18432L7.2721 10.4205L5.92537 11.1995C5.91808 11.2034 5.90996 11.2054 5.9017 11.2054C5.89345 11.2054 5.88533 11.2034 5.87804 11.1995L2.65784 9.34185C1.97055 8.94346 1.46914 8.28894 1.26341 7.52163C1.05769 6.75433 1.16442 5.93676 1.56024 5.24798V5.26372ZM12.6244 7.83425L8.73557 5.57598L10.0792 4.79998C10.0865 4.79611 10.0946 4.79409 10.1028 4.79409C10.1111 4.79409 10.1192 4.79611 10.1265 4.79998L13.3467 6.66085C13.8391 6.94495 14.2405 7.36326 14.504 7.86692C14.7676 8.37059 14.8824 8.93884 14.8351 9.50532C14.7878 10.0718 14.5804 10.6131 14.237 11.0661C13.8935 11.5191 13.4284 11.8651 12.8957 12.0637V8.27885C12.8929 8.18757 12.8664 8.09858 12.8189 8.02062C12.7713 7.94266 12.7043 7.87848 12.6244 7.83425ZM13.9649 5.81885L13.8702 5.76205L10.6879 3.90752C10.6085 3.86093 10.5181 3.83637 10.4261 3.83637C10.3341 3.83637 10.2437 3.86093 10.1643 3.90752L6.27237 6.15312V4.59825C6.27154 4.59034 6.27286 4.58236 6.2762 4.57515C6.27953 4.56793 6.28475 4.56175 6.2913 4.55725L9.5115 2.69952C10.005 2.41519 10.5693 2.27728 11.1384 2.30189C11.7074 2.3265 12.2577 2.51263 12.7249 2.83851C13.192 3.16438 13.5567 3.61653 13.7763 4.14207C13.9959 4.66761 14.0614 5.24482 13.965 5.80618L13.9649 5.81885ZM5.53737 8.57532L4.1907 7.79945C4.18397 7.79539 4.1782 7.7899 4.17383 7.78337C4.16945 7.77684 4.16656 7.76942 4.16537 7.76165V4.04945C4.16611 3.47997 4.32896 2.92246 4.63487 2.44212C4.94078 1.96177 5.37712 1.57844 5.89286 1.33694C6.40861 1.09544 6.98244 1.00576 7.54728 1.07837C8.11212 1.15098 8.64461 1.38289 9.0825 1.74698L8.98784 1.80065L5.80237 3.63932C5.72309 3.68582 5.65726 3.75214 5.61136 3.83177C5.56546 3.9114 5.54107 4.00161 5.54057 4.09352L5.53737 8.57532ZM6.2691 6.99838L8.00377 5.99852L9.7417 6.99838V8.99798L8.0101 9.99778L6.2723 8.99798L6.2691 6.99838Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
  }
};

export const Anthropic = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
  size = "lg",
}) => {
  switch (size) {
    case "lg":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.54088 4L0 20H3.6478L4.98113 16.6329H11.8239L13.1572 20H16.8051L10.2641 4H6.54088ZM6.16352 13.6836L8.40252 8.05529L10.6415 13.6836H6.16352ZM13.8868 4L20.4277 20H24L17.4591 4H13.8868Z"
            fill="#05050A"
          />
        </svg>
      );
    case "md":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.36059 2.66699L0 13.3337H2.43187L3.32076 11.0889H7.88258L8.77147 13.3337H11.2034L6.84276 2.66699H4.36059ZM4.10901 9.12273L5.60168 5.37052L7.09431 9.12273H4.10901ZM9.25787 2.66699L13.6185 13.3337H16L11.6394 2.66699H9.25787Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
  }
};

export const Labs = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
  size = "lg",
}) => {
  switch (size) {
    case "lg":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.7341 12.2144C21.0013 12.2896 21.252 12.371 21.4861 12.4588C21.7049 12.5385 21.9117 12.6482 22.1005 12.7848C22.2742 12.9127 22.4176 13.0775 22.5203 13.2674C22.6322 13.4929 22.686 13.7428 22.6772 13.9944C22.6875 14.3109 22.6137 14.6245 22.4638 14.9033C22.3211 15.1504 22.1185 15.3574 21.8748 15.5051C21.6064 15.6666 21.3112 15.779 21.0036 15.8372C20.6545 15.9057 20.2997 15.9393 19.9441 15.9374C19.0833 15.9374 18.4043 15.7494 17.9072 15.3733C17.4097 14.9973 17.2617 14.4582 17.2617 13.7561H19.0417C19.0417 14.0739 19.1317 14.3016 19.3112 14.4393C19.5135 14.5843 19.7584 14.6571 20.0071 14.6462C20.2055 14.6547 20.4027 14.6093 20.5773 14.5146C20.6503 14.4697 20.7091 14.4056 20.748 14.3293C20.7864 14.2529 20.8033 14.1674 20.7968 14.0821C20.8018 13.9797 20.7683 13.8791 20.7026 13.8001C20.6207 13.7152 20.5227 13.647 20.4142 13.5995C20.252 13.5244 20.0844 13.4616 19.9129 13.4114C19.708 13.3487 19.4635 13.2714 19.1798 13.1796C18.9291 13.1043 18.6907 13.0228 18.4651 12.9352C18.2536 12.855 18.0533 12.7475 17.8695 12.6154C17.6984 12.4905 17.5593 12.3274 17.4624 12.1391C17.3544 11.9123 17.3028 11.6629 17.3117 11.4119C17.3117 10.7852 17.552 10.3214 18.0325 10.0205C18.5131 9.71971 19.1628 9.56916 19.9817 9.56889C20.37 9.5624 20.7568 9.61526 21.1289 9.72564C21.4269 9.81301 21.7041 9.96012 21.9436 10.158C22.1524 10.3357 22.3173 10.5587 22.4265 10.81C22.5353 11.0633 22.591 11.3364 22.5895 11.6122H20.6964C20.7099 11.4001 20.6399 11.1911 20.5023 11.0293C20.4227 10.9553 20.3289 10.8987 20.2262 10.8631C20.1236 10.8275 20.0148 10.8137 19.9068 10.8225C19.7303 10.8182 19.5565 10.8638 19.4054 10.9541C19.3358 10.9962 19.2797 11.0563 19.242 11.1282C19.2044 11.1999 19.1871 11.2806 19.1921 11.3615C19.1886 11.4611 19.2247 11.558 19.2924 11.6311C19.377 11.7143 19.4773 11.7803 19.5869 11.8254C19.7441 11.894 19.9052 11.9526 20.0698 12.0009C20.2616 12.0598 20.4831 12.1309 20.7341 12.2144Z"
            fill="#D63864"
          />
          <path
            d="M12.3302 15.7747H10.4121V7H12.3302V10.5972C12.4124 10.4546 12.5136 10.3239 12.6311 10.2086C12.761 10.0797 12.9086 9.97002 13.0695 9.88277C13.2384 9.79014 13.4171 9.71653 13.6023 9.66332C13.7918 9.60888 13.988 9.58146 14.1852 9.58189C14.5971 9.5772 15.0053 9.66054 15.3824 9.82632C15.7356 9.98186 16.0536 10.2079 16.3161 10.4905C16.5818 10.7813 16.7863 11.1223 16.9182 11.4935C17.2019 12.3094 17.2019 13.1973 16.9182 14.0132C16.7863 14.3843 16.5818 14.7254 16.3161 15.0161C16.0536 15.2988 15.7356 15.5248 15.3824 15.6804C15.0053 15.8461 14.5971 15.9294 14.1852 15.9248C13.988 15.9252 13.7918 15.8978 13.6023 15.8433C13.418 15.7907 13.2395 15.7195 13.0695 15.6308C12.9091 15.5479 12.7615 15.4424 12.6311 15.3174C12.5105 15.2026 12.4089 15.0694 12.3302 14.9226V15.7747ZM13.7844 14.2954C13.9836 14.2975 14.1808 14.2548 14.3611 14.1701C14.532 14.0901 14.6855 13.9773 14.8128 13.838C14.9411 13.6952 15.0411 13.5292 15.1074 13.349C15.1787 13.1586 15.2147 12.9569 15.2137 12.7536C15.2166 12.3572 15.0738 11.9735 14.8125 11.6755C14.6865 11.5331 14.5329 11.4179 14.3608 11.337C14.1806 11.2523 13.9836 11.2092 13.7844 11.2111C13.5792 11.2085 13.3759 11.2513 13.189 11.3363C13.0146 11.416 12.8588 11.5313 12.7315 11.6748C12.4702 11.9729 12.3274 12.3565 12.3304 12.7529C12.3293 12.9562 12.3652 13.158 12.4366 13.3483C12.5028 13.5286 12.6028 13.6946 12.7313 13.8373C12.8599 13.9776 13.0155 14.0906 13.1888 14.1694C13.3756 14.2548 13.579 14.2978 13.7844 14.2954Z"
            fill="#D63864"
          />
          <path
            d="M9.99956 9.72786V15.7702H8.08162V14.9176C8.00292 15.0643 7.90135 15.1976 7.78071 15.3124C7.65176 15.4363 7.50624 15.5417 7.34831 15.6257C7.179 15.7158 7.0003 15.787 6.81549 15.8383C6.62795 15.8919 6.43388 15.9193 6.23885 15.9197C5.82694 15.9244 5.4188 15.8411 5.04169 15.6753C4.68841 15.5198 4.37066 15.2938 4.10781 15.0111C3.84219 14.7203 3.63758 14.3793 3.50606 14.0081C3.22194 13.1922 3.22194 12.3043 3.50606 11.4884C3.63758 11.1172 3.84219 10.7762 4.10781 10.4855C4.37066 10.2028 4.68841 9.97676 5.04169 9.82125C5.41892 9.6556 5.82717 9.57245 6.23912 9.57735C6.43415 9.5778 6.62822 9.6052 6.81576 9.65878C7.00145 9.71053 7.18034 9.7842 7.34858 9.87824C7.5069 9.96663 7.65238 10.0763 7.78098 10.2041C7.8985 10.3193 7.99973 10.4501 8.08185 10.5927V9.72786H9.99956ZM6.64003 14.2909C6.84333 14.2941 7.04471 14.2512 7.22917 14.1657C7.40006 14.0857 7.55353 13.9728 7.68083 13.8336C7.8092 13.6908 7.90919 13.5248 7.97547 13.3446C8.04679 13.1543 8.08281 12.9525 8.08174 12.7492C8.08466 12.3528 7.94187 11.9691 7.68056 11.6711C7.55465 11.5287 7.40094 11.4135 7.2289 11.3326C7.04347 11.25 6.84275 11.2073 6.63976 11.2073C6.43676 11.2073 6.23604 11.25 6.05062 11.3326C5.87861 11.4135 5.72491 11.5287 5.59896 11.6711C5.33776 11.9692 5.19505 12.3529 5.19789 12.7492C5.1967 12.9525 5.23272 13.1543 5.3042 13.3446C5.37044 13.5248 5.47036 13.6908 5.59869 13.8336C5.72602 13.9728 5.8795 14.0856 6.05035 14.1657C6.23496 14.2513 6.43653 14.2942 6.64003 14.2909Z"
            fill="#D63864"
          />
          <path d="M1 7H2.91771V15.7747H1V7Z" fill="#D63864" />
        </svg>
      );
    case "md":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.8227 8.14296C14.0009 8.19309 14.168 8.24736 14.3241 8.30589C14.4699 8.35902 14.6078 8.43215 14.7337 8.52322C14.8495 8.60849 14.9451 8.71835 15.0135 8.84495C15.0881 8.99529 15.124 9.16189 15.1181 9.32962C15.125 9.54062 15.0758 9.74969 14.9759 9.93556C14.8807 10.1003 14.7457 10.2383 14.5832 10.3368C14.4043 10.4444 14.2075 10.5194 14.0024 10.5582C13.7697 10.6038 13.5331 10.6262 13.2961 10.625C12.7222 10.625 12.2695 10.4996 11.9381 10.2489C11.6065 9.99822 11.5078 9.63882 11.5078 9.17075H12.6945C12.6945 9.38262 12.7545 9.53442 12.8741 9.62622C13.009 9.72289 13.1723 9.77142 13.3381 9.76416C13.4703 9.76982 13.6018 9.73955 13.7182 9.67642C13.7669 9.64649 13.8061 9.60375 13.832 9.55289C13.8576 9.50196 13.8689 9.44495 13.8645 9.38809C13.8679 9.31982 13.8455 9.25276 13.8017 9.20009C13.7471 9.14349 13.6818 9.09802 13.6095 9.06635C13.5013 9.01629 13.3896 8.97442 13.2753 8.94095C13.1387 8.89915 12.9757 8.84762 12.7865 8.78642C12.6194 8.73622 12.4605 8.68189 12.3101 8.62349C12.1691 8.57002 12.0355 8.49836 11.913 8.41029C11.7989 8.32702 11.7062 8.21829 11.6416 8.09275C11.5696 7.94155 11.5352 7.77529 11.5411 7.60795C11.5411 7.19015 11.7013 6.88095 12.0217 6.68035C12.3421 6.47981 12.7752 6.37944 13.3211 6.37926C13.58 6.37493 13.8379 6.41017 14.0859 6.48376C14.2846 6.54201 14.4694 6.64008 14.6291 6.77202C14.7683 6.89049 14.8782 7.03916 14.951 7.20669C15.0235 7.37556 15.0607 7.55762 15.0597 7.74149H13.7976C13.8066 7.60009 13.7599 7.46075 13.6682 7.35289C13.6151 7.30355 13.5526 7.26582 13.4841 7.24209C13.4157 7.21835 13.3432 7.20915 13.2712 7.21502C13.1535 7.21215 13.0377 7.24255 12.9369 7.30275C12.8905 7.33082 12.8531 7.37089 12.828 7.41882C12.8029 7.46662 12.7914 7.52042 12.7947 7.57435C12.7924 7.64075 12.8165 7.70535 12.8616 7.75409C12.918 7.80955 12.9849 7.85356 13.0579 7.88362C13.1627 7.92936 13.2701 7.96842 13.3799 8.00062C13.5077 8.03989 13.6554 8.08729 13.8227 8.14296Z"
            className={active ? activeFill : fill}
          />
          <path
            d="M8.22014 10.5168H6.94141V4.66699H8.22014V7.06513C8.27494 6.97006 8.34241 6.88293 8.42074 6.80606C8.50734 6.72013 8.60574 6.64701 8.71301 6.58884C8.82561 6.52709 8.94474 6.47801 9.06821 6.44254C9.19454 6.40625 9.32534 6.38797 9.45681 6.38825C9.73141 6.38513 10.0035 6.44069 10.2549 6.55121C10.4904 6.6549 10.7024 6.80559 10.8774 6.99399C11.0545 7.18786 11.1909 7.41519 11.2788 7.66266C11.4679 8.20659 11.4679 8.79853 11.2788 9.34246C11.1909 9.58986 11.0545 9.81726 10.8774 10.0111C10.7024 10.1995 10.4904 10.3502 10.2549 10.4539C10.0035 10.5644 9.73141 10.6199 9.45681 10.6169C9.32534 10.6171 9.19454 10.5989 9.06821 10.5625C8.94534 10.5275 8.82634 10.48 8.71301 10.4209C8.60607 10.3656 8.50767 10.2953 8.42074 10.2119C8.34034 10.1354 8.27261 10.0466 8.22014 9.94873V10.5168ZM9.18961 9.53059C9.32241 9.53199 9.45387 9.50353 9.57407 9.44706C9.68801 9.39373 9.79034 9.31853 9.87521 9.22566C9.96074 9.13046 10.0274 9.01979 10.0716 8.89966C10.1191 8.77273 10.1431 8.63826 10.1425 8.50273C10.1444 8.23846 10.0492 7.98266 9.87501 7.78399C9.79101 7.68906 9.68861 7.61226 9.57387 7.55833C9.45374 7.50186 9.32241 7.47313 9.18961 7.47439C9.05281 7.47266 8.91727 7.50119 8.79267 7.55786C8.67641 7.61099 8.57254 7.68786 8.48767 7.78353C8.31347 7.98226 8.21827 8.23799 8.22027 8.50226C8.21954 8.63779 8.24347 8.77233 8.29107 8.89919C8.33521 9.01939 8.40187 9.13006 8.48754 9.22519C8.57327 9.31873 8.67701 9.39406 8.79254 9.44659C8.91707 9.50353 9.05267 9.53219 9.18961 9.53059Z"
            className={active ? activeFill : fill}
          />
          <path
            d="M6.66637 6.48524V10.5135H5.38775V9.94505C5.33528 10.0429 5.26757 10.1317 5.18714 10.2083C5.10117 10.2909 5.00416 10.3611 4.89887 10.4171C4.786 10.4772 4.66687 10.5247 4.54366 10.5589C4.41863 10.5946 4.28925 10.6129 4.15923 10.6131C3.88463 10.6163 3.61253 10.5607 3.36113 10.4502C3.12561 10.3465 2.91377 10.1959 2.73854 10.0074C2.56146 9.81352 2.42505 9.58619 2.33737 9.33872C2.14796 8.79479 2.14796 8.20285 2.33737 7.65892C2.42505 7.41146 2.56146 7.18412 2.73854 6.99032C2.91377 6.80186 3.12561 6.65117 3.36113 6.5475C3.61261 6.43707 3.88478 6.38164 4.15941 6.3849C4.28943 6.3852 4.41881 6.40347 4.54384 6.43919C4.66763 6.47369 4.78689 6.5228 4.89905 6.5855C5.0046 6.64442 5.10159 6.71752 5.18732 6.80272C5.26567 6.87952 5.33315 6.96672 5.3879 7.06179V6.48524H6.66637ZM4.42669 9.52725C4.56222 9.52939 4.69647 9.50079 4.81945 9.44379C4.93337 9.39045 5.03569 9.31519 5.12055 9.22239C5.20613 9.12719 5.27279 9.01652 5.31698 8.89639C5.36453 8.76952 5.38854 8.63499 5.38783 8.49945C5.38977 8.23519 5.29458 7.97939 5.12037 7.78072C5.03643 7.68579 4.93396 7.60899 4.81927 7.55506C4.69565 7.49999 4.56183 7.47152 4.42651 7.47152C4.29117 7.47152 4.15736 7.49999 4.03375 7.55506C3.91907 7.60899 3.81661 7.68579 3.73264 7.78072C3.55851 7.97946 3.46337 8.23525 3.46526 8.49945C3.46447 8.63499 3.48848 8.76952 3.53613 8.89639C3.58029 9.01652 3.64691 9.12719 3.73246 9.22239C3.81735 9.31519 3.91967 9.39039 4.03357 9.44379C4.15664 9.50085 4.29102 9.52945 4.42669 9.52725Z"
            className={active ? activeFill : fill}
          />
          <path
            d="M0.666992 4.66699H1.94547V10.5168H0.666992V4.66699Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
  }
};

export const Cohere = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
  size = "lg",
}) => {
  switch (size) {
    case "lg":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.304 14.016C8.864 14.016 9.984 13.988 11.552 13.344C13.372 12.588 16.956 11.244 19.56 9.844C21.38 8.864 22.164 7.576 22.164 5.84C22.164 3.46 20.232 1.5 17.824 1.5H7.744C4.3 1.5 1.5 4.3 1.5 7.744C1.5 11.188 4.132 14.016 8.304 14.016Z"
            fill="#40584E"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.0117 18.2999C10.0117 16.6199 11.0197 15.0799 12.5877 14.4359L15.7517 13.1199C18.9717 11.8039 22.4997 14.1559 22.4997 17.6279C22.4997 20.3159 20.3157 22.4999 17.6277 22.4999H14.1837C11.8877 22.4999 10.0117 20.6239 10.0117 18.2999Z"
            fill="#C791DD"
          />
          <path
            d="M5.112 14.8281C3.124 14.8281 1.5 16.4521 1.5 18.4401V18.9161C1.5 20.8761 3.124 22.5001 5.112 22.5001C7.1 22.5001 8.724 20.8761 8.724 18.8881V18.4121C8.696 16.4521 7.1 14.8281 5.112 14.8281Z"
            fill="#EE7F62"
          />
        </svg>
      );
    case "md":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.536 9.344C5.90933 9.344 6.656 9.32533 7.70133 8.896C8.91467 8.392 11.304 7.496 13.04 6.56267C14.2533 5.90933 14.776 5.05067 14.776 3.89333C14.776 2.30667 13.488 1 11.8827 1H5.16267C2.86667 1 1 2.86667 1 5.16267C1 7.45867 2.75467 9.344 5.536 9.344Z"
            className={active ? activeFill : fill}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.6748 12.2003C6.6748 11.0803 7.3468 10.0536 8.39214 9.62427L10.5015 8.74693C12.6481 7.8696 15.0001 9.4376 15.0001 11.7523C15.0001 13.5443 13.5441 15.0003 11.7521 15.0003H9.45614C7.92547 15.0003 6.6748 13.7496 6.6748 12.2003Z"
            className={active ? activeFill : fill}
          />
          <path
            d="M3.408 9.88574C2.08267 9.88574 1 10.9684 1 12.2937V12.6111C1 13.9177 2.08267 15.0004 3.408 15.0004C4.73333 15.0004 5.816 13.9177 5.816 12.5924V12.2751C5.79733 10.9684 4.73333 9.88574 3.408 9.88574Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
  }
};

export const Google = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
  size = "lg",
}) => {
  switch (size) {
    case "lg":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.2912 12.2514C22.2912 11.5423 22.2225 10.8103 22.1082 10.124H12.2031V14.173H17.8762C17.6475 15.4769 16.8926 16.6206 15.7717 17.3526L19.1572 19.9833C21.1474 18.1304 22.2912 15.4311 22.2912 12.2514Z"
            fill="#4285F4"
          />
          <path
            d="M12.2031 22.5C15.0397 22.5 17.4187 21.5621 19.1572 19.9609L15.7717 17.3531C14.8338 17.9936 13.6214 18.3596 12.2031 18.3596C9.45808 18.3596 7.14767 16.5067 6.30128 14.0361L2.82422 16.7126C4.6085 20.2582 8.22281 22.5 12.2031 22.5Z"
            fill="#0F9D58"
          />
          <path
            d="M6.30122 14.0134C5.86658 12.7096 5.86658 11.2913 6.30122 9.98738L2.82416 7.28809C1.33726 10.2619 1.33726 13.7618 2.82416 16.7127L6.30122 14.0134Z"
            fill="#F4B400"
          />
          <path
            d="M12.2031 5.66372C13.69 5.64084 15.154 6.21273 16.2292 7.24212L19.2259 4.22257C17.3272 2.43829 14.8109 1.47752 12.2031 1.5004C8.22281 1.5004 4.6085 3.74219 2.82422 7.28787L6.30128 9.98717C7.14767 7.49375 9.45808 5.66372 12.2031 5.66372Z"
            fill="#DB4437"
          />
        </svg>
      );
    case "md":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.8611 8.1673C14.8611 7.69454 14.8154 7.20653 14.7391 6.74902H8.13574V9.44832H11.9178C11.7653 10.3176 11.262 11.0801 10.5148 11.5681L12.7718 13.3219C14.0986 12.0866 14.8611 10.2871 14.8611 8.1673Z"
            fill="#4285F4"
          />
          <path
            d="M8.13542 15C10.0264 15 11.6125 14.3748 12.7715 13.3072L10.5145 11.5687C9.8892 11.9957 9.08093 12.2397 8.13542 12.2397C6.30539 12.2397 4.76511 11.0044 4.20085 9.35742L1.88281 11.1417C3.07233 13.5055 5.48187 15 8.13542 15Z"
            fill="#0F9D58"
          />
          <path
            d="M4.20114 9.34197C3.91138 8.47271 3.91138 7.52719 4.20114 6.65793L1.8831 4.8584C0.891832 6.84093 0.891832 9.17422 1.8831 11.1415L4.20114 9.34197Z"
            fill="#F4B400"
          />
          <path
            d="M8.13542 3.77581C9.12668 3.76056 10.1027 4.14182 10.8195 4.82808L12.8172 2.81505C11.5515 1.62553 9.87395 0.985016 8.13542 1.00027C5.48187 1.00027 3.07233 2.49479 1.88281 4.85858L4.20085 6.65811C4.76511 4.99583 6.30539 3.77581 8.13542 3.77581Z"
            fill="#DB4437"
          />
        </svg>
      );
  }
};

export const User = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
  size = "md",
}) => {
  switch (size) {
    case "md":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M8 0C9.06087 0 10.0783 0.421427 10.8284 1.17157C11.5786 1.92172 12 2.93913 12 4C12 5.06087 11.5786 6.07828 10.8284 6.82843C10.0783 7.57857 9.06087 8 8 8C6.93913 8 5.92172 7.57857 5.17157 6.82843C4.42143 6.07828 4 5.06087 4 4C4 2.93913 4.42143 1.92172 5.17157 1.17157C5.92172 0.421427 6.93913 0 8 0ZM8 10C12.42 10 16 11.79 16 14V16H0V14C0 11.79 3.58 10 8 10Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
    case "sm":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M6 0C6.79565 0 7.55871 0.31607 8.12132 0.87868C8.68393 1.44129 9 2.20435 9 3C9 3.79565 8.68393 4.55871 8.12132 5.12132C7.55871 5.68393 6.79565 6 6 6C5.20435 6 4.44129 5.68393 3.87868 5.12132C3.31607 4.55871 3 3.79565 3 3C3 2.20435 3.31607 1.44129 3.87868 0.87868C4.44129 0.31607 5.20435 0 6 0ZM6 7.5C9.315 7.5 12 8.8425 12 10.5V12H0V10.5C0 8.8425 2.685 7.5 6 7.5Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
  }
};
// className={"flex-shrink-0"}>
// className={active ? activeFill : fill} />
export const Bracket = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
  size = "md",
}) => {
  switch (size) {
    case "md":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"flex-shrink-0"}
        >
          <path
            d="M4.44444 0C3.97295 0 3.52076 0.187301 3.18737 0.520699C2.85397 0.854097 2.66667 1.30628 2.66667 1.77778V5.33333C2.66667 5.80483 2.47937 6.25701 2.14597 6.59041C1.81257 6.92381 1.36038 7.11111 0.888889 7.11111H0V8.88889H0.888889C1.36038 8.88889 1.81257 9.07619 2.14597 9.40959C2.47937 9.74299 2.66667 10.1952 2.66667 10.6667V14.2222C2.66667 14.6937 2.85397 15.1459 3.18737 15.4793C3.52076 15.8127 3.97295 16 4.44444 16H6.22222V14.2222H4.44444V9.77778C4.44444 9.30628 4.25714 8.8541 3.92375 8.5207C3.59035 8.1873 3.13816 8 2.66667 8C3.13816 8 3.59035 7.8127 3.92375 7.4793C4.25714 7.1459 4.44444 6.69372 4.44444 6.22222V1.77778H6.22222V0M11.5556 0C12.0271 0 12.4792 0.187301 12.8126 0.520699C13.146 0.854097 13.3333 1.30628 13.3333 1.77778V5.33333C13.3333 5.80483 13.5206 6.25701 13.854 6.59041C14.1874 6.92381 14.6396 7.11111 15.1111 7.11111H16V8.88889H15.1111C14.6396 8.88889 14.1874 9.07619 13.854 9.40959C13.5206 9.74299 13.3333 10.1952 13.3333 10.6667V14.2222C13.3333 14.6937 13.146 15.1459 12.8126 15.4793C12.4792 15.8127 12.0271 16 11.5556 16H9.77778V14.2222H11.5556V9.77778C11.5556 9.30628 11.7429 8.8541 12.0763 8.5207C12.4097 8.1873 12.8618 8 13.3333 8C12.8618 8 12.4097 7.8127 12.0763 7.4793C11.7429 7.1459 11.5556 6.69372 11.5556 6.22222V1.77778H9.77778V0H11.5556Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
  }
};

export const LinkedIn = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-white",
  active = false,
  size = "md",
}) => {
  switch (size) {
    case "md":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"flex-shrink-0"}
        >
          <path
            d="M14.2222 0C14.6937 0 15.1459 0.187301 15.4793 0.520699C15.8127 0.854097 16 1.30628 16 1.77778V14.2222C16 14.6937 15.8127 15.1459 15.4793 15.4793C15.1459 15.8127 14.6937 16 14.2222 16H1.77778C1.30628 16 0.854097 15.8127 0.520699 15.4793C0.187301 15.1459 0 14.6937 0 14.2222V1.77778C0 1.30628 0.187301 0.854097 0.520699 0.520699C0.854097 0.187301 1.30628 0 1.77778 0H14.2222ZM13.7778 13.7778V9.06667C13.7778 8.29813 13.4725 7.56107 12.929 7.01763C12.3856 6.47419 11.6485 6.16889 10.88 6.16889C10.1244 6.16889 9.24444 6.63111 8.81778 7.32444V6.33778H6.33778V13.7778H8.81778V9.39556C8.81778 8.71111 9.36889 8.15111 10.0533 8.15111C10.3834 8.15111 10.6999 8.28222 10.9333 8.5156C11.1667 8.74898 11.2978 9.06551 11.2978 9.39556V13.7778H13.7778ZM3.44889 4.94222C3.84495 4.94222 4.22478 4.78489 4.50484 4.50484C4.78489 4.22478 4.94222 3.84495 4.94222 3.44889C4.94222 2.62222 4.27556 1.94667 3.44889 1.94667C3.05047 1.94667 2.66838 2.10494 2.38666 2.38666C2.10494 2.66838 1.94667 3.05047 1.94667 3.44889C1.94667 4.27556 2.62222 4.94222 3.44889 4.94222ZM4.68444 13.7778V6.33778H2.22222V13.7778H4.68444Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
  }
};

export const Twitter = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-white",
  active = false,
  size = "md",
}) => {
  switch (size) {
    case "md":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 3.02866C15.4111 3.29635 14.7763 3.47226 14.1185 3.55639C14.7916 3.15103 15.3117 2.50858 15.5564 1.73612C14.9216 2.11853 14.218 2.38621 13.4761 2.53918C12.8719 1.88143 12.0229 1.49902 11.0593 1.49902C9.26195 1.49902 7.7935 2.96747 7.7935 4.78009C7.7935 5.04013 7.82409 5.29252 7.87763 5.52962C5.15488 5.39195 2.7304 4.08411 1.11663 2.10323C0.833652 2.58507 0.67304 3.15103 0.67304 3.74759C0.67304 4.88717 1.24665 5.89673 2.13384 6.47034C1.59082 6.47034 1.08604 6.31738 0.642448 6.08793C0.642448 6.08793 0.642448 6.08793 0.642448 6.11088C0.642448 7.7017 1.77438 9.03249 3.27342 9.33076C2.99809 9.40725 2.70746 9.44549 2.40918 9.44549C2.20268 9.44549 1.99618 9.42254 1.79732 9.3843C2.21033 10.6768 3.41109 11.6405 4.8566 11.6635C3.73996 12.5507 2.32505 13.0707 0.780115 13.0707C0.520077 13.0707 0.260038 13.0554 0 13.0248C1.45315 13.9579 3.18164 14.5009 5.03251 14.5009C11.0593 14.5009 14.3709 9.49902 14.3709 5.1625C14.3709 5.01719 14.3709 4.87952 14.3633 4.73421C15.0057 4.27531 15.5564 3.69405 16 3.02866Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
  }
};

export const Discord = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-white",
  active = false,
  size = "md",
}) => {
  switch (size) {
    case "md":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5535 2.8449C12.5178 2.36032 11.4104 2.00815 10.2526 1.80762C10.1104 2.06469 9.94429 2.41046 9.82976 2.68552C8.599 2.50043 7.37956 2.50043 6.17144 2.68552C6.05693 2.41046 5.88704 2.06469 5.74357 1.80762C4.58454 2.00815 3.47584 2.36162 2.44013 2.84747C0.351095 6.00427 -0.215207 9.08267 0.0679444 12.1173C1.4535 13.152 2.79627 13.7806 4.11638 14.1919C4.44233 13.7433 4.73302 13.2665 4.98345 12.7639C4.5065 12.5827 4.04969 12.359 3.61805 12.0994C3.73256 12.0145 3.84457 11.9258 3.95279 11.8346C6.58546 13.0659 9.44593 13.0659 12.0472 11.8346C12.1566 11.9258 12.2686 12.0145 12.3819 12.0994C11.949 12.3603 11.4909 12.5839 11.014 12.7652C11.2644 13.2665 11.5538 13.7446 11.881 14.1932C13.2024 13.7819 14.5464 13.1533 15.932 12.1173C16.2642 8.59938 15.3644 5.54926 13.5535 2.8449ZM5.34212 10.251C4.55181 10.251 3.9037 9.51325 3.9037 8.6148C3.9037 7.71635 4.53797 6.97728 5.34212 6.97728C6.14628 6.97728 6.79437 7.71505 6.78053 8.6148C6.78178 9.51325 6.14628 10.251 5.34212 10.251ZM10.6578 10.251C9.86752 10.251 9.21941 9.51325 9.21941 8.6148C9.21941 7.71635 9.85366 6.97728 10.6578 6.97728C11.462 6.97728 12.1101 7.71505 12.0962 8.6148C12.0962 9.51325 11.462 10.251 10.6578 10.251Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
  }
};
// className={"flex-shrink-0"}>
// className={active ? activeFill : fill} />
export const Ellipse = ({
  fill = "fill-error",
  activeFill = "fill-success",
  active = false,
  size = "sm",
}) => {
  switch (size) {
    case "sm":
      return (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"flex-shrink-0"}
        >
          <circle
            cx="6"
            cy="6"
            r="5"
            stroke="#151518"
            strokeWidth="2"
            className={active ? activeFill : fill}
          />
        </svg>
      );
  }
};

export const Score = ({ fill = "fill-gray-4", activeFill = "fill-gray-5" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M0.799805 16V4.8H3.9998V16H0.799805ZM6.3998 16V0H9.5998V16H6.3998ZM11.9998 16V9.6H15.1998V16H11.9998Z"
        className={fill}
      />
    </svg>
  );
};

export const Cost = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 10 16"
      fill="none"
    >
      <path
        d="M0.555664 10.6667H2.33344C2.33344 11.6267 3.55122 12.4444 5.00011 12.4444C6.449 12.4444 7.66678 11.6267 7.66678 10.6667C7.66678 9.68889 6.74233 9.33333 4.78678 8.86222C2.90233 8.39111 0.555664 7.80444 0.555664 5.33333C0.555664 3.74222 1.86233 2.39111 3.66678 1.93778V0H6.33344V1.93778C8.13789 2.39111 9.44455 3.74222 9.44455 5.33333H7.66678C7.66678 4.37333 6.449 3.55556 5.00011 3.55556C3.55122 3.55556 2.33344 4.37333 2.33344 5.33333C2.33344 6.31111 3.25789 6.66667 5.21344 7.13778C7.09789 7.60889 9.44455 8.19556 9.44455 10.6667C9.44455 12.2578 8.13789 13.6089 6.33344 14.0622V16H3.66678V14.0622C1.86233 13.6089 0.555664 12.2578 0.555664 10.6667Z"
        className={active ? activeFill : fill}
      />
    </svg>
  );
};
[[[[[[]]]]]];

export const Latency = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="14]"
      viewBox="0 0 16 14"
      fill="none"
    >
      <path
        d="M8 10.4586C7.36348 10.4586 6.75303 10.2057 6.30294 9.75565C5.85286 9.30556 5.6 8.69511 5.6 8.05859C5.6 7.16259 6.088 6.37859 6.8 5.97059L14.568 1.47459L10.144 9.13859C9.744 9.92259 8.936 10.4586 8 10.4586ZM8 0.0585938C9.448 0.0585938 10.8 0.458594 11.976 1.11459L10.296 2.08259C9.6 1.81059 8.8 1.65859 8 1.65859C6.30261 1.65859 4.67475 2.33288 3.47452 3.53311C2.27428 4.73334 1.6 6.36121 1.6 8.05859C1.6 9.82659 2.312 11.4266 3.472 12.5786H3.48C3.792 12.8906 3.792 13.3946 3.48 13.7066C3.168 14.0186 2.656 14.0186 2.344 13.7146C0.896 12.2666 0 10.2666 0 8.05859C0 5.93686 0.842855 3.90203 2.34315 2.40174C3.84344 0.901448 5.87827 0.0585938 8 0.0585938ZM16 8.05859C16 10.2666 15.104 12.2666 13.656 13.7146C13.344 14.0186 12.84 14.0186 12.528 13.7066C12.216 13.3946 12.216 12.8906 12.528 12.5786C13.688 11.4186 14.4 9.82659 14.4 8.05859C14.4 7.25859 14.248 6.45859 13.968 5.73859L14.936 4.05859C15.6 5.25859 16 6.60259 16 8.05859Z"
        className={active ? activeFill : fill}
      />
    </svg>
  );
};

export const Tokens = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M7.9998 2.656L12.7998 5.352V10.648L7.9998 13.344L3.1998 10.648V5.352L7.9998 2.656ZM15.1998 11.6C15.1998 11.904 15.0318 12.168 14.7758 12.304L8.4558 15.856C8.3278 15.952 8.1678 16 7.9998 16C7.8318 16 7.6718 15.952 7.5438 15.856L1.2238 12.304C0.967805 12.168 0.799805 11.904 0.799805 11.6V4.4C0.799805 4.096 0.967805 3.832 1.2238 3.696L7.5438 0.144C7.6718 0.0480001 7.8318 0 7.9998 0C8.1678 0 8.3278 0.0480001 8.4558 0.144L14.7758 3.696C15.0318 3.832 15.1998 4.096 15.1998 4.4V11.6ZM7.9998 1.72L2.3998 4.872V11.128L7.9998 14.28L13.5998 11.128V4.872L7.9998 1.72Z"
        className={active ? activeFill : fill}
      />
    </svg>
  );
};

export const Speed = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
    >
      <path
        d="M8 10.4586C7.36348 10.4586 6.75303 10.2057 6.30294 9.75565C5.85286 9.30556 5.6 8.69511 5.6 8.05859C5.6 7.16259 6.088 6.37859 6.8 5.97059L14.568 1.47459L10.144 9.13859C9.744 9.92259 8.936 10.4586 8 10.4586ZM8 0.0585938C9.448 0.0585938 10.8 0.458594 11.976 1.11459L10.296 2.08259C9.6 1.81059 8.8 1.65859 8 1.65859C6.30261 1.65859 4.67475 2.33288 3.47452 3.53311C2.27428 4.73334 1.6 6.36121 1.6 8.05859C1.6 9.82659 2.312 11.4266 3.472 12.5786H3.48C3.792 12.8906 3.792 13.3946 3.48 13.7066C3.168 14.0186 2.656 14.0186 2.344 13.7146C0.896 12.2666 0 10.2666 0 8.05859C0 5.93686 0.842855 3.90203 2.34315 2.40174C3.84344 0.901448 5.87827 0.0585938 8 0.0585938ZM16 8.05859C16 10.2666 15.104 12.2666 13.656 13.7146C13.344 14.0186 12.84 14.0186 12.528 13.7066C12.216 13.3946 12.216 12.8906 12.528 12.5786C13.688 11.4186 14.4 9.82659 14.4 8.05859C14.4 7.25859 14.248 6.45859 13.968 5.73859L14.936 4.05859C15.6 5.25859 16 6.60259 16 8.05859Z"
        className={active ? activeFill : fill}
      />
    </svg>
  );
};

export const Custom = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M8 4.8C8.8723 4.8 9.70888 5.13714 10.3257 5.73726C10.9425 6.33737 11.289 7.15131 11.289 8C11.289 8.84869 10.9425 9.66263 10.3257 10.2627C9.70888 10.8629 8.8723 11.2 8 11.2C7.1277 11.2 6.29112 10.8629 5.67431 10.2627C5.0575 9.66263 4.71098 8.84869 4.71098 8C4.71098 7.15131 5.0575 6.33737 5.67431 5.73726C6.29112 5.13714 7.1277 4.8 8 4.8ZM8 6.4C7.56385 6.4 7.14556 6.56857 6.83715 6.86863C6.52875 7.16869 6.35549 7.57565 6.35549 8C6.35549 8.42435 6.52875 8.83131 6.83715 9.13137C7.14556 9.43143 7.56385 9.6 8 9.6C8.43615 9.6 8.85444 9.43143 9.16285 9.13137C9.47125 8.83131 9.64451 8.42435 9.64451 8C9.64451 7.57565 9.47125 7.16869 9.16285 6.86863C8.85444 6.56857 8.43615 6.4 8 6.4ZM6.35549 16C6.14992 16 5.97725 15.856 5.94436 15.664L5.64013 13.544C5.1221 13.344 4.67809 13.072 4.25051 12.752L2.2031 13.56C2.0222 13.624 1.80019 13.56 1.70152 13.384L0.0570083 10.616C-0.049885 10.44 -0.000549515 10.224 0.155679 10.104L1.89064 8.776L1.83308 8L1.89064 7.2L0.155679 5.896C-0.000549515 5.776 -0.049885 5.56 0.0570083 5.384L1.70152 2.616C1.80019 2.44 2.0222 2.368 2.2031 2.44L4.25051 3.24C4.67809 2.928 5.1221 2.656 5.64013 2.456L5.94436 0.336C5.97725 0.144 6.14992 0 6.35549 0H9.64451C9.85008 0 10.0227 0.144 10.0556 0.336L10.3599 2.456C10.8779 2.656 11.3219 2.928 11.7495 3.24L13.7969 2.44C13.9778 2.368 14.1998 2.44 14.2985 2.616L15.943 5.384C16.0499 5.56 16.0006 5.776 15.8443 5.896L14.1094 7.2L14.1669 8L14.1094 8.8L15.8443 10.104C16.0006 10.224 16.0499 10.44 15.943 10.616L14.2985 13.384C14.1998 13.56 13.9778 13.632 13.7969 13.56L11.7495 12.76C11.3219 13.072 10.8779 13.344 10.3599 13.544L10.0556 15.664C10.0227 15.856 9.85008 16 9.64451 16H6.35549ZM7.38331 1.6L7.07907 3.688C6.09237 3.888 5.22077 4.4 4.58764 5.112L2.606 4.28L1.98931 5.32L3.72427 6.56C3.39537 7.496 3.39537 8.512 3.72427 9.44L1.98109 10.688L2.59778 11.728L4.59586 10.896C5.229 11.6 6.09237 12.112 7.07085 12.304L7.37509 14.4H8.62492L8.92915 12.312C9.90763 12.112 10.771 11.6 11.4041 10.896L13.4022 11.728L14.0189 10.688L12.2757 9.448C12.6046 8.512 12.6046 7.496 12.2757 6.56L14.0107 5.32L13.394 4.28L11.4124 5.112C10.7792 4.4 9.90763 3.888 8.92093 3.696L8.61669 1.6H7.38331Z"
        className={fill}
      />
    </svg>
  );
};

export const High = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-white",
  active,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 8 16"
      fill="none"
    >
      <path
        d="M6.4 8.8V2.4C6.4 1.76348 6.14714 1.15303 5.69706 0.702944C5.24697 0.252856 4.63652 0 4 0C3.36348 0 2.75303 0.252856 2.30294 0.702944C1.85286 1.15303 1.6 1.76348 1.6 2.4V8.8C0.928376 9.30372 0.432266 10.006 0.181946 10.8073C-0.0683748 11.6087 -0.0602158 12.4685 0.205267 13.2649C0.47075 14.0614 0.980097 14.7541 1.66116 15.245C2.34222 15.7359 3.16047 16 4 16C4.83953 16 5.65778 15.7359 6.33884 15.245C7.0199 14.7541 7.52925 14.0614 7.79473 13.2649C8.06022 12.4685 8.06837 11.6087 7.81805 10.8073C7.56773 10.006 7.07162 9.30372 6.4 8.8ZM4 1.6C4.21217 1.6 4.41566 1.68429 4.56569 1.83431C4.71571 1.98434 4.8 2.18783 4.8 2.4H3.2C3.2 2.18783 3.28429 1.98434 3.43431 1.83431C3.58434 1.68429 3.78783 1.6 4 1.6Z"
        className={fill}
      />
    </svg>
  );
};

export const Medium = ({ fill = "fill-gray-4" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 8 16"
      fill="none"
    >
      <path
        d="M6.4 8.8V2.4C6.4 1.76348 6.14714 1.15303 5.69706 0.702944C5.24697 0.252856 4.63652 0 4 0C3.36348 0 2.75303 0.252856 2.30294 0.702944C1.85286 1.15303 1.6 1.76348 1.6 2.4V8.8C0.928376 9.30372 0.432266 10.006 0.181946 10.8073C-0.0683748 11.6087 -0.0602158 12.4685 0.205267 13.2649C0.47075 14.0614 0.980097 14.7541 1.66116 15.245C2.34222 15.7359 3.16047 16 4 16C4.83953 16 5.65778 15.7359 6.33884 15.245C7.0199 14.7541 7.52925 14.0614 7.79473 13.2649C8.06022 12.4685 8.06837 11.6087 7.81805 10.8073C7.56773 10.006 7.07162 9.30372 6.4 8.8ZM4 1.6C4.21217 1.6 4.41566 1.68429 4.56569 1.83431C4.71571 1.98434 4.8 2.18783 4.8 2.4V4.8H3.2V2.4C3.2 2.18783 3.28429 1.98434 3.43431 1.83431C3.58434 1.68429 3.78783 1.6 4 1.6Z"
        className={fill}
      />
    </svg>
  );
};

export const Low = ({ fill = "fill-gray-4" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 8 16"
      fill="none"
    >
      <path
        d="M6.4 8.8V2.4C6.4 1.76348 6.14714 1.15303 5.69706 0.702944C5.24697 0.252856 4.63652 0 4 0C3.36348 0 2.75303 0.252856 2.30294 0.702944C1.85286 1.15303 1.6 1.76348 1.6 2.4V8.8C0.928376 9.30372 0.432266 10.006 0.181946 10.8073C-0.0683748 11.6087 -0.0602158 12.4685 0.205267 13.2649C0.47075 14.0614 0.980097 14.7541 1.66116 15.245C2.34222 15.7359 3.16047 16 4 16C4.83953 16 5.65778 15.7359 6.33884 15.245C7.0199 14.7541 7.52925 14.0614 7.79473 13.2649C8.06022 12.4685 8.06837 11.6087 7.81805 10.8073C7.56773 10.006 7.07162 9.30372 6.4 8.8ZM4 1.6C4.21217 1.6 4.41566 1.68429 4.56569 1.83431C4.71571 1.98434 4.8 2.18783 4.8 2.4V8H3.2V2.4C3.2 2.18783 3.28429 1.98434 3.43431 1.83431C3.58434 1.68429 3.78783 1.6 4 1.6Z"
        className={fill}
      />
    </svg>
  );
};

// className={"flex-shrink-0"}>
// className={active ? activeFill : fill} />

export const JavaScript = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
  size = "md",
}) => {
  switch (size) {
    case "md":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"flex-shrink-0"}
        >
          <path
            d="M0 0H16V16H0V0ZM4.20444 13.3689C4.56 14.1244 5.26222 14.7467 6.46222 14.7467C7.79556 14.7467 8.71111 14.0356 8.71111 12.48V7.34222H7.2V12.4444C7.2 13.2089 6.88889 13.4044 6.4 13.4044C5.88444 13.4044 5.67111 13.0489 5.43111 12.6311L4.20444 13.3689ZM9.52 13.2089C9.96444 14.08 10.8622 14.7467 12.2667 14.7467C13.6889 14.7467 14.7556 14.0089 14.7556 12.6489C14.7556 11.3956 14.0356 10.8356 12.7556 10.2844L12.3822 10.1244C11.7333 9.84889 11.4578 9.66222 11.4578 9.21778C11.4578 8.85333 11.7333 8.56889 12.1778 8.56889C12.6044 8.56889 12.8889 8.75556 13.1467 9.21778L14.3111 8.44444C13.8222 7.59111 13.1289 7.26222 12.1778 7.26222C10.8356 7.26222 9.97333 8.11556 9.97333 9.24444C9.97333 10.4711 10.6933 11.0489 11.7778 11.5111L12.1511 11.6711C12.8444 11.9733 13.2533 12.16 13.2533 12.6756C13.2533 13.1022 12.8533 13.4133 12.2311 13.4133C11.4933 13.4133 11.0667 13.0311 10.7467 12.4978L9.52 13.2089Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
  }
};

export const Python = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
  size = "md",
}) => {
  switch (size) {
    case "md":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"flex-shrink-0"}
        >
          <path
            d="M13.712 4C14.3188 4 14.9008 4.24106 15.3299 4.67014C15.7589 5.09922 16 5.68118 16 6.288V9.312C16 9.91882 15.7589 10.5008 15.3299 10.9299C14.9008 11.3589 14.3188 11.6 13.712 11.6H8C8 11.912 8.256 12.368 8.568 12.368H12V13.712C12 14.3188 11.7589 14.9008 11.3299 15.3299C10.9008 15.7589 10.3188 16 9.712 16H6.288C5.68118 16 5.09922 15.7589 4.67014 15.3299C4.24106 14.9008 4 14.3188 4 13.712V10.712C4 9.448 5.024 8.432 6.288 8.432H10.488C11.752 8.432 12.768 7.408 12.768 6.144V4H13.712ZM10.288 13.432C9.968 13.432 9.712 13.672 9.712 14.144C9.712 14.616 9.968 14.712 10.288 14.712C10.3626 14.712 10.4365 14.6973 10.5054 14.6688C10.5743 14.6402 10.6369 14.5984 10.6896 14.5456C10.7424 14.4929 10.7842 14.4303 10.8128 14.3614C10.8413 14.2925 10.856 14.2186 10.856 14.144C10.856 13.672 10.6 13.432 10.288 13.432ZM2.288 12C1.024 12 0 10.976 0 9.712V6.688C0 5.424 1.024 4.4 2.288 4.4H8C8 4.088 7.744 3.632 7.432 3.632H4V2.288C4 1.024 5.024 0 6.288 0H9.712C10.976 0 12 1.024 12 2.288V5.288C12 6.552 10.976 7.568 9.712 7.568H5.512C4.248 7.568 3.232 8.592 3.232 9.856V12H2.288ZM5.712 2.568C6.032 2.568 6.288 2.328 6.288 1.856C6.288 1.384 6.032 1.288 5.712 1.288C5.4 1.288 5.144 1.384 5.144 1.856C5.144 2.328 5.4 2.568 5.712 2.568Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
  }
};

export const Php = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
  size = "md",
}) => {
  switch (size) {
    case "md":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"flex-shrink-0"}
        >
          <path
            d="M8 12.053C3.58 12.053 0 10.2396 0 7.99962C0 5.75962 3.58 3.94629 8 3.94629C12.42 3.94629 16 5.75962 16 7.99962C16 10.2396 12.42 12.053 8 12.053ZM4.54 6.75296C4.9 6.75296 5.14667 6.81962 5.26667 6.95962C5.38667 7.09296 5.41333 7.33296 5.35333 7.64629C5.28667 7.99962 5.16 8.22629 4.96667 8.37296C4.78 8.51962 4.49333 8.59296 4.10667 8.59296H3.52667L3.88 6.75296H4.54ZM2.20667 10.453H3.16667L3.39333 9.28629H4.21333C4.57333 9.28629 4.86667 9.24629 5.1 9.17296C5.33333 9.09296 5.54667 8.96629 5.74 8.78629C5.9 8.63962 6.02667 8.47962 6.12667 8.29962C6.22667 8.12629 6.3 7.92629 6.33333 7.71296C6.44 7.19296 6.36667 6.78629 6.11333 6.49962C5.85333 6.20629 5.45333 6.06629 4.9 6.06629H3.06L2.20667 10.453ZM7.04 4.89962L6.18667 9.28629H7.13333L7.62667 6.77296H8.38667C8.62667 6.77296 8.78667 6.81296 8.86 6.89296C8.93333 6.97296 8.94667 7.11962 8.90667 7.33296L8.52667 9.28629H9.49333L9.88667 7.23962C9.97333 6.82629 9.90667 6.52629 9.70667 6.33296C9.50667 6.15296 9.14 6.06629 8.60667 6.06629H7.76L8 4.89962H7.04ZM12 6.75296C12.3667 6.75296 12.6067 6.81962 12.7267 6.95962C12.8467 7.09296 12.8733 7.33296 12.8133 7.64629C12.7467 7.99962 12.62 8.22629 12.4333 8.37296C12.24 8.51962 11.9533 8.59296 11.5667 8.59296H11L11.3333 6.75296H12ZM9.66667 10.453H10.6267L10.8533 9.28629H11.6667C12.0333 9.28629 12.3333 9.24629 12.5667 9.17296C12.8 9.09296 13 8.96629 13.2 8.78629C13.36 8.63962 13.4933 8.47962 13.5867 8.29962C13.6867 8.12629 13.76 7.92629 13.8 7.71296C13.9 7.19296 13.8267 6.78629 13.5733 6.49962C13.3333 6.20629 12.9133 6.06629 12.36 6.06629H10.5267L9.66667 10.453Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
  }
};

export const Go = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
  size = "md",
}) => {
  switch (size) {
    case "md":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"flex-shrink-0"}
        >
          <path
            d="M1.20597 6.82046C1.1748 6.82046 1.16701 6.80488 1.18259 6.78151L1.34619 6.57118C1.36177 6.54781 1.40072 6.53223 1.43188 6.53223H4.21296C4.24412 6.53223 4.25191 6.5556 4.23633 6.57897L4.1039 6.78151C4.08832 6.80488 4.04937 6.82825 4.026 6.82825L1.20597 6.82046Z"
            className={active ? activeFill : fill}
          />
          <path
            d="M0.0311606 7.53726C6.5006e-08 7.53726 -0.00779017 7.52168 0.00779012 7.49831L0.171383 7.28797C0.186963 7.2646 0.225914 7.24902 0.257075 7.24902H3.80938C3.84054 7.24902 3.85612 7.27239 3.84833 7.29576L3.78601 7.48273C3.77822 7.51389 3.74706 7.52947 3.7159 7.52947L0.0311606 7.53726Z"
            className={active ? activeFill : fill}
          />
          <path
            d="M1.91788 8.25406C1.88672 8.25406 1.87893 8.23069 1.89451 8.20731L2.00357 8.01256C2.01915 7.98919 2.05031 7.96582 2.08147 7.96582H3.6395C3.67066 7.96582 3.68624 7.98919 3.68624 8.02035L3.67066 8.20731C3.67066 8.23848 3.6395 8.26185 3.61613 8.26185L1.91788 8.25406Z"
            className={active ? activeFill : fill}
          />
          <path
            d="M10.0009 6.68051C9.51009 6.80515 9.17512 6.89863 8.69213 7.02327C8.57527 7.05443 8.56748 7.06222 8.46621 6.94537C8.34936 6.81294 8.26367 6.72725 8.10007 6.64935C7.6093 6.40785 7.1341 6.47796 6.69006 6.7662C6.16033 7.10897 5.88767 7.61532 5.89546 8.24633C5.90325 8.86954 6.33171 9.38369 6.94713 9.46938C7.47686 9.53949 7.9209 9.35253 8.27146 8.95523C8.34157 8.86954 8.40389 8.77606 8.48179 8.66699C8.20135 8.66699 7.85079 8.66699 6.97829 8.66699C6.8147 8.66699 6.77575 8.56572 6.83028 8.43329C6.93155 8.19179 7.11852 7.78671 7.22758 7.58416C7.25095 7.53742 7.30548 7.45952 7.42233 7.45952C7.81963 7.45952 9.28418 7.45952 10.2579 7.45952C10.2424 7.66986 10.2424 7.88019 10.2112 8.09052C10.1255 8.65141 9.91518 9.16556 9.57241 9.61739C9.01152 10.3575 8.27925 10.8171 7.35222 10.9417C6.58879 11.043 5.87988 10.895 5.25667 10.4276C4.6802 9.99132 4.35302 9.41485 4.26732 8.69815C4.16605 7.84903 4.41534 7.08559 4.92949 6.41564C5.48259 5.69116 6.21486 5.23154 7.11073 5.06795C7.843 4.93551 8.54411 5.02121 9.17511 5.44966C9.58799 5.72232 9.88402 6.09625 10.0788 6.54807C10.1255 6.61819 10.0944 6.65714 10.0009 6.68051Z"
            className={active ? activeFill : fill}
          />
          <path
            d="M12.5792 10.9886C11.8703 10.973 11.2237 10.7705 10.6784 10.3031C10.2188 9.90576 9.93057 9.3994 9.83708 8.79956C9.69686 7.91927 9.93836 7.14026 10.4681 6.44693C11.0368 5.69908 11.7223 5.30957 12.6493 5.14598C13.4439 5.00576 14.1918 5.08366 14.8695 5.54328C15.4849 5.96394 15.8667 6.53262 15.9679 7.28048C16.1004 8.33215 15.7965 9.18906 15.0721 9.92134C14.5579 10.4433 13.9269 10.7705 13.2024 10.9185C12.9921 10.9574 12.7818 10.9652 12.5792 10.9886ZM14.4333 7.84137C14.4255 7.7401 14.4255 7.6622 14.4099 7.58429C14.2697 6.81307 13.5608 6.37682 12.8207 6.5482C12.0962 6.7118 11.6288 7.17142 11.4574 7.90369C11.3172 8.51132 11.6132 9.12674 12.1741 9.37603C12.6026 9.56299 13.031 9.53962 13.4439 9.32929C14.0593 9.00989 14.3943 8.51132 14.4333 7.84137Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
  }
};

export const Info = ({
  fill = "fill-gray-4",
  activeFill = "fill-gray-5",
  active = false,
  size = "sm",
}) => {
  switch (size) {
    case "sm":
      return (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={"flex-shrink-0"}
        >
          <path
            d="M5.4 4.2H6.6V3H5.4M6 10.8C3.354 10.8 1.2 8.646 1.2 6C1.2 3.354 3.354 1.2 6 1.2C8.646 1.2 10.8 3.354 10.8 6C10.8 8.646 8.646 10.8 6 10.8ZM6 0C5.21207 0 4.43185 0.155195 3.7039 0.456723C2.97595 0.758251 2.31451 1.20021 1.75736 1.75736C0.632141 2.88258 0 4.4087 0 6C0 7.5913 0.632141 9.11742 1.75736 10.2426C2.31451 10.7998 2.97595 11.2417 3.7039 11.5433C4.43185 11.8448 5.21207 12 6 12C7.5913 12 9.11742 11.3679 10.2426 10.2426C11.3679 9.11742 12 7.5913 12 6C12 5.21207 11.8448 4.43185 11.5433 3.7039C11.2417 2.97595 10.7998 2.31451 10.2426 1.75736C9.68549 1.20021 9.02405 0.758251 8.2961 0.456723C7.56815 0.155195 6.78793 0 6 0ZM5.4 9H6.6V5.4H5.4V9Z"
            className={active ? activeFill : fill}
          />
        </svg>
      );
  }
};

export const SuccessEmpty = ({
  fill = "fill-success",
  activeFill = "fill-success",
  active = false,
  size = "md",
}) => {
  switch (size) {
    case "md":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="8" r="7" stroke="#F9FAFC" strokeWidth="2" />
        </svg>
      );
  }
};
