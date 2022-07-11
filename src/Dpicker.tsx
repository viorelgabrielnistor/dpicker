import React, { useState } from "react"
import DatePicker from "react-multi-date-picker"

export default function Example() {
  const [value, setValue] = useState<any>(new Date())

  return (
    <DatePicker 
      value={value}
      onChange={setValue}
    />
  )
}
















// import React, { useState } from "react";
// import DatePicker, { DateObject } from "react-multi-date-picker"
// import type{Value} from "react-multi-date-picker"

// export default function Example() {
//   const [value, setValue] = useState<Value>(new Date());

//   return <DatePicker value={value} onChange={setValue} />;
// }