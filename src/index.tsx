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
          <th>Qty</th>
          <th>Front Image</th>
          {/* <th>Chip</th> */}
        </tr>
      </thead>
      <tbody>
        {data.images.map((d, k) =>
          d.qty ? (
            <tr key={k}>
              <td>{d.qty}</td>
              <td>{d.name.split(".")[0]}</td>
              {/* <td>
                <img src={`./imgs/${d.name}`} width="50" height="50" />
              </td> */}
            </tr>
          ) : null
        )}
      </tbody>
    </table>
  </>
);
