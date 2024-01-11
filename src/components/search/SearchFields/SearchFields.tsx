import React, { useState } from "react";
import "./SearchFields.scss";
import Input from "../../global/Input/Input";
import Button from "../../global/Button/Button";
import moment from "moment";

export default function SearchFields() {
  const [searchVal, setSearchVal] = useState<string>("");
  const [startYear, setStartYear] = useState<number>();
  const [endYear, setEndYear] = useState<number>();

  const updateSearchValue = (val: string) => {
    setSearchVal(val);
  };
  const updateStartYear = (val: string) => {
    setStartYear(Number(val));
  };
  const updateEndYear = (val: string) => {
    setEndYear(Number(val));
  };
  const search = () => {};
  return (
    <div className={"search-tools"}>
      <Input
        placeholder={"Search the entire universe"}
        value={searchVal}
        onChange={updateSearchValue}
      />
      <Input
        placeholder={"Start year"}
        value={startYear?.toString()}
        onChange={updateStartYear}
        type={"number"}
      />
      <Input
        placeholder={"End year"}
        value={endYear?.toString()}
        onChange={updateEndYear}
        type={"number"}
        maxNumber={Number(moment().format("YYYY"))}
      />
      <Button text={"Search"} action={search} disabled={!searchVal} />
    </div>
  );
}
