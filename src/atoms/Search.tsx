import { SearchComponentProps } from "../types/components";

const SearchComponent = ({
  //   name,
  //   formik,
  iconLeft,
  iconRight,
  placeholder,
}: SearchComponentProps) => {
  return (
    <div className="custom-input-search-container">
      {iconLeft}
      <input className="custom-input-search" placeholder={placeholder} />
      {iconRight}
    </div>
  );
};

export default SearchComponent;
