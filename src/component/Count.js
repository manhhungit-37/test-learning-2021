import { useEffect, useState } from "react";

export default function Count() {
  const [value, setValue] = useState("");
  const  [countSecrets, setCountSecrets] = useState(0);
  useEffect(() => {
    if (value === "secret") {
      setCountSecrets(countSecrets+1);
    }
  }, [value]);

  function onChange({ target }) {
    setValue(target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <div>Number of secrets: {countSecrets}</div>
    </div>
  );
}