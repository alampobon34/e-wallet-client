interface Props {
  children: React.ReactNode;
  label: string;
  errorMessage?: string | null | undefined;
}

const FormGroupLayout = ({ children, errorMessage, label }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="" className="font-semibold">
        {label}
      </label>
      {children}
      {errorMessage && (
        <span className="text-sm italic text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};

export default FormGroupLayout;
