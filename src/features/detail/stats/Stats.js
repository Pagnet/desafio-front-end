import React from 'react';

export function Stats({data}) {
  return (
    <>
      {data.map((value, i) => {
        return (
          <div key={i}>
            <h2>{value.stat.name}: {value.base_stat}</h2>
          </div>
        )
      })}
    </>
  );

}
