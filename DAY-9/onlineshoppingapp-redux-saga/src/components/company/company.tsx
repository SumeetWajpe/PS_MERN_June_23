import { PropsWithChildren } from "react";

type CompanyProps = {
  title: string;
  isMNC: boolean;
};
function Company(props: PropsWithChildren<CompanyProps>) {
  return (
    <>
      {props.children}

      {props.isMNC == true ? <strong>Is Multinational </strong> : " A non MNC"}
    </>
  );
}

function Enterprise() {
  return (
    <>
      <Company title="IBM" isMNC={true}>
        <h1>Static Data</h1>
      </Company>
    </>
  );
}
