import type { ChipLevelT, ChipT } from "../scripts/csv2json.ts";
export default (data: Lume.Data, helpers: Lume.Helpers) => (
  <>
    <h1>HASLV Chips Required</h1>
    <p>Total Chips {data.total}</p>
    <p>
      Back Image <em>Haslv Logo</em>
    </p>
    {/* <img src={`./imgs/Haslv Logo.jpg`} width="50" height="50" /> */}
    <table>
      <thead>
        <tr>
          <th>Color</th>
          <th>Front Image And Qty</th>
        </tr>
      </thead>
      <tbody>
        {data.images.map((d: ChipLevelT) => (
          <tr key={d.level}>
            <td>{d.color}</td>
            <td>
              <table>
                <tbody>
                  {d.chips.map((chip: ChipT, idx) => (
                    <tr key={idx}>
                      <td>{chip.name.split(".")[0]}</td>
                      <td>{chip.qty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </>
);
