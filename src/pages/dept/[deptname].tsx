import * as React from 'react';

export default function Departments(props: any): JSX.Element {
  // Render data...

  return (
    <>
      <div></div>
    </>
  );
}

// This gets called on every request
export async function getServerSideProps(context: any) {
  // Fetch data from external API

  const inputobject = {
    params: {
      deptname: context.params.deptname,
    },
  };

  const res = await fetch(
    `https://djkenster.checkbook.mejiaforcontroller.com/deptpage/`,
    {
      method: 'POST',
      body: JSON.stringify(inputobject),
    }
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
