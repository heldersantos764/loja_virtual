import { FC } from "react";

interface PageTitleProps {
  label: string
}

const PageTitle: FC<PageTitleProps> = ({ label }) => {
  return (
    <div className="py-3">{label}</div>
  );
};

export default PageTitle;