<<<<<<< HEAD:src/shared/types/components/buttonGroup.ts
export type ButtonGroupProps = {
  id?: string;
  outline?: boolean;
=======
export type iCheckBoxProps = {
  id?: string;
>>>>>>> 30863e1 (refactor layout and add add register form):src/types/components/checkBox.ts
  className?: string;
  children: React.ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
