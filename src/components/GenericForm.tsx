// GenericForm.tsx
import { FC, ReactNode, FormEvent } from "react";

interface GenericFormProps {
  onSubmit: (event: FormEvent) => void;
  children: ReactNode;
}

const GenericForm: FC<GenericFormProps> = ({ onSubmit, children }) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};

export default GenericForm;
