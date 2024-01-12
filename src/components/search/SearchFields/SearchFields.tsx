import React, { useContext, useState } from "react";
import "./SearchFields.scss";
import Input from "../../global/Input/Input";
import Button from "../../global/Button/Button";
import moment from "moment";
import { notification } from "antd";
import { validateSearch } from "../../../utils/validations";
import { AppContext } from "../../../context/AppContext";

export default function SearchFields() {
  const [searchVal, setSearchVal] = useState<string>("");
  const [startYear, setStartYear] = useState<string>();
  const [endYear, setEndYear] = useState<string>();

  const updateSearchValue = (val: string) => {
    setSearchVal(val);
  };
  const updateStartYear = (val: string) => {
    setStartYear(val);
  };
  const updateEndYear = (val: string) => {
    setEndYear(val);
  };
  const showAlert = (message: string, type: "info" | "error") => {
    if (type === "info") {
      notification.info({ message });
    } else {
      notification.error({ message });
    }
  };

  const context = useContext(AppContext);

  const search = () => {
    console.log(startYear);
    const validator = validateSearch(
      searchVal,
      Number(startYear),
      Number(endYear)
    );
    if (validator) {
      return showAlert(validator, "error");
    }
    context?.updateData(
      searchVal,
      startYear ? Number(startYear) : undefined,
      endYear ? Number(endYear) : undefined
    );
  };
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
