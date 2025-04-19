import Form from "next/form";
import { Search } from "lucide-react";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action="/search" className="search">
      <div className="flex gap-2">
        <button className="search-btn">
          <Search className="size-4" />
        </button>
      </div>

      <input
        type="text"
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search..."
      />
    </Form>
  );
};

export default SearchForm;
