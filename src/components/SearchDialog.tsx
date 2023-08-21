import React, { useState, ChangeEvent } from "react";
import lunr from "lunr";
import * as SearchDialog from "@radix-ui/react-dialog";

interface Document {
  id: number;
  title: string;
  content: string;
}

const data: Document[] = [
  {
    id: 1,
    title: "Sample Title 1",
    content: "This is the content of the first sample.",
  },
  {
    id: 2,
    title: "Sample Title 2",
    content: "This is the content of the second sample.",
  },
  {
    id: 3,
    title: "Sample Title 3",
    content: "This is the content of the third sample.",
  },
];

const index = lunr(function () {
  this.ref("id");
  this.field("title");
  this.field("content");

  data.forEach((doc) => {
    this.add(doc);
  });
});

const Search: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<lunr.Index.Result[]>([]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);

    const searchResults = index.search(value);
    setResults(searchResults);
  };

  return (
    <SearchDialog.Root>
      <SearchDialog.Trigger asChild>
        <div className="w-full p-[1px] h-10 transition-all ease-in-out hover:bg-gradient-to-tr from-blue-300 via-indigo-400 to-purple-300 rounded-xl">
          <button className="w-full h-full p-2 rounded-[11px] bg-white dark:bg-zinc-900 outline-none text-left px-4 flex justify-start items-center space-x-2">
            <svg
              className="w-4 h-4 stroke-zinc-400"
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m17 17 5 5m-2.5-11.25c0 4.8325-3.9175 8.75-8.75 8.75-4.83249 0-8.75-3.9175-8.75-8.75 0-4.83249 3.91751-8.75 8.75-8.75 4.8325 0 8.75 3.91751 8.75 8.75z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              ></path>
            </svg>
            <span className="text-zinc-400 text-sm">Search...</span>
          </button>
        </div>
      </SearchDialog.Trigger>
      <SearchDialog.Portal>
        <SearchDialog.Overlay className="bg-zinc-200/40 dark:bg-black/40 fixed top-0 left-0 right-0 bottom-0 backdrop-blur-lg z-50" />
        <SearchDialog.Content className="fixed top-0 left-0 right-0 bottom-0 max-w-4xl h-fit p-4 mx-auto xl:mt-10 z-50">
          <SearchDialog.Title className="text-lg font-medium text-zinc-200">
            Search...
          </SearchDialog.Title>
          <fieldset>
            <div className="w-full py-4">
              <div className="w-full p-[1px] h-14 transition-all ease-in-out focus-within:bg-gradient-to-tr from-blue-300 via-indigo-400 to-purple-300 rounded-xl">
                <div className="px-4 py-2 w-full h-full rounded-[11px] bg-white dark:bg-zinc-900 flex justify-start items-center space-x-4">
                  <svg
                    className="w-6 h-6 stroke-zinc-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m17 17 5 5m-2.5-11.25c0 4.8325-3.9175 8.75-8.75 8.75-4.83249 0-8.75-3.9175-8.75-8.75 0-4.83249 3.91751-8.75 8.75-8.75 4.8325 0 8.75 3.91751 8.75 8.75z"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    ></path>
                  </svg>
                  <input
                    type="text"
                    className="w-full h-full outline-none bg-transparent"
                    value={query}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </fieldset>
          {results.length !== 0 && (
            <div className="w-full rounded-xl bg-zinc-900/80 border border-zinc-800 backdrop-blur-lg p-1">
              <ul>
                {results.map((result) => (
                  <li
                    key={result.ref}
                    className="p-4 rounded-lg hover:bg-zinc-800/80"
                  >
                    <div className="text-lg">
                      {
                        data.find((item) => item.id === Number(result.ref))
                          ?.title
                      }
                    </div>
                    <div className="text-sm text-zinc-400">
                      {
                        data.find((item) => item.id === Number(result.ref))
                          ?.content
                      }
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <SearchDialog.Close asChild>
            <button className="fixed top-4 right-4" aria-label="Close">
              <svg
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m5 5 14 14m-14 0 14-14"
                  stroke="#ffffff"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </SearchDialog.Close>
        </SearchDialog.Content>
      </SearchDialog.Portal>
    </SearchDialog.Root>
  );
};

export default Search;
