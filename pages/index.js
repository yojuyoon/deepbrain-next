import { useEffect, useState } from "react";
import axios from "axios";
import tableStyles from "../styles/app/table.module.css";

export default function Home() {
  const [timeZone, setTimeZone] = useState("");
  useEffect(() => {
    getTimeZone();
  }, []);

  const getTimeZone = () => {
    try {
      axios.get("http://localhost:5000/api/now").then((res) => {
        setTimeZone(res.data.now);
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <table className={tableStyles.table}>
      <thead>
        <tr>
          <th>
            <h2>HOME</h2>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div id="timeZone">
              <h1>{timeZone || "환영합니다."}</h1>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
